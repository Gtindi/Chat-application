import React  from "react"
import Feed from "../../components/feed/Feed"
import Topbar from "../../components/topbar/Topbar"
import './Home.css'

function Home() {
  return (
    <div>
        <Topbar/>
        <Feed/>
    </div>
  )
}

export default Home