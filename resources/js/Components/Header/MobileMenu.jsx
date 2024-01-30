import { Link } from "@inertiajs/react";
import { Button } from "../ui/button";
import { Sheet, SheetTrigger, SheetContent } from "../ui/sheet";
import { Menu } from "lucide-react";

export default function MobileMenu({ routes }) {
    return (
        <Sheet>
            <SheetTrigger>
                <Button
                    variant="ghost"
                    size="icon"
                    className="mr-2 text-gray-700"
                    aria-label="Shopping Cart"
                >
                    <Menu className="h-6 md:hidden w-6" />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                    {routes.map((route, i) => (
                        <Link key={i} href={route.href} className="block px-2 py-1 text-lg">
                            {route.label}
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
};