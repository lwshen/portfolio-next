import { env } from "~/env.mjs";

export default function HomeFooter() {
  const beian = env.NEXT_PUBLIC_BEIAN;
  const year = new Date().getFullYear();
  return (
    <div className="space-y-2 px-4 py-16 text-center align-middle text-gray-400">
      <div className="text-sm">
        Copyright 2022-{year} © Made With ❤ by Slinvent
      </div>
      {beian && (
        <a href="http://beian.miit.gov.cn" className="text-xs">
          {beian}
        </a>
      )}
    </div>
  );
}
