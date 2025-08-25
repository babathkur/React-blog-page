import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layout/MainLayout";
import NotFound from "./pages/NotFound";
import AuthorPage from "./pages/AuthorPage";
import BlogHome from "./pages/BlogHome";
import BlogDetail from "./pages/BlogDetail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <NotFound />,
        children: [
            { path: "/", element: <BlogHome /> },
            { path: "/blog/:blogId", element: <BlogDetail /> },
            { path: "/user/:userId", element: <AuthorPage /> },
        ]
    }
]);
function App() {
    return <RouterProvider router={router} />;
}
export default App;