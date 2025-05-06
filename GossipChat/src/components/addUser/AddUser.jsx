import React from 'react'
import './addUser.css'

const AddUser = () => {
  return (
    <div className='addUser'>
        <form>
            <input type="text" placeholder='Username ' name='name' />
            <button>Search</button>
        </form>
        <div className='user'>
            <div className='details'>
                <img src="./avatar.png" alt="" />
                <span>Jan Doe</span>
            </div>
            <button>Add User</button>
        </div>
    </div>
  )
}

export default AddUser