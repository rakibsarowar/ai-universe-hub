import React from 'react';

const SingleData = (props) => {

    //console.log(props.singleData)
    //Step:7 Destructuring data ---------------------------
    const { image, features, published_in, name } = props.singleData;

    //Step:08 set card from daisy--------------------------
    return (
        <div>
            
            <div className="card w-full bg-base-100 shadow-2xl">
                <figure>
                    <img className='w-full h-64' src={image} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">Features</h2>
                    {
                        features.map((feature, index)=> (
                            <p>{index+1}. {feature}</p>
                        ))}
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleData;