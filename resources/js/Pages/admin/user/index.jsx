import { useUsers, UserClient } from "@/entites/user"

export function UsersPage() {

    const Users = useUsers();
    
    if (Users.isLoading) {
        return <div>Loading...</div>;
    }
    if (Users.isError) {
        return <div>Error...</div>;
    }

    if (Users.isSuccess) {
        return (
            <div className="flex-col">
                <div className="flex-1 space-y-4 p-8 pt-6">
                    <UserClient data={Users.data} />
                </div>
            </div>
        )
    }
}

export default UsersPage;
