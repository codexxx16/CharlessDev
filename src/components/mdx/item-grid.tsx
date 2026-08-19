// Inspired by: https://jahir.dev/uses
import { BlurImage } from "@/components/blur-image";
import { Link } from "@/components/ui/link";

type Items = Array<{
  image: string;
  name: string;
  description: string;
  url: string;
}>;

type ItemGridProps = {
  items: Items;
};

export function ItemGrid(props: ItemGridProps) {
  const { items } = props;

  return (
    <div className="not-prose mb-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
      {items.map((item) => (
        <Link
          key={item.name}
          href={item.url}
          className="group flex min-h-36 items-center gap-5 rounded-2xl border bg-card/60 px-5 py-4 transition-colors hover:bg-accent"
        >
          <BlurImage
            src={item.image}
            width={256}
            height={256}
            alt={item.name}
            className="shrink-0"
            imageClassName="m-0 size-24 object-contain sm:size-28"
          />
          <div className="min-w-0 space-y-2">
            <div className="text-lg font-semibold leading-tight tracking-tight sm:text-xl">
              {item.name}
            </div>
            <div className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              {item.description}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
