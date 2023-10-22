import List from "../../utils/List";
import { Link } from "react-router-dom";

const TournamentHistory = (tournaments, user) => {
    return (
        <div className="tournament-history">
            <label>История турниров</label>
            <List
            data={Object.values(tournaments.tournaments)}
            listClassName="tournament-list profile-container"
            listItemKey={"id"}
            renderEmpty={<div>В истории турниров пусто</div>}
            renderItem={(item) => (
                <Link
                    className="tournament"
                    // Вопрос: что тут писать
                    to={`${item.id}`}>
                    <div className="tournament-wrapper">
                        <div className="tournament-header">
                            <label className="tournament-command-name">{item.tournament.name}   </label>
                            {!item.tournament.finish
                            ? <label className="tournament-date">Сейчас идет</label>
                            : <label className="tournament-date">Прошел {item.tournament.finish}</label>}
                            
                        </div>
                        <div className="command-block">
                            <div className="command-name">
                                В команде {item.team.name}
                            </div>
                            <div>
                                Вместе с {user.uid && item.team.mate1==user.uid
                            ? item.team.mate1
                            : item.team.mate2}
                            </div>
                        </div>
                    </div>
                    
                </Link>
            )}
            />
        </div>
    )
}

export default TournamentHistory;