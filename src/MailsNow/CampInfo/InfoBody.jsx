import React from 'react';
import {Routes,Route,Navigate} from 'react-router-dom';
import Analytics from './element/analytics/Analytics';
import Steps from './element/Steps';
import Prospects from './element/Prospects'
import Email from './element/Email'
import Settings from './element/Settings'
import Score from './element/Score'
const InfoBody = () => {
  return (
  <Routes>

    <Route  path="analytics" element={<Analytics/>}/>
    <Route path="steps" element={<Steps/>}/>
    <Route path="prospects" element={<Prospects/>}/>
    <Route path="email" element={<Email/>}/>
    <Route path="sequence_score" element={<Score/>}/>
    <Route path="settings" element={<Settings/>}/>
    <Route path="*"  element={<Navigate to={"analytics"}/>} />
  </Routes>
  )
}

export default InfoBody
