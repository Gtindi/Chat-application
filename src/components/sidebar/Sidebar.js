import React from 'react'
import '../sidebar/sidebar.css'
import {RssFeed,ChatBubble,PlayCircleFilledOutlined,Group,Bookmark,HelpOutline,WorkOutline,Event,School} from '@mui/icons-material'

const sidenavlists = [
    {
        icon: <RssFeed className="sidebaricon"/>,
        title: 'Feed'
    },
    {
        icon: <ChatBubble className="sidebaricon"/>,
        title: 'Chats'
    },
    {
        icon: <PlayCircleFilledOutlined className="sidebaricon"/>,
        title: 'Videos'
    },
    {
        icon: <Group className="sidebaricon"/>,
        title: 'Groups'
    },
    {
        icon: <Bookmark className="sidebaricon"/>,
        title: 'Bookmarks'
    },
    {
        icon: <HelpOutline className="sidebaricon"/>,
        title: 'Questions'
    },
    {
        icon: <WorkOutline className="sidebaricon"/>,
        title: 'Jobs'
    },
    {
        icon: <Event className="sidebaricon"/>,
        title: 'Events'
    },
    {
        icon: <School className="sidebaricon"/>,
        title: 'Courses'
    }
]
const friendlists = [
    {
        fname: 'jane doe',
        image: '../assets/person/p2.jpg'
    },
    {
        fname: 'john doe',
        image: '../assets/person/p3.jpg'
    },
    {
        fname: 'john doe',
        image: '../assets/person/p2.jpg'
    },
    {
        fname: 'john doe',
        image: '../assets/person/p3.jpg'
    },
    {
        fname: 'john doe',
        image: '../assets/person/p2.jpg'
    },
    {
        fname: 'john doe',
        image: '../assets/person/p3.jpg'
    },
    {
        fname: 'john doe',
        image: '../assets/person/p2.jpg'
    },
    {
        fname: 'john doe',
        image: '../assets/person/p3.jpg'
    },
    {
        fname: 'john doe',
        image: '../assets/person/p2.jpg'
    }
]
function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarlist">
            {sidenavlists.map(sidenavlist =>
                  <li className="sidebarlistitem">
                {sidenavlist.icon}
                <span className="sidebarlistitemtext">{sidenavlist.title}</span>
            </li>
                )}
        </ul>
        <button className='sidebarbutton'>show more</button>
        <hr className='sidebarhr'/>
        {/* friend list */}
        <ul className="sidebarfriendlist">
            {friendlists.map(friendlist =>
                <li className="sidebarfriend">
                <img className='sidebarfriendimg' src={friendlist.image} alt="friendprofile" />
                <span className='sidebarfriendname'>{friendlist.fname}</span>
            </li>
                )}
            
        </ul>
      </div>
    </div>
  )
}

export default Sidebar