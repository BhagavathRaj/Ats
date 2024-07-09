import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom';
import AdwordSetting from './element/AdwordSetting';
import AdwordPtc from './element/AdwordAnalytics/AdwordPtc';

const PanelBody = () => {
  return (
    <Routes>
    <Route  path="analytics"  element={<AdwordPtc/>}/>
    <Route path="settings" element={<AdwordSetting/>}/>
    <Route path="*"  element={<Navigate to={"analytics"}/>}/>
  </Routes>
  )
}

export default PanelBody
