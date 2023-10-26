/* eslint-disable no-unused-vars */
import { useState, useCallback } from "react";
import './sidebar-button-group.css'
import analytics from "../../assets/icons/dashboard/ic_analytics.png"
import analyticsUnselected from "../../assets/icons/dashboard/unselected_ic_analytics.png"
import invoice from "../../assets/icons/dashboard/ic_invoice.png"
import invoiceUnselected from "../../assets/icons/dashboard/unselected_ic_invoice.png"
import user from "../../assets/icons/dashboard/ic_user.png"
import userUnselected from "../../assets/icons/dashboard/unselected_ic_user.png"
import { usePostLogic } from "../../utils/post";


const types = [
  { id: 1, title: "Convocatorias", img: invoice, imgUnselected: invoiceUnselected},
  { id: 2, title: "Postulantes", img: user, imgUnselected: userUnselected},
  { id: 3, title: "Procesos", img: analytics, imgUnselected: analyticsUnselected}
];

export default function SidebarButtonGroup() {
  const [selected, setSelected] = useState(0);
  const [activeType, setActiveType] = useState("Convocatorias");

  const { handleSideBarButtonClick } = usePostLogic(); 

  const handleColor = (row) => {
    console.log(row)
    setActiveType(row.title);
    handleSideBarButtonClick(row.title)
  };


  return (
    <div className="sideBarButtonGroup">
      {types.map((type) => (
        <button
          className="sideBarButton"
          key={type.id}
          onClick={() => handleColor(type)}
          style={{
            backgroundColor: type.title === activeType ? "#CE0F69" : "",
            color: type.title === activeType ? "#FFFFFF" : ""
          }}
        >
          {activeType === type.title && (
            <img src={type.img} alt={type.title} className="sideBarIcon" key={type.id}/>
          )}
          {activeType !== type.title && (
            <img src={type.imgUnselected} alt={type.title} className="sideBarIcon" key={type.id}/>
          )}
          {type.title}
        </button>
      ))}
    </div>
  );
}
