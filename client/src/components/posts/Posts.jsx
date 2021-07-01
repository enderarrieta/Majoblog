import Post from "../post/Post"
import Card from "../card/Card"
import "./posts.css";

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((p) => (
        <Post post={p} />
      ))}

    </div>
  );
}
