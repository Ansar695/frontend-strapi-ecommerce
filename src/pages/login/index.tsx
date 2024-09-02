import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import img from "@/assets/images/register-icon-img.jpg";
import { useNavigate } from "react-router-dom";

const contactSchema = z.object({
  email: z.string().email("Invalid email address."),
  password: z
    .string({ message: "Please enter your password" })
    .min(4, "Invalid Password."),
});

type FormValues = z.infer<typeof contactSchema>;

const Login = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full h-[calc(100vh_-_80px)] flex items-center justify-center relative">
      <div className="bg-[var(--blue-150)] w-[50%] h-full"></div>
      <div className="bg-[var(--blue-700)] w-[50%] h-full"></div>
      <div className="absolute top-0 right-0 left-0 bottom-0 bg-transparent flex items-center justify-center">
        <div
          className="w-[75%] h-[85%] min-h-[550px] flex items-center justify-center rounded-md overflow-hidden"
          style={{ boxShadow: "2px 2px 10px rgba(0,0,0,0.5)" }}
        >
          <div className="left flex flex-col justify-center p-6 w-[50%] h-full bg-white">
            <h1 className="text-[30px] text-[var(--black-800)]">Login</h1>
            <div className="mt-10 w-full">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <div className="mb-3">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <Controller
                      name="email"
                      control={control}
                      render={({ field }) => (
                        <input
                          id="email"
                          type="email"
                          {...field}
                          className={`mt-1 block w-full h-[40px] px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50 ${
                            errors.email ? "border-red-500" : "border-gray-300"
                          }`}
                        />
                      )}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <Controller
                      name="password"
                      control={control}
                      render={({ field }) => (
                        <input
                          id="password"
                          type="password"
                          {...field}
                          className={`mt-1 block w-full h-[40px] px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50 ${
                            errors.password
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                        />
                      )}
                    />
                    {errors.password && (
                      <p className="text-red-500 text-sm">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                >
                  Log In
                </button>
              </form>
            </div>
          </div>
          <div className="left w-[50%] flex flex-col justify-between h-full bg-[var(--blue-150)] p-6">
            <div className="w-full h-[79%]">
              <img
                src={img}
                className="w-full h-full object-contain"
                alt="register-img"
              />
            </div>
            <div>
              <p className="text-[var(--black-600)] text-[18px]">
                Don't have an Account
              </p>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white mt-3 py-2 px-12 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                onClick={() => navigate("/register")}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
