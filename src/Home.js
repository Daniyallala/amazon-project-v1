import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home--container">
                <img className="home--image" src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/AugART/Acq/gwhero/PC_Hero_3000x1200_live-now_ft._CB599265579_.jpg" alt='' />

                <div className="home--row">
                    <Product
                        id="01"
                        title="OnePlus Nord CE 3 5G "
                        price={21370}
                        image="https://m.media-amazon.com/images/I/41TmlehQnaL._SX300_SY300_QL70_FMwebp_.jpg"
                    />
                     <Product
                        id="02"
                        title="Samsung Galaxy S20 FE 5G "
                        price={21999}
                        image="https://m.media-amazon.com/images/I/41CkKbseMGL._SX300_SY300_QL70_FMwebp_.jpg"
                    />
                     <Product
                        id="03"
                        title="Apple iPhone 14 Pro Max"
                        price={144500}
                        image="https://m.media-amazon.com/images/I/610pghkO81L._SL1500_.jpg"
                    />
                    <Product
                         id="04"
                         title="iQOO Neo 7 5G  "
                         price={14400}
                         image="https://m.media-amazon.com/images/I/41Hg9TA5PZL._SX300_SY300_QL70_FMwebp_.jpg"
                    />
                </div>
                <div className="home--row">
                <Product
                        id="05"
                        title="Dell Vostro 3400"
                        price={21999}
                        image="https://m.media-amazon.com/images/I/61HCEPIeOmL._SL1080_.jpg"
                    />
                     <Product
                        id="06"
                        title="ASUS Vivobook 15 "
                        price={44000}
                        image="https://m.media-amazon.com/images/I/41l6mE-MJtL._SX300_SY300_QL70_FMwebp_.jpg"
                    />
                      <Product
                        id="07"
                        title="Apple MacBook Air Laptop "
                        price={117800}
                        image="https://m.media-amazon.com/images/I/41YvjAcEc3L._SY445_SX342_QL70_FMwebp_.jpg"
                    />
                      <Product
                        id="08"
                        title="MSI Katana 15"
                        price={145000}
                        image="https://m.media-amazon.com/images/I/41I0NtaJocL._SX300_SY300_QL70_FMwebp_.jpg"
                    />
                </div>
                <div className="home--row">
                <Product
                        id="09"
                        title="Samsung 108 cm Smart Tv "
                        price={14500}
                        image="https://m.media-amazon.com/images/I/41KQf7HCDoL._SY300_SX300_QL70_FMwebp_.jpg"
                    />
                <Product
                        id="10"
                        title="Sony Bravia 139 cm Smart Tv "
                        price={19500}
                        image="https://m.media-amazon.com/images/I/51eiFYQhwBL._SY300_SX300_QL70_FMwebp_.jpg"
                />
                 <Product
                        id="11"
                        title="LG 139 cm Smart Tv"
                        price={17400}
                        image="https://m.media-amazon.com/images/I/51dOjIreG4L._SX300_SY300_QL70_FMwebp_.jpg"
                    />
                 <Product
                        id="12"
                        title="Redmi 139 cm (55 inches) Smart Tv"
                        price={12500}
                        image="https://m.media-amazon.com/images/I/41glQPwlx7L._SX300_SY300_QL70_FMwebp_.jpg"
                    />
                </div>
                <div className="home--row">
                <Product
                        id="13"
                        title="Noise Twist Bluetooth Calling Smart Watch "
                        price={1450}
                        image="https://m.media-amazon.com/images/I/41Hr4Mn6pCL._SX300_SY300_QL70_FMwebp_.jpg"
                    />
                <Product
                        id="14"
                        title="beatXP Marv Neo 1.85 (4.6 cm) "
                        price={1950}
                        image="https://m.media-amazon.com/images/I/31ZO9FflC8L._SX300_SY300_QL70_FMwebp_.jpg"
                />
                 <Product
                        id="15"
                        title="Noise ColorFit Ultra Smart Watch "
                        price={1740}
                        image="https://m.media-amazon.com/images/I/516osUm7cIL._SX300_SY300_QL70_FMwebp_.jpg"
                    />
                 <Product
                        id="16"
                        title="RD X-15 Bluetooth Calling Smartwatch "
                        price={21250}
                        image="https://m.media-amazon.com/images/I/4147r0KAhNL._SX300_SY300_QL70_FMwebp_.jpg"
                    />
                </div>
                <div className="home--row">
                <Product
                        id="17"
                        title="Panasonic 2 Ton 3 Star Wi-Fi Inverter Smart Split AC "
                        price={1450}
                        image="https://m.media-amazon.com/images/I/31sdbCM2RrL._SY445_SX342_QL70_FMwebp_.jpg"
                    />
                <Product
                        id="18"
                        title="Godrej 1.5 Ton 4 Star 4 Way Swing, Inverter Split AC "
                        price={21950}
                        image="https://m.media-amazon.com/images/I/212pYV+T-rL._SX342_SY445_.jpg"
                />
                 <Product
                        id="19"
                        title="LG 242 L 3 Star Smart Inverter Frost-Free Double Door Refrigerator  "
                        price={31740}
                        image="https://m.media-amazon.com/images/I/312SthuvfYL._SY445_SX342_QL70_FMwebp_.jpg"
                    />
                 <Product
                        id="20"
                        title="Whirlpool 327 L 3 Star IntelliFresh Inverter Frost Free Double Door Refrigerator"
                        price={21250}
                        image="https://m.media-amazon.com/images/I/31aEr03p6vL._SX342_SY445_QL70_FMwebp_.jpg"
                    />
                </div>
                <div className="home--row">
                <Product
                        id="21"
                        title="LG 8 Kg 5 Star Inverter Fully Automatic Front Load Washing Machine "
                        price={21450}
                        image="https://m.media-amazon.com/images/I/71nSTVWJ1UL._SX679_.jpg"
                    />
                <Product
                        id="22"
                        title="LG 6.5 Kg 5 Star Inverter Fully Automatic Front Load Washing Machine"
                        price={21950}
                        image="https://m.media-amazon.com/images/I/51Iw-cMHMwL._SY445_SX342_QL70_FMwebp_.jpg"
                />
                 <Product
                        id="23"
                        title="LG 7.5 Kg 5 Star Smart Inverter Fully-Automatic Top Load Washing Machine "
                        price={31740}
                        image="https://m.media-amazon.com/images/I/41p60zkEWxL._SY445_SX342_QL70_FMwebp_.jpg"
                    />
                 <Product
                        id="24"
                        title="Godrej 9 Kg 5 Star Semi-Automatic Top Load Washing Machine With Rain Shower Spin"
                        price={12500}
                        image="https://m.media-amazon.com/images/I/41up9Kx4T3L._SY445_SX342_QL70_FMwebp_.jpg"
                    />
                </div>
                <div className="home--row">
                <Product
                        id="25"
                        title="V-Guard Zenora RO UF Water Purifier | TDS up to 2000 ppm  "
                        price={2450}
                        image="https://m.media-amazon.com/images/I/31rQHnbMmsL._SY445_SX342_QL70_FMwebp_.jpg"
                    />
                <Product
                        id="26"
                        title="Havells Aqua Plus 1.2 litre Double Wall Kettle "
                        price={1950}
                        image="https://m.media-amazon.com/images/I/31S74o1sCSS._SY300_SX300_QL70_FMwebp_.jpg"
                />
                 <Product
                        id="27"
                        title="Havells Instanio 3-Litre Instant Geyser (White/Blue), Wall Mount "
                        price={3140}
                        image="https://m.media-amazon.com/images/I/31991seDfcL._SY300_SX300_QL70_FMwebp_.jpg"
                    />
                 <Product
                        id="28"
                        title="Amazon Basics Mixer Grinder 750W Black, 4 jars with Food Processor Jar and Flexi lid"
                        price={1250}
                        image="https://m.media-amazon.com/images/I/41bL-+h4hLL._SX300_SY300_.jpg"
                    />
                </div>
                <div className="home--row">
                <Product
                        id="29"
                        title="MI Power Bank 3i 20000mAh Lithium Polymer 18W Fast Power Delivery Charging "
                        price={450}
                        image="https://m.media-amazon.com/images/I/31grUs8OpvL._SX300_SY300_QL70_FMwebp_.jpg"
                    />
                <Product
                        id="30"
                        title="Echo Dot (3rd Gen, Black) Combo with Echo Dot and Philips 9W Smart Color Bulb "
                        price={1750}
                        image="https://m.media-amazon.com/images/I/61HrjP+UE3L._SX679_.jpg"
                />
                 <Product
                        id="31"
                        title="JBL Partybox 110 | Wireless Bluetooth Party Speaker Built-in Powerbank "
                        price={4140}
                        image="https://m.media-amazon.com/images/I/41YTeApy3HL._SX300_SY300_QL70_FMwebp_.jpg"
                    />
                 <Product
                        id="32"
                        title="Noise Buds Connect Truly Wireless in Ear Earbuds with 50H Playtime"
                        price={1280}
                        image="https://m.media-amazon.com/images/I/31Ps-We8iwL._SX300_SY300_QL70_FMwebp_.jpg"
                    />
                </div>
                <div className="home--row">
                <Product
                        id="33"
                        title="J B Fashion Casual Shirt for Men|| Shirt for Men|| "
                        price={450}
                        image="https://m.media-amazon.com/images/I/71lFK2zWzwL._UY741_.jpg"
                    />
                <Product
                        id="34"
                        title="Allen Solly Men's Regular Fit Formal Shirt "
                        price={750}
                        image="https://m.media-amazon.com/images/I/71KsHDeWZhL._UY879_.jpg"
                />
                 <Product
                        id="35"
                        title="https://m.media-amazon.com/images/I/516stwrToQL._UY741_.jpg "
                        price={940}
                        image="https://m.media-amazon.com/images/I/516stwrToQL._UY741_.jpg"
                    />
                 <Product
                        id="36"
                        title="U.S. POLO ASSN. Men's Regular fit T-Shirt"
                        price={580}
                        image="https://m.media-amazon.com/images/I/71+kGVPoAGL._UX679_.jpg"
                    />
                </div>
                <div className="home--row">
                <Product
                        id="37"
                        title="U.S. POLO ASSN. Mens Lauritz Sneaker"
                        price={2450}
                        image="https://m.media-amazon.com/images/I/61VOzttRz-L._UY695_.jpg"
                    />
                <Product
                        id="38"
                        title="U.S. POLO ASSN. Mens Liron Sneaker "
                        price={2150}
                        image="https://m.media-amazon.com/images/I/51Rz6hoUzCL._UY695_.jpg"
                />
                 <Product
                        id="39"
                        title="VINCENT CHASE EYEWEAR Sunglasses"
                        price={540}
                        image="https://m.media-amazon.com/images/I/41bSyL5qiJS._UX679_.jpg"
                    />
                 <Product
                        id="40"
                        title="Storite 9 Slot Large PU Leather Wallet "
                        price={980}
                        image="https://m.media-amazon.com/images/I/51DN8NU21KL._SX300_SY300_.jpg"
                    />
                </div>
                <div className="home--row">
                <Product
                        id="41"
                        title="NDO ERA Women's Cotton Blend Solid Straight Kurta Trouser with Dupatta Set"
                        price={750}
                        image="https://m.media-amazon.com/images/I/71rgWbkZD6S._UY879_.jpg"
                    />
                <Product
                        id="42"
                        title="INDO ERA Women's Cotton Blend Yoke Design Straight Kurta Palazzos With Dupatta Set "
                        price={650}
                        image="https://m.media-amazon.com/images/I/71UGY7UiVZL._UY879_.jpg"
                />
                 <Product
                        id="43"
                        title="BIBA Women's Cotin Satin Straight Maxi Dress"
                        price={940}
                        image="https://m.media-amazon.com/images/I/51RmqXyesGL._UX679_.jpg"
                    />
                 <Product
                        id="44"
                        title="ULOS Women's Abstract Straight Fit Elasticated Pant Muslin Co-Ords Set "
                        price={980}
                        image="https://m.media-amazon.com/images/I/818Ct1RSMvL._UY879_.jpg"
                    />
                </div>
                <div className="home--row">
                <Product
                        id="45"
                        title="2 Pairs Knee High Socks for Girls Socks for Teen Girls Kids, Fishnet Calf-High Socks Stockings "
                        price={650}
                        image="https://m.media-amazon.com/images/I/61KCM9RrBlL._UX679_.jpg"
                    />
                <Product
                        id="46"
                        title="StoleVilla Women's Printed Chiffon Scarf (STOLEVILLA_065_Multicolor) "
                        price={250}
                        image="https://m.media-amazon.com/images/I/81CTW0fgawL._UX679_.jpg"
                />
                 <Product
                        id="47"
                        title="Just Herbs Makeup Kit for Women with Kohl Kajal, 3 in 1 Primer, Liquid Lipstick, Serum Foundation and Lip & Cheeck Tint"
                        price={1940}
                        image="https://m.media-amazon.com/images/I/418R0n+ZTsL._SX342_SY445_.jpg"
                    />
                 <Product
                        id="48"
                        title="Volo Makeup Kit for Women & Girls Full Kit,Professional Makeup Set, 53 PCS "
                        price={999}
                        image="https://m.media-amazon.com/images/I/51GW3tiUVmL._SX300_SY300_QL70_FMwebp_.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home