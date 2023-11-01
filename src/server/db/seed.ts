import { project as projectSchema } from "./schema";
import { db } from ".";

const seedProjects = async () => {
  const projects: (typeof projectSchema.$inferInsert)[] = [
    {
      id: "portfolio-remix",
      order: 1,
      title: "Portfolio",
      content:
        "My portfolio website, built with Remix, TypeScript, Tailwind, Chakra UI.",
      previewImg: "/image/project/portfolio.png",
      githubUrl: "https://github.com/lwshen/portfolio-remix",
      previewUrl: "https://portfolio.ryos.dev",
    },
    {
      id: "dotfiles",
      order: 2,
      title: "dotfiles",
      content: "💻 macOS / Ubuntu dotfiles",
      previewImg: "/image/project/dotfiles.png",
      githubUrl: "https://github.com/lwshen/dotfiles",
    },
  ];

  for (const project of projects) {
    await db
      .insert(projectSchema)
      .values(project)
      .onConflictDoUpdate({
        target: projectSchema.id,
        set: {
          ...project,
        },
      });
  }
};

const main = async () => {
  console.log("Seed start");
  await seedProjects();
};

main().catch((err) => {
  console.error("❌ Seed error", err);
});
