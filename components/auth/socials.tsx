import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaInstagram } from "react-icons/fa";
export const Social = () => {
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="w-full flex items-center">
        <div style={{ flex: 1, height: "1px" }} className="bg-gray-500" />
        <span className="mx-2 text-sm text-gray-800">or continue with</span>
        <div style={{ flex: 1, height: "1px" }} className="bg-gray-500" />
      </div>
      <div className="flex gap-3">
        <Button variant={"outline"} className="flex gap-1 w-1/2">
          <FcGoogle />
          <span>Google</span>
        </Button>
        <Button className="w-1/2 gap-1 ">
          <FaInstagram />
          Instagram
        </Button>
      </div>
    </div>
  );
};
