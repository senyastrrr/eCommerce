"use client";

import AddIcon from '@mui/icons-material/Add';
import { Button } from "@/shared/ui/button";
import { DataTable } from "@/shared/ui/data-table";
import { Heading } from "@/shared/ui/heading";
import { Separator } from "@/shared/ui/separator";
import { columns } from "../model/columns"

export const RoleClient = ({
  data
}) => {

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={`Roles (${data.length})`} description="Manage Roles for your store" />
        <Button onClick={() => window.location.href = `/admin/roles/create`}>
          <AddIcon className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
    </>
  );
};