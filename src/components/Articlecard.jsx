import React from "react";
import "../styles/ArticleCard.scss";

function ArticleCard({ title, content, image }) {
  return (
    <article className="article-card">
      {image && <img src={image} alt={title} className="article-card-image" />}
      <h2>{title}</h2>
      <p>{content}</p>
    </article>
  );
}

export default ArticleCard;
