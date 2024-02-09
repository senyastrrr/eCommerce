import { Link } from '@inertiajs/react';
import { Button } from "../../ui/button";

const NavLinks = ({ routes }) => {
    return (
        <nav className="mx-auto flex items-center space-x-4 lg:space-x-4 hidden md:block">
            {routes.map((route, i) => (
                <Button asChild variant="ghost" key={i}>
                    <Link
                        href={route.href}
                        className="text-sm font-medium transition-colors"
                    >
                        {route.label}
                    </Link>
                </Button>
            ))}
        </nav>
    );
};

export default NavLinks;