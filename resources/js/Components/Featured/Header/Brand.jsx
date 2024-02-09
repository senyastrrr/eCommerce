import { Link } from '@inertiajs/react';

const Brand = ({ href, title }) => {
    return (
        <Link href={href || '/'} className="ml-4 lg:ml-0">
            <h1 className="text-xl font-bold">{title || 'STORE NAME'}</h1>
        </Link>
    );
};

export default Brand;