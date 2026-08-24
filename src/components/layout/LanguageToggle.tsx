import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

export function LanguageToggle({ className }: { className?: string }) {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <Button
      variant="outline"
      size="sm"
      className={className}
      onClick={toggleLanguage}
      aria-label={t("common.switchLanguage")}
      title={t("common.switchLanguage")}
    >
      <Languages className="h-4 w-4" />
      <span className="ml-1 text-xs font-semibold uppercase">{language === "vi" ? "VI" : "EN"}</span>
    </Button>
  );
}
