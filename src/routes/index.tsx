import { useRoutes, Navigate } from "react-router-dom";
import loadable from "@loadable/component";

const modules = {
  pages: import.meta.glob("@/pages/**/*.{ts,tsx}"),
  layout: import.meta.glob("@/layout/**/*.{ts,tsx}")
};

Object.entries(modules).forEach(([type, files]) => {
  const regex = new RegExp(String.raw`(\..\/${type}\/${type}\/)|(\.tsx)`, "g");
  for (const key in files) {
    const file = files[key];
    modules[`${type}`][key.replace(regex, "")] = file;
  }
});

// 懒加载
const lazyLoad = (path: string, type?: string) => {
  const Comp = loadable(modules[type ?? "pages"][`${path}`], {
    fallback: <div>Page is Loading...</div>
  });
  return <Comp />;
};

const routes = [
  {
    path: "/",
    element: lazyLoad("../layout/MainLayout", "layout"),
    children: [
      {
        path: "/",
        element: lazyLoad("../pages/home/Home")
      },
      {
        path: "/about",
        element: lazyLoad("../pages/about/About")
      }
    ]
  },
  {
    path: "*",
    element: lazyLoad("../pages/notFound/NotFound")
  }
];

const Routes = () => useRoutes(routes);

export { Routes };
