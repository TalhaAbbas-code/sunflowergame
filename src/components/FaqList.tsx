import JsonLd from "./JsonLd";
import { Inline } from "./RichText";
import { PlusIcon } from "./Icons";
import { faqSchema } from "@/lib/schema";

export type Faq = { q: string; a: string };

/**
 * Native <details> accordion: works without JavaScript and keeps every answer
 * in the HTML so search engines can read it.
 */
export default function FaqList({ faqs, withSchema = true }: { faqs: Faq[]; withSchema?: boolean }) {
  return (
    <>
      {withSchema && <JsonLd data={faqSchema(faqs)} />}
      <div className="space-y-3">
        {faqs.map((f, i) => (
          <details key={i} className="glass group rounded-2xl px-6 open:bg-white/[0.06]" {...(i === 0 ? { open: true } : {})}>
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-display text-base font-semibold text-white sm:text-lg">
              <h3 className="text-inherit">{f.q}</h3>
              <PlusIcon className="h-5 w-5 shrink-0 text-sun-400 transition-transform duration-300 group-open:rotate-45" />
            </summary>
            <p className="pb-6 leading-7 text-white/70 [&_a]:text-sun-300 [&_a]:underline">
              <Inline text={f.a} />
            </p>
          </details>
        ))}
      </div>
    </>
  );
}
