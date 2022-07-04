import { useContext } from 'react';
import BackContext from './BackContext';

function Messages() {
  const { messages } = useContext(BackContext);

  return (
    <div className="show-message">
      {messages.map((message) => (
        <div
          className={'alert alert-' + message.type}
          role="alert"
          key={message.id}
        >
          {message.text}
        </div>
      ))}
    </div>
  );
}

export default Messages;
