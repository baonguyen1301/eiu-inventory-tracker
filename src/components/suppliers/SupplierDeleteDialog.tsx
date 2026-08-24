import { useState, useMemo } from "react";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import type { Supplier, Item, PurchaseOrder } from "@/types/inventory";
import { OrderStatus } from "@/types/inventory";
import { useLanguage } from "@/hooks/useLanguage";

interface SupplierDeleteDialogProps {
  supplier: Supplier;
  items: Item[];
  purchaseOrders: PurchaseOrder[];
  onDelete: (id: string) => void;
}

export function SupplierDeleteDialog({ supplier, items, purchaseOrders, onDelete }: SupplierDeleteDialogProps) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  const linkedCount = useMemo(
    () => items.filter((i) => i.supplierId === supplier.id).length,
    [items, supplier.id],
  );

  const openPOs = useMemo(
    () => purchaseOrders.filter(
      (po) => po.supplierId === supplier.id && [OrderStatus.Draft, OrderStatus.Submitted, OrderStatus.Partial].includes(po.status),
    ),
    [purchaseOrders, supplier.id],
  );

  const hasOpenPOs = openPOs.length > 0;

  function handleClick() {
    if (hasOpenPOs) {
      toast.error(t("suppliers.delete.cannotDeleteOpenPOs", { count: openPOs.length }));
      return;
    }
    setOpen(true);
  }

  function handleConfirm() {
    onDelete(supplier.id);
    setOpen(false);
    toast.success(t("suppliers.delete.deleted"));
  }

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <Button size="sm" variant="destructive" onClick={handleClick}>
        <Trash2 className="mr-1.5 h-3.5 w-3.5" />
        {t("suppliers.delete.button")}
      </Button>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{t("suppliers.delete.confirmTitle", { name: supplier.name })}</AlertDialogTitle>
          <AlertDialogDescription>
            {linkedCount > 0
              ? t("suppliers.delete.confirmWithLinked", { count: linkedCount })
              : t("suppliers.delete.confirmNoLinked")}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{t("common.cancel")}</AlertDialogCancel>
          <AlertDialogAction onClick={handleConfirm} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
            {t("common.delete")}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
