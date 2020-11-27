export const FETCH_TAGS = 'FETCH_TAGS';
export const SAVE_TAG = 'SAVE_TAG';

export const fetchTags = (tagsIriArray, producerId) => ({
  type: FETCH_TAGS,
  tagsIriArray,
  producerId,
});

export const saveTag = (tag, producerId) => ({
  type: SAVE_TAG,
  tag,
  producerId,
});
