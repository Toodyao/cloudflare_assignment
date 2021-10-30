import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const resp = await fetch(
        "https://serverless-api.xuyaoyou.workers.dev/api/posts"
      );
      const postsResp = await resp.json();
      setPosts(postsResp);
    };

    getPosts();
  }, []);

  function goToNewPost(e) {
    window.location.href="/post_write";
  }

  return (
    <div style={{marginLeft: 2 + 'em', marginTop: 2 + 'em', marginRight: 2 + 'em'}}>
      <h1 style={{padding: 20}}>Posts</h1>
      <button style={{marginLeft: 1 + 'em', }} className="btn btn-primary" onClick={goToNewPost}>Add new post</button>
      <br/>
      <h1 style={{padding: 10}}>{' '}</h1>
      {posts.map((post) => (
        <div style={{padding: 10}} key={post.id}>
          <h2>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </h2>
        </div>
      ))}
    </div>
  );
};

export default Posts;