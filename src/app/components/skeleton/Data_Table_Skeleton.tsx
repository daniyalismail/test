import React from "react";
import { Skeleton } from "primereact/skeleton";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export default function Data_Table_Skeleton() {
  const items: number[] = Array.from({ length: 5 }, (v, i) => i);

  return (
    <div className="card">
      <DataTable
        className="p-datatable-striped"
        removableSort
        value={items}
        style={{ height: "200px" }}
        tableStyle={{ minWidth: "50rem", minHeight: "200px" }}
      >
        <Column field="createdAt" header="Created" body={<Skeleton />} />
        <Column sortable field="poll_name" header="Poll" body={<Skeleton />} />
        <Column
          field="departments"
          header="Audience"
          body={<Skeleton />}
        />
        <Column
          field="options"
          header="Number of options"
          body={<Skeleton />}
        />
        <Column
          field="publish_date"
          header="Starts on"
          body={<Skeleton />}
        />
        <Column
          field="expiry_date"
          header="Finishes on"
          body={<Skeleton />}
        />
        <Column field="status" header="Status" body={<Skeleton />} />
        <Column header="Action" body={<Skeleton />} />
      </DataTable>
    </div>
  );
}
