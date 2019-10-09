/**
 * @format
 */

import 'react-native';
import React from 'react';
import contacts from '../component/Contacts';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<contacts />);
});
