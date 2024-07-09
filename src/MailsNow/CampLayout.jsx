import React, { useState } from "react";
import Header from "./Header";
import Body from "./Body";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { Box } from "@mui/material";
import InfoLayout from "./CampInfo/InfoLayout";
import { Routes, Route,  } from "react-router-dom";

const CampLayout = () => {
  const [openContent, setOpenContent] = useState(false);

  return (
    <>
    <PanelGroup direction="horizontal">
      <Panel defaultSize={30} minSize={30}>
        <Box >
          <Header />
          <Body
            setOpenContent={(id) => setOpenContent(id)}
            openContent={openContent}
          />
        </Box>{" "}
      </Panel>
      {openContent && (
        <>
          <PanelResizeHandle
            style={{
              backgroundColor: "#ddd",
              width: "2px",
              cursor: "col-resize",
            }}
          />
          <Panel defaultSize={70} minSize={70}>
            <Routes>
              <Route
                path="/:id/*"
                element={<InfoLayout setOpenContent={setOpenContent} />}
              />
            </Routes>
          </Panel>
        </>
      )}
    </PanelGroup>
   
    </>
  );
};

export default CampLayout;
