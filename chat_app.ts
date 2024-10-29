const EventEmitter = require("events");

const logger = new EventEmitter();

const sendMsg = (name: string, msg: string): void => {
  console.log(`Name: ${name}, Message: ${msg}`);
}
logger.on("msg", (name: string, msg: string) => sendMsg(name, msg))

logger.emit("msg", "Alice", "Hello there!");
logger.emit("msg", "Bob", "How are you?");
logger.emit("msg", "Charlie", "Good morning!");
logger.emit("msg", "Diana", "Nice to meet you!");
logger.emit("msg", "Eve", "Have a great day!");
