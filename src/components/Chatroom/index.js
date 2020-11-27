import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// Components
import Chat from 'src/containers/Chat';
import Form from 'src/containers/Chatroom/Form';

// STYLES
import './styles.scss';

const Chatroom = ({
  messages,
  slug,
  userId,
  addresseeIri,
  fetchMessages,
}) => {
  // useEffect(() => fetchMessages(userId, addresseeIri), []);
console.log(messages);
  return (
  <div className="chatroom">
    {/* {messages.map((message) => (
      <Chat key={message.id} author={message.author} content={message.content} isMine />
    ))} */}
    <div className="chatroom__messages">
      {messages.map((message) => (
        <Chat
          key={message.id}
          author={message.author}
          content={message.content}
          isMine={message.isMine}
        />
      ))}
    </div>
    {/* <Chat author="Raphaël" content="Bonjour, je voudrais passer une commande de saucisse de Toulouse." isMine />
    <Chat author="Blandine" content="Bonjour, combien en voulez-vous ?." isMine />
    <Chat author="Raphaël" content="Disons 3kg ce serait possible ?" isMine />
    <Chat author="Blandine" content="Pas de souci. Vous veillerez à préciser au conducteur de prévoir une glacière pour le transport. Il faut la conserver au frais." isMine /> */}
    {/* <Chat author="Raphaël" content="Bonjour, je voudrais passer une commande de saucisse de Toulouse." isMine /> */}
    <Form />
  </div>
);
};
Chatroom.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
  userId: PropTypes.number.isRequired,
  addresseeId: PropTypes.number,
  fetchMessages: PropTypes.func,
};

Chatroom.defaultProps = {
  messages: [],
  addresseeIri: null,
  userId: null,
};

export default Chatroom;
