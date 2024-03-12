import { useRoles, RoleClient } from "@/entites/role"

export function Roles() {

    const Roles = useRoles();

    if (Roles.isLoading) {
        return <div>Loading...</div>;
    }
    if (Roles.isError) {
        return <div>Error...</div>;
    }

    if (Roles.isSuccess) {
        return (
            <div className="flex-col">
                <div className="flex-1 space-y-4 p-8 pt-6">
                    <RoleClient data={Roles.data} />
                </div>
            </div>
        )
    }
}

export default Roles;
