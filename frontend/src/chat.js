

// import { ChatEngine } from 'react-chat-engine';

// import ChatFeed from './components/chat/ChatFeed';
// import './App.css';

// const Chat = () => {
//   if (!localStorage.getItem('username')) ;

//   return (
//     <ChatEngine
//       height="100vh"
//       projectID="25237e63-d052-4459-a86e-631bba96f16d"
//       userName="alaraj"
//       userSecret="123456"
//       renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
//       onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
//     />
//   );
// };

// export default Chat;




import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/chat/ChatFeed';
import './App.css';


const Chat = () => {
    if (!localStorage.getItem('username'))  ;

  return (
    <ChatEngine
      height="100vh"
      projectID="25237e63-d052-4459-a86e-631bba96f16d"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
    //   renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
    
  );
};

export default Chat;
