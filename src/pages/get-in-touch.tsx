import { useForm } from "react-hook-form";


const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log("Form Submitted", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-6">
      <input {...register("name", { required: true })} placeholder="Name" className="border p-2 w-full" />
      {errors.name && <p>Name is required</p>}

      <input {...register("email", { required: true })} placeholder="Email" className="border p-2 w-full" />
      {errors.email && <p>Email is required</p>}

      <button type="submit" className="p-2 bg-blue-500 text-white">Submit</button>
    </form>
  );
};

export default Contact;
