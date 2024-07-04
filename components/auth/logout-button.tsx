"use client";

import { Button } from "../ui/button";
import { logout } from "@/action/logout";
import { useSessionContext } from "@/context/SessionContext";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { toast } from "sonner";

export const LogoutButton = () => {
  const router = useRouter();
  const { updateSession } = useSessionContext();
  const [isPending, setTransition] = useTransition();

  const handleLogout = async () => {
    setTransition(() => {
      logout().then(async (res) => {
        router.push("/auth/login");
        await updateSession();
      });
    });
  };
  return (
    <Button onClick={handleLogout} disabled={isPending}>
      Logout
    </Button>
  );
};
