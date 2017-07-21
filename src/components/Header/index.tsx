import React from 'react';

declare function require(str: string): any;

// we can't use import for other things with Typescript
const logo = require('./logo.svg');
// const fry = require('./fry.jpg');

interface Props {
  title: string;
}

// <img src={ logo } className="App-logo" alt="logo" />
const Header = ({ title }: Props) =>
  <div className="App-header">
    <h2>{ title }</h2>
  </div>;

export default Header;
