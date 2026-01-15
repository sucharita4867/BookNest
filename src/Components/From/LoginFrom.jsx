import Link from "next/link";

const LoginForm = () => {
  return (
    <div className="flex min-h-[90vh] items-center justify-center px-4">
      <div className="w-full max-w-sm rounded-xl bg-base-100 p-8 shadow-2xl">
        {/* Heading */}
        <h2 className="mb-4 text-center  mainText">Login to Your Account</h2>

        {/* Form */}
        <form className="space-y-4">
          {/* Email */}
          <div>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Forgot password */}
          {/* <div className="text-right">
            <Link
              href="/forgot-password"
              className="text-sm text-gray-600 hover:underline"
            >
              Forgot password?
            </Link>
          </div> */}

          {/* Button */}
          <button
            type="submit"
            className="btn bg-[#0F3D2E] rounded-full text-white w-full mt-2"
          >
            Login
          </button>
        </form>

        {/* Register */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link href="/register" className="font-medium hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
