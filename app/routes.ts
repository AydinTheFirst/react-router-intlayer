import { layout, route, type RouteConfig } from "@react-router/dev/routes";

export default [
  layout("routes/layout.tsx", [
    route("/", "routes/page.tsx"),
    route("/:locale", "routes/[locale]/page.tsx"),
    route("/:locale/about", "routes/[locale]/about/page.tsx"),
  ]),
] satisfies RouteConfig;
