
import { auth, signOut } from "@/auth";
import { LogoutButton } from "@/components/auth/logout-button";

export default async function Page() {
  const session = await auth();
  console.log("session", session);
  return (
    <div className="container">
      <div>{JSON.stringify(session)}</div>
      <LogoutButton /> 
    </div>
  );
}
