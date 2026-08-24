import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { toast } from "sonner";
import { usePermissions } from "@/hooks/usePermissions";
import { useLanguage } from "@/hooks/useLanguage";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ErrorBoundary } from "@/components/shared/ErrorBoundary";
import { CategoryManager } from "@/components/settings/CategoryManager";
import { CustomFieldManager } from "@/components/settings/CustomFieldManager";
import { LocationSettings } from "@/components/settings/LocationSettings";
import { ReorderDefaults } from "@/components/settings/ReorderDefaults";
import { SystemSettings } from "@/components/settings/SystemSettings";
import { UserManagement } from "@/components/settings/UserManagement";

export const Route = createFileRoute("/app/settings")({
  component: SettingsPage,
  head: () => ({ meta: [{ title: "Settings — Stackwise" }] }),
});

function SettingsPage() {
  const { can } = usePermissions();
  const navigate = useNavigate();
  const { t, language, setLanguage } = useLanguage();

  useEffect(() => {
    if (!can("access_settings")) {
      toast.error(t("settings.accessDenied"));
      navigate({ to: "/app/dashboard" });
    }
  }, [can, navigate, t]);

  if (!can("access_settings")) return null;

  return (
    <div className="mx-auto max-w-[1000px] space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">{t("settings.title")}</h1>
        <p className="text-sm text-muted-foreground">{t("settings.subtitle")}</p>
      </div>

      <Tabs defaultValue="categories" className="w-full">
        <TabsList className="w-full justify-start overflow-x-auto">
          <TabsTrigger value="categories">{t("settings.tabs.categories")}</TabsTrigger>
          <TabsTrigger value="custom-fields">{t("settings.tabs.customFields")}</TabsTrigger>
          <TabsTrigger value="locations">{t("settings.tabs.locations")}</TabsTrigger>
          <TabsTrigger value="reorder-defaults">{t("settings.tabs.reorderDefaults")}</TabsTrigger>
          <TabsTrigger value="users">{t("settings.tabs.users")}</TabsTrigger>
          <TabsTrigger value="system">{t("settings.tabs.system")}</TabsTrigger>
        </TabsList>

        <div className="mt-6">
          <TabsContent value="categories">
            <ErrorBoundary><CategoryManager /></ErrorBoundary>
          </TabsContent>
          <TabsContent value="custom-fields">
            <ErrorBoundary><CustomFieldManager /></ErrorBoundary>
          </TabsContent>
          <TabsContent value="locations">
            <ErrorBoundary><LocationSettings /></ErrorBoundary>
          </TabsContent>
          <TabsContent value="reorder-defaults">
            <ErrorBoundary><ReorderDefaults /></ErrorBoundary>
          </TabsContent>
          <TabsContent value="users">
            <ErrorBoundary><UserManagement /></ErrorBoundary>
          </TabsContent>
          <TabsContent value="system">
            <div className="space-y-6">
              <ErrorBoundary><SystemSettings /></ErrorBoundary>
              <Card>
                <CardHeader>
                  <CardTitle>{t("settings.language.title")}</CardTitle>
                  <CardDescription>{t("settings.language.description")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <Button
                      variant={language === "vi" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setLanguage("vi")}
                    >
                      {t("settings.language.vietnamese")}
                    </Button>
                    <Button
                      variant={language === "en" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setLanguage("en")}
                    >
                      {t("settings.language.english")}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
