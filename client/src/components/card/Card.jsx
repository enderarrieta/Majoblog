import { Link } from "react-router-dom";
import "./card.css";

export default function Post({ post }) {
  const PF = "http://localhost:5000/images/"
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          {post.photo && (
            <img
              className="cardImg"
              src={PF + post.photo}
              alt=""
            />
          )}
        </div>
        <div className="card-back">
          <ul>
            <li className="cardTitle">
              <Link to={`/post/${post._id}`} className="link">
                <span>{post.title}</span>
              </Link>
            </li>
            <hr />
            <li>
              <span className="cardDate">{new Date(post.createdAt).toDateString()}</span>
            </li>
            <li className="spacing">
              {post.categories.map((c) => (
                <Link className="cardCat link" to={`/?cat=${c}`}>{c}</Link>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
