import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Selectors
import { changeDateFormat, changeDateTime } from 'src/selectors';

// STYLES
import './styles.scss';

const MessageDetails = ({
  link,
  user,
  date,
  author,
  loadDiscussion,
  userId,
  addresseeIri,
}) => (
  <div
    className="message"
    // onClick={() => loadDiscussion(addresseeIri)}
  >
    <Link to={link}>
      <p>
        Discussion avec {user}
      </p>
      <p>Dernier message recu le <time dateTime={changeDateTime(date)}>{changeDateFormat(date)}</time> </p>
      <p> Par {author}</p>
    </Link>
  </div>
);

MessageDetails.propTypes = {
  link: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  loadDiscussion: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
  // addresseeIri: PropTypes.string.isRequired,
};

export default MessageDetails;
