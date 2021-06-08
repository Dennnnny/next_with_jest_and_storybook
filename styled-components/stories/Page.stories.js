import React from 'react';

import { Example } from '../components/Example';

export default {
  title: 'BasicComponents/Example',
  component: Example,
};

const Template = (args) => <Example {...args} />;

export const Default = Template.bind({});
Default.args = {
  
};
