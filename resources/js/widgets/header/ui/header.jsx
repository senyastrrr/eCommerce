import { MobileMenu } from "@/shared/common/mobile-menu";
import { NavLinks } from "@/shared/common/menu";
import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import { ProfileButton } from "@/shared/common/profile-button";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { ActionButton } from "@/shared/common/action-button";
import { LoginButton } from "@/features/login";
import { ShoppingCart } from "@/entites/shopping-cart";
import { useRole } from "@/entites/role";
import { dashboard } from "@/shared/routes/dashboard-routes";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuGroup, DropdownMenuItem } from "@/shared/ui/dropdown-menu";
import { Button } from "@/shared/ui/button";

export function Header({ routes }) {
    const { user } = usePage().props.auth;
    const role = user ? useRole(user.role_id) : { isSuccess: false };

    return (
        <header className="sm:flex sm:justify-between py-2 px-4 sticky top-0 z-30 w-full bg-white">
            <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full mx-auto w-full max-w-7xl">
                <div className="flex items-center">
                    <MobileMenu routes={routes} />
                    <Link href='/' className="ml-4 lg:ml-0">
                        <h1 className="text-xl font-bold">STORE NAME</h1>
                    </Link>
                </div>
                <NavLinks routes={routes} />
                {role.isSuccess && (role.data.name === 'Admin' || role.data.name === 'Employee') && (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline">Dashboard</Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    {dashboard.map((route, i) => (
                                        <DropdownMenuItem key={i}>
                                            <ActionButton asChild variant="ghost">
                                                <Link
                                                    href={route.href}
                                                    className="text-sm font-medium transition-colors"
                                                >
                                                    {route.label}
                                                </Link>
                                            </ActionButton>
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    )}
                <div className="flex items-center sm:gap-2 md:gap-4">
                    <ShoppingCart
                        trigger={
                            <ActionButton>
                                <ShoppingCartOutlinedIcon className="h-6 w-6" />
                            </ActionButton>
                        }
                    />
                    <ActionButton>
                        <FavoriteBorderOutlinedIcon className="w-6 h-6" />
                    </ActionButton>
                    
                    {user ?
                        <ProfileButton /> :
                        <LoginButton />}
                </div>
            </div>
        </header>
    );
}
