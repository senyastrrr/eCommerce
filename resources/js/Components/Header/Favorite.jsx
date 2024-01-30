import { Heart } from "lucide-react";
import { Button } from "../ui/button";


const Favorite = () => {
    return (
        <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Theme"
            className="mr-6 text-gray-700"
        >
            <Heart className="w-6 h-6" />
        </Button>
    );
};

export default Favorite;