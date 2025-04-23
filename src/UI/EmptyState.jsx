import React from 'react';
import { Link } from 'react-router';
import Buttons from './Buttons';

const EmptyState = () => {
    return (
        <div className='text-center p-24'>
                <h1 className='text-7xl font-thin text-gray-900 mb-8'>
                    No Data Found
                </h1>
                <p className='text-3xl mb-10'>
                    Browse, Search Phones, Add to Cart, Favorites.
                </p>
                
                <Link to='/'>
                <Buttons label='Browse Phones' />
                </Link>
                
            </div>
    );
};

export default EmptyState;