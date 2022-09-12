import React from 'react'
import './right.css'

function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbarwrapper">
        <div className="birthdaycontainer">
          <img src="../assets/gift.png" alt="birthday" className="birthdayimg" />
          <span className="birthdaytext"><b>kamama</b> and <b>3 other friends</b> have a birthday today</span>
        </div>
        <img src="../assets/ad.jpg" alt="rightad" className='rightbarad'/>
        <h4 className="rightbartitle">Online friends</h4>
        <ul className='rightbarfriendlist'>
          <li className='rightbarfriend'>
            <div className="rightbarprofileimgcontainer">
              <img src="../assets/person/p1.jpg" alt="p1" className="rightbarprofileimg" />
              <span className="rightbaronline"></span>
            </div>
            <span className="rightbarusername">mwende joe</span>
          </li>
        </ul>
      </div>
      </div>
  )
}

export default Rightbar