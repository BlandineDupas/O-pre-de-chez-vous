/* eslint-disable import/prefer-default-export */
/**
 * Fonction qui retourne un id supérieur à l'id max du tableau d'entrée
 * @param {array} items - tableau d'objet avec un id
 */
// export const getHighestId = (items) => {
//   const ids = items.map((item) => item.id);
//   const maxId = Math.max(...ids);

//   return maxId + 1;
// };

export const isAuthor = (author, pseudo) => author === pseudo;

import slugify from 'slugify';


export const slugifyText = (text = '') => {
  const modifiedText = text.replace(/&/g, '').replace(/_/g, '-');
  return slugify(modifiedText, {
    lower: true,
    remove: /@/g,
  });
};

export const changeDateFormat = (dateFormated) => {
  const newDate = new Date(dateFormated);
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const middleDate = newDate.toLocaleDateString('de-DE', options);
  const step_date = middleDate.replace('.', '/').replace('.', '/');
  return step_date;
};

export const changeDateTime = (dateFormated) => {
  const newDate = new Date(dateFormated);
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const middleDate = newDate.toLocaleDateString('ko-KR', options);
  const step_date = middleDate.replace('.', '-').replace('.', '-');
  return step_date;
};

