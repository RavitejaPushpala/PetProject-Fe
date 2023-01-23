import React from 'react'
import Restaurant from './Restaurant'
import '../Styles/Delivery.css';
import useDiningData from '../Hooks/useDiningData';

const DiningOut = () => {
    const { isLoading, data, isError, error } = useDiningData();
    if (isLoading) {
        return <h2>Loading ...</h2>
    }
    if (isError) {
        return <h2>{error.message}</h2>
    }
    let ar = data?.data;

    return (
        <>
            <h1 className='h1Delivery'>Best Dining Restaurants near you in Hyderabad City</h1>
            <div className='Delivery'>
                {
                    (ar.concat(ar)).map((pData) => {
                        return <Restaurant key={pData.id} productData={pData} />
                    })
                }
            </div>
        </>
    )
}

export default DiningOut
