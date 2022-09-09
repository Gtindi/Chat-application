import React from 'react'
import './post.css'
import {MoreVert} from '@mui/icons-material'

function Post() {
  return (
    <div className='post'>
        <div className="postwrapper">
            {/* post top */}
            <div className="posttop">
                <div className="posttopleft">
                    <img className='postprofileimg' src="../assets/person/p5.jpg" alt="person5" />
                    <span className="postusername">deedee nyamai</span>
                    <span className="postDate">10 mins ago</span>
                </div>
                <div className="posttopright"><MoreVert/></div>
            </div>
            {/* post center */}
            <div className="postcenter">
                <span className="posttext">Hey there! Its my first post :)</span>
                <img className='postimg' src="../assets/person/p5.jpg" alt="post"/>
            </div>
            {/* post bottom */}
            <div className="postbottom">
                <div className="postbottomleft">
                    <img className='hearticon' src="../assets/heart.png" alt="post" />
                    <span className="postlikecounter">50 people like it</span>
                </div>
                <div className="postbottomright">
                    <span className="postcommenttext">10 comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post