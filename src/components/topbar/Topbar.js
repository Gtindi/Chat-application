import React from 'react'
import './Topbar.css'
import {Search,Person,Chat,Notifications} from '@mui/icons-material';

const rightnavbaritems = [
    {
       title: '1',
       icon: <Person/>
    },
    {
       title: '2',
       icon: <Chat/>
    },
    {
        title: '3',
        icon: <Notifications/>
     }
]
function Topbar() {
  return (
    <div className='topbarContainer'>
        {/* topbar left */}
        <div className="topbarLeft">
            <span className='logo'>Dana Social</span>
        </div>

        {/* topbar center */}
        <div className="topbarCenter">
            <div className="searchBar">
              <Search className="searchicon"/>
              <input placeholder="Search for a friend, post or video" type="text" className="searchInput" />
            </div>
        </div>

        {/* topbar right */}
        <div className="topbarRight">
            {/* topbar links */}
            <div className="topBarLinks">
                <span className='topbarlink'> Homepage</span>
                <span className='topbarlink'>Timeline</span>
            </div>
            {/* topbar icons */}
            <div className="topbarIcons">
                {rightnavbaritems.map(rightnavbaritem =>
                     <div className="topbariconItem">
                    {rightnavbaritem.icon}
                    <span className="topbariconbadge">{rightnavbaritem.title}</span>
                   </div>
                    )}
            </div>
            <img src="./assets/person/p1.jpg" alt="profile" className='topbarimg'/>
        </div>
    </div>
  )
}

export default Topbar