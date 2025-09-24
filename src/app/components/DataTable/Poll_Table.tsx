"use client";
import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";

export default function Poll_Table() {
  const [polls, setPolls] = useState<any[]>([]);
  const [loading, setLoading] = useState(true); // ✅ NEW state

  // ✅ Format date like "30th Dec 2024 13:41"
  const formatDate = (dateString: string | null) => {
    if (!dateString) return "-";
    const date = new Date(dateString);
    const day = date.getDate();
    const suffix =
      day % 10 === 1 && day !== 11
        ? "st"
        : day % 10 === 2 && day !== 12
        ? "nd"
        : day % 10 === 3 && day !== 13
        ? "rd"
        : "th";
    return `${day}${suffix} ${date.toLocaleString("en-GB", {
      month: "short",
      year: "numeric",
    })} ${date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })}`;
  };

  const statusBodyTemplate = (row: any) => {
    if (!row.expiry_date) {
      return (
        <Tag value="-" severity="danger" className="inverted-tag warning" />
      );
    }

    const isExpired = new Date(row.expiry_date) < new Date();
    const status = isExpired ? "Expired" : "Active";
    const severity = isExpired ? "danger" : "success";

    return (
      <Tag
        value={status}
        severity={severity}
        className={`inverted-tag ${severity}`}
      />
    );
  };

  const departmentBodyTemplate = (row: any) => {
    if (!row.departments || row.departments.length === 0) return "-";
    return row.departments
      .map((d: any) => (typeof d === "string" ? d : d.name || "-"))
      .join(", ");
  };

  const optionsBodyTemplate = (row: any) => {
    if (!row.options) return "0";
    return Array.isArray(row.options) ? row.options.length : "-";
  };

  const ActionBodyTemplate = () => {
    return (
      <Button
        icon="pi pi-chart-line"
        style={{
          height: "20px",
          width: "30px",
          color: "#35acec",
          backgroundColor: "transparent",
          border: "none",
        }}
      />
    );
  };

  // ✅ Fetch polls
  const fetchPolls = async () => {
    setLoading(true);
    const res = await fetch("/api/owais");
    if (res.ok) {
      const data = await res.json();
      setPolls(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPolls();
  }, []);

  return (
    <div className="card flex flex-column w-full h-full">
      <div style={{ height: "200px" }}>
        {loading ? (
          <div className="flex bg-white-alpha-10 w-full h-full flex-column align-items-center justify-content-center">
            <i className="pi pi-spin pi-spinner text-5xl"></i>
            <p>Loading polls...</p>
          </div>
        ) : polls.length === 0 ? (
          <div className="flex bg-white-alpha-10 w-full h-full flex-column align-items-center justify-content-center">
            <i className="pi pi-id-card text-5xl"></i>
            <p>No polls</p>
          </div>
        ) : (
          <DataTable
            removableSort
            scrollable
            scrollHeight="300px"
            value={polls}
            paginator
            rows={5}
            rowsPerPageOptions={[5, 10, 25, 50]}
            style={{ height: "300px" }}
            tableStyle={{ minWidth: "50rem", minHeight: "200px" }}
          >
            <Column
              field="createdAt"
              header="Created"
              body={(row) => formatDate(row.createdAt)}
            />
            <Column sortable field="poll_name" header="Poll" />
            <Column
              field="departments"
              header="Audience"
              body={departmentBodyTemplate}
            />
            <Column
              field="options"
              header="Number of options"
              body={optionsBodyTemplate}
            />
            <Column
              field="publish_date"
              header="Starts on"
              body={(row) => formatDate(row.publish_date)}
            />
            <Column
              field="expiry_date"
              header="Finishes on"
              body={(row) => formatDate(row.expiry_date)}
            />
            <Column field="status" header="Status" body={statusBodyTemplate} />
            <Column header="Action" body={ActionBodyTemplate} />
          </DataTable>
        )}
      </div>
    </div>
  );
}
