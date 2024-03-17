import { RoleForm } from "@/entites/role";
import { useRole } from "@/entites/role/api/queries";

const EditRolePage = ({ id }) => {
    const Role = useRole(id);

    if (Role.isLoading) {
        return <div>Loading...</div>;
    }
    if (Role.isError) {
        return <div>Error...</div>;
    }

    if (Role.isSuccess) {
    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <RoleForm initialData={Role.data} />
            </div>
        </div>
    );
    }
}

export default EditRolePage;