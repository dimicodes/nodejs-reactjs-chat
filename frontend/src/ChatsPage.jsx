import React from 'react';

import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
    return  (
        
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow
                projectId="56eae6e1-29b8-4eef-a32e-8af14342b4e6"
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%' }}
            />
        </div>


    );
}

export default ChatsPage