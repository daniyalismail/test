"use client";
import React, { useEffect, useState } from "react";
import Tab_Menu from "./components/TabMenu/Tab_Menu";
import T_R_E_E_1 from "./components/Tree/T_R_E_E_1";
import T_R_E_E_2 from "./components/Tree/T_R_E_E_2";
import { Skeleton } from "primereact/skeleton";
import T_R_E_E_3 from "./components/Tree/T_R_E_E_3";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const handleTabChange = (index: number) => {
    setLoading(true);
    setActiveIndex(index);

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-screen p-4">
      <Tab_Menu activeIndex={activeIndex} onTabChange={handleTabChange} />

      {/* Scrollable container */}
      <div
        className="scrollable w-full grid mt-5"
        style={{
          maxHeight: "calc(100vh - 120px)", // adjust based on header height
          overflowY: "auto",
          marginLeft : "10px" // keeps content clear of scrollbar
        }}
      >
        {loading ? (
          <>
            <Skeleton className="m-2" width="48%" height="150px" borderRadius="10px" />
            <Skeleton className="m-2" width="48%" height="150px" borderRadius="10px" />
            <Skeleton  className="m-2" width="48%" height="150px" borderRadius="10px" />
            <Skeleton className="m-2" width="48%" height="150px" borderRadius="10px" />
          </>
        ) : (
          <>
            {activeIndex === 0 && (
              <>
                <div className="col-6">
                  <T_R_E_E_1 />
                </div>
                <div className="col-6">
                  <T_R_E_E_2 />
                </div>
                <div className="col-6">
                  <T_R_E_E_3 />
                </div>
              </>
            )}
            {activeIndex === 1 && (
              <div className="card">Content for Random Testing</div>
            )}
            {activeIndex === 2 && <div className="card">Content for Test</div>}
          </>
        )}
      </div>
    </div>
  );
}
