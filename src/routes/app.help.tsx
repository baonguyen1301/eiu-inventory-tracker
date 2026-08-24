import { useState, useMemo } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Search, HelpCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_DATA } from "@/lib/faq-data";
import { useLanguage } from "@/hooks/useLanguage";

export const Route = createFileRoute("/app/help")({
  component: HelpPage,
  head: () => ({ meta: [{ title: "Help Center — Stackwise" }] }),
});

function HelpPage() {
  const { t } = useLanguage();
  const [search, setSearch] = useState("");

  const resolved = useMemo(
    () =>
      FAQ_DATA.map((cat) => ({
        title: t(cat.titleKey),
        items: cat.items.map((item) => ({
          question: t(item.questionKey),
          answer: t(item.answerKey),
        })),
      })),
    [t],
  );

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    if (!q) return resolved;
    return resolved
      .map((cat) => ({
        ...cat,
        items: cat.items.filter((item) => item.question.toLowerCase().includes(q) || item.answer.toLowerCase().includes(q)),
      }))
      .filter((cat) => cat.items.length > 0);
  }, [search, resolved]);

  const totalResults = filtered.reduce((sum, cat) => sum + cat.items.length, 0);

  return (
    <div className="mx-auto max-w-[800px] space-y-6">
      <div className="flex items-center gap-3">
        <HelpCircle className="h-7 w-7 text-primary shrink-0" />
        <div>
          <h1 className="text-2xl font-semibold text-foreground">{t("help.title")}</h1>
          <p className="text-sm text-muted-foreground">{t("help.subtitle")}</p>
        </div>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder={t("help.searchPlaceholder")}
          className="h-10 pl-9"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {filtered.length === 0 ? (
        <div className="py-16 text-center">
          <p className="text-sm text-muted-foreground">{t("help.noResults", { query: search })}</p>
        </div>
      ) : (
        <div className="space-y-6">
          {filtered.map((category) => (
            <div key={category.title}>
              <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">{category.title}</h2>
              <Accordion type="multiple" className="rounded-lg border border-border bg-card">
                {category.items.map((item, i) => (
                  <AccordionItem key={i} value={`${category.title}-${i}`} className="border-border">
                    <AccordionTrigger className="px-4 py-3 text-sm font-medium text-foreground hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
          {search && (
            <p className="text-xs text-muted-foreground text-center">{t("help.resultsFound", { count: totalResults, plural: totalResults !== 1 ? "s" : "" })}</p>
          )}
        </div>
      )}
    </div>
  );
}
