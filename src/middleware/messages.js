import axios from 'axios';

import {
  FETCH_DISCUSSIONS,
  saveDiscussions,
  FETCH_MESSAGES,
  saveMessages,
  SEND_MESSAGE,
  saveNewMessage,
  clearDiscussion,
  fetchCorrespondantUsername,
  FETCH_CORRESPONDANT_USERNAME,
  saveCorrespondantData,
} from 'src/actions/messages';

const baseUriAPI = 'http://52.207.229.243';

const messages = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_DISCUSSIONS:
      // console.log(action.userId);
      axios.get(`${baseUriAPI}/api/messages`, {
        params: {
          author: `/api/users/${action.userId}`,
        },
        headers: {
          Authorization: `Bearer ${sessionStorage.jwt}`,
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          store.dispatch(saveMessages(response.data['hydra:member']));
          store.dispatch(saveDiscussions());
          store.dispatch(fetchCorrespondantUsername());
        })
        .catch((error) => console.log(error));
      axios.get(`${baseUriAPI}/api/messages`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.jwt}`,
          'Content-Type': 'application/json',
        },
        params: {
          addressee: `/api/users/${action.userId}`,
        },
      })
        .then((response) => {
          // console.log(response.data['hydra:member']);
          store.dispatch(saveMessages(response.data['hydra:member']));
          store.dispatch(saveDiscussions());
          store.dispatch(fetchCorrespondantUsername());
        })
        .catch((error) => console.log(error));
      break;
    case FETCH_CORRESPONDANT_USERNAME:
      // console.log(FETCH_CORRESPONDANT_USERNAME);
      const discussions = store.getState().messages.discussions;
      // console.log(discussions);
      discussions.forEach((discussion) => {
        axios.get(`${baseUriAPI}${discussion.correspondantIri}`, {
          headers: {
            Authorization: `Bearer ${sessionStorage.jwt}`,
            'Content-Type': 'application/json',
          },
        })
          .then((response) => {
            // console.log('REPONSE', response);
            store.dispatch(saveCorrespondantData(response.data));
          })
          .catch((error) => console.log(error));
      });
      break;
    case FETCH_MESSAGES:
      // store.dispatch(clearDiscussion());
      // console.log(action.userId, action.addresseeId, sessionStorage.jwt);
      axios.get(`${baseUriAPI}/api/messages`, {
        params: {
          author: `/api/users/${action.userId}`,
          addressee: action.addresseeIri,
        },
        headers: {
          Authorization: `Bearer ${sessionStorage.jwt}`,
          'Content-Type': 'application/json',
        },
      })
        .then((response) => store.dispatch(saveMessages(response.data['hydra:member'])))
        .catch((error) => console.log(error));
      axios.get(`${baseUriAPI}/api/messages`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.jwt}`,
          'Content-Type': 'application/json',
        },
        params: {
          author: action.addresseeIri,
          addressee: `/api/users/${action.userId}`,
        },
      })
        .then((response) => store.dispatch(saveMessages(response.data['hydra:member'])))
        .catch((error) => console.log(error));
      break;
    case SEND_MESSAGE:
      console.log(SEND_MESSAGE, store.getState().messages.discussion.addressee.iri);
      axios.post(`${baseUriAPI}/api/messages`, {
        content: store.getState().messages.newMessageContent,
        author: `/api/users/${store.getState().auth.user.id}`,
        addressee: store.getState().messages.discussion.addressee.iri,
        // content: 'test',
        // author: '/api/users/6',
        // addressee: '/api/users/16',
      }, {
        headers: {
          Authorization: `Bearer ${sessionStorage.jwt}`,
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          console.log("MESSAGE ENVOYE", response);
          store.dispatch(saveNewMessage(response.data))})
        .catch((error) => console.log(error));
      break;
    default:
      next(action);
  }
};

export default messages;
