import { motion } from "framer-motion";
import Link from "next/link";
import Title from "~/components/post/title";
import { Skeleton } from "~/components/ui/skeleton";
import { api } from "~/utils/api";
import { FADE_DOWN_ANIMATION_VARIANTS } from "~/utils/constants";

export default function Posts_index() {
  const posts = api.post.getAll.useQuery();
  return (
    <div
      style={{
        width: "80%",
        minWidth: "500px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <Title>Posts</Title>
      <motion.div
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {posts.data ? (
          posts.data.map((post) => (
            <motion.p key={post.slug} variants={FADE_DOWN_ANIMATION_VARIANTS}>
              <Link href={`posts/${post.slug}`}>{post.attribute.title}</Link>
            </motion.p>
          ))
        ) : (
          <div className="space-y-2">
            {Array(3)
              .fill("")
              .map((_, index) => (
                <Skeleton key={index} className="h-4 w-[250px]" />
              ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}
