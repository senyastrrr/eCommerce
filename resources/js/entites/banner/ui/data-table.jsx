import { ActionButton } from "@/shared/common/action-button";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/shared/ui/table"
import ClearIcon from '@mui/icons-material/Clear';

export function BillboardsTable({ billboards }) {
    return (
        <Table>
            <TableCaption>Billboards</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Image</TableHead>
                    <TableHead>Content</TableHead>
                    <TableHead>isActual</TableHead>
                    <TableHead>Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {billboards.map((billboard) => (
                    <TableRow key={billboard.id}>
                        <TableCell>{billboard.id}</TableCell>
                        <TableCell>{billboard.image}</TableCell>
                        <TableCell>{billboard.content}</TableCell>
                        <TableCell>
                            <ActionButton>
                                <ClearIcon />
                            </ActionButton>
                        </TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
