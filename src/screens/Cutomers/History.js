// import { Link } from '@material-ui/core'
import React from 'react'
import { Button } from 'react-bootstrap'
// import { BsLink45Deg } from 'react-icons/bs'
import {
    Link
  } from "react-router-dom";
  
function History() {
    return (
        <div>
        <Link to="/contact-drivers">
        <Button
          
          style={{ marginTop: 25, marginLeft: 5,backgroundColor:"#ff6600"}}
        >
          Back
        </Button>
       </Link>
      
        </div>
    )
}

export default History
