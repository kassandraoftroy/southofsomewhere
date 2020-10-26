/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export default function HomePage() {
  return (
    <div>
        <h1>
            &nbsp;<FormattedMessage {...messages.header} />
        </h1>
        <div>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Ffree-vector%2Fantique-engraving-illustration-compass-black-white-clip-art-isolated_67600-2.jpg%3Fsize%3D626%26ext%3Djpg&f=1&nofb=1"/>
        </div>
        <p>
            &nbsp;<FormattedMessage {...messages.tagline} />
        </p>
    </div>
  );
}
