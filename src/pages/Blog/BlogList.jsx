import React, { Component } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Link } from "react-router-dom";

class BlogList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: null,
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((response) => response.json())
			.then((data) => this.setState({ data: data }));
	}

	render() {
		const { data } = this.state;

		return (
			<div style={{ padding: "80px" }}>
				{!data && (
					<div className="flex space-x-3 items-center justify-center p-10">
						<AiOutlineLoading3Quarters className="animate-spin" />
						<span>Loading...</span>
					</div>
				)}
				{data &&
					data.map((value) => (
						<div className="border mb-6 rounded p-6 border-primary-600">
							<Link
								className="text-lg font-bold inline-block mb-3"
								to={`/blog/${value.id}`}
							>
								<h1>{value.title}</h1>
							</Link>
							<p>{value.body}</p>
						</div>
					))}
			</div>
		);
	}
}

export default BlogList;
