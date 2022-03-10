import React, { useState, useEffect } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
	const params = useParams();

	const [data, setData] = useState(null);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
			.then((response) => response.json())
			.then((data) => setData(data));
	}, [params]);

	return (
		<div style={{ padding: "80px" }}>
			{!data && (
				<div style={{ display: "flex", flexDirection: "column" }}>
					<AiOutlineLoading3Quarters />
					<span>Loading...</span>
				</div>
			)}
			{data && (
				<div key={data.id}>
					<h1>{data.title}</h1>
					<p>{data.body}</p>
				</div>
			)}
		</div>
	);
};

export default BlogDetail;
