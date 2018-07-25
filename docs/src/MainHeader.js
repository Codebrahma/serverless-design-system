import React from 'react'
import LiveEdit from './LiveEdit'
import logoImage from './assets/img/logo.png'


const mainHeader = `
  <MainHeader 
  logo='${logoImage}' >
  </MainHeader>
`
export default class extends React.Component {
  render(){
    return (
      <div>
      <LiveEdit code={mainHeader}/>
      props are
       <ul>
        <li>image : url </li>
        <li>name : string</li>
        <li>designation: string</li>
        <li>alt : string</li>
        <li>For the child element pass on the testimonial</li>
      </ul>
      </div>
   )
  }
}