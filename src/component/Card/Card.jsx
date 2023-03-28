import React, { useEffect, useState } from 'react';
import SingleData from '../SingleData/SingleData';

const Card = () => {
    // Step 01: use State -----------------------------------------
    const [data, setData] = useState([]);

    //Step 02: Use Effect Function --------------------------------

    useEffect(()=> {
        // Step 03: fetch data by async & await -------------------
        const loadData =async ()=>{

            const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
            const value = await res.json();

            // console.log(data.data.tools)
            // Step04: set the data in useState -------------------
            setData(value.data.tools)
        };
        loadData()
    }, [])

    //Step05- get the single data by map --------------------------
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-12 my-6'>
            {
            data.map((singleData)=>{
                //console.log(signgleData)

                //Step06: sent data by props-----------------------
                return <SingleData singleData ={singleData} key={singleData.id}></SingleData> 
            }) 
          }  
            </div>
        </>
    );
};

export default Card;