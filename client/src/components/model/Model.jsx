import { Link } from "react-router-dom";
import "./model.css";

export default function Model({ post }) {
    console.log(post)
    const PF = "http://localhost:5000/images/"
    return (
        <div className="model">
            <div className="model-inner">
                <div className="model-front">
                    {post.photo && (
                        <img
                            className="modelImg"
                            src={PF + post.photo}
                            alt=""
                        />
                    )}
                </div>
                <div className="model-back">
                    <ul>
                        <li className="modelTitle">
                            <Link to={`/post/${post._id}`} className="link">
                                <span>{post.title}</span>
                            </Link>
                        </li>
                        <hr />
                        <li>
                            <span className="modelDate">{new Date(post.createdAt).toDateString()}</span>
                        </li>
                        <li className="spacing">
                            {post.categories.map((c) => (
                                <Link className="modelCat link" to={`/?cat=${c}`}>{c}</Link>
                            ))}
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
}
