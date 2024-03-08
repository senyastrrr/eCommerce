import { ActionButton } from "@/shared/common/action-button";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/shared/ui/table"
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import { useBillboards, useDeleteBillboard } from "@/entites/billboard"

export function Billboards() {

    const billboards = useBillboards();
    const deleteBillboard = useDeleteBillboard();
    const asset = (path) => `/storage/images/${path}`;

    if (billboards.isLoading) {
        return <div>Loading...</div>;
    }
    if (billboards.isError) {
        return <div>Error...</div>;
    }

    if (billboards.isSuccess) {
        return (
            <>
                <Table>
                    <TableCaption>Billboards</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>ID</TableHead>
                            <TableHead>Image</TableHead>
                            <TableHead>Content</TableHead>
                            <TableHead>isActual</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {billboards.data.map((billboard) => (
                            <TableRow key={billboard.id}>
                                <TableCell>{billboard.id}</TableCell>
                                <TableCell className="w-[150px] h-[150px]"><img src={asset(billboard.image)} className="w-fit h-fit"></img></TableCell>
                                <TableCell>{billboard.content}</TableCell>
                                <TableCell>{billboard.isActual}</TableCell>
                                <TableCell>
                                    <ActionButton>
                                        <a href={route('admin.billboards.edit', { id: billboard.id })}>
                                            <EditIcon />
                                        </a>
                                    </ActionButton>
                                    <ActionButton onClick={() => deleteBillboard.mutate(billboard.id)}>
                                        <ClearIcon />
                                    </ActionButton>
                                </TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </>
        )
    }
}

export default Billboards;
