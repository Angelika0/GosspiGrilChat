import{ useState } from 'react';
import './chatList.css';
import AddUser from '../../addUser/AddUser';
const ChatList = () => {
    const [addMode, setAddMode] = useState(false);
    return (
        <div className="chatList">
            <div className='search'>
                <div className='searchBar'>
                    <img src='/search.png' about=''/>
                    <input type='text' placeholder='Search'/>

                </div>
                <img 
                src={addMode ? "./minus.png": "./plus.png"} 
                alt='' 
                className='add'
                onClick={() => setAddMode((prev)=>!prev)} />
            </div>
            <div className='item'>
                <img src ='./avatar.png' alt='' className='avatar'/>
                <div className='texts'>
                    <span>Joe Doe</span>
                    <p>hello</p>
                </div>
                
            </div>
            <div className='item'>
                <img src ='./avatar.png' alt='' className='avatar'/>
                <div className='texts'>
                    <span>Joe Doe</span>
                    <p>hello</p>
                </div>
                
            </div><div className='item'>
                <img src ='./avatar.png' alt='' className='avatar'/>
                <div className='texts'>
                    <span>Joe Doe</span>
                    <p>hello</p>
                </div>
                
            </div>
            {addMode &&<AddUser/>}
        </div>
    );
}
export default ChatList;