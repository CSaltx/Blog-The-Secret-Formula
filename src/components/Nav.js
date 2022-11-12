export default function Nav({ articles, setArticle }) {
  return (
    <nav className="card">
      {!articles
        ? "Be the first to add an article"
        : articles.map((a) => (
            <div
              key={a.id}
              className="nav-content"
              onClick={() => setArticle(a)}
            >
              <h1 className="title-content">{a.title}</h1>
              <p className="body">{a.body}</p>
            </div>
          ))}
    </nav>
  );
}
