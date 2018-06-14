import React from 'react';
import ChatListView from './ChatListView';
import ChatView from './ChatView';

const MainChatPage = () => (
  <div className="content-container content-container--chat-view-split">
    <ChatListView />
    <ChatView />
  </div>
);

export default MainChatPage;
