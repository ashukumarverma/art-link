"use client"
import { auth, signOut } from "@/auth";
import { LogoutButton } from "@/components/auth/logout-button";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Setting() {
  const {data: session, status} = useSession()
  const router = useRouter();
  useEffect(() => {
    if(status === "unauthenticated"){
        router.push("/auth/login");
    }
  }, [status, router]);
  
  return (
    <div className="container">
      <div>{JSON.stringify(session)}</div>
      <LogoutButton /> 
    </div>
  );
}
