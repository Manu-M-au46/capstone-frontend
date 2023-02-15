import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>

<nav className="nav flex-column">
  <Link className="nav-link active" aria-current="page" to="/dashboard">Dashboard</Link>
  <Link className="nav-link" to="/create-ad">Create Ad</Link>
  <Link className="nav-link" to="#">Link</Link>
</nav>

    </div>
  )
}

export default Sidebar