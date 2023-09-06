// importing React from react
import React from "react";

// importing css files
import Class from "./ShowTask.module.css";

// creating a component for creating all the task
const ShowTask = (props) => {
  return (
    <div className={Class.taskBox}>
      {/* mapping over all the post and rendering all the data */}
      {props.todo.map((post, index) => {
        return (
          <div key={index} className={Class.task}>
            <h5>{post.title}</h5>
            <div className={Class.icons}>
              <img src = "https://cdn-icons-png.flaticon.com/128/1159/1159633.png" style={{height:"20px", width:"20px"}}
                onClick={() => {
                  props.updateHandler(post, true);
                }}
                name="create-outline"
              />
              <img src = "https://cdn-icons-png.flaticon.com/128/6861/6861362.png" style={{height:"20px", width:"20px"}}
                onClick={() => {
                  props.delete(post.id);
                }}
                name="trash-outline"
              />
             <img src = "https://cdn-icons-png.flaticon.com/128/4436/4436481.png" style={{height:"20px", width:"20px"}}
                onClick={() => {
                  props.completed(post);
                }}
                name={
                  post.completed
                    ? "checkmark-done-circle"
                    : "checkmark-done-circle-outline"
                }
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

// exporting the ShowTask component by default
export default ShowTask;