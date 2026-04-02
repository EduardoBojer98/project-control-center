import { Link } from "react-router-dom";

function HomePage() {
	return (
		<section className="page-panel page-panel--hero">
			<div className="space-y-4">
				<p className="page-kicker">Workspace overview</p>
				<h1 className="page-title">A calm, structured starting point for your app.</h1>
				<p className="page-copy">
					Use this project to practice routing, reusable layouts, feature modules,
					and polished UI structure without turning the root of the app into a blank
					container.
				</p>
			</div>

			<div className="page-actions">
				<Link to="/dashboard" className="button-primary">
					Open dashboard
				</Link>
				<Link to="/login" className="button-secondary">
					Go to login
				</Link>
			</div>
		</section>
	);
}

export default HomePage;
