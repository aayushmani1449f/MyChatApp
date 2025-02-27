import { StreamChat } from "stream-chat";
// Define values.
const api_key = "bp6twe7gmjyq";
const api_secret = "vnmhkfrr3w9bhzhtxc6byhbzn84xwq9exen9555m5btwgd7hy452a8q42j3m644d";
const user_id = "user_2tagw5NVFIRTCXLTbq5Z0tYARGE";
export async function GET() {
    // Initialize a Server Client
const serverClient = StreamChat.getInstance(api_key, api_secret);
// Create User Token
const token = serverClient.createToken(user_id);
console.log(token)
    return Response.json({ message: 'Hello World' })
  }