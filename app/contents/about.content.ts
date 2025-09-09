import { type Dictionary, t } from "intlayer";

const appContent = {
  content: {
    links: {
      about: t({
        en: "About",
        tr: "Hakkında",
      }),
      home: t({
        en: "Home",
        tr: "Ana Sayfa",
      }),
    },
    meta: {
      description: t({
        en: "This is the about page description.",
        tr: "Bu, hakkında sayfasının açıklamasıdır.",
      }),
      title: t({
        en: "About Page",
        tr: "Hakkında Sayfası",
      }),
    },
    title: t({
      en: "About Page",
      tr: "Hakkında Sayfası",
    }),
  },
  key: "about",
} satisfies Dictionary;

export default appContent;
