import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Login() {
  interface IFormData {
    email: string;
    password: string;
  }
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IFormData>();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (data: IFormData) => {
    console.log(data);
    toast.success("Login successfully");
    reset();
    navigate(from, { replace: true });
  };

  return (
    <div>
      <div className="h-screen flex justify-center items-center">
        <div className="w-96 p-7">
          <h2 className="text-4xl text-center font-bold">Login</h2>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                {...register("email", {
                  required: "Email Address is required",
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.email && (
                <p className="text-red-600">{errors.email?.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Password Address is required",
                  minLength: {
                    value: 6,
                    message: "password must be 6 characters",
                  },
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.password && (
                <p className="text-red-600">{errors.password?.message}</p>
              )}
              <label className="label">
                <span className="label-text">Forget Password?</span>
              </label>
            </div>

            <input
              className="btn btn-accent text-xl w-full"
              value="Login"
              type="submit"
            />
          </form>
          <p>
            New to Electric gadgets Management? <br />
            <Link className="text-secondary mt-5 text-right" to={"/register"}>
              Create new account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
