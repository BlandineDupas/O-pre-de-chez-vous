// import {
//   ADD_MESSAGE,
//   SEND_MESSAGE,
//   SET_NEW_MESSAGE_CONTENT,
//   CHANGE_VALUE,
//   CHANGE_PSEUDO,
// } from 'src/actions/form';

// import { getHighestId } from 'src/selectors';

// const initialState = {
//   open: true,
//   pseudo: 'Raphael',
//   newMessageContent: '',
//   user: {
//     email: 'raphael@herocorp.io',
//     password: 'rocky',
//   },
//   messages: [
//     {
//       id: 12,
//       author: 'Maureen',
//       content: 'Salut ça va ?',
//     },
//     {
//       id: 54,
//       author: 'Maureen',
//       content: 'Ou en est ma commande ?',
//     },
//     {
//       id: 1,
//       author: 'Raphael',
//       content: 'elle arrive demain',
//     },
//   ],
// };

// // le reducer est une fonction qui retourne TOUJOURS un state
// // elle prend en entrée le state courant et une action/intention
// const form = (state = initialState, action = {}) => {
//   switch (action.type) {
//     case ADD_MESSAGE: {
//       const newMessage = {
//         id: getHighestId(state.messages),
//         author: 'Raphael',
//         content: state.newMessageContent,
//       };

//       const newMessages = [
//         ...state.messages,
//         newMessage,
//       ];

//       return {
//         ...state,
//         messages: newMessages,
//       };
//     }
//     case SEND_MESSAGE:
//       console.log('SEND_MESSAGE');

//       const newMessage = {
//         id: getHighestId(state.messages),
//         author: 'Raphael',
//         content: state.newMessageContent,
//       };

//       const newMessages = [
//         ...state.messages,
//         newMessage,
//       ];

//       return {
//         ...state,
//         messages: newMessages,
//         newMessageContent: '',
//       };


//     case SET_NEW_MESSAGE_CONTENT:
//       return {
//         ...state,
//         newMessageContent: action.message,
//       };
//     case CHANGE_VALUE: {
//       // pour avoir définir des noms de propriété d'objet
//       // dynamiques, il faut mettre des crochets autour
//       const newUser = {
//         ...state.user,
//         [action.key]: action.value,
//       };

//       return {
//         ...state,
//         user: newUser,
//       };
//     }
//     case CHANGE_PSEUDO:
//       return {
//         ...state,
//         pseudo: action.pseudo,
//       };
//     default:
//       return state;
//   }
// };

// export default form;
