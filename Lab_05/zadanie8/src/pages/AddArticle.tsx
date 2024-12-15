import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddArticle: React.FC = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const articles = JSON.parse(localStorage.getItem('articles') || '[]');
        const newArticle = { id: Date.now(), title, content };
        localStorage.setItem('articles', JSON.stringify([...articles, newArticle]));

        navigate('/blog');
    };

    return (
        <div>
            <h2>Dodaj artykuł</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Tytuł"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Treść"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <button type="submit">Dodaj</button>
            </form>
        </div>
    );
};

export default AddArticle;
