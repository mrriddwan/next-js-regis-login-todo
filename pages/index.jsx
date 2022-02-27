import { userService } from 'services';
import ToDoApp from 'components/ToDoApp';

export default Home;

const DATA = [
    {id:"todo-0", name: "Eat", completed: true },
    {id:"todo-1", name: "Sleep", completed: true },
    {id:"todo-2", name: "Repeat", completed: true }
  ];

function Home() {
    
    return (
        <div>
        <div className="p-4">
            <div className="container">
                <h1>Hi {userService.userValue?.firstName}!</h1>
            </div>
        </div>
    
        <div>
            <ToDoApp tasks={DATA}/>
        </div>
            
        </div>
    );
}

