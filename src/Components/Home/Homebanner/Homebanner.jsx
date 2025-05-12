import React from 'react';
import './Homebanner.css';

function Homebanner({props}) {
  return (
   <React.Fragment>
    <section id="Homebanner">
        <h1>Home Banner Page</h1>
        <h2>{props.name}</h2>
    </section>
   </React.Fragment>
  )
}

export default Homebanner