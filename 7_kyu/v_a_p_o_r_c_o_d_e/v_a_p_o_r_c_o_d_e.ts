export const vaporcode = (s: string) =>
  s
    .replace(/\s/g, "")
    .split("")
    .map((l) => l.toUpperCase())
    .join("  ");
