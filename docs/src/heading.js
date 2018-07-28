import React from 'react'
import LiveEdit from './LiveEdit'
const h1 = `
<div>
<Heading.h1>Serverless</Heading.h1>
<Heading.h2>Serverless</Heading.h2>
<Heading.h3>Serverless</Heading.h3>
<Heading.h4>Serverless</Heading.h4>
<Heading.h5>Serverless</Heading.h5>
<Heading.h6>Serverless</Heading.h6>
</div>`;
const p = `
<div>
<P.l>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
id est laborum
</P.l>
<P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
ased do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
anim id est laborum
</P>
<P.s>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
id est laborum
</P.s>
</div>`;
export default class extends React.Component {
  render(){
    return (
      <div>
      <LiveEdit code={h1}/>
      <LiveEdit code={p}/>
      Props are
      <ul>
        <li></li>
      </ul>
      </div>
    )
  }
}