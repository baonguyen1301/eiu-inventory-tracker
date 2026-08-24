import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { SHORTCUTS } from "@/hooks/useKeyboardShortcuts";
import { useLanguage } from "@/hooks/useLanguage";

interface ShortcutsHelpDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ShortcutsHelpDialog({ open, onOpenChange }: ShortcutsHelpDialogProps) {
  const { t } = useLanguage();
  const navShortcuts = SHORTCUTS.filter((s) => s.category === "navigate");
  const createShortcuts = SHORTCUTS.filter((s) => s.category === "create");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>{t("command.shortcuts.title")}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 text-sm">
          {/* Global */}
          <div>
            <h4 className="mb-2 font-medium text-muted-foreground">{t("command.shortcuts.global")}</h4>
            <div className="space-y-1">
              <ShortcutRow keys="⌘ K" label={t("command.shortcuts.openPalette")} />
              <ShortcutRow keys="?" label={t("command.shortcuts.showHelp")} />
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-2 font-medium text-muted-foreground">{t("command.shortcuts.navigation")}</h4>
            <div className="space-y-1">
              {navShortcuts.map((s) => (
                <ShortcutRow
                  key={s.keys.join("")}
                  keys={`${s.keys[0].toUpperCase()} → ${s.keys[1].toUpperCase()}`}
                  label={s.label}
                />
              ))}
            </div>
          </div>

          {/* Create */}
          <div>
            <h4 className="mb-2 font-medium text-muted-foreground">{t("command.shortcuts.create")}</h4>
            <div className="space-y-1">
              {createShortcuts.map((s) => (
                <ShortcutRow
                  key={s.keys.join("")}
                  keys={`${s.keys[0].toUpperCase()} → ${s.keys[1].toUpperCase()}`}
                  label={s.label}
                />
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function ShortcutRow({ keys, label }: { keys: string; label: string }) {
  return (
    <div className="flex items-center justify-between py-1">
      <span>{label}</span>
      <kbd className="rounded border border-border bg-muted px-2 py-0.5 font-mono text-xs">
        {keys}
      </kbd>
    </div>
  );
}
