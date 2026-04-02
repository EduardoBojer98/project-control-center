import { NavLink, Outlet } from "react-router-dom";

const navigationItems = [
	{ to: "/", label: "Home", end: true },
	{ to: "/dashboard", label: "Dashboard" },
	{ to: "/login", label: "Login" },
];

function AppShell() {
	return (
		<div className="app-shell">
			<div className="app-shell__backdrop" aria-hidden="true" />

			<header className="app-header">
				<div className="app-header__brand">
					<p className="app-header__eyebrow">Project Control Center</p>
					<NavLink to="/" className="app-header__title">
						Control your work with clarity
					</NavLink>
				</div>

				<nav className="app-nav" aria-label="Primary">
					{navigationItems.map((item) => (
						<NavLink
							key={item.to}
							to={item.to}
							end={item.end}
							className={({ isActive }) =>
								isActive ? "app-nav__link app-nav__link--active" : "app-nav__link"
							}
						>
							{item.label}
						</NavLink>
					))}
				</nav>
			</header>

			<main className="app-main">
				<Outlet />
			</main>

			<footer className="app-footer">
				<p>Built for learning, scaling, and shipping confidently.</p>
				<p>React + TypeScript workspace for your app architecture practice.</p>
			</footer>
		</div>
	);
}

export default AppShell;
