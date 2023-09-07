const url = "https://jsonplaceholder.typicode.com/todos";

// Function for fetching all the todos for a specific user
export const fetchTodo = async function () {
  let data = [];
  try {
    const response = await fetch(url + "?userId=1");
    data = await response.json();
    return {
      data,
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};

// Function for creating new tasks
export const addTaskHandler = async function (title, userId) {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        title,
        userId,
        completed: false,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await response.json();
    return {
      success: true,
      data,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};

// Function for deleting a task by ID
export const deleteTask = async function (id) {
  try {
    await fetch(url + `/${id}`, {
      method: "DELETE",
    });
    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};

// Function for updating a task
export const updateTask = async function (task) {
  try {
    const response = await fetch(url + `/${task.id}`, {
      method: "PATCH",
      body: JSON.stringify(task),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await response.json();
    return {
      success: true,
      data,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};
