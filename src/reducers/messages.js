import {
  SAVE_MESSAGES,
  SET_NEW_MESSAGE_CONTENT,
  SAVE_NEW_MESSAGE,
  CLEAR_DISCUSSION,
  LOAD_DISCUSSION,
  SAVE_DISCUSSIONS,
  SAVE_CORRESPONDANT_DATA,
  SUBMIT_MESSAGE,
} from 'src/actions/messages';

const initialState = {
  discussion: {
    messages: [
      {
        id: 1,
        content: 'Bonjour, je voudrais passer une commande de saucisse de Toulouse.',
        author: 'Raphaël',
        isMine: true,
      },
      {
        id: 2,
        content: 'Bonjour, combien en voulez-vous ?.',
        author: 'Blandine',
        isMine: false,
      },
      {
        id: 4,
        content: 'Disons 3kg ce serait possible ?',
        author: 'Raphaël',
        isMine: true,
      },
      {
        id: 5,
        content: 'Pas de souci. Vous veillerez à préciser au conducteur de prévoir une glacière pour le transport. Il faut la conserver au frais.',
        author: 'Blandine',
        isMine: false,
      },
    ],
    addressee: {
      iri: '',
      firstname: '',
    },
    author: {
      id: '',
      firstname: '',
    },
  },
  discussions: [],
  newMessageContent: '',
};

const messages = (state = initialState, action = {}) => {
  switch (action.type) {
    case SUBMIT_MESSAGE:
      return {
        ...state,
        discussion: {
          ...state.discussion,
          messages: [
            ...state.discussion.messages,
            {
              id: 6,
              content: state.newMessageContent,
              author: 'Raphaël',
              isMine: true,
            },
          ],
        },
        newMessageContent: '',
      };
    case SET_NEW_MESSAGE_CONTENT:
      return {
        ...state,
        newMessageContent: action.message,
      };
    case SAVE_MESSAGES:
      let newMessages = [];
      if (state.discussion.messages) {
        newMessages = state.discussion.messages;
      }
      action.messagesArray.forEach((message) => newMessages.push(message));

      return {
        ...state,
        discussion: {
          ...state.discussion,
          messages: newMessages,
        },
      };
    case SAVE_NEW_MESSAGE:
      newMessages = [];
      if (state.discussion.messages) {
        newMessages = state.discussion.messages;
      }
      newMessages.push(action.message);
      return {
        ...state,
        discussion: {
          ...state.discussion,
          messages: newMessages,
        },
        newMessageContent: '',
      };
    case CLEAR_DISCUSSION:
      return {
        ...state,
        discussion: {
          messages: [],
          addressee: {
            iri: null,
            firstname: '',
          },
          author: {
            iri: null,
            firstname: '',
          },
        },
      };
    // case LOAD_DISCUSSION:
    //   console.log(LOAD_DISCUSSION, action.addresseeIri);
    //   return {
    //     ...state,
    //     discussion: {
    //       messages: [],
    //       author: {
    //         iri: action.userIri,
    //         username: action.authorUsername,
    //       },
    //       addressee: {
    //         iri: action.addresseeIri,
    //         username: action.addresseeUsername,
    //       },
    //     },
    //   };
    case SAVE_CORRESPONDANT_DATA:
      // console.log (SAVE_CORRESPONDANT_DATA, action.user);
      const allDiscussions = state.discussions;
      allDiscussions.forEach((discussion) => {
        // console.log(discussion);
        if (discussion.correspondantIri === action.user['@id']) {
          discussion.correspondantUsername = action.user.username;
        }
      });
      console.log(allDiscussions);
      return {
        ...state,
        discussions: allDiscussions,
      };
    case SAVE_DISCUSSIONS:
      // console.log(SAVE_DISCUSSIONS);
      // Retrieve all saved messages
      const allMessages = state.discussion.messages;
      // console.log('allMessages', allMessages);
      // Sort messages in a new array, by correspondant and date
      let workingObject = {};
      const newDiscussions = [];

      allMessages.forEach((message) => {
        const author = message.author;
        const addressee = message.addressee;
        // Determines who is the correspondant (vs the connected user)
        let correspondant = '';
        if (`/api/users/${action.userId}` === author) {
          correspondant = addressee;
        }
        if (`/api/users/${action.userId}` === addressee) {
          correspondant = author;
        }
        // If correspondant isn't user himself, we save messages in an object, by correspondant
        if (correspondant !== `/api/users/${action.userId}`) {
          if (workingObject[correspondant]) {
            workingObject[correspondant] = [
              ...workingObject[correspondant],
              message,
            ];
          }
          else {
            workingObject[correspondant] = [message];
          }
        }
        // console.log('workingObject', workingObject);
      });

      // Now, from the sorted messages, we get an array of last message for each discussion
      Object.entries(workingObject).forEach((objectEntry) => {
        let moreRecentMessage = {};
        // console.log('la propriété', objectEntry[0]);
        // console.log('les messages associés', objectEntry[1]);
        // console.log('type', typeof objectEntry[1][0]);
        // console.log('date ?', Date(objectEntry[1][0]));
        objectEntry[1].forEach((mess) => {
          if (moreRecentMessage === {}) {
            moreRecentMessage = mess;
          }
          else if (Date(mess.createdAt) >= Date(moreRecentMessage.createdAt)) {
            moreRecentMessage = mess;
            // console.log(moreRecentMessage);
          }
        });
        // console.log('morerecent', moreRecentMessage);
        newDiscussions.push({
          correspondantUsername: '',
          correspondantIri: objectEntry[0],
          moreRecentMessage,
        });
      });
      // console.log(newDiscussions);

      return {
        ...state,
        discussions: newDiscussions,
      };
    default:
      return state;
  }
};

export default messages;
