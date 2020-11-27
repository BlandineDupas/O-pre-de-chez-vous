import {
  SAVE_TAGS,
} from 'src/actions/tags';

const initialState = {
  tags: [],
};

const tags = (state = initialState, action = {}) => {
  switch (action.type) {
    // case SAVE_TAGS:
    //   // console.log(action.tagName);
    //   return {
    //     ...state,
    //     tags: action.tags,
    //   };
    default:
      return state;
  }
};

export default tags;
