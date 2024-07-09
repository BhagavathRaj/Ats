import React, { useState } from "react";
import AdsHead from "./AdsHead";
import AdsBody from "./AdsBody";
import { Route, Routes } from "react-router-dom";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import PanelLayout from "./AdsInfo/PanelLayout";

const AdsLayout = () => {
    const [openContent, setOpenContent] = useState(false);
    return (
      <>
        <PanelGroup direction="horizontal">
              <Panel defaultSize={30} minSize={30}>
                <AdsHead />
                <AdsBody  setOpenContent={(id) => setOpenContent(id)}
              openContent={openContent}/>
              </Panel>
              {openContent && (
                <>
              <PanelResizeHandle
                style={{
                  backgroundColor: "#ddd",
                  width: "2px",
                  cursor: "col-resize",
                }}/>
            
          
          <Panel defaultSize={70} minSize={70}>
            <Routes>
              <Route path="/:id/*" element={<PanelLayout setOpenContent={setOpenContent}/>} />
            </Routes>
          </Panel> </> )}
        </PanelGroup>
      </>
    );
  };

export default AdsLayout
