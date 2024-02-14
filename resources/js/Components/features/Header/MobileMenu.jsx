import { Link } from "@inertiajs/react";
import { Button } from "../../shared/ui/button/button";
import { Sheet, SheetTrigger, SheetContent } from "../../shared/ui/sheet/sheet";
import { Menu } from "lucide-react";

export default function MobileMenu({ routes }) {
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="h-6 md:hidden w-6" />
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