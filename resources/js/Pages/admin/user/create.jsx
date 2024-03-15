import { UserForm } from "@/entites/user";

const CreateUserPage = () => {

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <UserForm/>
            </div>
        </div>
    );
}

export default CreateUserPage;