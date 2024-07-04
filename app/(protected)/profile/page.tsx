"use client";
import { LogoutButton } from "@/components/auth/logout-button";
import { useSessionContext } from "@/context/SessionContext";
import { useCurrentUser } from "@/hooks/current-user";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Profile() {
//   const user = useCurrentUser();
const {session} = useSessionContext()
  const router = useRouter();

  useEffect(() => {
    if (!session.isAuthenticated) {
      router.push("/auth/login");
    }
    if(session.user && !session.user.userType ){
        router.push("/user/profile-type");
    }
  });

  return (
    <div>
      <h1>Profile</h1>
      <p>{JSON.stringify(session.user)}</p>
      <LogoutButton />
    </div>
  );
}
