import React from 'react';
import Footer from './Footer';
const HomePage = () => {
    return (
        <div>
            <section className="position-relative overflow-hidden" style={{ height: "700px" }}>
                {/* Background Image */}
                <div
                    className="position-absolute top-0 start-0 w-100 h-100 bg-cover bg-center"
                    style={{
                        backgroundImage: 'url("https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/4778edc0-0797-4e98-1c34-b850b33a6100/public")',
                        filter: "brightness(75%)",
                    }}
                ></div>

                {/* Gradient Overlay */}
                <div className="position-absolute top-0 start-0 w-100 h-100 d-none d-lg-block" style={{ background: "linear-gradient(to right, black, transparent)" }}></div>

                {/* Content */}
                <div className="container position-relative z-10 h-100 d-flex flex-column justify-content-center px-4 px-lg-6 py-6">
                    <div className="row">
                        {/* Left Column: Text Content */}
                        <div className="col-lg-6 text-center text-lg-start">
                            <h3 className="text-uppercase text-primary mb-4">Elevate Your Shopping</h3>
                            <h1 className="display-4 fw-bold text-white mb-4">Experience BrandCycle Today!</h1>
                            <p className="lead text-white mb-5">
                                Unleash the potential of online shopping with our meticulously designed platform tailored for a seamless and engaging user journey. Browse effortlessly with our user-friendly interface that adapts beautifully across all devices.
                            </p>
                            <a href="/contact" className="btn btn-primary btn-lg text-uppercase fw-bold">
                                Get in Touch
                            </a>
                        </div>

                        {/* Right Column: Form */}
                        <div className="col-lg-6 d-none d-lg-block">
                            <div className=" p-4 rounded">

                            </div>
                        </div>
                    </div>
                </div>

                {/* Curved Bottom */}
                <div className="position-absolute bottom-0 start-0 w-100" style={{ zIndex: 20 }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1000 100"
                        preserveAspectRatio="none"
                        className="w-100"
                        style={{ height: "150px" }}
                    >
                        <path className=" bg-light" d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z"></path>
                    </svg>
                </div>
            </section>
            <section className="py-5 py-md-8 bg-light">
                <div className="container py-5 py-md-8">
                    <div className="text-center text-md-start">
                        <h5 className="text-uppercase text-primary mb-4">Experience Seamless Shopping with BrandCycle</h5>
                        <div className="row mb-5">
                            <div className="col-md-6">
                                <h1 className="display-5 fw-bold mb-4">E-Commerce at Its Best, Tailored for You</h1>
                            </div>
                            <div className="col-md-6">
                                <p className="">
                                    Our platform revolutionizes online shopping with a state-of-the-art interface, robust security, and seamless integration to enhance your purchasing experience from start to finish.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Feature Cards */}
                    <div className="row g-4">
                        {/* Feature 1: Intuitive Interface */}
                        <div className="col-md-6 col-lg-3">
                            <div className="card h-100 border-0 shadow-sm">
                                <img
                                    src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/a79be149-e63d-4a49-3964-c007fecbbb00/public"
                                    alt="Intuitive Interface"
                                    className="card-img-top"
                                    style={{ height: "200px", objectFit: "cover" }}
                                />
                                <div className="card-body text-center">
                                    <h5 className="card-title fw-bold">Intuitive Interface</h5>
                                    <p className="card-text">
                                        Navigate our sleek design with ease, making product searches fast and efficient, ensuring you find exactly what you need in moments.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Feature 2: Real-Time Management */}
                        <div className="col-md-6 col-lg-3">
                            <div className="card h-100 border-0 shadow-sm">
                                <img
                                    src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/f3190b8d-e937-462e-efa3-112af6c61f00/public"
                                    alt="Real-Time Management"
                                    className="card-img-top"
                                    style={{ height: "200px", objectFit: "cover" }}
                                />
                                <div className="card-body text-center">
                                    <h5 className="card-title fw-bold">Real-Time Management</h5>
                                    <p className="card-text">
                                        Seamlessly add to your shopping cart and wishlist while keeping track of your expenditures as you shop, ensuring you stay within budget effortlessly.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Feature 3: Shop with Confidence */}
                        <div className="col-md-6 col-lg-3">
                            <div className="card h-100 border-0 shadow-sm">
                                <img
                                    src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/7e85e040-219a-4a97-e9ad-867af042b800/publicContain"
                                    alt="Shop with Confidence"
                                    className="card-img-top"
                                    style={{ height: "200px", objectFit: "cover" }}
                                />
                                <div className="card-body text-center">
                                    <h5 className="card-title fw-bold">Shop with Confidence</h5>
                                    <p className="card-text">
                                        Your privacy and security matter. Our platform uses advanced JWT authentication to ensure your personal data is always protected while you shop.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Feature 4: Effortless Checkout */}
                        <div className="col-md-6 col-lg-3">
                            <div className="card h-100 border-0 shadow-sm">
                                <img
                                    src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/b7d40c53-8674-4e24-a594-e70135107900/public"
                                    alt="Effortless Checkout"
                                    className="card-img-top"
                                    style={{ height: "200px", objectFit: "cover" }}
                                />
                                <div className="card-body text-center">
                                    <h5 className="card-title fw-bold">Effortless Checkout</h5>
                                    <p className="card-text">
                                        Experience a fast and seamless checkout process with integrated payment options, making order completion quicker and easier than ever.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-primary text-white">
                <div className="container py-5 py-lg-8">
                    <div className="row flex-column-reverse flex-lg-row align-items-center">
                        <div className="col-lg-6 text-center text-lg-start">
                            <h3 className="display-6 fw-bold mb-4">Experience a New Era of Online Shopping</h3>
                            <p className=" mb-4">
                                Join the BrandCycle community to elevate your shopping experience today. Discover a world of products tailored to fit your needs—where speed, security, and style come together.
                            </p>
                        </div>
                        <div className="col-lg-6 mb-5 mb-lg-0 text-center">
                            <img
                                src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/999221d2-c778-48c7-0427-3e4bc5cf7700/public"
                                alt="E-Commerce Shopping Experience"
                                className="img-fluid rounded shadow"
                                style={{ maxHeight: "400px", width: "65%", objectFit: "cover" }}
                            />
                        </div>
                    </div><br />
                    <div className="row flex-column-reverse flex-lg-row align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0 text-center">
                            <img
                                src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/b7608111-afa0-4e76-34cb-3d80d4b74800/public"
                                alt="E-Commerce Shopping Experience"
                                className="img-fluid rounded shadow"
                                style={{ maxHeight: "400px", width: "70%", objectFit: "cover" }}
                            />
                        </div>
                        <div className="col-lg-6 text-center text-lg-start">
                            <h3 className="display-6 fw-bold mb-4">Transform Your Online Shopping Experience with BrandCycle</h3>
                            <p className=" mb-4">
                                With a user-friendly interface designed for all devices, you can browse and shop effortlessly. The advanced shopping cart and wishlist features empower you to manage selections and track expenses in real time, ensuring you never miss a deal.                             </p>
                        </div>
                    </div><br />
                    <div className="row flex-column-reverse flex-lg-row align-items-center">
                        <div className="col-lg-6 text-center text-lg-start">
                            <h3 className="display-6 fw-bold mb-4">Experience a Revolutionary Shopping Journey with BrandCycle</h3>
                            <p className=" mb-4">
                                Discover a seamless shopping experience designed just for you! Our e-commerce platform is crafted for easy navigation across all devices, allowing you to explore our extensive product catalog with ease.                             </p>
                        </div>
                        <div className="col-lg-6 mb-5 mb-lg-0 text-center">
                            <img
                                src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/999221d2-c778-48c7-0427-3e4bc5cf7700/public"
                                alt="E-Commerce Shopping Experience"
                                className="img-fluid rounded shadow"
                                style={{ maxHeight: "400px", width: "65%", objectFit: "cover" }}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="position-relative bg-light py-5 py-lg-8">
                <div className="container">
                    <div className="row">
                        {/* Left Column: Text Content and Map */}
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <h1 className="display-6 fw-bold text-center text-lg-start mb-4">
                                Elevate Your Online Shopping Experience with BrandCycle
                            </h1>
                            <p className=" text-center text-lg-start mb-5">
                                Connect with our dedicated team at BrandCycle to transform your shopping journey. We’re here to ensure every interaction is seamless and user-friendly. Feel free to share your thoughts, questions, or specific needs with us, and let our experts guide you to the best solutions tailored for your unique shopping experience.
                            </p>
                            <div className="ratio ratio-16x9">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31656.599293917003!2d76.92843852215901!3d11.017581814063574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85855910aed83%3A0x80875de5cd370a9d!2sGandhipuram%2C%20Tamil%20Nadu%20641012!5e1!3m2!1sen!2sin!4v1742153905767!5m2!1sen!2sin"
                                    title="Google Maps Iframe"
                                    aria-label="Google Maps Iframe"
                                    loading="lazy"
                                    className="rounded shadow"
                                ></iframe>
                            </div>
                        </div>

                        {/* Right Column: Contact Form */}
                        <div className="col-lg-6">
                            <div className="bg-primary p-4 rounded shadow d-flex align-items-center justify-content-center flex-column my-5 py-5">
                                <form className="p-4 w-100">
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Your Name"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Your Email"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="Your Phone"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <textarea
                                            name="message"
                                            rows="4"
                                            placeholder="Describe Your Needs"
                                            className="form-control"
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-secondary w-100 text-uppercase fw-bold"
                                    >
                                        Submit Your Inquiry
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default HomePage;
