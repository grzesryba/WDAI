import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Witamy na blogu!</h1>
            <Link to="/blog">Zobacz artykuły</Link>
        </div>
    );
};

export default Home;
