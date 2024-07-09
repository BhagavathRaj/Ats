import React from 'react'
import { useLocation } from "react-router-dom";
import PanelHead from './PanelHead';
import PanelBody from './PanelBody';

const PanelLayout = ({setOpenContent}) => {
    const location = useLocation();
    return (
      <>
      <PanelHead  setOpenContent={setOpenContent} location={location} />
      <PanelBody />
    </>
    )
  }

export default PanelLayout
