import { RoleForm } from "@/entites/role";

const CreateRolePage = () => {

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <RoleForm/>
            </div>
        </div>
    );
}

export default CreateRolePage;