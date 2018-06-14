import React from 'react';
import { SideBar } from 'react-chat-elements';

const DashboardPage = () => (
  <SideBar
    top={
      <div>'TOP' area</div>
    }
    center={
      <div>'CENTER' area</div>
    }
    bottom={
      <div>'BOTTOM' area</div>
    }
  />
);

export default DashboardPage;
