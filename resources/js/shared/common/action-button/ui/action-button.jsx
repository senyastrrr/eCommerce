import React from 'react';
import { Button } from "@/shared/ui/button";

export const ActionButton = React.forwardRef(({ children, ...props }, ref) => {
    return (
        <Button
            ref={ref}
            variant="ghost"
            size="icon"
            aria-label="Toggle Theme"
            className="text-gray-700"
            {...props}
        >
            {children}
        </Button>
    );
});
