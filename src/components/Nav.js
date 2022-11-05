export default function Nav({ articles, setArticle }) {
  return (
    <nav>
      {!articles
        ? "Be the first to add an article"
        : articles.map((a) => (
            <div className="card" key={a.id} onClick={() => setArticle(a)}>
              <h1 className="title-content">{a.title}</h1>
              <p className="body-content">{a.body}</p>
            </div>
          ))}
    </nav>
  );
}
