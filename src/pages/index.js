import * as React from "react"
import '../styles/reset.scss';
import '../styles/main.scss';
import Layout from '../components/Layout';

import { StaticImage } from "gatsby-plugin-image"

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
				<h2>Non-Gatsby Images</h2>
				<img src="images/test.png" alt="the test" />
			</section>
			<section>
				<h2>Gatsby Images</h2>
				<StaticImage src="../images/test001.png" alt="test" />
			</section>
		</Layout>
	)
}

export default IndexPage
