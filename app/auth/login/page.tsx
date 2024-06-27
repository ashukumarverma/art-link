import Image from "next/image";
import img from "@/public/img/login.jpeg";
import { LoginForm } from "@/components/auth/login-form";



const Login = () => {
    return (
        <div className="w-full flex justify-between items-center px-16 py-10">
        <div className="w-1/2 flex flex-col items-center">
          <Image src={img} alt="Register Img" className="w-3/4" />
        </div>
        <LoginForm />
      </div>
    )
}

export default Login;