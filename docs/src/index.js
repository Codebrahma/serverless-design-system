import React from 'react'
import {MyPlayground} from './myplayground'

const button = `
  <Button>
    Serverless
  </Button>
`;

const secondary = `
    <Button secondary>
      Serverless
    </Button>
`;

const testimonial = `
  <Testimonial 
      img="https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/icons/cocacola-logo.png"
      name="Patrick Brandt"
      designation="Solutions Architect at The Coca Cola Company"
    >
    "The Serverless Framework is a core component of The Coca-Cola Company's initiative to reduce IT operational costs and deploy services faster."
    </Testimonial>
`



export default class extends React.Component {
  render(){
    return(
      <div className="component-documentation">
      <MyPlayground
          defaultValue={button}
      />
      <MyPlayground
          defaultValue={secondary}
      />
       <MyPlayground
          defaultValue={testimonial}
      />
      </div>
    )
  }
}