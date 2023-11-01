import Image from "next/image";
import { Github, Link } from "lucide-react";
import { AspectRatio } from "~/components/ui/aspect-ratio";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { api } from "~/utils/api";
import { jinBuTiFont } from "~/lib/fonts";
import { Skeleton } from "~/components/ui/skeleton";

export default function Projects() {
  const projects = api.project.getAll.useQuery();
  return (
    <div
      style={{
        width: "80%",
        minWidth: "500px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <h1 className={`py-8 text-3xl font-bold ${jinBuTiFont.className}`}>
        Projects
      </h1>
      <div className="columns-2 gap-8">
        {projects.data
          ? projects.data.map((project, idx) => {
              return (
                <Card key={idx}>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.content}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {project.previewImg && (
                      <AspectRatio ratio={16 / 9}>
                        <Image
                          src={project.previewImg ?? ""}
                          fill={true}
                          className="absolute inset-0 rounded-md object-cover"
                          priority
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          alt={`Preview image for ${project.title}`}
                        />
                      </AspectRatio>
                    )}
                  </CardContent>
                  <CardFooter className="space-x-8">
                    {project.githubUrl && (
                      <div
                        className="flex cursor-pointer space-x-2"
                        onClick={() => window.open(project.githubUrl ?? "")}
                      >
                        <Github />
                        <span>Github</span>
                      </div>
                    )}
                    {project.previewUrl && (
                      <div
                        className="flex cursor-pointer space-x-2"
                        onClick={() => window.open(project.previewUrl ?? "")}
                      >
                        <Link />
                        <span>Demo</span>
                      </div>
                    )}
                  </CardFooter>
                </Card>
              );
            })
          : Array(2)
              .fill("")
              .map((_, index) => <LoadingCard key={index} />)}
      </div>
    </div>
  );
}

const LoadingCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Skeleton className="h-4 w-[80px]" />
        </CardTitle>
        <Skeleton className="h-4 w-[160px]" />
      </CardHeader>
      <CardContent className="space-y-2">
        <Skeleton className="h-[130px] w-full" />
      </CardContent>
      <CardFooter className="space-x-8">
        <Skeleton className="h-4 w-[80px]" />
      </CardFooter>
    </Card>
  );
};
