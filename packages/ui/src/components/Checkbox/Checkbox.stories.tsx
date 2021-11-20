import React from 'react';
import Checkbox from './Checkbox';

export default {
  title: 'components/Checkbox',
  component: Checkbox,
  parameters: {
    props: {
      propTablesInclude: [Checkbox],
    },
  },
};

export const GeneralView = () => {
  const [checked, setChecked] = React.useState(true);
  const handleCheck = () => {
    setChecked((prevState) => !prevState);
  };

  return <Checkbox checked={checked} onChange={handleCheck} />;
};

GeneralView.storyName = '기본 사용';
