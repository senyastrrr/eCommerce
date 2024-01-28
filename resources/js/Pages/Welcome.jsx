import Header from '@/Components/Header/Header';
import BannersCarousel from '../Components/BannersCarousel/Carousel';
import { BrowserRouter } from 'react-router-dom';
import Footer from '@/Components/Footer/Footer';
import CategoriesCarousel from '@/Components/CategoriesCarousel/Carousel';
import ProductsGrid from '@/Components/ui/ProductsGrid';

export default function Welcome({ auth }) {

    const products1 = [
        { name: 'Футболка lacoste', price: 16.68, image: 'product-01.jpg' },
        { name: 'Футболка lacoste', price: 16.68, image: 'product-02.jpg' },
        { name: 'Футболка lacoste', price: 16.68, image: 'product-03.jpg' },
        { name: 'Футболка lacoste', price: 16.68, image: 'product-04.jpg' },
        { name: 'Футболка lacoste', price: 16.68, image: 'product-06.jpg' },
        { name: 'Футболка lacoste', price: 16.68, image: 'product-07.jpg' },
        { name: 'Футболка lacoste', price: 16.68, image: 'product-08.jpg' },
    ];

    const products2 = [
        { name: 'Футболка lacoste', price: 16.68, image: 'product-09.jpg' },
        { name: 'Футболка lacoste', price: 16.68, image: 'product-10.jpg' },
        { name: 'Футболка lacoste', price: 16.68, image: 'product-11.jpg' },
        { name: 'Футболка lacoste', price: 16.68, image: 'product-12.jpg' },
    ];

    return (
        <>
            <BrowserRouter>
                <Header />
                <BannersCarousel />
                <div className='mx-10 mt-8'>
                    <CategoriesCarousel/>
                    <ProductsGrid products={products1} title={"Новинки"}/>
                    <ProductsGrid products={products2} title={"Скидки"}/>
                </div>
                <Footer />
            </BrowserRouter>
        </>
    );
}
