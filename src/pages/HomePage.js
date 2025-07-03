import React from 'react';
import Gallery from '../layout/Gallery';
import RecommendedTours from '../layout/RecommendedTours';
import Hero from '../layout/Hero';

export default function HomePage() {
    return (
        <div>
            <Hero />
            <Gallery />
            <RecommendedTours />
        </div>
    );
}
