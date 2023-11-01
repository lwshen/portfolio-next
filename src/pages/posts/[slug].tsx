import Head from "next/head";
import { jinBuTiFont } from "~/lib/fonts";
import { getPost, getPosts } from "~/lib/post";
import { type Post } from "~/types/post";

type Props = {
  post: Post;
};

export default function Post({ post }: Props) {
  return (
    <>
      <Head>
        <link
          href="https://unpkg.com/prismjs@1.29.0/themes/prism-okaidia.min.css"
          rel="stylesheet"
        />
        <link
          href="https://unpkg.com/katex@0.16.9/dist/katex.min.css"
          rel="stylesheet"
        />
      </Head>
      <div>
        <p className={`${jinBuTiFont.className} pb-8 text-3xl font-bold`}>
          {post.attribute.title}
        </p>
        <div
          className="prose prose-p:my-2"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export function getStaticProps({ params }: Params) {
  const post = getPost(params.slug);

  return {
    props: {
      post,
    },
  };
}

export function getStaticPaths() {
  const posts = getPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
