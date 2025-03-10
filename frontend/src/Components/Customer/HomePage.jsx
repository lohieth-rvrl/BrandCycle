import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { motion } from 'framer-motion';

const HomePage = () => {
    return (
        <div className='min-h-screen bg-gradient-to-b from-blue-50 to-white'>
            <motion.div
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Navbar bg='light' expand='lg' fixed='top' className='shadow-sm'>
                    <Navbar.Brand href='#home' className='text-primary font-bold text-xl'>Brand Cycle</Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ml-auto'>
                            <Nav.Link href='#home' className='text-secondary'>Home</Nav.Link>
                            <Nav.Link href='#products' className='text-secondary'>Products</Nav.Link>
                            <Nav.Link href='#about' className='text-secondary'>About</Nav.Link>
                            <Nav.Link href='#contact' className='text-secondary'>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </motion.div>

            <section id='home' className='flex items-center justify-center h-screen bg-gradient-to-b from-blue-100 to-white'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className='text-center p-8'
                >
                    <h1 className='text-4xl md:text-6xl font-bold text-gray-800 mb-4'>Welcome to Brand Cycle</h1>
                    <p className='text-lg text-gray-600 mb-6'>Discover the best products at amazing prices</p>
                    <a href='#products' className='btn btn-primary btn-lg'>Shop Now</a>
                </motion.div>
            </section>

            <section id='products' className='py-20 bg-white'>
                <div className='container'>
                    <h2 className='text-3xl font-bold text-center text-gray-800 mb-8'>Our Products</h2>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        <div className='p-4 bg-gray-50 rounded-lg shadow hover:shadow-lg transition'>
                            <h3 className='text-xl font-semibold'>Product 1</h3>
                            <p className='text-gray-500'>Description of Product 1</p>
                            <button className='btn btn-outline-primary mt-2'>Buy Now</button>
                        </div>
                        <div className='p-4 bg-gray-50 rounded-lg shadow hover:shadow-lg transition'>
                            <h3 className='text-xl font-semibold'>Product 2</h3>
                            <p className='text-gray-500'>Description of Product 2</p>
                            <button className='btn btn-outline-primary mt-2'>Buy Now</button>
                        </div>
                        <div className='p-4 bg-gray-50 rounded-lg shadow hover:shadow-lg transition'>
                            <h3 className='text-xl font-semibold'>Product 3</h3>
                            <p className='text-gray-500'>Description of Product 3</p>
                            <button className='btn btn-outline-primary mt-2'>Buy Now</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;

// import React from 'react';
// import { Navbar, Nav } from 'react-bootstrap';
// import { motion } from 'framer-motion';
// import '../../css/customer.css';

// const HomePage = () => {
//     return (
//         <div className='min-h-screen bg-gradient-to-b from-blue-50 to-white'>
//             {/* Navbar Section */}
//             <Navbar bg='light' expand='lg' fixed='top' className='shadow-sm'>
//                 <Navbar.Brand href='#home' className='text-primary font-bold text-xl'>Brand</Navbar.Brand>
//                 <Navbar.Toggle aria-controls='basic-navbar-nav' />
//                 <Navbar.Collapse id='basic-navbar-nav'>
//                     <Nav className='ml-auto'>
//                         <Nav.Link href='#home' className='text-secondary hover:text-primary transition'>Home</Nav.Link>
//                         <Nav.Link href='#products' className='text-secondary hover:text-primary transition'>All Products</Nav.Link>
//                         <Nav.Link href='#about' className='text-secondary hover:text-primary transition'>About</Nav.Link>
//                         <Nav.Link href='#contact' className='text-secondary hover:text-primary transition'>Contact</Nav.Link>
//                         <Nav.Link href='#account' className='text-secondary hover:text-primary transition'>Account</Nav.Link>
//                         <Nav.Link href='#cart' className='text-secondary hover:text-primary transition'>£0.00</Nav.Link>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Navbar>

//             {/* Hero Section */}
//             <section id='home' className='flex items-center justify-center h-screen bg-gradient-to-b from-blue-100 to-white'>
//                 <motion.div
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 1 }}
//                     className='text-center p-8'
//                 >
//                     <h1 className='text-4xl md:text-6xl font-bold text-gray-800 mb-4'>Best Quality Products</h1>
//                     <p className='text-lg text-gray-600 mb-6'>We Print What You Want!</p>
//                     <p className='text-gray-500 mb-8'>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien.</p>
//                     <motion.a
//                         href='#products'
//                         className='btn btn-primary btn-lg'
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                     >
//                         GET STARTED
//                     </motion.a>
//                 </motion.div>
//             </section>

//             {/* Products Section */}
//             <section id='products' className='py-20 bg-white'>
//                 <div className='container mx-auto px-4'>
//                     <h2 className='text-3xl font-bold text-center text-gray-800 mb-8'>All Products</h2>
//                     <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
//                         <motion.div
//                             className='p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-2'
//                             whileHover={{ scale: 1.05 }}
//                         >
//                             <h3 className='text-xl font-semibold mb-2'>Product 1</h3>
//                             <p className='text-gray-500 mb-4'>Description of Product 1</p>
//                             <button className='btn btn-outline-primary w-full'>Customize</button>
//                         </motion.div>
//                         <motion.div
//                             className='p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-2'
//                             whileHover={{ scale: 1.05 }}
//                         >
//                             <h3 className='text-xl font-semibold mb-2'>Product 2</h3>
//                             <p className='text-gray-500 mb-4'>Description of Product 2</p>
//                             <button className='btn btn-outline-primary w-full'>Customize</button>
//                         </motion.div>
//                         <motion.div
//                             className='p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-2'
//                             whileHover={{ scale: 1.05 }}
//                         >
//                             <h3 className='text-xl font-semibold mb-2'>Product 3</h3>
//                             <p className='text-gray-500 mb-4'>Description of Product 3</p>
//                             <button className='btn btn-outline-primary w-full'>Customize</button>
//                         </motion.div>
//                     </div>
//                 </div>
//             </section>

//             {/* About Section */}
//             <section id='about' className='py-20 bg-blue-50'>
//                 <div className='container mx-auto px-4'>
//                     <h2 className='text-3xl font-bold text-center text-gray-800 mb-8'>About Us</h2>
//                     <div className='text-center text-gray-600'>
//                         <p className='mb-4'>We are a team of passionate individuals dedicated to providing the best custom printing services.</p>
//                         <p>Our mission is to make custom printing easy, affordable, and enjoyable for everyone.</p>
//                     </div>
//                 </div>
//             </section>

//             {/* Contact Section */}
//             <section id='contact' className='py-20 bg-white'>
//                 <div className='container mx-auto px-4'>
//                     <h2 className='text-3xl font-bold text-center text-gray-800 mb-8'>Contact Us</h2>
//                     <div className='text-center text-gray-600'>
//                         <p className='mb-4'>Have questions or need assistance? We're here to help!</p>
//                         <p>Email: support@customprinting.com | Phone: +1 (123) 456-7890</p>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default HomePage;

// import React, { useState, useEffect } from 'react';
// import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
// import { motion } from 'framer-motion';
// import '../../css/customer.css';

// const HomePage = () => {
//     const [filter, setFilter] = useState('');
//     const [products, setProducts] = useState([
//         { id: 1, name: 'Product 1', description: 'Description of Product 1', image: 'https://i.pinimg.com/736x/74/57/b4/7457b4ba5580d698e24608c0930ee451.jpg', category: 'Category A' },
//         { id: 2, name: 'Product 2', description: 'Description of Product 2', image: 'https://i.pinimg.com/736x/a3/2f/b0/a32fb0e8f2e6ff6fe53540a2acb53549.jpg', category: 'Category B' },
//         { id: 3, name: 'Product 3', description: 'Description of Product 3', image: 'https://i.pinimg.com/736x/ce/9d/e4/ce9de4f9793e0748109e697c9b910401.jpg', category: 'Category A' },
//         { id: 4, name: 'Product 4', description: 'Description of Product 4', image: 'https://i.pinimg.com/474x/e6/53/f8/e653f80102a7df23e2a95891ef2fdb21.jpg', category: 'Category C' },
//         { id: 5, name: 'Product 5', description: 'Description of Product 5', image: 'https://i.pinimg.com/474x/ce/16/e8/ce16e811f928eeb6a2419126020a221c.jpg', category: 'Category B' },
//         { id: 6, name: 'Product 6', description: 'Description of Product 6', image: 'https://i.pinimg.com/474x/c7/44/d9/c744d9089a74d70cf025ba4b728e52a2.jpg', category: 'Category A' },
//         { id: 7, name: 'Product 7', description: 'Description of Product 7', image: 'https://i.pinimg.com/736x/be/2a/66/be2a665bdd7d4130bc4da189b0314faf.jpg', category: 'Category C' },
//         { id: 8, name: 'Product 8', description: 'Description of Product 8', image: 'https://i.pinimg.com/474x/0b/76/07/0b7607ce1c6e0d3127230d61686c15a7.jpg', category: 'Category B' },
//         { id: 9, name: 'Product 9', description: 'Description of Product 9', image: 'https://i.pinimg.com/474x/ff/cb/ad/ffcbadd1cfe46f66ef3ac64d11ec1efe.jpg', category: 'Category A' },
//     ]);

//     const [currentAd, setCurrentAd] = useState(0);
//     const ads = [
//         'https://i.pinimg.com/736x/40/55/b0/4055b0835a80acf2eae452ae9e70f0e9.jpg',
//         'https://i.pinimg.com/474x/98/d8/1a/98d81aeb2c6ad32124c09a5cb37e568a.jpg',
//         'https://i.pinimg.com/736x/ab/fa/d0/abfad0104b609d9a6204e2e59bd88675.jpg',
//     ];

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentAd((prev) => (prev + 1) % ads.length);
//         }, 3000);
//         return () => clearInterval(interval);
//     }, [ads.length]);

//     const filteredProducts = products.filter((product) =>
//         product.name.toLowerCase().includes(filter.toLowerCase())
//     );

//     return (
//         <div className='min-h-screen bg-gradient-to-b from-blue-50 to-white'>
//             {/* Navbar Section */}
// <Navbar bg='light' expand='lg' fixed='top' className='navbar-custom shadow-sm'>
//     <Navbar.Brand href='#home' className='navbar-brand-custom text-primary font-bold text-xl'>Brand Cycle</Navbar.Brand>
//     <Navbar.Toggle aria-controls='basic-navbar-nav' />
//     <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
//         <Nav className='d-flex align-items-center gap-4'>
//             <Nav.Link href='#home' className='nav-link-custom text-secondary hover:text-primary transition'>Home</Nav.Link>
//             <Nav.Link href='#products' className='nav-link-custom text-secondary hover:text-primary transition'>All Products</Nav.Link>
//             <Nav.Link href='#about' className='nav-link-custom text-secondary hover:text-primary transition'>About</Nav.Link>
//             <Nav.Link href='#contact' className='nav-link-custom text-secondary hover:text-primary transition'>Contact</Nav.Link>
//             <Nav.Link href='#account' className='nav-link-custom text-secondary hover:text-primary transition'>Account</Nav.Link>
//             <Nav.Link href='#cart' className='nav-link-custom text-secondary hover:text-primary transition'>£0.00</Nav.Link>
//         </Nav>
//     </Navbar.Collapse>
// </Navbar>
//             {/* Carousel Section */}
//             <div className='carousel-section'>
//                 <div className='carousel-inner'>
//                     <img
//                         src={ads[currentAd]}
//                         alt={`Ad ${currentAd + 1}`}
//                         className='carousel-image'
//                     />
//                 </div>
//                 <div className='carousel-indicators'>
//                     {ads.map((_, index) => (
//                         <button
//                             key={index}
//                             className={`carousel-indicator ${index === currentAd ? 'active' : ''}`}
//                             onClick={() => setCurrentAd(index)}
//                         />
//                     ))}
//                 </div>
//             </div>

//            {/* Products Section */}
// <section id='products' className='products-section py-20 bg-white mt-12'>
//     <div className='container mx-auto px-4'>
//         <h2 className='section-title text-3xl font-bold text-center text-gray-800 mb-8'>All Products</h2>
//         <div className='product-grid'>
//             {filteredProducts.map((product) => (
//                 <motion.div
//                     key={product.id}
//                     className='product-card'
//                     whileHover={{ scale: 1.05 }}
//                 >
//                     <img src={product.image} alt={product.name} className='product-image' />
//                     <h3 className='product-name'>{product.name}</h3>
//                     <p className='product-description'>{product.description}</p>
//                     <button className='product-button'>Customize</button>
//                 </motion.div>
//             ))}
//         </div>
//     </div>
// </section>

//             {/* About Section */}
// <section id='about' className='about-section py-20 bg-blue-50'>
//     <div className='container mx-auto px-4'>
//         <h2 className='section-title text-3xl font-bold text-center text-gray-800 mb-8'>About Us</h2>
//         <div className='text-center text-gray-600 max-w-2xl mx-auto'>
//             <p className='about-description mb-4 text-lg'>
//                 We are a team of passionate individuals dedicated to providing the best custom printing services.
//             </p>
//             <p className='about-description text-lg'>
//                 Our mission is to make custom printing easy, affordable, and enjoyable for everyone.
//             </p>
//         </div>
//     </div>
// </section>

// {/* Footer Section */}
// <footer id='contact' className='footer-section py-10 bg-gray-800 text-white'>
//     <div className='container mx-auto px-4'>
//         <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
//             {/* Brand Info */}
//             <div>
//                 <h2 className='footer-title text-2xl font-bold mb-4'>Brand Cycle</h2>
//                 <p className='footer-description text-gray-400'>
//                     Your one-stop shop for custom printing services. We deliver high-quality products tailored to your needs.
//                 </p>
//             </div>

//             {/* Quick Links */}
//             <div>
//                 <h2 className='footer-title text-2xl font-bold mb-4'>Quick Links</h2>
//                 <ul className='footer-links'>
//                     <li><a href='#home' className='text-gray-400 hover:text-white transition'>Home</a></li>
//                     <li><a href='#products' className='text-gray-400 hover:text-white transition'>Products</a></li>
//                     <li><a href='#about' className='text-gray-400 hover:text-white transition'>About Us</a></li>
//                     <li><a href='#contact' className='text-gray-400 hover:text-white transition'>Contact</a></li>
//                 </ul>
//             </div>

//             {/* Contact Info */}
//             <div>
//                 <h2 className='footer-title text-2xl font-bold mb-4'>Contact Us</h2>
//                 <p className='footer-description text-gray-400'>Email: support@customprinting.com</p>
//                 <p className='footer-description text-gray-400'>Phone: +1 (123) 456-7890</p>
//                 <div className='social-links mt-4 flex gap-4'>
//                     <a href='#' className='text-gray-400 hover:text-white transition'>Facebook</a>
//                     <a href='#' className='text-gray-400 hover:text-white transition'>Twitter</a>
//                     <a href='#' className='text-gray-400 hover:text-white transition'>Instagram</a>
//                 </div>
//             </div>
//         </div>
//     </div>
// </footer>
            
//         </div>
//     );
// };

// export default HomePage;
// import React, { useState, useEffect, useRef } from 'react';
// import { Navbar, Nav, Form, FormControl, Button, Card, Carousel } from 'react-bootstrap';
// import '../../css/customer.css';

// const HomePage = () => {
//     const [filter, setFilter] = useState('');
//     const [products, setProducts] = useState([
//         { id: 1, name: 'Product 1', description: 'Description of Product 1', image: 'https://i.pinimg.com/736x/74/57/b4/7457b4ba5580d698e24608c0930ee451.jpg', category: 'Category A' },
//         { id: 2, name: 'Product 2', description: 'Description of Product 2', image: 'https://i.pinimg.com/736x/a3/2f/b0/a32fb0e8f2e6ff6fe53540a2acb53549.jpg', category: 'Category B' },
//         { id: 3, name: 'Product 3', description: 'Description of Product 3', image: 'https://i.pinimg.com/736x/ce/9d/e4/ce9de4f9793e0748109e697c9b910401.jpg', category: 'Category A' },
//         { id: 4, name: 'Product 4', description: 'Description of Product 4', image: 'https://i.pinimg.com/474x/e6/53/f8/e653f80102a7df23e2a95891ef2fdb21.jpg', category: 'Category C' },
//         { id: 5, name: 'Product 5', description: 'Description of Product 5', image: 'https://i.pinimg.com/474x/ce/16/e8/ce16e811f928eeb6a2419126020a221c.jpg', category: 'Category B' },
//         { id: 6, name: 'Product 6', description: 'Description of Product 6', image: 'https://i.pinimg.com/474x/c7/44/d9/c744d9089a74d70cf025ba4b728e52a2.jpg', category: 'Category A' },
//         { id: 7, name: 'Product 7', description: 'Description of Product 7', image: 'https://i.pinimg.com/736x/be/2a/66/be2a665bdd7d4130bc4da189b0314faf.jpg', category: 'Category C' },
//         { id: 8, name: 'Product 8', description: 'Description of Product 8', image: 'https://i.pinimg.com/474x/0b/76/07/0b7607ce1c6e0d3127230d61686c15a7.jpg', category: 'Category B' },
//         { id: 9, name: 'Product 9', description: 'Description of Product 9', image: 'https://i.pinimg.com/474x/ff/cb/ad/ffcbadd1cfe46f66ef3ac64d11ec1efe.jpg', category: 'Category A' },
//     ]);

//     const [currentAd, setCurrentAd] = useState(0);
//     const ads = [
//         'https://i.pinimg.com/736x/1e/5d/fd/1e5dfd46f044a0ed7fefe3dfd9a397c4.jpg',
//         'https://i.pinimg.com/474x/fa/49/12/fa49123d31d226114eae9ec4098a4966.jpg',
//         'https://i.pinimg.com/474x/64/05/b2/6405b2abff8db96743b78a45e310553f.jpg',
//     ];

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentAd((prev) => (prev + 1) % ads.length);
//         }, 3000);
//         return () => clearInterval(interval);
//     }, [ads.length]);

//     const filteredProducts = products.filter((product) =>
//         product.name.toLowerCase().includes(filter.toLowerCase())
//     );

//     // Refs for smooth scrolling
//     const homeRef = useRef(null);
//     const productsRef = useRef(null);
//     const aboutRef = useRef(null);
//     const contactRef = useRef(null);

//     const scrollToSection = (ref) => {
//         ref.current.scrollIntoView({ behavior: 'smooth' });
//     };

//     return (
//         <div className='min-h-screen bg-gray-100'>
//             {/* Navbar Section */}
//             <Navbar bg='dark' variant='dark' expand='lg' fixed='top' className='navbar-custom shadow-sm'>
//                 <Navbar.Brand href='#home' className='navbar-brand-custom font-bold text-xl'>Brand Cycle</Navbar.Brand>
//                 <Navbar.Toggle aria-controls='basic-navbar-nav' />
//                 <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
//                     <Nav className='d-flex align-items-center gap-4'>
//                         <Nav.Link onClick={() => scrollToSection(homeRef)} className='nav-link-custom'>Home</Nav.Link>
//                         <Nav.Link onClick={() => scrollToSection(productsRef)} className='nav-link-custom'>All Products</Nav.Link>
//                         <Nav.Link onClick={() => scrollToSection(aboutRef)} className='nav-link-custom'>About</Nav.Link>
//                         <Nav.Link onClick={() => scrollToSection(contactRef)} className='nav-link-custom'>Contact</Nav.Link>
//                         <Nav.Link href='#account' className='nav-link-custom'>Account</Nav.Link>
//                         <Nav.Link href='#cart' className='nav-link-custom'>£0.00</Nav.Link>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Navbar>

//             {/* Carousel Section */}
//             <div className='carousel-section mt-5' ref={homeRef}>
//                 <Carousel>
//                     {ads.map((ad, index) => (
//                         <Carousel.Item key={index}>
//                             <img
//                                 className='d-block w-100 carousel-image'
//                                 src={ad}
//                                 alt={`Ad ${index + 1}`}
//                             />
//                         </Carousel.Item>
//                     ))}
//                 </Carousel>
//             </div>

//             {/* Products Section */}
//             <section id='products' className='products-section py-5 bg-white' ref={productsRef}>
//                 <div className='container'>
//                     <h2 className='section-title text-3xl font-bold text-center text-gray-800 mb-8'>All Products</h2>
//                     <div className='row'>
//                         {products.map((product) => (
//                             <div key={product.id} className='col-md-4 mb-4'>
//                                 <Card className='h-100'>
//                                     <Card.Img variant='top' src={product.image} className='product-image' />
//                                     <Card.Body>
//                                         <Card.Title>{product.name}</Card.Title>
//                                         <Card.Text>{product.description}</Card.Text>
//                                         <Button variant='primary'>BUY</Button>
//                                     </Card.Body>
//                                 </Card>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* About Section */}
//             <section id='about' className='about-section py-5 bg-gray-50' ref={aboutRef}>
//                 <div className='container'>
//                     <h2 className='section-title text-3xl font-bold text-center text-gray-800 mb-8'>About Us</h2>
//                     <div className='text-center text-gray-600'>
//                         <p className='about-description mb-4'>
//                             We are a team of passionate individuals dedicated to providing the best custom printing services.
//                         </p>
//                         <p className='about-description'>
//                             Our mission is to make custom printing easy, affordable, and enjoyable for everyone.
//                         </p>
//                     </div>
//                 </div>
//             </section>

//             {/* Footer Section */}
//             <footer id='contact' className='footer-section py-5 bg-dark text-white' ref={contactRef}>
//                 <div className='container'>
//                     <div className='row'>
//                         <div className='col-md-4 mb-4'>
//                             <h2 className='footer-title text-2xl font-bold mb-4'>Brand Cycle</h2>
//                             <p className='footer-description text-gray-400'>
//                                 Your one-stop shop for custom printing services. We deliver high-quality products tailored to your needs.
//                             </p>
//                         </div>
//                         <div className='col-md-4 mb-4'>
//                             <h2 className='footer-title text-2xl font-bold mb-4'>Quick Links</h2>
//                             <ul className='footer-links'>
//                                 <li><a href='#home' className='text-gray-400 hover:text-white transition'>Home</a></li>
//                                 <li><a href='#products' className='text-gray-400 hover:text-white transition'>Products</a></li>
//                                 <li><a href='#about' className='text-gray-400 hover:text-white transition'>About Us</a></li>
//                                 <li><a href='#contact' className='text-gray-400 hover:text-white transition'>Contact</a></li>
//                             </ul>
//                         </div>
//                         <div className='col-md-4 mb-4'>
//                             <h2 className='footer-title text-2xl font-bold mb-4'>Contact Us</h2>
//                             <p className='footer-description text-gray-400'>Email: support@customprinting.com</p>
//                             <p className='footer-description text-gray-400'>Phone: +1 (123) 456-7890</p>
//                             <div className='social-links mt-4'>
//                                 <a href='#' className='text-gray-400 hover:text-white transition'>Facebook</a>
//                                 <a href='#' className='text-gray-400 hover:text-white transition'>Twitter</a>
//                                 <a href='#' className='text-gray-400 hover:text-white transition'>Instagram</a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </footer>
//         </div>
//     );
// };

// export default HomePage;