import SignIn from "@/components/form/signInForm";

const page = () => {
  return (
    <div className="h-screen flex-col flex items-center justify-center border-2 w-full">
      <SignIn />

      {/* <div className="w-full bg-red-400">somehting</div> */}
    </div>
  );
};

export default page;
