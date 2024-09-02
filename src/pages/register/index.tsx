import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import img from "@/assets/images/register-icon-img.jpg";
import { useNavigate } from "react-router-dom";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required."),
  email: z.string().email("Invalid email address."),
  phone: z.string().min(1, "Please enter your valid Phone No.."),
  password: z
    .string({ message: "Please enter your password" })
    .min(4, "Password should be greater then 4 characters."),
});

type FormValues = z.infer<typeof contactSchema>;

const Register = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
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
          <div className="left p-6 w-[50%] h-full bg-white">
            <h1 className="text-[30px] text-[var(--black-800)]">
              Create Account
            </h1>
            <p className="text-[14px] text-[var(--black-600)]">
              Create you account to buy you plans.
            </p>
            <div className="mt-6 h-full">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col justify-between h-[calc(100%_-_90px)]"
              >
                <div>
                  <div className="mb-3">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Full Name
                    </label>
                    <Controller
                      name="name"
                      control={control}
                      render={({ field }) => (
                        <input
                          id="name"
                          type="text"
                          {...field}
                          className={`mt-1 block w-full h-[40px] px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50 ${
                            errors.name ? "border-red-500" : "border-gray-300"
                          }`}
                        />
                      )}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

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
                      Phone
                    </label>
                    <Controller
                      name="phone"
                      control={control}
                      render={({ field }) => (
                        <input
                          id="phone"
                          type="text"
                          {...field}
                          className={`mt-1 block w-full h-[40px] px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50 ${
                            errors.phone ? "border-red-500" : "border-gray-300"
                          }`}
                        />
                      )}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm">
                        {errors.phone.message}
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
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                >
                  Submit
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
                Already have an Account
              </p>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white mt-3 py-2 px-12 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
