/**
 * @format
 */

import 'react-native';
import React from 'react';
import Contacts from '../Ashlynn/Contacts.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Contacts />);
});
