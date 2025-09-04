import { useI18nHTMLAttributes } from "app/hooks/useI18nHTMLAttributes";
import { IntlayerProvider } from "react-intlayer";
import { Outlet } from "react-router";

import type { Route } from "./+types/layout";

export default function RootLayout({ params }: Route.ComponentProps) {
  useI18nHTMLAttributes();

  return (
    <IntlayerProvider locale={params.locale}>
      <Outlet />
    </IntlayerProvider>
  );
}
