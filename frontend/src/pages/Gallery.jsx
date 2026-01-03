import { useEffect, useState } from "react";
import API from "../api/api";

export default function Gallery() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    API.get("/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container">
      <h2>Gallery</h2>

      {posts.length === 0 && <p>No posts yet</p>}

      {posts.map((post, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h3>{post.title}</h3>
          <p>{post.description}</p>

          <img
            src={`http://127.0.0.1:8000/${post.image_url}`}
            alt={post.title}
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </div>
      ))}
    </div>
  );
}
