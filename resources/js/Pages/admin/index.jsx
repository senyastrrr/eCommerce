import { Header } from "@/widgets/header"
import { BrowserRouter } from 'react-router-dom';
import { routes } from "@/shared/routes/dashboard-routes";

export default function Dashboard() {

    return (
        <>
            <BrowserRouter>
                <Header routes={routes} />
                <p>Welcome to admin's page</p>
            </BrowserRouter>
        </>
    );
}

