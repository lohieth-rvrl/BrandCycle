import React from 'react';
import { BiCloudSnow, BiLogoFirebase, BiSolidShieldX, BiSolidCarGarage } from 'react-icons/bi';
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";
import Footer from './Footer';

function About() {
    return (
        <>
            {/* Hero Section */}
            <div className="bg-dark text-white py-5">
                <div className="container text-center">
                    <h1 className="display-4 fw-bold text-primary">ABOUT US</h1>
                    <p className="lead w-75 mx-auto text-muted">
                        We are committed to providing the best online shopping experience with high-quality products and exceptional customer service.
                    </p>
                </div>
            </div>

            {/* About Content Section */}
            <div className="container py-5">
                <div className="row align-items-center">
                    {/* Left Column: Description */}
                    <div className="col-md-6">
                        <h2 className="display-5 fw-bold text-primary mb-4">Your Favorite Online Store</h2>
                        <p className="text-muted fs-5">
                            We offer a wide range of premium products with great offers and secure payment options. Shop with confidence and enjoy seamless delivery services worldwide.
                        </p>
                    </div>

                    {/* Right Column: Features */}
                    <div className="col-md-6">
                        <div className="row">
                            {[
                                { icon: <BiCloudSnow size={35} className="text-primary" />, title: "Fast Delivery" },
                                { icon: <BiLogoFirebase size={35} className="text-primary" />, title: "Best Quality" },
                                { icon: <BiSolidShieldX size={35} className="text-primary" />, title: "Secure Payments" },
                                { icon: <BiSolidCarGarage size={35} className="text-primary" />, title: "Hassle-Free Returns" }
                            ].map((feature, index) => (
                                <div key={index} className="col-md-6 px-4 text-center mb-4">
                                    <ScrollAnimation animateIn="animate__fadeInUp" duration={0.5}>
                                        <div className="p-4 bg-light rounded shadow">
                                            {feature.icon}
                                            <h5 className="mt-3 text-primary fw-bold">{feature.title}</h5>
                                            <p className="text-muted">Experience the best shopping experience with us.</p>
                                        </div>
                                    </ScrollAnimation>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className="bg-light py-5">
                <div className="container">
                    <div className="row text-center">
                        {[
                            { img: "about/image1.png", title: "Worldwide Shipping" },
                            { img: "about/image2.png", title: "Best Quality" },
                            { img: "about/image3.png", title: "Best Offers" },
                            { img: "about/image4.png", title: "Secure Payments" }
                        ].map((service, index) => (
                            <div key={index} className="col-md-3 p-3">
                                <ScrollAnimation animateIn="animate__fadeInUp" duration={0.5}>
                                    <div className="p-4 bg-white rounded shadow">
                                        <img src={service.img} className="mb-3" width={50} alt={service.title} />
                                        <h3 className="text-primary fw-bold">{service.title}</h3>
                                        <p className="text-muted">We provide the best services tailored for our customers.</p>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About;   