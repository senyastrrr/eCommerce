import { Header } from "@/widgets/header"
import { Footer } from "@/widgets/footer";
import { BannersCarousel } from "@/widgets/banners-carousel";
import { CategoriesCarousel } from "@/widgets/categories-carousel";
import { home } from "@/shared/routes/home-routes";
import { DiscountedProducts } from "@/widgets/discounted-products/ui/discounted-products";
import { FeaturedProducts } from "@/widgets/featured-products";

export default function Welcome() {

    return (
        <>
                <Header routes={home} />
                <BannersCarousel/>
                <div className='sm:mx-2 md:mx-10 mt-8'>
                    <CategoriesCarousel/>
                    <DiscountedProducts/>
                    <FeaturedProducts/>
                </div>
                <Footer/>
        </>
    );
}

