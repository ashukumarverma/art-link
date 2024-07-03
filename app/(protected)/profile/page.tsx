"use client";
import { LogoutButton } from "@/components/auth/logout-button";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/current-user";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Profile() {
  const user = useCurrentUser();
  const { status, update } = useSession();
  const router = useRouter();

  console.log("session", status, user);

  useEffect(() => {
    if(status === "unauthenticated"){
    (async () => {
        await update();
    })();
        router.push("/auth/login");
    }
    if (status === "authenticated" && !user?.userType) {
      router.push("/user/profile-type");
    }
  }, [status, user, router, update]);
  

  return (
    <div>
      <h1>Profile</h1>
      <p>{JSON.stringify(user)}</p>
      <LogoutButton />
    </div>
  );
}
