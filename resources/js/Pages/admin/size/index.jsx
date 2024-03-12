import { useSizes, SizeClient } from "@/entites/size"

export function Sizes() {

    const Sizes = useSizes();

    if (Sizes.isLoading) {
        return <div>Loading...</div>;
    }
    if (Sizes.isError) {
        return <div>Error...</div>;
    }

    if (Sizes.isSuccess) {
        return (
            <div className="flex-col">
                <div className="flex-1 space-y-4 p-8 pt-6">
                    <SizeClient data={Sizes.data} />
                </div>
            </div>
        )
    }
}

export default Sizes;
