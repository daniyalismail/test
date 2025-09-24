"use client";
import React, { useState, useEffect } from "react";
import { Tree } from "primereact/tree";
import { NodeServiceT2 } from "@/app/service/NodeServiceT2";
import { Avatar } from "primereact/avatar";

export default function T_R_E_E_2() {
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    NodeServiceT2.getTreeNodes().then((data) => {
      // clone the data so each tree has its own copy
      setNodes(JSON.parse(JSON.stringify(data)));
    });
  }, []);

  return (
    <div className="card flex justify-content-center w-full">
      <Tree
        value={nodes}
        className=""
        style={{
          width: "100%",
          border: "1px solid #e5e7eb",
          borderRadius: "10px",
          padding : "1.75px"
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
        nodeTemplate={(node) =>
          node.type === "withAvatar" ? (
            <div className="flex w-full justify-content-center text-sm items-center gap-2">
              <span style={{ color: "rgb(17, 24, 39)" , fontWeight: "700" }} className="flex align-items-center">{node.label}</span>
              <Avatar
                label="7"
                size="normal"
                style={{ backgroundColor: "rgb(59, 130, 246)", color: "#fff" }}
                shape="circle"
              />
            </div>
          ) : (
            <span>{node.label}</span>
          )
        }
      />
    </div>
  );
}
