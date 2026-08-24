import { useState } from "react";
import { Settings2 } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useDemo } from "@/hooks/useDemo";
import { toast } from "sonner";
import { useLanguage } from "@/hooks/useLanguage";
import type { NotificationPrefs } from "@/lib/demo/index";

const PREF_KEYS: { key: keyof NotificationPrefs; i18nKey: string }[] = [
  { key: "low_stock", i18nKey: "lowStock" },
  { key: "zero_stock", i18nKey: "zeroStock" },
  { key: "po_reminder", i18nKey: "poReminder" },
  { key: "po_overdue", i18nKey: "poOverdue" },
  { key: "request_update", i18nKey: "requestUpdate" },
];

interface NotificationPreferencesProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function NotificationPreferences({ open, onOpenChange }: NotificationPreferencesProps) {
  const { t } = useLanguage();
  const { demoStore, bumpVersion } = useDemo();
  const [prefs, setPrefs] = useState<NotificationPrefs>(() =>
    demoStore?.getNotificationPrefs() ?? {
      low_stock: true, zero_stock: true, po_reminder: true, po_overdue: true, request_update: true,
    },
  );

  const handleToggle = (key: keyof NotificationPrefs) => {
    setPrefs((p) => ({ ...p, [key]: !p[key] }));
  };

  const handleSave = () => {
    demoStore?.setNotificationPrefs(prefs);
    bumpVersion();
    toast.success(t("notifications.preferences.saved"));
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-base">
            <Settings2 className="h-4 w-4" />
            {t("notifications.preferences.title")}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-3">
          {PREF_KEYS.map(({ key, i18nKey }) => (
            <div key={key} className="flex items-center justify-between gap-4 rounded-lg border border-border p-3">
              <div className="min-w-0">
                <Label htmlFor={`pref-${key}`} className="text-sm font-medium">{t(`notifications.preferences.${i18nKey}.label`)}</Label>
                <p className="text-xs text-muted-foreground">{t(`notifications.preferences.${i18nKey}.description`)}</p>
              </div>
              <Switch
                id={`pref-${key}`}
                checked={prefs[key]}
                onCheckedChange={() => handleToggle(key)}
              />
            </div>
          ))}
        </div>

        <Button onClick={handleSave} className="w-full mt-2">{t("notifications.preferences.save")}</Button>
      </DialogContent>
    </Dialog>
  );
}
