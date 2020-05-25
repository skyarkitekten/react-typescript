import * as React from 'react';

export interface HelloProps {
  compiler: string;
  framework: string;
}

// tslint:disable-next-line: variable-name
export const Hello = (props: HelloProps) => (
  <h1>
    Hello from {props.compiler} and {props.framework}!
  </h1>
);
