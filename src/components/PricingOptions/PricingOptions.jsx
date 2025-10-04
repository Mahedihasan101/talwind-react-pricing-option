import React, { use } from 'react';
import Pricing from '../../Pricing/Pricing';

const PricingOptions = ({ pricingPromise }) => {
    const pricingData = use(pricingPromise);
    console.log(pricingData)
    return (
        <div>
            <h2 className='text-5xl'>Get Our Membership</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 grid-cols-1'>
                {
                    pricingData.map(pricing => <Pricing key={pricing.id} pricing={pricing}></Pricing>)
                }

            </div>
        </div>
    );
};

export default PricingOptions;