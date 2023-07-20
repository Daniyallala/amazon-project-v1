import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home--container">
                <img className="home--image" src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/PD23/ACQ/hero/v2/PC_Hero_3000x1200_2X_EN._CB600991698_.jpg" alt='' />

                <div className="home--row">
                    <Product
                        id="01"
                        title="Apple 2022 MacBook Air Laptop with M2 chip"
                        price={137790}
                        image="https://m.media-amazon.com/images/I/710TJuHTMhL._SL1500_.jpg"
                    />
                     <Product
                        id="02"
                        title="Noise Newly Launched Twist Pro Smartwatch"
                        price={2199}
                        image="https://m.media-amazon.com/images/I/61zh5rQ3RQL._SL1500_.jpg"
                    />
                     <Product
                        id="03"
                        title="Apple iPhone 14 Pro Max"
                        price={144500}
                        image="https://m.media-amazon.com/images/I/610pghkO81L._SL1500_.jpg"
                    />
                </div>
                <div className="home--row">
                <Product
                        id="04"
                        title="Dell Vostro 3400 Intel i3-1115G4"
                        price={21999}
                        image="https://m.media-amazon.com/images/I/61HCEPIeOmL._SL1080_.jpg"
                    />
                     <Product
                        id="05"
                        title="Samsung 138 cm (55 inches) Crystal iSmart 4K Ultra HD"
                        price={44500}
                        image="https://m.media-amazon.com/images/I/81+JXgPUDLL._SL1500_.jpg"
                    />
                </div>
                <div className="home--row">
                <Product
                        id="06"
                        title="DecorNation Julius Upholstered Platform Bed for Bedroom, Home Furniture (Grey, Size: Queen, Fitting Mattress, 60 x 78 x 6 Inches)"
                        price={14500}
                        image="https://m.media-amazon.com/images/I/61GnO+UavZL._SL1400_.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home