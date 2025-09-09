import { getIntlayer } from "intlayer";
import { useIntlayer } from "react-intlayer";

import LocaleSwitcher from "~/components/locale-switcher";
import LocalizedLink from "~/components/localized-link";
import { useLocalizedNavigate } from "~/hooks/useLocalizedNavigate";

import type { Route } from "./+types/($locale)";

export const meta: Route.MetaFunction = ({ params }) => {
  const content = getIntlayer("page-meta", params.locale);
  return [
    { title: content.title },
    { content: content.description, name: "description" },
  ];
};

export default function Page() {
  const content = useIntlayer("page");
  const navigate = useLocalizedNavigate();

  return (
    <div className="grid place-items-center h-screen">
      <div className="flex flex-col gap-3 items-center">
        <h1 className="text-3xl font-bold underline">{content.title}</h1>
        <LocaleSwitcher />
        <div className="flex gap-2">
          <a href="/">Index</a>
          <LocalizedLink to="/">{content.links.home}</LocalizedLink>
          <LocalizedLink to="/about">{content.links.about}</LocalizedLink>
        </div>
        <div className="flex gap-2">
          <button onClick={() => navigate("/")}>
            {content.links.home} (navigate)
          </button>
          <button onClick={() => navigate("/about")}>
            {content.links.about} (navigate)
          </button>
        </div>
      </div>
    </div>
  );
}
