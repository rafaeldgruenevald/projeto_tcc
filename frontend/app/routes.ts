import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("board", "routes/board.tsx"),
] satisfies RouteConfig;
