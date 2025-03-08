import React from 'react'
import "../../css/Customer.css"
import { BiCloudSnow, BiLogoFirebase, BiSolidShieldX, BiSolidCarGarage } from 'react-icons/bi'

function About() {
    return (
        <>
            <div id='about-head'>
                <div className='container ' >
                    <div className="row">
                        <div className="col-md-12 d-flex justify-centent-center flex-column align-items-center  ">
                            <h1>ABOUT US</h1>
                            <p className='w-50 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloribus inventore labore illo alias, laboriosam consequuntur porro blanditiis</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container p-5">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className='py-3'>We Are Your Favourite, <br /> Online Store.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nam voluptatibus vero veniam tempore? <br /> Sunt facilis debitis at iste maiores provident, voluptatem dolores culpa delectus quo illo quas incidunt tenetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus earum et libero nemo vel, voluptatum hic blanditiis. Distinctio, eveniet! Sed ab tempora laboriosam dolor quam quos exercitationem perspiciatis soluta nemo!</p>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6 px-4">
                                <BiCloudSnow size={35} />
                                <h5>lorem header</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non perferendis ducimus adipisci quos quisquam obcaecati!</p>
                            </div>
                            <div className="col-md-6 px-4">
                                <BiLogoFirebase size={35} />
                                <h5>lorem header</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non perferendis ducimus adipisci quos quisquam obcaecati!</p>
                            </div>
                        </div><br />
                        <div className="row">
                            <div className="col-md-6 px-4">
                                <BiSolidShieldX size={35} />
                                <h5>lorem header</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non perferendis ducimus adipisci quos quisquam obcaecati!</p>
                            </div>
                            <div className="col-md-6 px-4">
                                <BiSolidCarGarage size={35} />
                                <h5>lorem header</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non perferendis ducimus adipisci quos quisquam obcaecati!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container p-5 bg-light" >
                <div className="row">
                    <div className="col-md-3 text-center p-3">
                        <img src="about/image1.png" className='mb-3' width={50} alt="" />
                        <h3>Worldwide Shipping</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione architecto magnam error delectus quos amet, </p>
                    </div>
                    <div className="col-md-3 text-center p-3">
                        <img src="about/image2.png" className='mb-3' width={50} alt="" />
                        <h3>Best Quality</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione architecto magnam error delectus quos amet, </p>
                    </div>
                    <div className="col-md-3 text-center p-3">
                        <img src="about/image3.png" className='mb-3' width={50} alt="" />
                        <h3>Best Offers</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione architecto magnam error delectus quos amet, </p>
                    </div>
                    <div className="col-md-3 text-center p-3">
                        <img src="about/image4.png" className='mb-3' width={50} alt="" />
                        <h3>Secure Payments</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione architecto magnam error delectus quos amet, </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About