const socket = new WebSocket("ws://localhost:8080/ws");

socket.onopen = function (event) {
  console.log("WebSocket is open now.");
  socket.send("Hello Server!");
};

socket.onmessage = function (event) {
  console.log("Message from server:", event);
};

socket.onclose = function (event) {
  console.log("WebSocket is closed now.");
};

socket.onerror = function (error) {
  console.error("WebSocket error:", error);
};
