import React from 'react'
import {
  Link
} from 'react-router-dom'


const Header = () => (
    <div>
       <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/page-1">Page1</Link></li>
        <li><Link to="/firebase-examples">FirebaseExamples</Link></li>
      </ul>
      <hr/>
    </div>
)
export default Header