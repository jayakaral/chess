const users = [];

const addUser = ({ id, name, room, playAs }) => {
  // name = name.trim().toLowerCase();
  // room = room.trim().toLowerCase();

  // const existingUser = users.find((user) => user.room === room && user.name === name);

  const existingUser = users.filter((user) => user.room === room).length >= 2

  // if(!name || !room) return { error: 'Username and room are required.' };
  if (existingUser) return { error: 'This room is full. Please choose another room' };

  const user = { id, name, room, playAs };

  users.push(user);
  console.log(users)
  return { user };
}

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) return users.splice(index, 1)[0];
}

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };