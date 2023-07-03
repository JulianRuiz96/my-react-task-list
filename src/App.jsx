import Header from "./components/Header";
import TaskList from "./components/TaskList";
import Task from "./components/Task";

function App() {
  return (
   <div className="bg-gray-900 min-h-screen h-full text-gray-500 flex items-center  justify-center py-20 px-5">
    <div className="container flex flex-col max-w-xl">
      <Header/>
      <TaskList/>
      <Task>
        <h2>Task List</h2>
        <p>Lorem ipsum dolor sit, amet consecte</p>
      </Task>
    </div>
   </div>
  );
}

export default App;
