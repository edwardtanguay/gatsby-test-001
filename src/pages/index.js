import * as React from "react"
import '../styles/reset.scss';
import '../styles/main.scss';

const IndexPage = () => {
	return (
		<>
			<h1>Info Site</h1>

			<section>
				<h2>The Info</h2>
				<ul>
					<li>first info</li>
					<li>second info</li>
				</ul>
			</section>
			<section>
				<h2>Test Image</h2>
				<img src="images/test.png" alt="the test" />
			</section>
		</>
	)
}

export default IndexPage
