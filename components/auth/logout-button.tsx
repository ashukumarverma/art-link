'use client'

import { Button } from "../ui/button";
import {logout} from "@/action/logout";
import { useSession } from "next-auth/react";
import {useRouter} from "next/navigation";
import { useTransition } from "react";
import { toast } from "sonner";

export const LogoutButton = () => {
    const router = useRouter();
    const {data, update} = useSession()
    const [isPending, setTransition] = useTransition()
    console.log("data", data)
    const handleLogout = async () => {
        setTransition( () => {
            logout().then( async (response) => {
                if(response?.error){
                    toast.error(response.error);
                }
                if(response?.success){
                    toast.success(response.success);
                }
                await update();
                router.push("/auth/login")
            })
        })
    };
    return (
    <Button onClick={handleLogout} disabled={isPending}>Logout</Button>
    );
}