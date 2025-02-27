import { StreamChat } from "stream-chat";
import { clerkClient } from '@clerk/nextjs/server'
// Define values.
const api_key = "bp6twe7gmjyq";
const api_secret = "vnmhkfrr3w9bhzhtxc6byhbzn84xwq9exen9555m5btwgd7hy452a8q42j3m644d";
// const user_id = "user_2tagw5NVFIRTCXLTbq5Z0tYARGE";
export async function POST(request) {
    // Initialize a Server Client
    const serverClient = StreamChat.getInstance(api_key, api_secret);
    const user = await request.json()
    // Create User Token
    const token = serverClient.createToken(user.data.id);
    console.log("A new user has been created", token)
    const client = await clerkClient()

  await client.users.updateUserMetadata(userId, {
    publicMetadata: {
      token: token
    },
  })
    return Response.json({ message: 'Hello World' })
}