import { Button } from '@/shared/ui/button';
import React from 'react';


export function ActionButton({ children }) {
    return (
        <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Theme"
            className="mr-6 text-gray-700"
            >
            {children}
        </Button>
    );
}

