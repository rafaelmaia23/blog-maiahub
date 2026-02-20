import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PostCardProps {
  title: string;
  summary: string;
  link: string;
  image: string;
}

export default function PostCard({
  title,
  summary,
  link,
  image,
}: PostCardProps) {
  return (
    <Card className="hover:shadow-xl transition-shadow duration-300 overflow-hidden rounded-xl flex flex-col">
      {/* Imagem de capa com proporção fixa */}
      <div className="relative w-full aspect-[3/2] overflow-hidden">
        <Image
          src={image}
          alt={`Capa do post: ${title}`}
          fill
          className="object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      <CardHeader className="pt-4 px-4">
        <CardTitle className="text-foreground text-lg md:text-xl font-semibold transition-colors duration-300">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="text-muted-foreground transition-colors duration-300 line-clamp-3 px-4">
        {summary}
      </CardContent>

      <CardFooter className="pt-2 px-4">
        <Link href={link}>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 w-full">
            Ler mais
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
