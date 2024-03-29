const Task = ({ children }) => {
  return (
    <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
        {children}
    </div>
  );
};

export default Task;
