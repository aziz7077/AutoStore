import React, { useState } from 'react';
import s from './Footer.module.scss'
import Image from 'next/image';
import visa from '../../public/visa.png'
import FooterSlider from '../FooterSlider/FooterSlider';
import applePay from '../../public/applePay.png'
import cash from '../../public/cash.png'
import express from '../../public/express.png'
import giroPay from '../../public/giroPay.png'
import googlePay from '../../public/googlePay.png'
import masterCard from '../../public/masterCard.png'
import satefy from '../../public/satefy.png'
import tether from '../../public/tether.png'
import unionPay from '../../public/unionPay.png'
import facebook from '../../public/facebook.png'
import insta from '../../public/instagram 1.png'
import tiktok from '../../public/tiktok.png'
import youtube from '../../public/youtube.png'
import SocialNetwork from '../SocialNetwork/SocialNetwork';
import axios from 'axios';
import { motion } from 'framer-motion'


const Footer = () => {

    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        try {
            axios
                .post('https://jsonplaceholder.typicode.com/posts', email)
                .then((res) => {
                    console.log(res)
                    setEmail('')
                })
        } catch (err) {
            console.log(err)
        }
    };


    const FooterImgDate = [
        { id: 1, img: visa },
        { id: 2, img: masterCard },
        { id: 3, img: express },
        { id: 4, img: unionPay },
        { id: 5, img: tether },
        { id: 6, img: googlePay },
        { id: 7, img: applePay },
        { id: 8, img: giroPay },
        { id: 9, img: cash },
        { id: 10, img: satefy },
    ]

    return (
            <footer className={s.footer}>
                <div className={s.footer_columns}>
                    <div className={s.footer_column_left}>
                        <div className={s.footer_column_left_block}>
                            <h1>For Customers</h1>
                            <li><a>About Us</a></li>
                            <li><a>Conditions</a></li>
                            <li><a>Testimonials</a></li>
                            <li><a>Articles</a></li>
                            <li><a>Contacts</a></li>
                        </div>
                        <div className={s.footer_column_left_block}>
                            <h1>Car List</h1>
                            <li><a>SUVs</a></li>
                            <li><a>Convertibles</a></li>
                            <li><a>Sports Cars</a></li>
                            <li><a>Premium</a></li>
                            <li><a>Coupe</a></li>
                        </div>
                        <div className={s.footer_column_left_block}>
                            <h1>Service</h1>
                            <li><a>Car List</a></li>
                            <li><a>Yacht list</a></li>
                            <li><a>Chauffeur</a></li>
                        </div>
                    </div>
                    <div className={s.footer_column_right}>
                        <div className={s.footer_column_right_block}>
                            <div className={s.footer_column_right_block_header}>
                                <p>+971 58 590 7875</p>
                                <SocialNetwork className={s.molox} style={{ height: '20px', width: '20px' }} />
                            </div>
                            <button className={s.footer_column_right_block_btn}>
                                REQUEST A CALLBACK
                            </button>
                            <h4>24 4th St - Al Quoz - Al Quoz <br /> Industrial Area 3 - Dubai</h4>
                            <form onSubmit={handleSubmit}>
                                <div className={s.footer_column_right_block_input}>
                                    <input value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email"
                                        minLength={3}
                                        placeholder='Write your E-mail'
                                    />
                                    <button onClick={() => console.log(email)}>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className={s.footer_payments}>
                    <FooterSlider FooterImgDate={FooterImgDate} />
                </div>
                <div className={s.footer_info}>
                    <p>Privacy Policy</p>
                    <h4>©2023 TRINITY. All rights reserved</h4>
                    <div className={s.footer_info_imgs}>
                        <Image src={facebook} alt='img_social'></Image>
                        <Image src={tiktok} alt='img_social'></Image>
                        <Image src={youtube} alt='img_social'></Image>
                        <Image src={insta} alt='img_social'></Image>
                    </div>
                </div>
            </footer>
    );
};

export default Footer;