import './userinfo.css';
import { useUserStore } from '../../../lib/userStore';
const Userinfo = () => {
    const {currentUser, isLoading, fetchUserInfo} = useUserStore()
    return (
        <div className="userInfo">
            <div className='user'>
                <img src={currentUser.avatar || './avatar.png'} alt="" />
                <h2>{currentUser.username}</h2>
            </div>
            <div className='icon'>
                <img src="./more.png" alt="" />
                <img src="./video.png" alt="" />
                <img src="./edit.png" alt="" />

            </div>
        </div>
    );
}
export default Userinfo;