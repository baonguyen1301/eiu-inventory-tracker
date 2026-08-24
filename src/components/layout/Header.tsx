import { useState, useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Search, Plus, Menu, User, LogOut, Settings, ChevronDown, ScanBarcode } from "lucide-react";
import { NotificationBell } from "@/components/notifications/NotificationBell";
import { NotificationPreferences } from "@/components/notifications/NotificationPreferences";
import { LanguageToggle } from "@/components/layout/LanguageToggle";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sidebar } from "./Sidebar";
import { QuickEntryMode } from "@/components/data/QuickEntryMode";
import { CommandPalette } from "@/components/command/CommandPalette";
import { NotificationCenter } from "@/components/notifications/NotificationCenter";
import { useDemo } from "@/hooks/useDemo";
import { useRole } from "@/hooks/useRole";
import { PermissionGate } from "@/hooks/usePermissions";
import { useLanguage } from "@/hooks/useLanguage";

const ROLE_BADGE_STYLES: Record<string, string> = {
  admin: "bg-primary/15 text-primary border-primary/20",
  manager: "bg-secondary/15 text-secondary-foreground border-secondary/20",
  requestor: "bg-muted text-muted-foreground border-border",
};

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [quickEntryOpen, setQuickEntryOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [prefsOpen, setPrefsOpen] = useState(false);

  const { t } = useLanguage();
  const { exitDemoMode } = useDemo();
  const { role } = useRole();
  const navigate = useNavigate();

  const ROLE_LABELS: Record<string, string> = {
    admin: t("nav.roles.admin"),
    manager: t("nav.roles.manager"),
    requestor: t("nav.roles.requestor"),
  };

  const displayName = "Demo Admin";

  const handleExit = async () => {
    await navigate({ to: "/" });
    exitDemoMode();
  };

  // CMD+K / Ctrl+K shortcut
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setPaletteOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <header className="flex h-16 items-center gap-3 border-b border-border bg-card px-4 shadow-sm md:px-8">
      <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileOpen(true)} aria-label={t("nav.header.openMenu")}>
        <Menu className="h-5 w-5" />
      </Button>

      <button data-tour="search" type="button" onClick={() => setPaletteOpen(true)} className="flex h-9 flex-1 items-center gap-2 rounded-md border border-input bg-white px-3 text-sm text-muted-foreground transition-colors hover:border-primary/40 md:max-w-sm">
        <Search className="h-4 w-4 shrink-0" />
        <span>{t("nav.header.searchPlaceholder")}</span>
        <kbd className="ml-auto hidden rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-xs md:inline-block">⌘K</kbd>
      </button>

      <PermissionGate permission="log_movement">
        <Button size="icon" variant="outline" className="shrink-0" aria-label={t("nav.header.quickEntry")} onClick={() => setQuickEntryOpen(true)}>
          <ScanBarcode className="h-4 w-4" />
        </Button>
      </PermissionGate>

      <PermissionGate permission="create_item">
        <Button size="icon" variant="outline" className="shrink-0" aria-label={t("nav.header.newItem")} onClick={() => navigate({ to: "/app/catalog", search: { newItem: "true" } })}>
          <Plus className="h-4 w-4" />
        </Button>
      </PermissionGate>

      <LanguageToggle className="shrink-0" />

      <NotificationBell onClick={() => setNotifOpen(true)} />

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button type="button" className="flex items-center gap-1.5 rounded-full pl-1 pr-2 py-1 hover:bg-muted transition-colors" aria-label={t("nav.header.userMenu")}>
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted">
              <User className="h-3.5 w-3.5 text-muted-foreground" />
            </div>
            <span className="hidden text-sm font-medium md:inline-block">{displayName}</span>
            <ChevronDown className="hidden h-3.5 w-3.5 text-muted-foreground md:inline-block" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuLabel className="flex items-center justify-between font-normal text-xs text-muted-foreground">
            {displayName}
            <Badge variant="outline" className={`ml-2 text-[10px] font-semibold uppercase ${ROLE_BADGE_STYLES[role]}`}>
              {ROLE_LABELS[role]}
            </Badge>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => navigate({ to: "/app/settings" })}>
            <Settings className="mr-2 h-4 w-4" />
            {t("nav.header.settings")}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleExit}>
            <LogOut className="mr-2 h-4 w-4" />
            {t("nav.header.exitDemo")}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent side="left" className="w-[260px] p-0">
          <SheetTitle className="sr-only">{t("nav.header.navigation")}</SheetTitle>
          <Sidebar onNavigate={() => setMobileOpen(false)} />
        </SheetContent>
      </Sheet>

      <QuickEntryMode open={quickEntryOpen} onOpenChange={setQuickEntryOpen} />
      <CommandPalette open={paletteOpen} onOpenChange={setPaletteOpen} />
      <NotificationCenter open={notifOpen} onOpenChange={setNotifOpen} onOpenPrefs={() => { setNotifOpen(false); setTimeout(() => setPrefsOpen(true), 300); }} />
      <NotificationPreferences open={prefsOpen} onOpenChange={setPrefsOpen} />
      
    </header>
  );
}
