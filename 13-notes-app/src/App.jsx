import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");

  const [details, setdetails] = useState("");

  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = [...task]
    newTask.push({title, details})
    setTask(newTask)

    
    setTitle("");
    setdetails("");
  };

  const deleteNote = (idx) => {
    const copyTask = [...task]
    copyTask.splice(idx,1)
    setTask(copyTask)
    
  }

  return (
    <div className="h-screen bg-black text-white lg:flex ">
      <form
        className="flex flex-col items-start gap-4 p-10 lg:w-1/2"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <h1 className="text-4xl font-bold">Add Tasks</h1>
        {/* Title Input */}
        <input
          type="text"
          placeholder="enter task"
          className="font-medium px-5 py-2 w-full border-2 rounded"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          type="text"
          placeholder="write details"
          className="font-medium px-5 py-2 w-full h-20 border-2 rounded"
          value={details}
          onChange={(e) => {
            setdetails(e.target.value);
          }}
        />
        <button className="font-medium bg-white text-black px-5 py-2 w-full rounded">
          Add Note
        </button>
      </form>
      <div className=" lg:w-1/2 p-10 lg:border-l">
        <h1 className="text-4xl font-bold">Your Tasks</h1>
        <div className="flex flex-wrap items-start jus gap-5 mt-5 overflow-auto h-[90%">
          {task.map((elem, idx) => {
            return <div key={idx} className="flex justify-between items-start flex-col relative h-52 w-40 pt-9 pb-4 px-4 rounded-2xl bg-[url('https://imgs.search.brave.com/0Rf9sgH-EbFGluLmBlQMN98qNggmntOmSQHC_w0-VdI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTAv/NzkzLzg3My9zbWFs/bC9hLWxpbmVkLW5v/dGUtcGFwZXItY292/ZXJlZC13aXRoLXRy/YW5zcGFyZW50LXRh/cGUtb24tYS15ZWxs/b3ctYmFja2dyb3Vu/ZC13aXRoLWEtd2hp/dGUtY2hlY2tlcmVk/LXBhdHRlcm4tZnJl/ZS1wbmcucG5n')] bg-cover text-black">
              <div>
                <h3 className="leading-tight text-xl font-bold">{elem.title}</h3>
              <p className="mt-2 leading-tight font-medium text-gray-500">{elem.details}</p>
              </div>
              <button onClick={() =>{
                deleteNote(idx)
              }} className="py-1 text-xs bg-red-500 rounded w-full text-white font-bold active:scale-95">Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
