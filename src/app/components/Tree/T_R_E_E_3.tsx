"use client";
import React, { useState, useEffect } from "react";
import { Tree } from "primereact/tree";
import Poll_Table from "../DataTable/Poll_Table";
import { PollService } from "@/app/service/PollService";

export default function T_R_E_E_3() {
  const [nodes, setNodes] = useState<any[]>([]);
  const [expandedKeys, setExpandedKeys] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    PollService.getTreeNodes().then((data) => {
      setNodes(JSON.parse(JSON.stringify(data)));
    });
  }, []);

  // Handle expand/collapse
  const handleToggle = (e: any) => {
    setExpandedKeys(e.value);

    // If our Poll node is expanded → load table
    if (e.value["0"]) {
      setShowTable(true);
    } else {
      setShowTable(false);
    }
  };

  // Node template → renders custom UI per node
  const nodeTemplate = (node: any) => {
    if (node.key === "0") {
      return <span className="font-bold w-full text-center block">Poll</span>;
    }

    if (node.key === "0-0") {
      return showTable ? <Poll_Table /> : <span>Click to load polls...</span>;
    }

    return <span>{node.label}</span>;
  };
  return (
    <div className="card flex justify-content-center w-full">
      <Tree
        value={nodes}
        expandedKeys={expandedKeys}
        onToggle={handleToggle}
        nodeTemplate={nodeTemplate}
        className="p-2"
        style={{
          width: "100%",
          border: "1px solid #e5e7eb",
          borderRadius: "10px",
        }}
        togglerTemplate={(node, options) => (
          <button
            type="button"
            className="p-link flex items-center justify-center"
            onClick={options.onClick}
          >
            {options.expanded ? (
              // 🔼 Expanded → Up arrow
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 15.75 7.5-7.5 7.5 7.5"
                />
              </svg>
            ) : (
              // ▶ Collapsed → Down arrow
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            )}
          </button>
        )}
      />
    </div>
  );
}
