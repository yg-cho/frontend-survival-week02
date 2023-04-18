import { createElement } from 'react';

export default function Greeting({ name }: {
  name: string;
}) {
  return createElement(
    'p',
    'Hello',
    createElement('', null, name),
    '!',
  );
}
