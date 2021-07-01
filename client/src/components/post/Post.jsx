import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ post }) {
  console.log(post)
  const PF = "http://localhost:5000/images/"
  return (
    <div className="post">
      <div className="post-inner">
        <div className="post-front">
          {post.photo && (
            <img
              className="postImg"
              src={PF + post.photo}
              alt=""
            />
          )}
        </div>
        <div className="post-back">
          <ul>
            <li className="postTitle">
              <Link to={`/post/${post._id}`} className="link">
                <span>{post.title}</span>
              </Link>
            </li>
            <hr />
            <li>
              <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
            </li>
            <li className="spacing">
              {post.categories.map((c) => (
                <Link className="postCat link" to={`/?cat=${c}`}>{c}</Link>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </div>

  );
}
