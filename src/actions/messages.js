export const FETCH_DISCUSSIONS = 'FETCH_DISCUSSIONS';
export const SAVE_DISCUSSIONS = 'SAVE_DISCUSSIONS';
export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const SAVE_MESSAGES = 'SAVE_MESSAGES';
export const SET_NEW_MESSAGE_CONTENT = 'SET_NEW_MESSAGE_CONTENT';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const SAVE_NEW_MESSAGE = 'SAVE_NEW_MESSAGE';
export const CLEAR_DISCUSSION = 'CLEAR_DISCUSSION';
export const LOAD_DISCUSSION = 'LOAD_DISCUSSION';
export const FETCH_CORRESPONDANT_USERNAME = 'FETCH_CORRESPONDANT_USERNAME';
export const SAVE_CORRESPONDANT_DATA = 'SAVE_CORRESPONDANT_DATA';


export const SUBMIT_MESSAGE = 'SUBMIT_MESSAGE';

export const submitMessage = () => ({
  type: SUBMIT_MESSAGE,
});

export const fetchDiscussions = (userId) => ({
  type: FETCH_DISCUSSIONS,
  userId: 6,
});

export const saveDiscussions = (messages) => ({
  type: SAVE_DISCUSSIONS,
  userId: 6,
});

export const fetchMessages = (userId, addresseeIri) => ({
  type: FETCH_MESSAGES,
  userId,
  addresseeIri,
});

export const saveMessages = (messagesArray) => ({
  type: SAVE_MESSAGES,
  messagesArray,
});

export const setNewMessageContent = (message) => ({
  type: SET_NEW_MESSAGE_CONTENT,
  message,
});

export const sendMessage = () => ({
  type: SEND_MESSAGE,
});

export const saveNewMessage = (message) => ({
  type: SAVE_NEW_MESSAGE,
  message,
});

export const clearDiscussion = () => ({
  type: CLEAR_DISCUSSION,
});

export const loadDiscussion = (addresseeIri) => {
  console.log('loadDiscussion', addresseeIri);
  return {
  type: LOAD_DISCUSSION,
  addresseeIri,
}};

export const fetchCorrespondantUsername = () => ({
  type: FETCH_CORRESPONDANT_USERNAME,
});

export const saveCorrespondantData = (user) => {
  // console.log('saveUserData', user);
  return {
    type: SAVE_CORRESPONDANT_DATA,
    user,
  };
};
