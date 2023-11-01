import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import {
  DocAttributeSchema,
  type DocAttribute,
  type Post,
  type PostLite,
} from "~/types/post";
import { markdownToHtml } from "~/utils/markdown";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs
    .readdirSync(postsDirectory)
    .map((filename) => filename.replace(/\.md$/, ""));
}

const parseFrontMatter = (
  filePath: string,
): {
  attribute: Record<string, unknown>;
  content: string;
} => {
  const { data, content } = matter.read(filePath);
  return {
    attribute: data,
    content: content,
  };
};

const validateAttribute = (fontMatter: Record<string, unknown>): DocAttribute =>
  DocAttributeSchema.parse(fontMatter);

export function getPostLite(slug: string): PostLite {
  const filepath = join(postsDirectory, slug + ".md");
  const { attribute: unsafeAttribute } = parseFrontMatter(filepath);
  const attribute = validateAttribute(unsafeAttribute);
  return { slug, attribute };
}

export function getPost(slug: string): Post {
  const filepath = join(postsDirectory, slug + ".md");
  const { attribute: unsafeAttribute, content } = parseFrontMatter(filepath);
  const attribute = validateAttribute(unsafeAttribute);

  const html = markdownToHtml(content);

  return { slug, attribute, markdown: content, html };
}

export function getPosts(): PostLite[] {
  const slugs = getPostSlugs();
  const posts = slugs.map((slug) => getPostLite(slug));
  return posts.sort(
    (a, b) => b.attribute.date.getTime() - a.attribute.date.getTime(),
  );
}
