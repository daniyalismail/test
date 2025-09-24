"use client";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import React, { useEffect, useState } from "react";

export default function OptionTable( {options, setoptions, inputtext , setinputtext , disabled}: any) {
  const columns = [
    { field: "no", header: "No." },
    { field: "option", header: "Options" },
  ];
  const addHandler=()=>{
    if (!inputtext.trim()) return;

    const newOption = {
      no: options.length + 1,
      option: inputtext,
    };

    setoptions([...options, newOption]);
    setinputtext("");
  }
 const deleteHandler = (rowIndex: number) => {
  console.log("button clicked",rowIndex);
    const updated = options
      .filter((_: any, index: number) => index !== rowIndex) // remove the clicked row
      .map((opt: any, idx: number) => ({ ...opt, no: idx + 1 })); // reindex "no"

    setoptions(updated);
  };
  const actionBodyTemplate = (_rowData: any,{rowIndex}:any)=>{
    return <Button icon="pi pi-trash" style={{ height: "20px" ,width:"30px" }} className="bin p-button-danger" onClick={()=>deleteHandler(rowIndex)}/>

  }
  return (
    <div>
      <div className="p-inputgroup">
        <InputText disabled={disabled} value={inputtext} onChange={(e) => setinputtext(e.target.value)} style={{ height: "35px" }} placeholder="Enter options" />
        <Button disabled={disabled} label="Add" style={{ height: "35px" }} onClick={addHandler} />
      </div>
      <div className="card">
        <DataTable className="mt-2"
        reorderableRows onRowReorder={(e) => setoptions(e.value)}
        value={options} tableStyle={{ minWidth: "350px" }}>
          <Column rowReorder style={{ width: '3rem' }} />
          {columns.map((col, i) => (
            <Column key={col.field} field={col.field} header={col.header} />
          ))}
           <Column headerStyle={{ width: '5rem', textAlign: 'center' }} bodyStyle={{ textAlign: 'center', overflow: 'visible' }} body={actionBodyTemplate} />
        </DataTable>
      </div>
    </div>
  );
}
