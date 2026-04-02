import { Link } from "react-router-dom";

function NotFoundPage() {
	return (
		<section className="page-panel text-center justify-center">
			<p className="page-kicker">404</p>
			<h1 className="page-title">Page not found</h1>
			<p className="page-copy">The page you are looking for does not exist.</p>
			<Link to="/" className="button-primary mt-6">
				Go back home
			</Link>
		</section>
	);
}

export default NotFoundPage;
