import React from 'react';

import RadioGroup from './RadioGroup';
import RadioGroupItem from './RadioGroupItem';

export default {
  title: 'components/RadioGroup',
  component: RadioGroup,
  parameters: {
    props: {
      propTablesInclude: [RadioGroup, RadioGroupItem],
    },
  },
};

export const ByDirectionView = () => {
  const [value, setValue] = React.useState<string | number>(0);
  const handleChange = (newVal: string | number) => {
    setValue(newVal);
  };

  return (
    <RadioGroup
      name="addressValidationCheck"
      value={value}
      label="Address Validation"
      labelWidth={200}
      labelAlign="right"
      onChange={handleChange}
      direction="column"
      gap={0}
    >
      <RadioGroupItem value={0} label={'Value 0'} />
      <RadioGroupItem value={1} label={'Value 1'} />
      <RadioGroupItem value={2} label={'Value 2'} disabled={true} />
    </RadioGroup>
  );
};

ByDirectionView.story = {
  name: 'By Direction',
};

const content =
  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';
