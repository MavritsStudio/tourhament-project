// import {navigator} from "navigator";

const ProfileCard = (profile) => {
    const user = profile.user;
    return (
        <div className="profile-card profile-container">
            <div className="user-name">{!user.middle_name
              ? ` ${user.first_name} ${user.last_name}`.trim()
              : `${user.first_name} ${user.patronymic} ${user.last_name} `.trim()}</div>
            <div className="user-icon">
                {Array.from(user.first_name)[0]}
            </div>
            <div className="user-id">
                <label >ID {user.uid}</label>
                <button onClick={() =>{navigator.clipboard.writeText(user.uid)}} className="copy-id-button"></button>
            </div>
        </div>
    )
}

export default ProfileCard;