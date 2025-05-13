import{useState, useEffect } from 'react';
import './chatList.css';
import { onSnapshot, doc } from 'firebase/firestore';
import { db } from '../../../lib/firebase'; 
import AddUser from '../../addUser/AddUser';
import { useUserStore } from '../../../lib/userStore';
const ChatList = () => {
    const[chats, setChats] = useState([]);
    const [addMode, setAddMode] = useState(false);
    
    const{currentUser}= useUserStore();

    useEffect(() => {
        const unSub = onSnapshot(doc(db, "userchats", currentUser.id), 
            
            (doc) => {
             setChats(doc.data());
            });
            return() => {
                unSub()
            }
    }, [currentUser.id]);

console.log(chats);
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