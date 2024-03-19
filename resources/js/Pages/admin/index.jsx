import { Header } from "@/widgets/header"
import { home } from "@/shared/routes/home-routes";

export default function Dashboard() {

    return (
        <>
            <Header routes={home} />
            <p>Welcome to admin's page</p>
        </>
    );
}

