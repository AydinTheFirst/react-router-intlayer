import { configuration } from "intlayer";
import { IntlayerProvider, useLocale } from "react-intlayer";
import { Navigate, Outlet } from "react-router";

import { useI18nHTMLAttributes } from "~/hooks/useI18nHTMLAttributes";

import type { Route } from "./+types/($locale)";

export default function RootLayout({ params }: Route.ComponentProps) {
  useI18nHTMLAttributes();

  const { locale } = params;
  const { locale: selectedLocale } = useLocale();
  const { defaultLocale } = configuration.internationalization;
  const { prefixDefault } = configuration.middleware;

  // Redirect to default locale if no locale is provided in the URL and prefixDefault is true
  if (selectedLocale === defaultLocale && !locale && prefixDefault) {
    console.log("Redirecting to default locale:", defaultLocale);
    return <Navigate replace to={defaultLocale} />;
  }

  // Redirect to selected locale if the locale in the URL does not match the selected locale
  if (selectedLocale !== defaultLocale && !locale) {
    console.log("Redirecting to selected locale:", selectedLocale);
    return <Navigate replace to={selectedLocale} />;
  }

  return (
    <IntlayerProvider locale={locale}>
      <Outlet />
    </IntlayerProvider>
  );
}
