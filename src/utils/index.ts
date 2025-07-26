export const slugify = (str: string) => {
  return str
    .toLowerCase()
    .trim()
    .replace(/–/g, "-")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};
