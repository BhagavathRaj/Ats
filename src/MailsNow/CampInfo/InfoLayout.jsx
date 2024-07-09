import React from "react";
import InfoHead from "./InfoHead";
import InfoBody from "./InfoBody";
import { useLocation } from "react-router-dom";

const InfoLayout = ({ setOpenContent }) => {
  const location = useLocation();

  return (
    <>
      <InfoHead setOpenContent={setOpenContent} location={location} />
      <InfoBody />
    </>
  );
};

export default InfoLayout;
