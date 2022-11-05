export default function Article({ article }) {
  return (
    <article>
      {!article ? (
        <p className="article-selection">Select an article from the cards</p>
      ) : (
        <section className="card-area">
          <div className="card">
            <h2>{article.title}</h2>
            <p className="date">{`Posted: ${article.date}`}</p>
            <p className="body">{article.body}</p>
          </div>
        </section>
      )}
    </article>
  );
}
