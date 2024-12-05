import axios from "axios";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Header } from "./Header";
import { HomePage } from "./HomePage";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { CategoriesPage } from "./CategoriesPage";
import { CategoriesShow } from "./CategoriesShow";
import { Footer } from "./Footer";
import { TodoPage } from "./TodoPage";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

const router = createBrowserRouter([
  {
    element: (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      {
        path: "/categories",
        element: <CategoriesPage />,
      },
      {
        path: "/categories/:id",
        element: <CategoriesShow />,
        loader: ({ params }) => axios.get(`/categories/${params.id}.json`).then((response) => response.data),
      },
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/todos",
        element: <TodoPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
