import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("articles", "routes/articles.tsx"),
    route("login", "routes/auth/login.jsx"),
    route("profile", "routes/auth/profile.jsx"),
    route("invalid", "routes/auth/invalid-user.jsx"),
    route("blog/:blogId", "routes/blog.tsx"),
] satisfies RouteConfig;
