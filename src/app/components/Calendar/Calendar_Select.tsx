"use client";
import { Calendar } from "primereact/calendar";
import { FloatLabel } from "primereact/floatlabel";
import { Nullable } from "primereact/ts-helpers";
import React, { useState } from "react";

export default function Calendar_Select({disabled , placeholder , value, onChange}:any ) {
  return (
    <div className="w-full">
      {value===null ? <FloatLabel>
        <Calendar
        style={{ height: "35px" }}
          id="calendar-24h"
          className="w-full"
          value={value}
          onChange={(e) => onChange(e.value)}
          showTime
          hourFormat="24"
          showIcon
          disabled={disabled}
          showButtonBar
          panelClassName="custom-calendar-panel"
        />
        <label htmlFor="calendar-24h" className="text-xs">{placeholder}</label>
      </FloatLabel>
    :  <Calendar
        style={{ height: "35px" , }}
          id="calendar-24h"
          className="w-full"
          value={value}
          onChange={(e) => onChange(e.value)}
          showTime
          hourFormat="24"
          showIcon
          disabled={disabled}
          showButtonBar
          panelClassName="custom-calendar-panel"
        />
    }
    </div>
  );
}
