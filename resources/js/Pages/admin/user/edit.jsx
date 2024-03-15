import { UserForm, useUser } from "@/entites/user";

const EditUserPage = ({ id }) => {
    const User = useUser(id);

    if (User.isLoading) {
        return <div>Loading...</div>;
    }
    if (User.isError) {
        return <div>Error...</div>;
    }

    if (User.isSuccess) {
    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <UserForm initialData={User.data} />
            </div>
        </div>
    );
    }
}

export default EditUserPage;