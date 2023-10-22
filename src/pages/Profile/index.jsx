import "../../assets/scss/profile.scss"
import { useSelector } from "react-redux";
import ProfileCard from "./ProfileCard";
import CommandsList from "./CommandsList";
import TournamentHistory from "./TournamentHistory";

const ProfilePage = () => {
    // const user = useSelector((state) => state.user);
    const user = {
        "uid": "332791",
        "email": "admin@email.com",
        "first_name": "Artyom",
        "middle_name": "",
        "last_name": "Yapryntsev"
        }
    const commands = [
        {
            "code": "c6d83586d7d84dc5949b95c5ad408478",
            "name": "team-1",
            "description": "",
            "mate1": {
                "uid": "332791",
                "email": "admin@email.com",
                "first_name": "Artyom",
                "middle_name": "",
                "last_name": "Yapryntsev"
            },
            "mate2": {
                "uid": "590554",
                "email": "test-0@email.com",
                "first_name": "Artyom-1-index",
                "middle_name": "Maximovich-1",
                "last_name": "Yapryntsev1"
            },
            "created": "2023-10-21T15:35:00.422365Z"
            }
    ]
    const tournaments = [
        {
            "tournament": {
                "code": "0864fbebdb884ffbb08b3de2cf638a56",
                "name": "tournament-4",
                "status": "active",
                "description": "description",
                "finish": null
            },
            "team": {
                "code": "efacd12f4af84a0ab0f32e88e657ea18",
                "name": "team-test-10",
                "description": "",
                "mate1": "332791",
                "mate2": "040681",
                "created": "2023-10-21T15:47:16.050780Z"
            },
            "place": "1"
        }
    ]
    return (
        <div className="page profile-page">
            <div className="profile-page-container">
                <label className="header">Мой профиль</label>
                <div className="body">
                    <div className="profile-card-and-commands">
                        { <ProfileCard user={user}/> }
                        {/* {<CommandsList command={commands}/>} */}
                    </div>
                    {<TournamentHistory tournaments={tournaments} user={user}/>}
                </div>
                
                <div className="footer">
                    <button>Тейбол / Вернуться на главную</button>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;