import { useState } from "react";

export default function ArticleEntry({ addArticle }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState(null);

  function submit(e) {
    setError(null);
    e.preventDefault();
    if (!title.trim() || !body.trim()) {
      setError("Both the title and body must be supplied");
    } else {
      addArticle({ title, body });
    }
  }

  return (
    <div className="blog-form">
      <h1 className="heading">The Secret Formula</h1>
      <h3 className="subtitle">Tell us your story</h3>
      <form onSubmit={submit}>
        {error && <p className="error">{error}</p>}
        <h1 className="title">Title</h1>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <h1 className="body-content">Body</h1>
        <textarea
          rows="8"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
