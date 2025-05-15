import{useState, useEffect } from 'react';
import './chatList.css';
import { onSnapshot, doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../../lib/firebase'; 
import AddUser from '../../addUser/AddUser';
import { useUserStore } from '../../../lib/userStore';
import { useChatStore } from '../../../lib/chatStore'; // Ensure this path is correct
const ChatList = () => {
    const[chats, setChats] = useState([]);
    const [addMode, setAddMode] = useState(false);
    
    const{currentUser}= useUserStore();
    const{chatId, changeChat}= useChatStore();
    console.log(chatId);    
    useEffect(() => {
        const unSub = onSnapshot(doc(db, "userchat", currentUser.id), async (res) => {
           const items = res.data().chats;
           
           const promisses = items.map( async (item)=>{
            const userDocRef = doc(db, "users", item.receiverId);
            const userDocSnap = await getDoc(userDocRef);

            const user = userDocSnap.data();

            return{...item, user};
           });
           const chatData = await Promise.all(promisses);
           

           setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
            });
            return() => {
                unSub();
            }
    }, [currentUser.id]);

    const handleSelect = async (chat) => {
        
       const userChats = chats.map(item=>{
        const {user, ...rest } = item;
        return rest;
       })   

       const chatIndex = userChats.findIndex(
        (item)=> item.chatId === chat.chatId
    );
        userChats[chatIndex].isSeen = true;

        const userChatRef = doc(db, "userchat", currentUser.id);
        try{
            await updateDoc(userChatRef, {
                chats: userChats,
            });

            changeChat(chat.chatId, chat.user);
        }catch(err){
            console.log(err);
        }
    }

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
            {chats.map( (chat) => (
                <div 
                className='item'
                 key={chat.chatId} 
                 onClick={() => handleSelect(chat)}
                 style ={{
                    backgroundColor: chat?.isSeen ? "transparent" : "rgba(219, 44, 114, 0.26)"
                 }}
                 >
                    <img src ={ chat.user.avatar || './avatar.png'} alt='' className='avatar'/>
                    <div className='texts'>
                        <span>{chat.user.username}</span>
                        <p>{chat.lastMessage}</p>
                    </div>
                    
                </div>
            ))}
           
            {addMode &&<AddUser/>}
        </div>
    );
}
export default ChatList;