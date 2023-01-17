import { ClipLoader } from 'react-spinners'
import React from 'react'

// Component to display a spinner while loading data from the API. This componenet uses the react-spinners library

const Spinner = props => {
  const style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }
  return (
    <div style={style}>
      <ClipLoader color={'#fd9858'} />
    </div>
  )
}

export default Spinner
