"use client";
import React, { useState } from "react";
import { Editor, EditorTextChangeEvent } from "primereact/editor";

export default function Text_Editor({text, onChange}:any) {

    return (
        <div className="card">
            <Editor value={text} onTextChange={(e: EditorTextChangeEvent) => onChange(e.htmlValue)} style={{ height: '320px' }} />
        </div>
    )
}
        