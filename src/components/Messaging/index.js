import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// STYLES
import './styles.scss';
import Page from 'src/components/Parts/Page';
import MessageDetails from 'src/containers/MessageDetails';

const Messaging = ({
  userId,
  fetchDiscussions,
  discussions,
}) => {
  // useEffect(() => fetchDiscussions(userId), []);
  return (
    <Page title="Mes discussions">
      <div className="messaging">
        {/* {discussions.map((discussion) => ( */}
        <MessageDetails
          link="/messages/blandine"
          user="Blandine"
          date="26 Septembre 2020"
          author="Raphaël"
        />
        <MessageDetails
          link="/messages/:slug"
          user="Maureen"
          date="26 Septembre 2020"
          author="Raphaël"
        />
        <MessageDetails
          link="/messages/:slug"
          user="Rémy"
          date="26 Septembre 2020"
          author="Raphaël"
        />
        <MessageDetails
          link="/messages/:slug"
          user="Thomas"
          date="26 Septembre 2020"
          author="Raphaël"
        />
        <MessageDetails
          link="/messages/:slug"
          user="Romain"
          date="26 Septembre 2020"
          author="Raphaël"
        />
        <MessageDetails
          link="/messages/:slug"
          user="Fanny"
          date="26 Septembre 2020"
          author="Raphaël"
        />
        {/* ))} */}
      </div>
        <div className="viewMore">
          <a href="" className="viewMore__messaging">Voir plus...</a>
        </div>
    </Page>
  );
};

Messaging.propTypes = {
  userId: PropTypes.number.isRequired,
  fetchDiscussions: PropTypes.func.isRequired,
  discussions: PropTypes.array.isRequired,
};

export default Messaging;
