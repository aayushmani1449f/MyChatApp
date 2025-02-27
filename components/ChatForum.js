"use client";
import React, { useState, useEffect } from 'react';
import { useCreateChatClient, Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';
import 'stream-chat-react/dist/css/v2/index.css';

const ChatForum = ({ clerkUser, slug }) => {
    const apiKey = 'bp6twe7gmjyq';
    const userId = clerkUser.id; // Use optional chaining to prevent errors if clerkUser is undefined
    const userName = clerkUser.name;
    const userToken = clerkUser.token;

    const user = {
        id: userId,
        name: userName,
        image: `https://getstream.io/random_png/?name=${userName}`,
    };

    const [channel, setChannel] = useState(null); // Initialize channel as null
    const client = useCreateChatClient({
        apiKey,
        tokenOrProvider: userToken,
        userData: user,
    });

    useEffect(() => {
        if (!client) return;

                const channel = client.channel('messaging', slug, {
                    image: 'https://getstream.io/random_png/?name=react',
                    name: 'Discussion',
                    members: [userId],
                });

        });
        setChannel(channel);

    if (!client) return <div>Setting up client & connection...</div>;

    return (
        <Chat client={client}>
          <Channel channel={channel}>
            <Window>
              <ChannelHeader />
              <MessageList />
              <MessageInput />
            </Window>
            <Thread />
          </Channel>
        </Chat>
      );
};

export default ChatForum;