"use client"

import * as React from "react"
import Container from "../ui/container";
import { Link } from '@inertiajs/react';
import { Button } from "../ui/button";
import { Search, ShoppingCart, Heart } from "lucide-react";
import ProfileButton from "../ui/ProfileButton";

const asset = (path) => `/storage/images/${path}`;

export default function Header() {

    const routes = [
        {
            href: "/",
            label: "Home",
        },
        {
            href: "/",
            label: "Shop",
        },
        {
            href: "/",
            label: "Features",
        },
        {
            href: "/",
            label: "Blog",
        },
        {
            href: "/",
            label: "About",
        },
        {
            href: "/",
            label: "Contact",
        },
    ];

    return (
        <header className="sm:flex sm:justify-between border-b">
            <Container>
                <div className="relative sm:px-6 lg:px-8 flex h-12 items-center justify-between w-full">
                    <div className="flex items-center">
                        <Link href="/" className="ml-4 lg:ml-0">
                            <img src={asset("icons/logo-01.png")} alt="Coze Store" />
                        </Link>
                    </div>
                    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 hidden md:block">
                        {routes.map((route, index) => (
                            <Button asChild variant="ghost">
                                <Link
                                    key={index}
                                    href={route.href}
                                    className="text-sm font-medium transition-colors"
                                >
                                    {route.label}
                                </Link>
                            </Button>
                        ))}
                    </nav>
                    <div className="flex items-center space-x-4">
                    <Button
                            variant="ghost"
                            size="icon"
                            className="mr-2"
                            aria-label="Shopping Cart"
                        >
                            <Search className="h-6 w-6" />
                            <span className="sr-only">Search</span>
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="mr-2"
                            aria-label="Shopping Cart"
                        >
                            <ShoppingCart className="h-6 w-6" />
                            <span className="sr-only">Shopping Cart</span>
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="mr-2"
                            aria-label="Shopping Cart"
                        >
                            <Heart className="h-6 w-6" />
                            <span className="sr-only">Heart</span>
                        </Button>
                        <ProfileButton />
                    </div>
                </div>
            </Container>
        </header>
    )
}
