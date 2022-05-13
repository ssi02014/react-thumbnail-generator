import React from 'react';

interface Props {
  value: string;
}
const Example = ({ value }: Props) => {
  return <h1>{value}</h1>;
};

export default Example;
