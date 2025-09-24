"use client";
import React from "react";
import { FileUpload, FileUploadHandlerEvent } from "primereact/fileupload";

interface FileUploadProps {
  onFileUpload: (fileData: { base64: string; name: string }) => void;
}

export default function File_Upload({ onFileUpload }: FileUploadProps) {
  const customBase64Uploader = async (event: FileUploadHandlerEvent) => {
    const file = event.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = function () {
      const base64data = reader.result as string;
      onFileUpload({ base64: base64data, name: file.name });
    };
  };

  return (
    <div className="w-full flex justify-content-start">
      <FileUpload
        chooseLabel="Select Image"
        mode="basic"
        name="demo[]"
        accept="image/*"
        auto
        customUpload
        uploadHandler={customBase64Uploader}
      />
    </div>
  );
}
