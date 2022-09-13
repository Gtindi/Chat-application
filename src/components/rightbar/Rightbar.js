import React from 'react'
import './right.css'

const friendlists = [
  {
    img: '../assets/person/p1.jpg',
    name: 'mwende joe'
  },
  {
    img: '../assets/person/p2.jpg',
    name: 'ndinda joe'
  },
  {
    img: '../assets/person/p3.jpg',
    name: 'kira joe'
  },
  {
    img: '../assets/person/p4.jpg',
    name: 'alpha joe'
  }
]
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
          {friendlists.map(friendlist =>
            <li className='rightbarfriend'>
            <div className="rightbarprofileimgcontainer">
              <img src={friendlist.img} alt="p1" className="rightbarprofileimg" />
              <span className="rightbaronline"></span>
            </div>
            <span className="rightbarusername">{friendlist.name}</span>
          </li>
            )}
          
        </ul>
      </div>
      </div>
  )
}

export default Rightbar