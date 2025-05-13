import React from 'react'
import Homebanner from './Homebanner/Homebanner'
import Homeabout from './Homeabout/Homeabout'

function Home({props}) {
  return (
    <React.Fragment>
        <Homebanner props = {props} />
        <Homeabout/>
    </React.Fragment>
  )
}

export default Home