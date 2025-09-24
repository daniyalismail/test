"use client";
import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import R_Side_Bar from "../Right_Sidebar/R_Side_Bar";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Tag } from "primereact/tag";
import { useIntersectionObserver } from "primereact/hooks";
import { Skeleton } from "primereact/skeleton";
import Data_Table_Skeleton from "../skeleton/Data_Table_Skeleton";

export default function DATA_TABLE() {
  const datatable = useRef<null>(null);
  const visible = useIntersectionObserver<HTMLDivElement | null>(datatable);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    if (visible) {
      fetchPolls();
    }
  }, [visible]);

  const [polls, setPolls] = useState<any[]>([]);

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

  // ✅ Status logic
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

  // ✅ Departments formatting
  const departmentBodyTemplate = (row: any) => {
    if (!row.departments || row.departments.length === 0) return "-";
    // If it's array of objects like [{name:"HR"}] → extract name
    return row.departments
      .map((d: any) => (typeof d === "string" ? d : d.name || "-"))
      .join(", ");
  };

  // ✅ Options formatting
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
    setLoading(true); // show skeletons while fetching
    const res = await fetch("/api/polls");
    if (res.ok) {
      const data = await res.json();
      setPolls(data);
    }
    setLoading(false); // hide skeletons
  };

  return (
    <div className="card">
      <div
        style={{ height: "10vh", backgroundColor: "#f9fafb" }}
        className="flex align-items-center p-2 flex justify-content-between"
      >
        <h1 className="text-lg">Poll</h1>
        <div className="flex align-items-center gap-1 table-header">
          <R_Side_Bar onPollCreated={fetchPolls} />
          <Button
            icon="pi pi-refresh"
            onClick={fetchPolls}
            style={{
              backgroundColor: "transparent",
              color: "#3b82f6",
              border: "none",
              height: "7vh",
            }}
          />
          <Button
            icon="pi pi-th-large"
            style={{
              backgroundColor: "transparent",
              color: "#3b82f6",
              border: "none",
              height: "7vh",
            }}
          />
          <Button
            icon="pi pi-bars"
            style={{
              backgroundColor: "transparent",
              color: "#3b82f6",
              border: "none",
              height: "7vh",
            }}
          />
          <InputText
            className="search_placeholder"
            placeholder="Type here to search"
            style={{ height: "7vh" }}
          />
          <Button
            icon="pi pi-search"
            style={{
              backgroundColor: "transparent",
              color: "#3b82f6",
              border: "none",
            }}
          />
        </div>
      </div>

      <div ref={datatable} style={{ height: "200px" }}>
        {Loading ? (
          <Data_Table_Skeleton/>
      ) :<DataTable
          removableSort
          scrollable
          scrollHeight="200px"
          value={polls}
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 25, 50]}
          style={{ height: "200px" }}
          tableStyle={{ minWidth: "50rem", minHeight: "200px" }}
          paginatorTemplate={{
            layout:
              "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown", // order of items
            CurrentPageReport: (options) => {
              // options.first, options.last, options.totalRecords
              return (
                <span style={{ marginLeft: "1rem" }}>
                  {options.first} - {options.last} of {options.totalRecords}
                </span>
              );
            },
            RowsPerPageDropdown: (options) => {
              return (
                <span className="flex align-items-center gap-2 ml-4">
                  <span className="flex align-items-center">
                    Items per page:
                  </span>
                  {options.element} {/* 👈 default dropdown */}
                </span>
              );
            },
          }}
          currentPageReportTemplate="{first} - {last} of {totalRecords}" // fallback if not using function
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
        </DataTable>}
      </div>
    </div>
  );
}
