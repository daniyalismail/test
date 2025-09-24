"use client";
import React, { useState } from "react";
import { MultiSelect, MultiSelectChangeEvent } from 'primereact/multiselect';

interface City {
    name: string;
    code: string;
}

export default function CheckBox_Multi_Select({value , onChange}:any) {
    const [selectedCities, setSelectedCities] = useState<City | null>(null);
    const cities: City[] = [
        { name: 'Default', code: 'DT' },
        { name: 'engineer', code: 'EN' },
        { name: 'Graphic Department', code: 'GD' },
        { name: 'hr', code: 'HR' },
        { name: 'Human Resources (HR)', code: 'HRS' },
        { name: 'My department', code: 'MD' },
        { name: 'My department 1', code: 'MD1' },
        { name: 'Professional Department', code: 'PD' },
        { name: 'QA', code: 'QA' },
        { name: 'tester', code: 'TR' },
        { name: 'UI/UX Design', code: 'UIXD' }
    ];

    return (
        <div className="w-full">
            <MultiSelect style={{height: "40px" }} value={value} onChange={(e: MultiSelectChangeEvent) => onChange(e.value)} options={cities} optionLabel="name" 
                filter filterDelay={400} display="chip" placeholder="Select a department" maxSelectedLabels={3} className="w-full multiselect " />
        </div>
    );
}
        