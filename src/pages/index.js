import * as React from "react"
import '../styles/reset.scss';
import '../styles/main.scss';
import Layout from '../components/Layout';

const IndexPage = () => {
	return (
		<Layout>
			<section>
				<h2>The Info</h2>
				<ul>
					<li>first info</li>
					<li>second info</li>
					<li>go to <a href="about">about page</a></li>
				</ul>
			</section>
			<section>
				<h2>Test Image</h2>
				<img src="images/test.png" alt="the test" />
			</section>
		</Layout>
	)
}

export default IndexPage
