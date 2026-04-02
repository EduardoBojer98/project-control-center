import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import LoginPage from "../../features/auth/pages/LoginPage";
import DashboardPage from "../../features/dashboard/pages/DashboardPage";
import HomePage from "../../features/dashboard/pages/HomePage";
import AppShell from "../layouts/AppShell";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <AppShell />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "login",
				element: <LoginPage />,
			},
			{
				path: "dashboard",
				element: <DashboardPage />,
			},
			{
				path: "*",
				element: <NotFoundPage />,
			},
		],
	},
]);
