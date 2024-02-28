import { Card, CardContent } from '@/shared/ui/card';
import React from 'react';

const asset = (path) => `/storage/images/${path}`;

export function CategoryCard({ title, description, image }) {
    return (
        <Card className="h-full">
            <CardContent className="h-full p-4">
                <div className="bg-cover bg-center h-64" style={{ backgroundImage: `url(${asset(image)})` }}>
                    <div className="flex flex-col items-left justify-center p-8">
                        <p className="text-2xl font-bold mb-2 text-gray-800">{title}</p>
                        <p className="text-gray-500 mb-8">{description}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}