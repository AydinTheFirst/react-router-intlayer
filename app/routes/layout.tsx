import { configuration } from "intlayer";
import { IntlayerProvider } from "react-intlayer";
import { Outlet } from "react-router";

import { useI18nHTMLAttributes } from "~/hooks/useI18nHTMLAttributes";

import type { Route } from "./+types/layout";

export default function RootLayout({ params }: Route.ComponentProps) {
  useI18nHTMLAttributes();

  return (
    <IntlayerProvider
      locale={params.locale ?? configuration.internationalization.defaultLocale}
    >
      <Outlet />
    </IntlayerProvider>
  );
}
