import React from 'react';
import { ChatList } from 'react-chat-elements';


const ChatListView = () => (
  <div className="content-container--chat-list">
    <ChatList
      className="chat-list content-container--chat-list-item"
      dataSource={[
        {
          avatar: 'https://facebook.github.io/react/logo-og.png',
          alt: 'Reactjs',
          title: 'Shubham',
          subtitle: 'What are you doing?',
          date: new Date(),
          unread: 0,
        },
        {
          alt: 'Reactjs',
          title: 'Pankaj',
          subtitle: 'Here are my Powers',
          date: new Date(),
          unread: 2,
        },
        ]}
    />
  </div>
);

export default ChatListView;
