import {
  LayoutDashboard,
  Package,
  ArrowRightLeft,
  Truck,
  ShoppingCart,
  ClipboardList,
  MapPin,
  Settings,
} from "lucide-react";

export interface PageDef {
  labelKey: string;
  path: string;
  icon: React.ReactNode;
}

export const PAGES: PageDef[] = [
  { labelKey: "command.pageLabels.dashboard", path: "/app/dashboard", icon: <LayoutDashboard className="h-4 w-4" /> },
  { labelKey: "command.pageLabels.catalog", path: "/app/catalog", icon: <Package className="h-4 w-4" /> },
  { labelKey: "command.pageLabels.movements", path: "/app/movements", icon: <ArrowRightLeft className="h-4 w-4" /> },
  { labelKey: "command.pageLabels.suppliers", path: "/app/suppliers", icon: <Truck className="h-4 w-4" /> },
  { labelKey: "command.pageLabels.purchaseOrders", path: "/app/purchase-orders", icon: <ShoppingCart className="h-4 w-4" /> },
  { labelKey: "command.pageLabels.requests", path: "/app/requests", icon: <ClipboardList className="h-4 w-4" /> },
  { labelKey: "command.pageLabels.locations", path: "/app/locations", icon: <MapPin className="h-4 w-4" /> },
  { labelKey: "command.pageLabels.settings", path: "/app/settings", icon: <Settings className="h-4 w-4" /> },
];
