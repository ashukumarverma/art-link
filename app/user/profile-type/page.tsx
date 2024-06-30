"use client";
import { RiShieldUserFill } from "react-icons/ri";
import { FaPaintBrush } from "react-icons/fa";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { UserType } from "@prisma/client";
import { setProfileType } from "@/action/profile-type";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useCurrentUser } from "@/hooks/current-user";

const ProfileType = () => {
  const router = useRouter();
  const user = useCurrentUser();

  const handleProfileTypeOption = (type: UserType) => {
    setProfileType(type).then((res) => {
      if (res.success) {
        toast.success(res.success);
        router.push("/");
      } else {
        // toast.error(res.error)
        router.push("/");
      }
    });
  };
  if (user && user?.userType) {
    router.push("/");
    return <></>;
  }
  return (
    <div className="h-full flex flex-col gap-3 justify-center items-center p-5">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-2xl font-semibold">Profile Type</h1>
        <p className="text-sm text-gray-700">
          Choose your profile type for better user experience and platform
          utilization.
        </p>
      </div>
      <div className="flex flex-row justify-evenly bg-gray-400 rounded-md p-10 gap-10">
        {" "}
        <div
          className="flex flex-col justify-center items-center gap-1 w-60 bg-gray-900 text-white p-4 rounded-md"
          onClick={() => handleProfileTypeOption("General")}
        >
          <span className="text-xl">General</span>
          <RiShieldUserFill className="text-8xl" />
          <span className="text-sm">For general purpose work.</span>
        </div>
        <div
          className="flex flex-col justify-center items-center gap-1 w-60 bg-gray-900 text-white p-4 rounded-md"
          onClick={() => handleProfileTypeOption("Artist")}
        >
          <span className="text-xl">Artist</span>
          <FaPaintBrush className="text-7xl" />
          <span className="text-sm text-center">
            For presenting your Art & Craft work.
          </span>
        </div>
        <div
          className="flex flex-col justify-center items-center gap-1 w-60 bg-gray-900 text-white p-4 rounded-md"
          onClick={() => handleProfileTypeOption("General")}
        >
          <span className="text-xl">Buyer</span>
          <BiSolidPurchaseTag className="ml-4 text-7xl" />
          <span className="text-sm text-center">
            For bidding & purchasing Art & Craft work.
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileType;
