import './chat.css';
import EmojiPicker from 'emoji-picker-react';
import { useEffect, useRef, useState } from 'react';
import { arrayUnion, doc, onSnapshot, updateDoc, getDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { useChatStore } from '../../lib/chatStore';
import { useUserStore } from '../../lib/userStore';

const Chat = () => {
  const [chat, setChat] = useState()
  const [open, setOpen] = useState(false)
  const [text, setText] = useState(''); 

  
  const {currentUser}= useUserStore();
  const {chatId, user}= useChatStore();
  const endRef = useRef(null);
useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

useEffect(() => {
  const onSUb = onSnapshot(
    doc(db,"chats",chatId), 
    (res) => {
    setChat(res.data())

  })
  return () => {
    onSUb()
  }

},[chatId]);

  const handelEmoji= e =>{
   
    setText(prev => prev + e.emoji)
    setOpen(false)
  }
 
  const handleSend = async () => {
    if(text ==="") return;
    try{
    
    
      await updateDoc(doc(db, "chats", chatId), {
        messages: arrayUnion({
          senderId: currentUser.id,
          text,
          createdAt: new Date(),
        }),
      });

      const userIDs = [currentUser.id, user.id]

      userIDs.forEach( async(id)=>{

        const userChatsRef = doc(db, "userchat", id);
        const userChatSnaphot = await getDoc(userChatsRef);
        
        if(userChatSnaphot.exists()){
          
          const userChatsData = userChatSnaphot.data();
          const chatIndex = userChatsData.chats.findIndex(
            (c) => c.chatId === chatId
          );
          userChatsData.chats[chatIndex].lastMessage = text;
          userChatsData.chats[chatIndex].isSeen = id === currentUser.id ? true : false;
          userChatsData.chats[chatIndex].updatedAt = new Date();
          
          await updateDoc(userChatsRef, {
            chats: userChatsData.chats,
          });
        }
      });
      }catch(err){
        console.log(err);
      }
      
    }
    return (
    <div className="chat">
      <div className='top'>
        <div className='user'>
          <img src='./avatar.png' alt='' className='avatar'/>
          <div className='texts'>
            <span>Joe Doe</span>
            <p>hej co tam u ciebie</p>
          </div>
        </div>
        <div className='icons'>
          <img src='./phone.png' alt=''/>
          <img src='./video.png' alt='' />
          <img src='./info.png' alt=''/>
        </div>
       
      </div>
      <div className='center'>
      { chat?.messages?.map((message) =>(
        
        
        <div className='message own' key={message?.createdAt}>
        
        <div className='texts'>
         { message.img && <img src={message.img} alt=''/>}
          <p>
           {message.text}
          </p>
          
          {/* <span>{message}</span> */}
        </div>
      </div>
        ))}
      <div ref = {endRef}></div>
      </div>

      <div className='bottom'>
        <div className='icons'>
          <img src='img.png' alt=''/>
          <img src='camera.png' alt='' />
          <img src='mic.png' alt='' />
          
          </div>
        <input 
        type='text' 
        placeholder='Type a message' 
        className='input'
        value={text}
        onChange = {e=>setText(e.target.value)}
        />
        <div className='emoji'>
          <img 
          src='./emoji.png' 
          alt='' className='icon' 
          onClick={()=>setOpen(prev=>!prev)}
          />
          <div className='picker'>
          <EmojiPicker 
          className='emoji-picker' 
          open={open} 
          onEmojiClick={handelEmoji}/>
          </div>
        </div>
        <button className='send' onClick={handleSend}>Send</button>
      </div>

    </div>
  );
}
export default Chat