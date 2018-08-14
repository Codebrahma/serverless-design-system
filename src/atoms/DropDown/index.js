import React from 'react'

import DefaultContainer from './DefaultContainer'
import DefaultFieldContainer from './DefaultFieldContainer'
import DefaultPlaceholder from './DefaultPlaceholder'
import DefaultIcon from './DefaultIcon'
import DefaultMenuContainer from './DefaultMenuContainer'
import DefaultOption from './DefaultOption'

class Dropdown extends React.Component {
  render() {
    return (
      <DefaultContainer>
        <DefaultFieldContainer>
          <DefaultPlaceholder />
          <DefaultIcon />
        </DefaultFieldContainer>
        <DefaultMenuContainer>
          {
            this.props.options.map((option) => (
              <DefaultOption
                {...option}
                selected={false}
              />
            ))
          }
        </DefaultMenuContainer>
      </DefaultContainer>
    )
  }
}

Dropdown.defaultProps = {
  options: [{
    label: '1', value: '1',
    label: '2', value: '2',
    label: '3', value: '3',
    label: '4', value: '4',
  }]
};

export default Dropdown;
