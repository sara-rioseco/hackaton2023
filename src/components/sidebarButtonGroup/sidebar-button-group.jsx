/* eslint-disable react/jsx-key */
import { useState } from "react";
import './sidebar-button-group.css'
import styled from "styled-components";
import analytics from "../../assets/icons/dashboard/ic_analytics.png"
import analyticsUnselected from "../../assets/icons/dashboard/unselected_ic_analytics.png"
import invoice from "../../assets/icons/dashboard/ic_invoice.png"
import invoiceUnselected from "../../assets/icons/dashboard/unselected_ic_invoice.png"
import user from "../../assets/icons/dashboard/ic_user.png"
import userUnselected from "../../assets/icons/dashboard/unselected_ic_user.png"


const theme = {
  pink: {
    default: "#CE0F69",
    hover: "#000000"
  }
};

const sideBarButton = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: white;
  font-family: 'Public Sans' sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  text-align: left;
  width: 248px;
  height: 48px;
  padding: 0px 12px 0px 16px;
  border: none;
  border-radius: 8px;
  box-sizing: norder-box;
  outline: 0;
  cursor: pointer;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.1;
  }
`;

sideBarButton.defaultProps = {
  theme: "pink"
};


const ButtonToggle = styled(sideBarButton)`
  background-color: #FFFFFF;
  color: #6F7271;
  &:hover {
    background-color: #FFFFFF;
  }
  ${({ active }) =>
    active &&
    `
    background-color: #CE0F69;
    color: #FFFFFF;
    opacity: 1;
    &:hover {
      background-color: #900A49;
    }
  `}
`;

const types = ["Convocatorias", "Postulantes", "Procesos"];

function ToggleGroup() {
  const [active, setActive] = useState(types[0]);
  return (
    <div className='sideBarButtonGroup'>
      {types.map((type) => (
        <ButtonToggle active={active === type} onClick={() => setActive(type)} key={type}>
          <div className='sideBarButton'>
            {(type ==="Convocatorias" && active === type) && (
              <img src={invoice} alt={invoice} className="sideBarIcon" key={invoice}/>
            )}
            {(type ==="Convocatorias" && active !== type) && (
              <img src={invoiceUnselected} alt={invoiceUnselected} className="sideBarIcon" key={invoiceUnselected}/>
            )}
            {(type ==="Postulantes" && active === type) && (
              <img src={user} alt={user} className="sideBarIcon" key={user}/>
            )}
            {(type ==="Postulantes" && active !== type) && (
              <img src={userUnselected} alt={userUnselected} className="sideBarIcon" key={userUnselected}/>
            )}
            {(type ==="Procesos" && active === type) && (
              <img src={analytics} alt={analytics} className="sideBarIcon" key={analytics}/>
            )}
            {(type ==="Procesos" && active !== type) && (
              <img src={analyticsUnselected} alt={analyticsUnselected} className="sideBarIcon" key={analyticsUnselected}/>
            )}
            <div className="sideBarOption">{type}</div>
          </div>
        </ButtonToggle>
      ))}
    </div>
  );
}


export default function SidebarButtonGroup () {
  // RENDERIZADO
  return (
    <>
      <ToggleGroup />
    </>
  );
}