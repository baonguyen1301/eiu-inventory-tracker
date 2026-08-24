import { Filter, X } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Category, Supplier, Location } from "@/types/inventory";
import { useLanguage } from "@/hooks/useLanguage";

export interface AnalyticsFilterValues {
  categoryId: string | null;
  supplierId: string | null;
  locationId: string | null;
  days: number;
}

interface AnalyticsFiltersProps {
  filters: AnalyticsFilterValues;
  onChange: (filters: AnalyticsFilterValues) => void;
  categories: Category[];
  suppliers: Supplier[];
  locations: Location[];
}

function useDatePresets() {
  const { t } = useLanguage();
  return [
    { label: t("analytics.filters.last30Days"), value: 30 },
    { label: t("analytics.filters.last90Days"), value: 90 },
    { label: t("analytics.filters.thisYear"), value: 365 },
  ];
}

export function AnalyticsFilters({ filters, onChange, categories, suppliers, locations }: AnalyticsFiltersProps) {
  const { t } = useLanguage();
  const DATE_PRESETS = useDatePresets();
  const activeCount = [filters.categoryId, filters.supplierId, filters.locationId].filter(Boolean).length;

  const set = (key: keyof AnalyticsFilterValues, value: string | number | null) =>
    onChange({ ...filters, [key]: value });

  const clearAll = () => onChange({ ...filters, categoryId: null, supplierId: null, locationId: null });

  return (
    <div className="flex flex-wrap items-center gap-2">
      <Select value={String(filters.days)} onValueChange={(v) => set("days", Number(v))}>
        <SelectTrigger className="h-8 w-[140px] text-xs"><SelectValue /></SelectTrigger>
        <SelectContent>
          {DATE_PRESETS.map((p) => <SelectItem key={p.value} value={String(p.value)}>{p.label}</SelectItem>)}
        </SelectContent>
      </Select>

      <div className="h-4 w-px bg-border" />

      <Select value={filters.categoryId ?? "__all__"} onValueChange={(v) => set("categoryId", v === "__all__" ? null : v)}>
        <SelectTrigger className="h-8 w-[130px] text-xs"><SelectValue placeholder={t("analytics.filters.category")} /></SelectTrigger>
        <SelectContent>
          <SelectItem value="__all__">{t("analytics.filters.allCategories")}</SelectItem>
          {categories.map((c) => <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>)}
        </SelectContent>
      </Select>

      <Select value={filters.supplierId ?? "__all__"} onValueChange={(v) => set("supplierId", v === "__all__" ? null : v)}>
        <SelectTrigger className="h-8 w-[130px] text-xs"><SelectValue placeholder={t("analytics.filters.supplier")} /></SelectTrigger>
        <SelectContent>
          <SelectItem value="__all__">{t("analytics.filters.allSuppliers")}</SelectItem>
          {suppliers.map((s) => <SelectItem key={s.id} value={s.id}>{s.name}</SelectItem>)}
        </SelectContent>
      </Select>

      <Select value={filters.locationId ?? "__all__"} onValueChange={(v) => set("locationId", v === "__all__" ? null : v)}>
        <SelectTrigger className="h-8 w-[130px] text-xs"><SelectValue placeholder={t("analytics.filters.location")} /></SelectTrigger>
        <SelectContent>
          <SelectItem value="__all__">{t("analytics.filters.allLocations")}</SelectItem>
          {locations.map((l) => <SelectItem key={l.id} value={l.id}>{l.name}</SelectItem>)}
        </SelectContent>
      </Select>

      {activeCount > 0 && (
        <>
          <Badge variant="secondary" className="text-xs">{t("analytics.filters.filterCount", { count: activeCount, suffix: activeCount !== 1 ? "s" : "" })}</Badge>
          <Button size="sm" variant="ghost" className="h-7 text-xs" onClick={clearAll}>
            <X className="mr-1 h-3 w-3" /> {t("analytics.filters.clear")}
          </Button>
        </>
      )}
    </div>
  );
}
