import {
  AvatarFallback,
  AvatarImage,
  Avatar as AvatarWrap,
} from "../ui/avatar";

export type AvatarProps = {
  imgUrl: string;
  fallback?: string;
  className?: string | undefined;
};

export function Avatar({ imgUrl, fallback, className }: AvatarProps) {
  return (
    <AvatarWrap className={className}>
      <AvatarImage src={imgUrl} alt={fallback} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </AvatarWrap>
  );
}
