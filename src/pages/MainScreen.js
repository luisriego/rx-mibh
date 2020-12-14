import React from 'react';
import { AliceSlider } from '../components/home/AliceSlider';
import { BoySaleArea } from '../components/home/BoySaleArea';
import { ContentArea } from '../components/home/ContentArea';
import { CountArea } from '../components/home/CountArea';
// import { SliderArea } from '../components/home/SliderArea';
import { TestimonialArea } from '../components/home/TestimonialArea';
import { WelcomeArea } from '../components/home/WelcomeArea';

export const MainScreen = () => {
    return (
        <div>
            {/* <SliderArea /> */}
            <AliceSlider />
            <ContentArea />
            <WelcomeArea />
            <TestimonialArea />
            <CountArea />
            <BoySaleArea />
        </div>
    )
}
