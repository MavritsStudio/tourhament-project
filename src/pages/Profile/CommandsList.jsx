import List from "../../utils/List";
import { Link } from "react-router-dom";

const CommandsList = (command) => {
    console.log(command)
    return (
        <div className="commands-list profile-container">
            <label>Мои команды</label>
            <List
            //data={Object.values(command.data)}
            data={Object.values(command)}
            listClassName="tournament-list"
            listItemKey={"id"}
            renderEmpty={
                <>
                    <div className="header">
                        <label className="tournament-command-name">{command.name}</label>
                        <label className="tounament-date">Прошел {command.date}</label>
                    </div>
                    <div className="command-block">
                        <div>
                            В команде {command.command}
                        </div>
                        <div>
                            Вместе с {command.teammate}
                        </div>
                    </div>
                </>
            }
            renderItem={(command) => (
                <Link
                    className="tournament"
                    // Вопрос: что тут писать
                    to={`${command.id}`}>
                        
                    <div className="header">
                        <label className="tournament-command-name">{command.name}</label>
                        <label className="tounament-date">Прошел {command.date}</label>
                    </div>
                    <div className="command-block">
                        <div>
                            В команде {command.command}
                        </div>
                        <div>
                            Вместе с {command.teammate}
                        </div>
                    </div>
                </Link>
            )}
            />
        </div>
    )
}

export default CommandsList;