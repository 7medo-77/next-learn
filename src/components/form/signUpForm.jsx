"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Controller, FormProvider, useForm } from "react-hook-form";
import registrationSchema from "@/lib/registration";
import { zodResolver } from "@hookform/resolvers/zod";
import { inter, varela } from "@/fonts.js";
import Link from "next/link";
// import { toast } from "@/components/ui/use-toast"

const SignUp = () => {
  const form = useForm({
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit = () => {
    console.log("Submitted!");
  };

  return (
    <Form {...form}>
      <div className={`${varela.className} flex justify-start my-3 text-2xl`}>
        Sign Up
      </div>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-slate-400 rounded max-h-[1000px] w-[400px] space-y-6 p-4 flex flex-col "
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={`${varela.className} pb-5 pl-8 text-base `}>
                Name
              </FormLabel>
              <FormControl className="w-5/6">
                <Input
                  placeholder="John Doe"
                  {...field}
                  className="w-5/6 mx-auto"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="username"
          className=""
          render={({ field }) => (
            <FormItem>
              <FormLabel className={`${varela.className} pb-5 pl-8 text-base `}>
                Username
              </FormLabel>
              <FormControl className="w-5/6">
                <Input
                  placeholder="john_doe"
                  {...field}
                  className="w-5/6 mx-auto"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          className=""
          render={({ field }) => (
            <FormItem>
              <FormLabel className={`${varela.className} pb-5 pl-8 text-base `}>
                E-mail
              </FormLabel>
              <FormControl className="w-5/6">
                <Input
                  placeholder="john_doe@gmail.com"
                  {...field}
                  className="w-5/6 mx-auto"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          className="w-2/3"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={`${varela.className} pl-8 text-base`}>
                Password
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="********"
                  {...field}
                  className="w-5/6 mx-auto "
                  type="password"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          className="w-2/3"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={`${varela.className} pl-8 text-base`}>
                Confirm password
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="********"
                  {...field}
                  className="w-5/6 mx-auto "
                  type="password"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className={`${varela.className} w-5/6 mx-auto mt-3`}
        >
          Submit
        </Button>
        <div
          className="mx-auto my-0 flex w-5/6 items-center justify-evenly before:mr-4 before:block 
                        before:h-px before:flex-grow before:bg-black after:ml-4 after:block 
                        after:h-px after:flex-grow after:bg-black"
        >
          Or
        </div>

        <p className="mx-auto">
          Already have an account?{" "}
          <Link
            href="/sign-in"
            className={`${varela.className} hover:text-blue-700 hover:underline text-blue-500 mt-[-40px]`}
          >
            {" "}
            Sign In{" "}
          </Link>
        </p>
      </form>
    </Form>
  );
};

export default SignUp;
