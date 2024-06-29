import RegisterForm from "@/components/auth/register-form";
import img from "@/public/img/register.jpeg";
import Image from "next/image";

const Register = () => {
  return (
    <div className="w-full flex justify-between items-center px-16 py-6">
      <div className="w-1/2 flex flex-col items-center">
        <Image src={img} alt="Register Img" className="w-3/4" />
      </div>
      <RegisterForm />
    </div>
  );
};

export default Register;
