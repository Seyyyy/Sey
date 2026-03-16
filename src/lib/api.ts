import matter from "gray-matter";

const postModules = import.meta.glob("/posts/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

let _mockModules: Record<string, string> | null = null;
export const _setMockModules = (m: Record<string, string>) => {
  _mockModules = m;
};
const getModules = () => _mockModules ?? postModules;

const slugFromPath = (p: string) => p.replace(/^\/posts\//, "").replace(/\.md$/, "");

export const getPostSlugs = () => Object.keys(getModules()).map(slugFromPath);

export const getPostBySlug = (slug: string, fields: string[] = []) => {
  const raw = getModules()[`/posts/${slug}.md`];
  if (!raw)
    return { slug: "", content: "", title: "", createdAt: "", updatedAt: "", tags: [] as string[] };
  const { data, content } = matter(raw);
  const item: Record<string, unknown> = {};
  fields.forEach((f) => {
    if (f === "slug") item.slug = slug;
    else if (f === "content") item.content = content;
    else item[f] = data[f];
  });
  return item;
};

export const getAllPosts = (fields: string[] = []) =>
  getPostSlugs()
    .map((slug) => getPostBySlug(slug, fields))
    .sort(
      (a, b) =>
        new Date(b.createdAt as string).getTime() - new Date(a.createdAt as string).getTime(),
    );
