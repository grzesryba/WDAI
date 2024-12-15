import React from 'react';
import { useParams } from 'react-router-dom';

const Article: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const articles = JSON.parse(localStorage.getItem('articles') || '[]');
    const article = articles.find((a: any) => a.id === parseInt(id!, 10));

    if (!article) {
        return <p>Nie znaleziono artykułu.</p>;
    }

    return (
        <div>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
        </div>
    );
};

export default Article;
