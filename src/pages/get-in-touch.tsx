import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
};

const Contact = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form Submitted:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-6 max-w-md mx-auto space-y-4 border rounded-lg shadow-md">
      <div>
        <input
          {...register("name", { required: "Name is required" })}
          placeholder="Name"
          className="border p-2 w-full rounded-md"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>

      <div>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, message: "Invalid email format" }
          })}
          placeholder="Email"
          className="border p-2 w-full rounded-md"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      <button type="submit" className="p-2 bg-blue-500 text-white rounded-md w-full hover:bg-blue-600 transition">
        Submit
      </button>
    </form>
  );
};

export default Contact;
