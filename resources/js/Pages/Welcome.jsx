import Header from '@/Components/Header/Header';
import BannersCarousel from '../Components/BannersCarousel/Carousel';
import { Link, Head } from '@inertiajs/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '@/Components/Footer/Footer';
import CategoriesCarousel from '@/Components/CategoriesCarousel/Carousel';
import ProductCard from '@/Components/ProductCard/Product';

const asset = (path) => `/storage/images/${path}`;

export default function Welcome({ auth }) {
    return (
        <>
            <BrowserRouter>
                <Header />
                <BannersCarousel />
                <div className='mx-10'>
                    <CategoriesCarousel />
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        <ProductCard image={asset("product-01.jpg")} name="Espirit Ruffle Shirt" price="16.64" />
                        <ProductCard image={asset("product-02.jpg")} name="Espirit Ruffle Shirt" price="16.64" />
                        <ProductCard image={asset("product-04.jpg")} name="Espirit Ruffle Shirt" price="16.64" />
                        <ProductCard image={asset("product-05.jpg")} name="Espirit Ruffle Shirt" price="16.64" />
                        <ProductCard image={asset("product-07.jpg")} name="Espirit Ruffle Shirt" price="16.64" />
                        <ProductCard image={asset("product-08.jpg")} name="Espirit Ruffle Shirt" price="16.64" />
                        <ProductCard image={asset("product-10.jpg")} name="Espirit Ruffle Shirt" price="16.64" />
                        <ProductCard image={asset("product-13.jpg")} name="Espirit Ruffle Shirt" price="16.64" />
                    </div>
                </div>
                <Footer />
            </BrowserRouter>
        </>
    );
}
