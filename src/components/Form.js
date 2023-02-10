import { useForm } from "react-hook-form";
export const Form = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = () => {
    console.log("HELLO WORLD");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Full Name..." />
      <input type="text" placeholder="Email Address..." />
      <input type="text" placeholder="Age..." />
      <input type="password" placeholder="Password..." />
      <input type="password" placeholder="Confirm Password..." />
      <input type="submit" />
    </form>
  );
};
