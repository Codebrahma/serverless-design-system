### Directory Structure
    .
    ├── dynamic-content-generator
    │   └── page               # Module that generates pages for `atoms`, `molecules` and `components`
    └── src
        ├── components         # Reuseable components for page generation
        ├── content            # Directory for documentation
        │   ├── atoms          # Directory for documenting atoms
        │   ├── components     # Directory for documenting components
        │   └── molecules      # Directory for documenting molecules
        ├── layouts            # Directory containing layouts for page generation by gatsby
        ├── pages              # Directory containing components where each component represents a page
        └── templates          # Directory containing components that are used to generate dynamic pages

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
