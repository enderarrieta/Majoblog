import Post from "../post/Post"
import Card from "../card/Card"
import Model from "../model/Model"
import "./models.css";

export default function Models({ posts }) {
    return (
        <div className="models">
            {posts.slice(0, 3).map((p) => (
                <Model post={p} />
            ))}

        </div>
    );
}
