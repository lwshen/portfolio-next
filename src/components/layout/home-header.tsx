import Link from "next/link";
import { env } from "~/env.mjs";

export default function HomeHeader() {
  const navList = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "Projects",
      url: "/projects",
    },
  ];

  const externalBlogUrl = env.NEXT_PUBLIC_BLOG_URL;

  return (
    <div className="px-16 py-6 text-right align-middle">
      <div className="jin-bu-ti space-x-4">
        {navList.map((nav, idx) => {
          return (
            <Link key={idx} href={nav.url}>
              {nav.label}
            </Link>
          );
        })}
        {externalBlogUrl ? (
          <a href={externalBlogUrl}>Blog</a>
        ) : (
          <Link href="posts">Blog</Link>
        )}
      </div>
    </div>
  );
}
