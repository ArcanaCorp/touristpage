import React from 'react';
import Gallery from '../layout/Gallery';
import RecommendedTours from '../layout/RecommendedTours';

export default function HomePage() {
    return (
        <div>
            <h1>Home Page</h1>
            <Gallery />
            <RecommendedTours />
            <h2>Footer</h2>
        </div>
    );
}
