import { getCurrent } from "@/features/auth/queries";
import { getWorkspaces } from "@/features/workspaces/queries";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await getCurrent();
  if(!user) redirect("/sign-in");

  const workspaces = await getWorkspaces();

  if(workspaces.total === 0) {
    redirect("/workspaces/create")
  }else{
    redirect(`/workspaces/${workspaces.documents[0].$id}`)
  }
}







//User 1: { name: 'Rishiraj', email: 'rishiraj@gmail.com', password: 'rishirajpassword' }
//User 2: { name: 'John', email: 'john@gmail.com', password: 'johnpassword' }
//User 3: { name: 'Jarvis', email: 'jarvis@gmail.com', password: 'jarvispassword' }

//http://localhost:3000/workspaces/67a0cb8300278fcbec4a/join/UkLSoJ