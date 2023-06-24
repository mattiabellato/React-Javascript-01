import { useState } from "react";

export default function NewUser({ posts, setPosts }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const maxId = Math.max(...posts.map((el) => el.id));

  const handleTitle = (e) => {
    setTitle(() => e.target.value);
  };

  const handleBody = (e) => {
    setBody(() => e.target.value);
  };

  const handleSubmit = () => {
    const newUser = {
      userId: Math.random(),
      id: maxId + 1,
      title: title,
      body: body,
    };

    setPosts((prev) => [...prev, newUser]);

    setTitle("");
  };

  return (
    <div className="mt-5">
      <input
        type="text"
        className="form-control"
        value={title}
        onChange={(e) => handleTitle(e)}
      />
      <input
        type="text"
        className="form-control"
        value={body}
        onChange={(e) => handleBody(e)}
      />
      <button onClick={handleSubmit} className="btn btn-success">
        Add user
      </button>
    </div>
  );
}
