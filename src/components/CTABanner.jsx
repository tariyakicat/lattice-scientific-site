import Marquee from "./Marquee";

export default function CTABanner() {
  const text = ["✦ SCROLL DOWN ✦ AND GET IN TOUCH ✦", "SCIENTIFIC VISUALS ✦ JOURNAL COVERS ✦ ANIMATION ✦"];
  return (
    <section className="border-y border-black/10 bg-ink py-4 text-white">
      <Marquee text logos={text} compact />
    </section>
  );
}
