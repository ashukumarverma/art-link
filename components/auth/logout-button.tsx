"use client";

import { Button } from "../ui/button";
import { logout } from "@/action/logout";
import { useSessionContext } from "@/context/SessionContext";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { toast } from "sonner";

interface LogoutButtonProps {
  className?: string;
}

export const LogoutButton = ({className}:LogoutButtonProps) => {
  const router = useRouter();
  const { updateSession } = useSessionContext();
  const [isPending, setTransition] = useTransition();

  const handleLogout = async () => {
    setTransition(() => {
      logout().then(async (res) => {
        if (res?.error) {
          toast.error(res.error);
        } else {
          toast.success(res?.success);
        }
        await updateSession();
        router.push("/auth/login");
      });
    });
  };
  return (
    <Button className={className} onClick={handleLogout} disabled={isPending}>
      Logout
    </Button>
  );
};
