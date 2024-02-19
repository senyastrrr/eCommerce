import { Header } from "@/widgets/header"
import { BrowserRouter } from 'react-router-dom';
import { ProductsGrid } from "@/widgets/products-grid";
import { Footer } from "@/widgets/footer";
import { BannersCarousel } from "@/widgets/banners-carousel";
import { CategoriesCarousel } from "@/widgets/categories-carousel";

const asset = (path) => `/storage/images/${path}`;

export default function Welcome({ auth }) {

    const routes = [
        { href: "/", label: "Home" },
        { href: "/", label: "Shop" },
        { href: "/", label: "Features" },
        { href: "/", label: "Blog" },
    ];

    const products1 = [
        { name: 'Футболка lacoste', price: 16.68, image: asset('product-01.jpg') },
        { name: 'Футболка lacoste', price: 16.68, image: asset('product-02.jpg') },
        { name: 'Футболка lacoste', price: 16.68, image: asset('product-03.jpg') },
        { name: 'Футболка lacoste', price: 16.68, image: asset('product-04.jpg') },
        { name: 'Футболка lacoste', price: 16.68, image: asset('product-06.jpg') },
        { name: 'Футболка lacoste', price: 16.68, image: asset('product-07.jpg') },
        { name: 'Футболка lacoste', price: 16.68, image: asset('product-08.jpg') },
    ];

    const products2 = [
        { name: 'Футболка lacoste', price: 16.68, image: asset('product-09.jpg') },
        { name: 'Футболка lacoste', price: 16.68, image: asset('product-10.jpg') },
        { name: 'Футболка lacoste', price: 16.68, image: asset('product-11.jpg') },
        { name: 'Футболка lacoste', price: 16.68, image: asset('product-12.jpg') },
    ];

    return (
        <>
            <BrowserRouter>
                <Header routes={routes} />
                <BannersCarousel/>
                <div className='sm:mx-2 md:mx-10 mt-8'>
                    <CategoriesCarousel/>
                    <ProductsGrid products={products1} title={"Новинки"} />
                    <ProductsGrid products={products2} title={"Скидки"} />
                </div>
                <Footer/>
            </BrowserRouter>
        </>
    );
}

