// SingleComponent.js

import React from "react";
import { useParams } from "react-router-dom";
import Serve from "../service/serve.json"; // Import your data source

const SingleComponent = () => {
  const { id } = useParams();

  const post = Serve[id];

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div>
      <h1>{post.name}</h1>
      <p>{post.category}</p>
      <img src={post.img_link} alt={post.name} />

      <video
        autoPlay
        playsInline
        muted
        loop
        crossOrigin="anonymous"
        src="https://cdn.sanity.io/files/f3tpxs09/production/175db19941eb7af438220a6364cd1c04d9e08490.mp4"
      ></video>
    </div>
  );
};

export default SingleComponent;
