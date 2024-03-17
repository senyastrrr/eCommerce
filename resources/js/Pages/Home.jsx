import { Header } from "@/widgets/header"
import { BrowserRouter } from 'react-router-dom';
import { ProductsGrid } from "@/widgets/products-grid";
import { Footer } from "@/widgets/footer";
import { BannersCarousel } from "@/widgets/banners-carousel";
import { CategoriesCarousel } from "@/widgets/categories-carousel";
import { home } from "@/shared/routes/home-routes";
import { DiscountedProducts } from "@/widgets/discounted-products/ui/discounted-products";

export default function Welcome() {

    return (
        <>
                <Header routes={home} />
                <BannersCarousel/>
                <div className='sm:mx-2 md:mx-10 mt-8'>
                    <CategoriesCarousel/>
                    {
                    //<ProductsGrid products={products1} title={"Новинки"} />
                    }
                    <DiscountedProducts/>
                </div>
                <Footer/>
        </>
    );
}

