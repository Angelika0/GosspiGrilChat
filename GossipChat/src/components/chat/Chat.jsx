import './chat.css';
import EmojiPicker from 'emoji-picker-react';
import { useEffect, useRef, useState } from 'react';
const Chat = () => {

  const [open, setOpen] = useState(false)
  const [text, setText] = useState(''); 
  const endRef = useRef(null);
useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handelEmoji= e =>{
   
    setText(prev => prev + e.emoji)
    setOpen(false)
  }
  console.log(text);
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
      <div className='message'>
        <img src='./avatar.png' alt='' className='avatar'/>
        <div className='texts'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
          </p>
          <span>just now</span>
        </div>
      </div>
      <div className='message own'>
       
        <div className='texts'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
          </p>
          <span>just now</span>
        </div>
      </div>
      <div className='message'>
        <img src='./avatar.png' alt='' className='avatar'/>
        <div className='texts'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
          </p>
          <span>just now</span>
        </div>
      </div>
      <div className='message own'>
        
        <div className='texts'>
          <img src='./photo.jpg' alt=''/>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
          </p>
          
          <span>just now</span>
        </div>
      </div>
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
        <button className='send'>send</button>
      </div>

    </div>
  );
}
export default Chat