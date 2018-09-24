### Setup Instructions

- Clone the repo
  `git clone git@github.com:Codebrahma/serverless-design-system.git`
- Install gatsby-cli
  `npm install gatsby-cli@1.1.58 -g`
- Install the project dependencies
  `npm install`
- Start the development server
  `npm start`

### Directory Structure
	.
    └── src
        ├── atoms         		   # Contains all the atoms
        ├── molecules              # Contains all the molecules
        ├── customStyleSystem.js   # Defines custom style methods which are unavailable in styled-system
        ├── theme.js               # Defines theme for the design system
        └── utils          		   # Contains utility functions

### Building blocks

#### Atoms
Atoms are indivisible components which are built on top of html elements with basic style over it. Every atom will have its own constraints defined.

An Example of atom is: `Box`. Box is a styled div but only the following styles can be configured for the Box.
	- display
	- height, width
	- maxHeight, maxWidth
	- margin and padding
	- color
	- boxSizing

#### Molecules
Molecules are components which are built on top of html elements and/or atom components with basic style over it. Every molecule will have its own constraints defined.

An Example of molecule is: `Container`. Container is a styled Box but only `maxWidth` can be configured for it.

#### Components
Components are made of atoms and molecules. Complex molecules are also implemented as components.

An Example of Component is: `Feature` which displays heading, description and image. `Feature` is a re-usable component on serverless website

### Docs
Checkout [`docs`](./doc) directory for running the static docs.


