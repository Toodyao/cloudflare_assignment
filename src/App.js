import { Router } from "@reach/router";

import Posts from './components/posts'
import Post from './components/post'
import PostWrite from './components/post_write'

function App() {
  return (
    <Router>
      <Posts path="/" />
      <Post path="/posts/:id" />
      <PostWrite path="/post_write" />
    </Router>
  );
}

export default App;