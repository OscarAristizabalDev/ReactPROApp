import { LazyExoticComponent, lazy } from "react";
import { NoLazy } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element

interface Route {
    to: string,
    path: string,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string
}

const lazyLayout = lazy(() => import("../01-lazyload/layout/LazyLayout"));

export const routes: Route[] = [
    {
        /** this configuration allows to work with nested lazy loading routes */
        to: "/lazyload/",  
        path: "/lazyload/*",
        Component: lazyLayout,
        name: "Lazy Layout"
    },
    {
        to: "/no-lazy",
        path: "no-lazy",
        Component: NoLazy,
        name: "No Lazy"
    },
]