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
        en: "This is the home page description.",
        tr: "Bu, ana sayfanın açıklamasıdır.",
      }),
      title: t({
        en: "Home",
        tr: "Ana Sayfa",
      }),
    },
    title: t({
      en: "Home",
      tr: "Ana Sayfa",
    }),
  },
  key: "page",
} satisfies Dictionary;

export default appContent;
