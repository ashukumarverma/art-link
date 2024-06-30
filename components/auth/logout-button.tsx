'use client'

import { Button } from "../ui/button";
import {logout} from "@/action/logout";
import {useRouter} from "next/navigation";
import { useTransition } from "react";

export const LogoutButton = () => {
    const router = useRouter();
    const [isPending, setTransition] = useTransition()

    const handleLogout = async () => {
        router.push("/auth/login")
        setTransition(() => {
            logout()
        })
    };
    return (
    <Button onClick={handleLogout} disabled={isPending}>Logout</Button>
    );
}