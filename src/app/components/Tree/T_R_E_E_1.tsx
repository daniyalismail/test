"use client";
import React, { useState, useEffect } from "react";
import { Tree } from "primereact/tree";
import { NodeServiceT1 } from "@/app/service/NodeServiceT1";

export default function T_R_E_E_1() {
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    NodeServiceT1.getTreeNodes().then((data) => {
      // clone the data so each tree has its own copy
      setNodes(JSON.parse(JSON.stringify(data)));
    });
  }, []);

  return (
    <div className="card flex justify-content-center w-full">
      <Tree
        value={nodes}
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
