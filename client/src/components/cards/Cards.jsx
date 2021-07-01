import Post from "../post/Post"
import Card from "../card/Card"
import "./cards.css";

export default function Cards({ posts }) {
  return (
    <div className="cards">
      {posts.map((p) => (
        <Card post={p} />
      ))}
    </div>
  );
}
