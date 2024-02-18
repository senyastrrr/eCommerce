import { MobileMenu } from "@/shared/common/mobile-menu";
import { Menu } from "@/shared/common/menu";
import { ShoppingCart } from "@/entites/cart";
import React from 'react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { Heart } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { Link } from '@inertiajs/react';

const asset = (path) => `/storage/images/${path}`;

const Header = ({ routes }) => {
    return (
        <header className="sm:flex sm:justify-between py-2 px-4 sticky top-0 z-30 w-full bg-white">
            <div className="flex items-center">
                <MobileMenu routes={routes} />
                <Link href='/' className="ml-4 lg:ml-0">
                    <h1 className="text-xl font-bold">STORE NAME</h1>
                </Link>
            </div>
            <Menu routes={routes} />
            <div className="flex items-center">
                <ShoppingCart trigger={
                    <Button
                        variant="ghost"
                        size="icon"
                        className="mr-2 text-gray-700"
                        aria-label="Custom Shopping Cart Trigger"
                    >
                        <ShoppingCartIcon className="h-6 w-6" />
                    </Button>
                } />

                <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Toggle Theme"
                    className="mr-6 text-gray-700"
                >
                    <Heart className="w-6 h-6" />
                </Button>

                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Avatar className="h-8 w-8">
                            <AvatarImage src={asset("shadcn.jpg")} />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer">Billing</DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer">Subscription</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="cursor-pointer">Log Out</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
};

export default Header;