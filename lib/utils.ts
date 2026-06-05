export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function getProject(slug: string) {
  return import("./data").then(({ projects }) => projects.find((project) => project.slug === slug));
}
