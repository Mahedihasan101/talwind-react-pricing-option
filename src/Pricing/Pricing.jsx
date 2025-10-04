import React from 'react';
import Feature from './feature';

const Pricing = ({pricing}) => {
    const {name,price,information,features}= pricing;
    return (
        <div className='flex flex-col border bg-amber-600 rounded-2xl p-5'>
            {/* card header */}
           <div>
             <h1 className='text-7xl'>{name}</h1>
            <h2 className='text-3xl'>{price}</h2>
           </div>
           {/* card body */}
           <div className='bg-amber-400 p-4 rounded-2xl mt-10 flex-1'>
            <p>{information}</p>
            {
                features.map((feature,index) => <Feature key={index} feature={feature}></Feature>)
            }
           </div>
           <button className="btn w-full mt-4">Wide</button>
        </div>
        
        
    );
};

export default Pricing;