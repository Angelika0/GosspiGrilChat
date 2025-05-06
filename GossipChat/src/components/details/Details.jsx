import './details.css';
const Details = () => {
  return (
    <div className="details">
      <div className='user'>
      <img src='./avatar.png'/>
      <h2>Username</h2>
      <p>Last seen: 2 hours ago</p>

      </div>
      <div className='info'>
        <div className='option'>
          <div className="title">
            <span> Chat setting</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className='option'>
          <div className="title">
            <span> Privancy & help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className='option'>
          <div className="title">
            <span> Shared photos</span>
            <img src="./arrowUp.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
              <img src="./photo.jpg" alt="" />
              <span>random_photo_2025.png</span>
              </div>
            
            <img src="download.png" alt="" />
            </div>
          </div>
        </div>
        <div className='option'>
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block User</button>
        <button className='logout'>Log Out</button>
        
      </div>
    </div>
  );
}
export default Details