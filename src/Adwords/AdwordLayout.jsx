import React, { useState } from 'react';
import AdwordHead from './AdwordHead';
import AdwordBody from './AdwordBody';
import { Route, Routes } from 'react-router-dom';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import PanelLayout from './AdwordInfo/PanelLayout';

const AdwordLayout = () => {
  const [openContent, setOpenContent] = useState(false);
  const [campaignName, setCampaignName] = useState('');
  const handleCampaignName = (name) => {
    setCampaignName(name);
};
  return (
    <>
      <PanelGroup direction="horizontal">
        <Panel defaultSize={30} minSize={30}>
          <AdwordHead />
          <AdwordBody
            handleCampaignName={handleCampaignName}
            setOpenContent={(id) => setOpenContent(id)}
            openContent={openContent}
          />
        </Panel>
        {openContent && (
          <>
            <PanelResizeHandle
              style={{
                backgroundColor: '#ddd',
                width: '2px',
                cursor: 'col-resize',
              }}
            />
            <Panel defaultSize={70} minSize={70}>
              <Routes>
                <Route
                  path="/:id/*"
                  element={
                    <PanelLayout
                      setOpenContent={setOpenContent}
                      campaignName={campaignName}
                    />
                  }
                />
              </Routes>
            </Panel>{' '}
          </>
        )}
      </PanelGroup>
    </>
  );
};

export default AdwordLayout;
