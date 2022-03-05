import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PublicFolder = "http://localhost:5000/images/"; //for fetching pics from images folder for displaying on write Post submit
  return (
    <div className="post">
      {post.photo && (
        <img className="postImg" src={PublicFolder + post.photo} alt="" />
      )}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((cat) => (
            <span className="postCat">{cat.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>

        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc} </p>
    </div>
  );
}
