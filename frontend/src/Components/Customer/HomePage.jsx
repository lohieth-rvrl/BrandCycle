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
