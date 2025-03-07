"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { useCreateChatClient, Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';
import 'stream-chat-react/dist/css/v2/index.css';

const ChatForum = ({ clerkUser, slug }) => {
    const apiKey = 'bp6twe7gmjyq';
    const [channel, setChannel] = useState(null);
    const [isClient, setIsClient] = useState(false);
    const [isLoading, setIsLoading] = useState(true); 
    const userId = clerkUser?.id;
    const userName = clerkUser?.name;
    const userToken = clerkUser?.token;

    const user = {
        id: userId,
        name: userName,
        image: `https://getstream.io/random_png/?name=${userName}`,
    };

    const client = useCreateChatClient({
        apiKey,
        tokenOrProvider: userToken,
        userData: user,
    });

    const setupChannel = useCallback(async () => {
        if (!client || !userId || !slug) return;

        try {
            const newChannel = client.channel('messaging', slug, {
                image: 'https://getstream.io/random_png/?name=react',
                name: 'Discussion',
                members: [userId],
            });

            await newChannel.watch();

            setChannel(newChannel);
            setIsLoading(false); // Data loaded, stop loading
        } catch (error) {
            console.error("Error setting up channel:", error);
            setIsLoading(false);
        }
    }, [client, userId, slug]);

    useEffect(() => {
        setIsClient(true);
        if (userToken) {
            setupChannel();
        } else {
            setIsLoading(false);
        }
    }, [setupChannel, userToken]);

    if (!isClient) {
        return <div>Loading chat...</div>;
    }

    if (isLoading) {
        return <div>Loading chat information...</div>; // Loading message
    }

    if (!client) {
        return <div>Setting up client & connection...</div>;
    }

    if (!userToken) {
        return <div>User authentication error.</div>;
    }

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