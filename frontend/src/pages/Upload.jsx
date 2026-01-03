import { useState } from "react";
import API from "../api/api";

export default function Upload() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const submit = async () => {
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("image", image);

      await API.post("/posts", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Post uploaded successfully");
      setTitle("");
      setDescription("");
      setImage(null);
    } catch (error) {
      alert(error.response?.data?.detail || "Upload failed");
    }
  };

  return (
    <div className="container">
      <h2>Upload Artwork</h2>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
      />

      <button onClick={submit}>Upload</button>
    </div>
  );
}
