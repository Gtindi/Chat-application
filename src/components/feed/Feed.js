import React from 'react'
import Share from '../share/Share'
import './feed.css'

function Feed() {
  return (
    <div className='feed'>
        <div className="feedwrapper">
            <Share/>
        </div>
    </div>
  )
}

export default Feed