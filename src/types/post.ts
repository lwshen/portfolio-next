import { z } from "zod";

export type DocAttribute = z.infer<typeof DocAttributeSchema>;

export const DocAttributeSchema = z.object({
  title: z.string(),
  index_img: z.string().optional(),
  author: z.string().optional(),
  tags: z.string().array().optional(),
  categories: z.string().array().optional(),
  date: z.date(),
  published_at: z.date().optional(),
  description: z.string().optional(),
});

export type PostLite = {
  slug: string;
  attribute: DocAttribute;
};

export type Post = PostLite & {
  markdown: string;
  html: string;
};
