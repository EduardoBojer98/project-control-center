import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../../features/dashboard/pages/HomePage';
import DashboardPage from '../../features/dashboard/pages/DashboardPage';
import NotFound from '../../features/dashboard/pages/NotFound404';
import DashboardLogin  from '../../features/dashboard/pages/DashboardLogin';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: '*',
		element: <NotFound />,
	},
	{
		path: '/login',
		element: <DashboardLogin />,
	},
	{
		path: '/dashboard',
		element: <DashboardPage />,
	}
]);
