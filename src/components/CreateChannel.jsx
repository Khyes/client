import React, { useState } from "react";
import { useChatContext, useMessageInputState } from "stream-chat-react";

import { UserList } from './';
import { CloseCreateChannel } from "../assets";

const ChannelNameInput = ({ channelName = '', setChannelName}) => {
  const handleChange = (event) => {
    event.preventDefault();

    setChannelName(event.target.value);
  }

  return (
    <div className="channel-name-input__wrapper">
      <p>Name</p>
      <input type="text" value={channelName} onChange={handleChange} placeholder="channel-name (no spaces)" />
      <p>Add Members</p>
    </div>
  )
}

const CreateChannel = ({ createType, setIsCreating }) => {
  const [channelName, setChannelName] = useState('');

  return (
    <div className="create-user">
      <div className="create-channel__header">
        <p>{createType === 'team' ? 'Create a New Channel' : 'Send a Direct Message'}</p>
        <CloseCreateChannel setIsCreating={setIsCreating} />
      </div>
      {createType === 'team' && <ChannelNameInput channelName={channelName} setChannelName={setChannelName} />}
      <UserList />
    </div>
  )
};

export default CreateChannel;
