import { Outlet } from "react-router";
import { IntlayerProvider } from "react-intlayer";

import { useI18nHTMLAttributes } from "app/hooks/useI18nHTMLAttributes";

export default function RootLayout() {
  useI18nHTMLAttributes();

  return (
    <IntlayerProvider>
      <Outlet />
    </IntlayerProvider>
  );
}
