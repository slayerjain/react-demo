import React from 'react';
import { MessageList, Input, Button } from 'react-chat-elements';
const ChatView = () => (
  <div className="content-container--message-list">
    <MessageList
      className="message-list"
      lockable
      toBottomHeight="100%"
      dataSource={[
        {
          position: 'right',
          type: 'text',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
          date: new Date(),
        },
        {
          position: 'left',
          type: 'text',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
          date: new Date(),
        },
        ]}
    />
    <Input
      className="content-container--message-input"
      placeholder="Type here..."
      autoHeight
      multiline
      rightButtons={
        <Button
          color="white"
          text="Send"
        />
      }
    />
  </div>
);

export default ChatView;
