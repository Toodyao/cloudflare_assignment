import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";

const Post = ({ id }) => {
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const resp = await fetch(
        `https://serverless-api.xuyaoyou.workers.dev/api/posts/${id}`
      );
      const postResp = await resp.json();
      setPost(postResp);
    };

    getPost();
  }, [id]);

  if (!Object.keys(post).length) return <div />;

  return (
    <div style={{padding: 20}}>
      <h1 style={{padding: 20}}>{post.title}</h1>
      <p style={{padding: 20}}>{post.text}</p>
      {
        "img" in post &&
        <img style={{padding: 20}} src={post.img}/>
      }
      <p>
        <em style={{padding: 20}}>Published {new Date(post.published_at).toLocaleString()}</em>
      </p>
      <p>
        <Link style={{padding: 20}} to="/">Go back</Link>
      </p>
    </div>
  );
};

export default Post;