import { useRoles, RoleClient } from "@/entites/role"
import { home } from "@/shared/routes/home-routes";
import { Header } from "@/widgets/header";

export function RolesPage() {

    const Roles = useRoles();

    if (Roles.isLoading) {
        return <div>Loading...</div>;
    }
    if (Roles.isError) {
        return <div>Error...</div>;
    }

    if (Roles.isSuccess) {
        return (
            <>
                <Header routes={home} />
                <div className="flex-col">
                    <div className="flex-1 space-y-4 p-8 pt-6">
                        <RoleClient data={Roles.data} />
                    </div>
                </div>
            </>
        )
    }
}

export default RolesPage;
