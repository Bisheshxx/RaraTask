import React from 'react'
import '../components/Header.css'
function Header() {
  return (
    <div className="header">
        <h1>User</h1>
        <input type="text" />
        <div className="addUser">
            New User
        </div>
    </div>
  )
}

export default Header