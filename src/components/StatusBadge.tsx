import { cn } from "@/lib/utils";
import { useLanguage } from "@/hooks/useLanguage";

type StockStatus = "in-stock" | "low-stock" | "out-of-stock";
type ItemStatus = "active" | "discontinued" | "archived";
type BadgeStatus = StockStatus | ItemStatus;

const config: Record<BadgeStatus, { labelKey: string; dotClass: string; textClass: string }> = {
  "in-stock": {
    labelKey: "catalog.status.inStock",
    dotClass: "bg-stock-healthy",
    textClass: "text-stock-healthy",
  },
  "low-stock": {
    labelKey: "catalog.status.lowStock",
    dotClass: "bg-stock-low animate-pulse",
    textClass: "text-stock-low",
  },
  "out-of-stock": {
    labelKey: "catalog.status.outOfStock",
    dotClass: "bg-stock-out",
    textClass: "text-stock-out",
  },
  active: {
    labelKey: "catalog.status.active",
    dotClass: "bg-primary",
    textClass: "text-primary",
  },
  discontinued: {
    labelKey: "catalog.status.discontinued",
    dotClass: "bg-muted-foreground",
    textClass: "text-muted-foreground",
  },
  archived: {
    labelKey: "catalog.status.archived",
    dotClass: "bg-muted-foreground/50",
    textClass: "text-muted-foreground/50",
  },
};

interface StatusBadgeProps {
  status: BadgeStatus;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const { t } = useLanguage();
  const { labelKey, dotClass, textClass } = config[status];

  return (
    <span className={cn("inline-flex items-center gap-1.5 text-xs font-medium", className)}>
      <span className={cn("h-2 w-2 shrink-0 rounded-full", dotClass)} />
      <span className={textClass}>{t(labelKey)}</span>
    </span>
  );
}
