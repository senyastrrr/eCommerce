import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/shared/ui/card";

import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { Button } from "@/shared/ui/button";
import { useState } from 'react';
import Checkbox from "@/shared/ui/Checkbox";
import { useBillboard } from "@/entites/billboard/api/queries";

export function EditBillboard({ id }) {
    const { data: billboard, isLoading, isError } = useBillboard(id);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error...</div>;
    }

    return (
        <Card className="w-fit">
            <CardHeader>
                <CardTitle>Billboard</CardTitle>
                <CardDescription>ID: {billboard.id}</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    //updateUser(user.id, new FormData(e.target));
                }}>
                    <div className="grid w-full items-center gap-4">
                        <div className="w-[450px]"><img src={`/storage/images/${billboard.image}`} className="w-fit h-fit" alt="Billboard" /></div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="image">Image</Label>
                            <Input id="image" type="file"/>
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="content">Content</Label>
                            <Input id="content" placeholder="" defaultValue={billboard.content} />
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="isActual" defaultChecked={billboard.isActual} />
                            <label
                                htmlFor="isActual"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Is billboard actual?
                            </label>
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button>Update</Button>
            </CardFooter>
        </Card>
    )
}

export default EditBillboard;
