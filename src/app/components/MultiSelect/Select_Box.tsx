"use client";
import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";

interface City {
  name: string;
  code: string;
}

export default function Select_Box({value, onChange}:any) {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const cities: City[] = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  return (
    <div className="card flex w-full mt-3">
      <Dropdown
        style={{ height: "35px" }}
        value={value}
        onChange={(e) => onChange(e.value)}
        options={cities}
        optionLabel="name"
        filter // enables search
        filterPlaceholder="Search employee..."
        placeholder="Select employee"
        className="w-full"
      />
    </div>
  );
}
