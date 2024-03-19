import { useColors, ColorClient } from "@/entites/color"
import { home } from "@/shared/routes/home-routes";
import { Header } from "@/widgets/header";

export function ColorsPage() {

    const Colors = useColors();

    if (Colors.isLoading) {
        return <div>Loading...</div>;
    }
    if (Colors.isError) {
        return <div>Error...</div>;
    }

    if (Colors.isSuccess) {
        return (
            <>
                <Header routes={home} />
                <div className="flex-col">
                    <div className="flex-1 space-y-4 p-8 pt-6">
                        <ColorClient data={Colors.data} />
                    </div>
                </div>
            </>
        )
    }
}

export default ColorsPage;
