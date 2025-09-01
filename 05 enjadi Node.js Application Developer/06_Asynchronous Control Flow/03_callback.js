const getUsers = (isOffline, callback) => {
  // simulate network delay

  setTimeout(() => {
    const users = ["John", "Jack", "Abigail"];

    if (isOffline) {
      callback(new Error("Cannot retrive dusers due offline"));
      return;
    }

    callback(null, users);
  }, 3000);
};

const usersCalback = (error, users) => {
  if (error) {
    console.log("process failed", error.message);
    return;
  }
  console.log("process success:", users);
};

getUsers(false, usersCalback);
getUsers(true, usersCalback);
