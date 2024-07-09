import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom';
import AdsSetting from './element/AdsSetting';
import AdsPtc from './element/AdsAnalytics/AdsPtc';
const PanelBody = () => {
  return (
    <Routes>
    <Route  path="analytics"  element={<AdsPtc/>}/>
    <Route path="settings" element={<AdsSetting/>}/>
    <Route path="*"  element={<Navigate to={"analytics"}/>}/>
  </Routes>
  )
}

export default PanelBody
