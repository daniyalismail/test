"use client";
import React, { useEffect, useRef, useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import styles from "./R_Side_Bar.module.css";
import File_Upload from "../File_Upload/File_Upload";
import { InputText } from "primereact/inputtext";
import Text_Editor from "../Editor/Text_Editor";
import { RadioButton } from "primereact/radiobutton";
import Calendar_Select from "../Calendar/Calendar_Select";
import { Checkbox } from "primereact/checkbox";
import CheckBox_Multi_Select from "../MultiSelect/CheckBox_Multi_Select";
import Select_Box from "../MultiSelect/Select_Box";
import { Toast } from "primereact/toast";
import Poll from "@/app/poll/page";
import OptionTable from "../OptionTable/OptionTable";
export default function R_Side_Bar({
  onPollCreated,
}: {
  onPollCreated?: () => void;
}) {
  const [visibleRight, setVisibleRight] = useState<boolean>(false);
  const [Publish, setPublish] = useState<"NOW" | "SCHEDULE" | null>(null);
  const [disabled, setDisabled] = useState<boolean | null>(null);
  const [show, setShow] = useState<boolean | null>(null);
  const [reminder, setReminder] = useState(false);
  const [hidevoter, setHidevoter] = useState(false);
  const [imgUrl, setImgUrl] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [poll, setPoll] = useState<string | null>("");
  const [departments, setDepartments] = useState<string[]>([]);
  const [description, setDescription] = useState<string>("");
  const [publishDate, setPublishDate] = useState<Date | null>(null);
  const [expiryDate, setExpiryDate] = useState<Date | null>(null);
  const [showOnFeedEmployee, setShowOnFeedEmployee] = useState<string | null>(
    null
  );
  const [reminderDate, setReminderDate] = useState<Date | null>(null);
  const [hideVoter, setHideVoter] = useState<boolean>(false);
  const [pollError, setPollError] = useState<boolean | null>(null);
  const [departmentsError, setDepartmentserror] = useState<boolean | null>(
    null
  );
  const [ExpirydateError, setExpirydateError] = useState<boolean | null>(null);
  const [publishdateError, setPublishdateError] = useState<boolean | null>(
    null
  );
  const [options, setOptions] = useState<string[]>([]);
  const [inputtext, setInputText] = useState<any>("");

  const toast = useRef<any>(null);
  const clicked = () => {
    console.log("clicked");
  };
  const publish = async () => {
    const payload = {
      poll,
      description,
      departments,
      Publish,
      publishDate,
      expiryDate,
      reminderDate,
      showOnFeedEmployee,
      hideVoter,
      imgUrl,
      options,
    };

    console.log("Sending payload:", payload);

    const res = await fetch("/api/owais", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      setVisibleRight(false);
      toast.current.show({
        severity: "success",
        detail: "Poll created successfully!",
        life: 5000,
      });
      setPoll("");
      setDepartments([]);
      setDescription("");
      setPublish(null);
      setPublishDate(null);
      setExpiryDate(null);
      setReminderDate(null);
      setShowOnFeedEmployee(null);
      setHideVoter(false);
      setImgUrl(null);
      setFileName(null);
      setOptions([]);
      setInputText("");
      if (onPollCreated) onPollCreated(); 
    } else {
      toast.current.show({
        severity: "error",
        detail: "Failed to create poll.",
        life: 2000,
      });
    }
  };

  const showError = () => {
    toast.current.show({
      severity: "error",
      detail: "Error! Please fill in all the fields with * before them.",
      life: 3000,
    });
    if (!poll || poll.trim() === "") setPollError(true);
    if (departments.length === 0) setDepartmentserror(true);
    if (expiryDate === null) setExpirydateError(true);
    if (publishDate === null) setPublishdateError(true);
  };

  useEffect(() => {
    if (Publish === "SCHEDULE" || Publish === "NOW") {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [Publish]);
  return (
    <div className="card">
      <Toast ref={toast} />
      <div className="flex gap-2 justify-content-center">
        <Button
          icon="pi pi-plus"
          label="Poll"
          onClick={() => {
            setVisibleRight(true);
            setPoll("");
            setDepartments([]);
            setDescription("");
            setPublish(null);
            setPublishDate(null);
            setExpiryDate(null);
            setReminderDate(null);
            setShowOnFeedEmployee(null);
            setHideVoter(false);
            setImgUrl(null);
            setFileName(null);
            setOptions([]);
            setInputText("");
          }}
          style={{ height: "7vh", width: "15vh" }}
          className="text-white flex align-items-center justify-content-center text-sm"
        />
      </div>

      <Sidebar
        visible={visibleRight}
        position="right"
        onHide={() => setVisibleRight(false)}
        className="flex flex-column h-full justify-content-between align-items-center"
        style={{ overflow: "hidden" }}
      >
        <div
          style={{ height: "400px", border: "1px solid #dcdcdc" }}
          className="border-round-lg p-2 poll_form pb-8 pl-3 pr-3"
        >
          <h1 style={{ color: "#111827" }} className="font-medium text-lg">
            Add new poll
          </h1>
          <hr />
          <div
            style={{ height: "300px" }}
            className="pl-3 pr-2  scrollable overflow-auto pb-2 flex flex-column"
          >
            <div className="pb-4">
              <h2
                style={{ color: "#111827", marginBottom: "5px" }}
                className="text-xs font-medium"
              >
                Upload Image
              </h2>
              <File_Upload
                onFileUpload={({ base64, name }) => {
                  setImgUrl(base64);
                  setFileName(name);
                }}
              />
              {imgUrl !== null ? (
                <img src={imgUrl} alt="Uploaded" className="w-full h-auto" />
              ) : null}
              {fileName !== null ? (
                <p className="text-black-alpha-20 ">{fileName}</p>
              ) : null}
            </div>
            <div className="pb-2">
              <h2
                style={{ color: "#111827" }}
                className="flex font-medium text-xs"
              >
                <span className="mr-1" style={{ color: "#f43f5e" }}>
                  *
                </span>
                Poll
              </h2>
              <InputText
                required
                style={{ height: "35px" }}
                type="text"
                value={poll}
                onChange={(e) => setPoll(e.target.value)}
                className="p-inputtext-sm"
                placeholder="Enter poll"
              />
              {pollError && (
                <small className="p-error text-xs">Poll is required.</small>
              )}
            </div>
            <div>
              <h1
                style={{ color: "#4b5563" }}
                className="font-semibold text-lg"
              >
                Audience
              </h1>
              <hr />
              <h2
                style={{ color: "#111827" }}
                className="flex font-medium text-xs"
              >
                <span className="mr-1" style={{ color: "#f43f5e" }}>
                  *
                </span>
                Department
              </h2>
              <CheckBox_Multi_Select
                value={departments}
                onChange={setDepartments}
              />
              {departmentsError && (
                <small className="p-error text-xs">
                  Please select at least one department.
                </small>
              )}
            </div>
            <div>
              <h1
                style={{ color: "#4b5563" }}
                className="font-semibold text-lg"
              >
                Poll options and details
              </h1>
              <hr />
              <h2
                style={{ color: "#111827" }}
                className="flex font-medium text-xs"
              >
                <span className="mr-1" style={{ color: "#f43f5e" }}>
                  *
                </span>
                Options
              </h2>
              <OptionTable
                disabled={disabled}
                inputtext={inputtext}
                setinputtext={setInputText}
                options={options}
                setoptions={setOptions}
              />
            </div>
            <div className="mt-4">
              <h2
                style={{ color: "#4b5563" }}
                className="flex font-medium text-xs"
              >
                Description
              </h2>
              <Text_Editor text={description} onChange={setDescription} />
            </div>
            <div>
              <h1
                style={{ color: "#111827", marginBottom: "-5px" }}
                className="font-medium text-lg"
              >
                Publish settings
              </h1>
              <hr />
              <h2
                style={{ color: "#4b5563" }}
                className="flex font-semibold text-xs"
              >
                <span className="mr-1" style={{ color: "#f43f5e" }}>
                  *
                </span>
                Publish type:
              </h2>
              <div className="flex gap-2 text-xs align-items-center">
                <div className="flex align-items-center">
                  <RadioButton
                    inputId="option1"
                    name="publlish"
                    value="NOW"
                    onChange={(e) => setPublish(e.target.value)}
                    checked={Publish === "NOW"}
                  />
                  <label
                    style={{ color: "#4b5563" }}
                    htmlFor="option1"
                    className="ml-2 font-medium"
                  >
                    Publish now
                  </label>
                </div>
                <div className="flex align-items-center">
                  <RadioButton
                    inputId="option2"
                    name="publish"
                    value="SCHEDULE"
                    onChange={(e) => setPublish(e.target.value)}
                    checked={Publish === "SCHEDULE"}
                  />
                  <label htmlFor="option2" className="ml-2">
                    Publish schedule
                  </label>
                </div>
              </div>
              {Publish === "NOW" && (
                <div className="mb-3">
                  <h2
                    style={{ color: "#111827" }}
                    className="flex font-medium text-xs"
                  >
                    <span className="mr-1" style={{ color: "#f43f5e" }}>
                      *
                    </span>
                    Expires on:
                  </h2>
                  <Calendar_Select
                    value={expiryDate}
                    onChange={setExpiryDate}
                    placeholder="Select expiry date"
                    disabled={disabled}
                  />
                  {ExpirydateError && (
                    <small className="p-error text-xs">
                      Expiry date is required.
                    </small>
                  )}
                </div>
              )}

              {Publish === "SCHEDULE" && (
                <>
                  <div className="mb-3">
                    <h2
                      style={{ color: "#111827" }}
                      className="flex font-medium text-xs"
                    >
                      Publish on:
                    </h2>
                    <Calendar_Select
                      value={publishDate}
                      onChange={setPublishDate}
                      placeholder="Select publish date"
                      disabled={disabled}
                    />
                    {publishdateError && (
                      <small className="p-error text-xs">
                        Publish date is required.
                      </small>
                    )}
                  </div>
                  <div className="mb-3">
                    <h2
                      style={{ color: "#111827" }}
                      className="flex font-medium text-xs"
                    >
                      <span className="mr-1" style={{ color: "#f43f5e" }}>
                        *
                      </span>
                      Expires on:
                    </h2>
                    <Calendar_Select
                      placeholder="Select expiry date"
                      disabled={true}
                    />
                  </div>
                </>
              )}

              {Publish === null && (
                <div className="mb-3">
                  <h2
                    style={{ color: "#111827" }}
                    className="flex font-medium text-xs"
                  >
                    <span className="mr-1" style={{ color: "#f43f5e" }}>
                      *
                    </span>
                    Expires on:
                  </h2>
                  <Calendar_Select
                    placeholder="Select expiry date"
                    disabled={true}
                  />
                </div>
              )}
              <div>
                <hr style={{ borderColor: "#e5e7eb" }} className="mb-3" />
                <div className="flex align-items-center">
                  <Checkbox
                    inputId="option3"
                    name="show"
                    value={show}
                    onChange={() => setShow(!show)}
                    checked={show}
                  />
                  <label
                    style={{ color: "#111827" }}
                    htmlFor="option3"
                    className="text-xs ml-1"
                  >
                    Show on feed by
                  </label>
                </div>
                {show && (
                  <Select_Box
                    value={showOnFeedEmployee}
                    onChange={setShowOnFeedEmployee}
                  />
                )}
                <hr style={{ borderColor: "#e5e7eb" }} className="mt-3 mb-3" />
              </div>
              <div>
                <div
                  className={`flex align-items-center  ${
                    reminder ? "mb-3" : ""
                  } `}
                >
                  <Checkbox
                    inputId="opiton4"
                    name="reminder"
                    value={reminder}
                    onChange={() => setReminder(!reminder)}
                    checked={reminder}
                  />
                  <label htmlFor="option4" className="ml-2 text-xs">
                    Send a reminder if user didn't view by
                  </label>
                </div>
                {reminder && (
                  <Calendar_Select
                    value={reminderDate}
                    onChange={setReminderDate}
                    placeholder="Select reminder date"
                    disabled={false}
                  />
                )}
              </div>
              <div>
                <hr style={{ borderColor: "#e5e7eb" }} className="mt-3 mb-3" />
                <h1
                  style={{ color: "#111827", marginBottom: "-5px" }}
                  className="font-medium text-lg"
                >
                  Additional settings
                </h1>
                <hr style={{ borderColor: "#e5e7eb" }} />
                <div className="flex align-items-center mt-3">
                  <Checkbox
                    inputId="option5"
                    name="hidevoter"
                    value={hidevoter}
                    onChange={() => setHidevoter(!hidevoter)}
                    checked={hidevoter}
                  />
                  <label
                    style={{ color: "#111827" }}
                    htmlFor="option5"
                    className="text-xs ml-1"
                  >
                    Hide voter identity
                  </label>
                </div>
                <hr style={{ borderColor: "#e5e7eb" }} className="mt-3 mb-6" />
              </div>
            </div>
          </div>
        </div>

        <div
          style={{ backgroundColor: "#f3f4f6", marginTop: "35px" }}
          className="sbft w-full flex align-items-center justify-content-end"
        >
          {Publish === null && (
            <div className="flex gap-2 mr-3 align-items-center">
              <Button
                className="text-sm cancel_btn "
                icon="pi pi-times"
                label="Cancel"
                severity="danger"
                aria-label="Close"
                data-pc-section="closebutton"
                onClick={() => {
                  setVisibleRight(false);
                  setPoll("");
                  setDepartments([]);
                  setDescription("");
                  setPublish(null);
                  setPublishDate(null);
                  setExpiryDate(null);
                  setReminderDate(null);
                  setShowOnFeedEmployee(null);
                  setHideVoter(false);
                  setImgUrl(null);
                  setFileName(null);
                  setOptions([]);
                  setInputText("");
                }}
              />
              <Button
                className="save_btn text-xs"
                icon="pi pi-save"
                aria-label="Save"
                label="Save draft"
                disabled
              />
              <Button
                className="publish_btn text-xs"
                icon="pi pi-calendar"
                aria-label="SCHEDULE"
                label="Schedule"
                disabled
              />
            </div>
          )}
          {Publish === "NOW" && (
            <div className="flex gap-2 mr-3 align-items-center">
              <Button
                className="text-sm cancel_btn "
                icon="pi pi-times"
                label="Cancel"
                severity="danger"
                aria-label="Close"
                data-pc-section="closebutton"
                onClick={() => {
                  setVisibleRight(false);
                  setPoll("");
                  setDepartments([]);
                  setDescription("");
                  setPublish(null);
                  setPublishDate(null);
                  setExpiryDate(null);
                  setReminderDate(null);
                  setShowOnFeedEmployee(null);
                  setHideVoter(false);
                  setImgUrl(null);
                  setFileName(null);
                  setOptions([]);
                  setInputText("");
                }}
              />
              <Button
                className="save_btn text-xs"
                icon="pi pi-save"
                aria-label="Save"
                label="Save draft"
                disabled
              />
              <Button
                className="publish_btn text-xs"
                icon="pi pi-calendar"
                aria-label="publish"
                label="Publish"
                onClick={
                  poll === null ||
                  departments === null ||
                  Publish === null ||
                  expiryDate === null
                    ? showError
                    : publish
                }
              />
            </div>
          )}
          {Publish === "SCHEDULE" && (
            <div className="flex gap-2 mr-3 align-items-center">
              <Button
                className="text-sm cancel_btn "
                icon="pi pi-times"
                label="Cancel"
                severity="danger"
                onClick={() => {
                  setVisibleRight(false);
                  setPoll("");
                  setDepartments([]);
                  setDescription("");
                  setPublish(null);
                  setPublishDate(null);
                  setExpiryDate(null);
                  setReminderDate(null);
                  setShowOnFeedEmployee(null);
                  setHideVoter(false);
                  setImgUrl(null);
                  setFileName(null);
                  setOptions([]);
                  setInputText("");
                }}
              />

              <Button
                style={{ width: "170px" }}
                className=" publish_btn text-xs"
                icon="pi pi-calendar"
                aria-label="SCHEDULE"
                label="Schedule Publish"
                onClick={
                  poll === null ||
                  departments === null ||
                  Publish === null ||
                  publishDate === null
                    ? showError
                    : publish
                }
              />
            </div>
          )}
        </div>
      </Sidebar>
    </div>
  );
}
