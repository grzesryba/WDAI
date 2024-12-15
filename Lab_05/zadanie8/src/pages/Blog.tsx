import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Article {
    id: number;
    title: string;
}

const Blog: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>(() => {
        const saved = localStorage.getItem('articles');
        return saved ? JSON.parse(saved) : [];
    });

    return (
        <div>
            <h2>Lista artykułów</h2>
            {articles.length > 0 ? (
                <ul>
                    {articles.map((article) => (
                        <li key={article.id}>
                            <Link to={`/article/${article.id}`}>{article.title}</Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Brak artykułów.</p>
            )}
            <Link to="/dodaj">Dodaj artykuł</Link>
        </div>
    );
};

export default Blog;
