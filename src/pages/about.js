import * as React from "react"
import Layout from '../components/Layout';

const AboutPage = () => {
	return (
		<Layout>
			<section>
				<h2>About</h2>
				<p>This is the about page.</p>
				<p>Go back to <a href="/">main page</a>.</p>
			</section>
		</Layout>
	)
}

export default AboutPage
