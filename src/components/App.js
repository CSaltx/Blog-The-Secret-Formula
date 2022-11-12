import { useEffect, useState } from "react";
import Nav from "./Nav";
import Article from "./Article";
import ArticleEntry from "./ArticleEntry";
import { SignIn, SignOut, useAuthentication } from "../services/authService";
import { fetchArticles, createArticle } from "../services/articleService";
import "./App.css";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState(null);
  const [writing, setWriting] = useState(false);
  const user = useAuthentication();

  // This is a trivial app, so just fetch all the articles only when
  // a user logs in. A real app would do pagination. Note that
  // "fetchArticles" is what gets the articles from the service and
  // then "setArticles" writes them into the React state.
  useEffect(() => {
    if (user) {
      fetchArticles().then(setArticles);
    }
  }, [user]);

  // Update the "database" *then* update the internal React state. These
  // two steps are definitely necessary.
  function addArticle({ title, body }) {
    createArticle({ title, body }).then((article) => {
      setArticle(article);
      setArticles([article, ...articles]);
      setWriting(false);
    });
  }

  const displayNav = () => {
    const nav = document.querySelector("nav.card");
    const article = document.querySelector("article");
    if (nav.style.display === "none") {
      nav.style.display = "grid";
      nav.style.backgroundColor = "white";
      article.style.display = "none";
      article.style.width = "0";
    } else {
      nav.style.display = "none";
      article.style.display = "inline";
      article.style.width = "100%";
    }
  };

  return (
    <div className="App">
      <header>
        <button className="expand-button" onClick={displayNav}>
          <i className="fa-solid fa-bars fa-inverse fa-2x"></i>
        </button>
        <div className="logo">
          <i className="fa-solid fa-scroll fa-lg">
            <span className="name">The Secret Formula</span>
          </i>
        </div>
        <div className="add">
          {user && (
            <button id="button" onClick={() => setWriting(true)}>
              Add New Article
            </button>
          )}
        </div>
        {!user ? <SignIn /> : <SignOut />}
      </header>
      <div className="cards">
        {<Nav articles={articles} setArticle={setArticle} />}
      </div>
      {!user ? (
        ""
      ) : writing ? (
        <ArticleEntry addArticle={addArticle} />
      ) : (
        <Article article={article} setArticle={setArticle} />
      )}

      {user ? (
        ""
      ) : (
        <div className="arrow-login">
          <span className="arrow"></span>
          <h5 className="login-msg">
            Please login to see blog posts and write posts!
          </h5>
        </div>
      )}
    </div>
  );
}
