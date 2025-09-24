import { Menubar } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";
import User_Icon from "@/app/icon/Header/User_Icon";
import Setting_Icon from "@/app/icon/Cross_Functional_Icons/Setting_Icon";
import Logout_Icon from "@/app/icon/Header/Logout_Icon";
import Owais from "@/app/Menu_Bar_Label";
import Menu_Bar_Label from "@/app/Menu_Bar_Label";
import Setting_Header_Icon from "@/app/icon/Header/Setting_Header_Icon";

export default function Menu_Bar() {
  const items: MenuItem[] = [
    {
      label: <Menu_Bar_Label />,
      items: [
        { label: "Owais Ahmed" },
        { label: "Profile", icon: <User_Icon /> },
        { label: "Settings", icon: <Setting_Header_Icon/> },
        { label: "Logout", icon: <Logout_Icon /> },
      ],
    },
  ];

  return (
      <Menubar model={items} />
  );
}
