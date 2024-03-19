import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter, SheetClose } from "@/shared/ui/sheet";
import { Button } from "@/shared/ui/button";
import { ShoppingCartItem, useShoppingCartItemsByUserId } from "@/entites/shopping-cart-item";
import { usePage } from "@inertiajs/react";

export function ShoppingCart({ trigger }) {

    const { user } = usePage().props.auth;
    const items = useShoppingCartItemsByUserId(user?.id)

    if (items.isSuccess)
        return (
            <Sheet>
                <SheetTrigger asChild>
                    {trigger}
                </SheetTrigger>
                <SheetContent side="right" className="overflow-y-auto">
                    <SheetHeader>
                        <SheetTitle>Корзина</SheetTitle>
                        <SheetDescription>
                            Здесь отображаются ваши товары, добавленные в корзину.
                        </SheetDescription>
                    </SheetHeader>
                    {items.data.map((item) => (
                        <ShoppingCartItem key={item.product_id} product_id={item.product_id} item={item.id}/>
                    ))}
                    
                    <SheetFooter className="mt-6">
                        <SheetClose asChild>
                            <Button type="submit">Перейти к оформлению</Button>
                        </SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        );
}