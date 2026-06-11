import { motion, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";
import { clients } from "../data/site";

export default function ClientsWall() {
  const rows = [clients.slice(0, 9), [...clients.slice(9), ...clients.slice(0, 3)]];

  return (
    <section id="clients" className="relative scroll-mt-24 overflow-hidden bg-[#f3f3f3] py-24 md:py-32">
      <div className="pointer-events-none absolute left-4 top-4 h-6 w-6 rounded-full bg-cyan/60 ring-2 ring-white md:h-9 md:w-9" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_55%,rgba(255,255,255,0.74),transparent_34rem)]" />
      <div className="relative mx-auto max-w-7xl px-5 text-center md:px-8">
        <Reveal>
          <h2 className="relative inline-block text-4xl font-medium leading-tight tracking-[-0.045em] text-ink md:text-6xl">
            <span className="absolute inset-x-0 bottom-1 h-1/2 bg-cyan/35" aria-hidden />
            <span className="relative">About Our Clients</span>
          </h2>
          <p className="mx-auto mt-10 max-w-6xl text-balance text-2xl font-medium leading-relaxed tracking-[-0.035em] text-neutral-500 md:text-4xl">
            Our clients are innovators and leaders in the scientific community, dedicated to advancing knowledge and pushing the boundaries of research. Whether they are scientists, research labs, publication houses, or biotech startups our clients share a common goal: to communicate their discoveries with clarity and impact.
          </p>
        </Reveal>
      </div>
      <div className="relative mt-16 space-y-7 md:mt-24 md:space-y-10">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#f3f3f3] via-[#f3f3f3]/85 to-transparent md:w-52" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#f3f3f3] via-[#f3f3f3]/85 to-transparent md:w-52" />
        {rows.map((row, index) => (
          <ClientLogoRow key={index} clients={row} reverse={index % 2 === 1} duration={index === 1 ? 38 : 34} />
        ))}
      </div>
    </section>
  );
}

function ClientLogoRow({ clients: rowClients, reverse = false, duration = 30 }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className="overflow-hidden px-5">
        <ClientLogoGroup clients={rowClients.slice(0, 5)} />
      </div>
    );
  }

  return (
    <div className="logo-marquee-row overflow-hidden py-1" style={{ "--logo-duration": `${duration}s` }}>
      <div className={`logo-marquee-track flex w-max items-center ${reverse ? "logo-marquee-track-reverse" : ""}`}>
        <ClientLogoGroup clients={rowClients} />
        <ClientLogoGroup clients={rowClients} ariaHidden />
      </div>
    </div>
  );
}

function ClientLogoGroup({ clients: rowClients, ariaHidden = false }) {
  return (
    <div className="flex shrink-0 items-center gap-14 px-7 md:gap-24 md:px-12" aria-hidden={ariaHidden}>
      {rowClients.map((client) => (
        <ClientLogoSlot key={client.name} client={client} />
      ))}
    </div>
  );
}

function ClientLogoSlot({ client }) {
  return (
    <motion.figure whileHover={{ opacity: 0.9, scale: 1.035 }} className="group grid h-24 min-w-48 place-items-center md:h-28 md:min-w-64" aria-label={`${client.name}, ${client.type}`}>
      {client.logo ? (
        <img src={client.logo} alt={`${client.name} logo`} loading="lazy" className="max-h-20 max-w-56 object-contain opacity-55 grayscale transition duration-300 group-hover:opacity-90 group-hover:grayscale-0 md:max-h-24 md:max-w-72" />
      ) : (
        <div className="grid h-full w-full place-items-center rounded-sm border border-black/5 bg-white/20 px-4 opacity-55 grayscale transition duration-300 group-hover:opacity-85 group-hover:grayscale-0">
          <span className="text-center text-3xl font-black leading-none tracking-[-0.08em] text-neutral-500 md:text-4xl">{client.mark}</span>
        </div>
      )}
      <figcaption className="sr-only">{client.name}</figcaption>
    </motion.figure>
  );
}
