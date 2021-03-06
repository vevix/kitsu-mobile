import React from 'react';
import PropTypes from 'prop-types';

import { TabHeader } from 'kitsu/screens/Profiles/components/TabHeader';
import { TabContainer } from 'kitsu/screens/Profiles/components/TabContainer';
import { MediaRow } from 'kitsu/screens/Profiles/components/MediaRow';

export const component = ({ media }) => (
  <TabContainer light padded>
    <TabHeader title="Franchise" contentDark />
    <MediaRow
      title={media.canonicalTitle}
      summary={media.synopsis}
      thumbnail={{ uri: media.posterImage.large }}
      summaryLines={12}
    />
  </TabContainer>
);

component.propTypes = {
  media: PropTypes.shape({
    canonicalTitle: PropTypes.string.isRequired,
    synopsis: PropTypes.string.isRequired,
    posterImage: PropTypes.shape({
      large: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
