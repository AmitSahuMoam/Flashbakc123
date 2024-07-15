import { Label, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { login } from "../services/login";
import { supabase } from "../supabaseClient/supabaseClient";

function Login() {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();
  const onSubmit = async (values) => {
    console.log("values", values);

    const { data: formData, error: formError } =
      await supabase.auth.signInWithPassword(values);
    if (formData) {
      localStorage.setItem("access_token", formData.session.access_token);
      navigate("/admin/blogs");
    }
    console.log("formData", { formData, formError });
  };
  return (
    <div className="bg-hero-pattern h-screen flex justify-center items-center">
      <div className="absolute inset-0 bg-black opacity-50 z-10" />
      <div className="bg-white w-[40%] rounded-2xl h-[50%] z-50 opacity-80">
        <h1 className="text-black font-black text-5xl flex justify-center mt-7">
          Login
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-12 flex flex-col gap-12">
            <div>
              <Label value="Username" className="text-lg" />
              <TextInput
                className="text-black bg-white mt-2"
                placeholder="Enter User Id"
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...register("email", { required: true })}
              />
            </div>
            <div>
              <Label value="Password" className="text-lg" />
              <TextInput
                className="text-black bg-white mt-2"
                placeholder="Enter Password"
                type="password"
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...register("password", { required: true })}
              />
            </div>
            <button
              className="text-2xl rounded-xl py-2 bg-cyan-700 text-white hover:bg-cyan-800"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
