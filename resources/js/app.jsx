import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';

const appName = import.meta.env.VITE_APP_NAME || 'Ecommerce';

const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: 5, retryDelay: 1000 } }
});

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./pages/${name}.jsx`, import.meta.glob('./pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <BrowserRouter>
                <QueryClientProvider client={queryClient}>
                    <App {...props} />
                    <Toaster />
                </QueryClientProvider>
            </BrowserRouter>);
    },
    progress: {
        color: '#4B5563',
    },
});
