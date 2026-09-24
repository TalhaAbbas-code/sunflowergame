import Link from "next/link";
import JsonLd from "./JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

type Crumb = { name: string; path: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all = [{ name: "Home", path: "/" }, ...items];
  return (
    <>
      <JsonLd data={breadcrumbSchema(all)} />
      <nav aria-label="Breadcrumb" className="text-sm">
        <ol className="flex flex-wrap items-center gap-1.5 text-white/55">
          {all.map((c, i) => {
            const last = i === all.length - 1;
            return (
              <li key={c.path} className={`flex items-center gap-1.5 ${last ? "min-w-0" : ""}`}>
                {last ? (
                  <span aria-current="page" className="max-w-[16rem] truncate text-white/85 sm:max-w-none" title={c.name}>
                    {c.name}
                  </span>
                ) : (
                  <>
                    <Link href={c.path} className="hover:text-sun-300">
                      {c.name}
                    </Link>
                    <span aria-hidden="true">/</span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
