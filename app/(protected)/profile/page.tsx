"use client"
import { useCurrentUser } from "@/hooks/current-user";
import { useRouter } from "next/navigation";

export default function Profile() {
    const user = useCurrentUser();
    const router = useRouter();

    if(!user){
        router.push("/auth/login");
        return null;
    }

    if(user && !user.userType){
        router.push("/user/profile-type")
    }

    return (
        <div>
            <h1>Profile</h1>
            <p>{JSON.stringify(user)}</p>
        </div>
    )
}