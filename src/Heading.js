import Text from './Text'

const Heading = Text.withComponent('h3')

Heading.displayName = 'Heading'

Heading.defaultProps = {
  fontFamily: 'SoleilBk',
}

Heading.h1 = Heading.withComponent('h1')
Heading.h1.defaultProps = {
  fontFamily: 'SoleilBk',
  fontSize: 7,
}

Heading.h2 = Heading.withComponent('h2')
Heading.h2.defaultProps = {
  fontSize: 6,
  fontFamily: 'SoleilBk',
}

Heading.h3 = Heading.withComponent('h3')
Heading.h3.defaultProps = {
  fontFamily: 'SoleilBk',
  fontSize: 5,
}

Heading.h4 = Heading.withComponent('h4')
Heading.h4.defaultProps = {
  fontFamily: 'SoleilBk',
  fontSize: 4,
}

Heading.h5 = Heading.withComponent('h5')
Heading.h5.defaultProps = {
  fontFamily: 'SoleilBk',
  fontSize: 3,
}

Heading.h6 = Heading.withComponent('h6')
Heading.h6.defaultProps = {
  fontFamily: 'SoleilBk',
  fontSize: 2,
}

export default Heading