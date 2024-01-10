const { Server } = require("socket.io");

const io = new Server(8000, {
  cors: true,
});

io.on("connection",(socket) => {
  console.log('Socket Connected',socket.id);
   socket.on("room:join",(data)=> {
    const {email,room} = data;
    console.log(email)
    console.log(room);
   })
})