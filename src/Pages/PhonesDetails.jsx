import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Buttons from '../UI/Buttons';
import { MdShoppingCartCheckout, MdBookmarkAdd } from "react-icons/md";

const PhonesDetails = () => {
    const data = useLoaderData();
    const {id} = useParams();
    const singlePhone = data.find(phone => phone.id === parseInt(id))
    const {
        name, image, brand, model, price, description,
        storage, camera_info,
    } = singlePhone || {};
    return (
        <div className='w-full py-12'>
            <img className='w-full mx-auto md:w-auto mb-8' src={image} alt="Phone Image" />
            <div className='flex justify-between items-center'>
                <h1 className='text-6xl font-thin text-gray-900'>{name}</h1>
                <div className='space-x-4'>
                    <Buttons label={<MdShoppingCartCheckout />} />
                    <Buttons label={<MdBookmarkAdd />}/>
                </div>
            </div>
        </div>
    );
};

export default PhonesDetails;