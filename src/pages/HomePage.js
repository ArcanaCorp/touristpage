import React from 'react';
import Gallery from '../layout/Gallery';
import RecommendedTours from '../layout/RecommendedTours';
import Hero from '../layout/Hero';

export default function HomePage() {
    return (
        <div>
            <h1>Home Page</h1>
            <Hero />
            <Gallery />
            <RecommendedTours />
            <h2>Footer</h2>
        </div>
    );
}
