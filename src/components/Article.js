export default function Article({ article, setArticle }) {
  return (
    <article>
      {!article ? (
        <p className="article-selection">Select an article from the cards</p>
      ) : (
        <section className="card-area">
          <div className="card">
            <h2>{article.title}</h2>
            <p className="date">{`Posted: ${new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            }).format(article.date)}`}</p>
            <p className="body">{article.body}</p>
          </div>
        </section>
      )}
    </article>
  );
}
