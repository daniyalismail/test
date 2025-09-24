import { StyleClass } from "primereact/styleclass";
import React, { useRef } from "react";
import Community_Icon from "../../icon/Community_Icons/Community_Icon";
import { Ripple } from "primereact/ripple";
import Announcement_Icon from "../../icon/Community_Icons/Announcement_Icon";
import Polls_Survey from "../../icon/Community_Icons/Polls_Survey";
import Survey_Icon from "../../icon/Community_Icons/Survey_Icon";
import Cross_Functional_Icon from "@/app/icon/Cross_Functional_Icons/Cross_Functional_Icon";
import Builder_Icon from "@/app/icon/Cross_Functional_Icons/Builder_Icon";
import Questionnaire_Icon from "@/app/icon/Cross_Functional_Icons/Questionnaire_Icon";
import Form_Icon from "@/app/icon/Cross_Functional_Icons/Form_Icon";
import Setting_Icon from "@/app/icon/Cross_Functional_Icons/Setting_Icon";
import Ques_Type_Icon from "@/app/icon/Cross_Functional_Icons/Ques_Type_Icon";
import Workflow_Icon from "@/app/icon/Cross_Functional_Icons/Workflow_Icon";

export default function Cross_Functional_Dropdown() {
  const btnRef2 = useRef<any>(null);
  const btnRef3 = useRef<any>(null);
  const btnRef4 = useRef<any>(null);
  const btnRef5 = useRef<any>(null);
  const btnRef6 = useRef<any>(null);

  return (
    <ul className="list-none pl-3 pr-3 m-0">
      <li>
        <StyleClass
          nodeRef={btnRef2}
          selector="@next"
          enterFromClassName="hidden"
          enterActiveClassName="slidedown"
          leaveToClassName="hidden"
          leaveActiveClassName="slideup"
        >
          <div
            ref={btnRef2}
            className="p-ripple border-round-lg pt-2 pb-2 pl-2 pr-2 lists flex align-items-center  justify-content-between text-600 cursor-pointer"
          >
            <div className="flex align-items-center gap-1">
              <span>
                <Cross_Functional_Icon />
              </span>
              <span className="font-bold text-xs">
                CROSS FUNCTIONAL TOOLS
              </span>
            </div>
            <i className="pi pi-chevron-down"></i>
            <Ripple />
          </div>
        </StyleClass>
        <ul className="list-none pl-2 p-0 m-0 overflow-hidden hidden">
          <li>
            <StyleClass
              nodeRef={btnRef3}
              selector="@next"
              enterFromClassName="hidden"
              enterActiveClassName="slidedown"
              leaveToClassName="hidden"
              leaveActiveClassName="slideup"
            >
              <div
                ref={btnRef3}
                className="p-ripple border-round-lg pt-2 pb-2 pl-2 pr-2 lists flex align-items-center  justify-content-between text-600 cursor-pointer"
              >
                <div className="flex align-items-center gap-1">
                  <span>
                    <Builder_Icon />
                  </span>
                  <span className="font-bold text-xs">Builder</span>
                </div>
                <i className="pi pi-chevron-down"></i>
                <Ripple />
              </div>
            </StyleClass>
            <ul className="list-none pl-2 p-0 m-0 overflow-hidden hidden ">
              <li>
                <a className="p-ripple lists flex align-items-center cursor-pointer border-round-lg  pt-2 pb-2 pl-2 pr-2 border-round text-700  transition-duration-150 transition-colors w-full">
                  <div className="flex align-items-center gap-1">
                    <span>
                      <Announcement_Icon />
                    </span>
                    <span className="font-bold text-xs ">
                      Builder Template
                    </span>
                  </div>
                  <Ripple />
                </a>
              </li>
              <li>
                <a className="p-ripple lists flex align-items-center cursor-pointer border-round-lg  pt-2 pb-2 pl-2 pr-2 border-round text-700  transition-duration-150 transition-colors w-full">
                  <div className="flex align-items-center gap-1">
                    <span>
                      <Announcement_Icon />
                    </span>
                    <span className="font-bold text-xs ">
                      Form builder template
                    </span>
                  </div>
                  <Ripple />
                </a>
              </li>
              <li>
                <StyleClass
                  nodeRef={btnRef4}
                  selector="@next"
                  enterFromClassName="hidden"
                  enterActiveClassName="slidedown"
                  leaveToClassName="hidden"
                  leaveActiveClassName="slideup"
                >
                  <div
                    ref={btnRef4}
                    className="p-ripple border-round-lg pt-2 pb-2 pl-2 pr-2 lists flex align-items-center  justify-content-between text-600 cursor-pointer"
                  >
                    <div className="flex align-items-center gap-1">
                      <span>
                        <Cross_Functional_Icon />
                      </span>
                      <span className="font-bold text-xs">Settings</span>
                    </div>
                    <i className="pi pi-chevron-down"></i>
                    <Ripple />
                  </div>
                </StyleClass>
                <ul className="list-none pl-2 p-0 m-0 overflow-hidden hidden">
                  <li>
                    <a className="p-ripple lists flex align-items-center cursor-pointer border-round-lg  pt-2 pb-2 pl-2 pr-2 border-round text-700  transition-duration-150 transition-colors w-full">
                      <div className="flex align-items-center gap-1">
                        <span>
                          <Cross_Functional_Icon />
                        </span>
                        <span className="font-bold text-xs ">
                          Builder Template Category
                        </span>
                      </div>
                      <Ripple />
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <StyleClass
              nodeRef={btnRef5}
              selector="@next"
              enterFromClassName="hidden"
              enterActiveClassName="slidedown"
              leaveToClassName="hidden"
              leaveActiveClassName="slideup"
            >
              <div
                ref={btnRef5}
                className="p-ripple border-round-lg pt-2 pb-2 pl-2 pr-2 lists flex align-items-center  justify-content-between text-600 cursor-pointer"
              >
                <div className="flex align-items-center gap-1">
                  <span>
                    <Form_Icon />
                  </span>
                  <span className="font-bold text-xs">Forms</span>
                </div>
                <i className="pi pi-chevron-down"></i>
                <Ripple />
              </div>
            </StyleClass>
            <ul className="list-none pl-2 p-0 m-0 overflow-hidden hidden">
              <li>
                <a className="p-ripple lists flex align-items-center cursor-pointer border-round-lg  pt-2 pb-2 pl-2 pr-2 border-round text-700  transition-duration-150 transition-colors w-full">
                  <div className="flex align-items-center gap-1">
                    <span>
                      <Questionnaire_Icon />
                    </span>
                    <span className="font-bold text-xs ">Questionnaires</span>
                  </div>
                  <Ripple />
                </a>
              </li>
              <li>
                <StyleClass
                  nodeRef={btnRef6}
                  selector="@next"
                  enterFromClassName="hidden"
                  enterActiveClassName="slidedown"
                  leaveToClassName="hidden"
                  leaveActiveClassName="slideup"
                >
                  <div
                    ref={btnRef6}
                    className="p-ripple border-round-lg pt-2 pb-2 pl-2 pr-2 lists flex align-items-center  justify-content-between text-600 cursor-pointer"
                  >
                    <div className="flex align-items-center gap-1">
                      <span>
                        <Setting_Icon />
                      </span>
                      <span className="font-bold text-xs">Settings</span>
                    </div>
                    <i className="pi pi-chevron-down"></i>
                    <Ripple />
                  </div>
                </StyleClass>
                <ul className="list-none pl-2 p-0 m-0 overflow-hidden hidden">
                  <li>
                    <a className="p-ripple lists flex align-items-center cursor-pointer border-round-lg  pt-2 pb-2 pl-2 pr-2 border-round text-700  transition-duration-150 transition-colors w-full">
                      <div className="flex align-items-center gap-1">
                        <span>
                          <Ques_Type_Icon />
                        </span>
                        <span className="font-bold text-xs ">
                          Questionnaire Types
                        </span>
                      </div>
                      <Ripple />
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a className="p-ripple lists flex align-items-center cursor-pointer border-round-lg  pt-2 pb-2 pl-2 pr-2 border-round text-700  transition-duration-150 transition-colors w-full">
              <div className="flex align-items-center gap-1">
                <span>
                  <i className="pi pi-fw pi-exclamation-triangle"></i>
                </span>
                <span className="font-bold text-xs ">Important Dates</span>
              </div>
              <Ripple />
            </a>
          </li>
          <li>
            <a className="p-ripple lists flex align-items-center cursor-pointer border-round-lg  pt-2 pb-2 pl-2 pr-2 border-round text-700  transition-duration-150 transition-colors w-full">
              <div className="flex align-items-center gap-1">
                <span>
                  <i className="pi pi-fw pi-exclamation-triangle"></i>
                </span>
                <span className="font-bold text-xs ">NDA</span>
              </div>
              <Ripple />
            </a>
          </li>
          <li>
            <a className="p-ripple lists flex align-items-center cursor-pointer border-round-lg  pt-2 pb-2 pl-2 pr-2 border-round text-700  transition-duration-150 transition-colors w-full">
              <div className="flex align-items-center gap-1">
                <span>
                  <i className="pi pi-fw pi-exclamation-triangle"></i>
                </span>
                <span className="font-bold text-xs ">Policy</span>
              </div>
              <Ripple />
            </a>
          </li>
          <li>
            <a className="p-ripple lists flex align-items-center cursor-pointer border-round-lg  pt-2 pb-2 pl-2 pr-2 border-round text-700  transition-duration-150 transition-colors w-full">
              <div className="flex align-items-center gap-1">
                <span>
                  <i className="pi pi-fw pi-exclamation-triangle"></i>
                </span>
                <span className="font-bold text-xs ">Reporting Insights</span>
              </div>
              <Ripple />
            </a>
          </li>
          <li>
            <a className="p-ripple lists flex align-items-center cursor-pointer border-round-lg  pt-2 pb-2 pl-2 pr-2 border-round text-700  transition-duration-150 transition-colors w-full">
              <div className="flex align-items-center gap-1">
                <span>
                  <Survey_Icon />
                </span>
                <span className="font-bold text-xs ">Surveys</span>
              </div>
              <Ripple />
            </a>
          </li>
          <li>
            <a className="p-ripple lists flex align-items-center cursor-pointer border-round-lg  pt-2 pb-2 pl-2 pr-2 border-round text-700  transition-duration-150 transition-colors w-full">
              <div className="flex align-items-center gap-1">
                <span>
                  <Workflow_Icon />
                </span>
                <span className="font-bold text-xs ">Workflows</span>
              </div>
              <Ripple />
            </a>
          </li>
        </ul>
      </li>
    </ul>
  );
}
