import { Context, Elysia } from "elysia";

const app = new Elysia({
  serve: {
    maxRequestBodySize: 1024 * 1024 * 50, // 50MB
  },
});

app.get("/api", (ctx) => {
  return { message: `Welcome to Backend API` };
});

app.ws("/ws", {
  message(ws, message) {
    ws.send("testing bro");
  },
});

// API Not Found
const handleNotFound = (ctx: Context) => {
  ctx.set.status = 404;

  return {
    error: "API Not Found",
  };
};

const PORT = 8080;

app
  .get("*", handleNotFound)
  .post("*", handleNotFound)
  .put("*", handleNotFound)
  .delete("*", handleNotFound)
  .patch("*", handleNotFound);

app.listen(PORT);

console.log(
  `🦊 Elysia is running on "${PORT}" at http://${app.server?.hostname}:${app.server?.port}/api`
);
