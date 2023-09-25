"use client";

import Link from "next/link";
import { useState } from "react";
import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword, User } from "firebase/auth";
import { redirect } from "next/navigation";
import { AtSymbolIcon } from "@heroicons/react/24/outline";

const ERROR_MESSAGES = {
  EMPTY_FIELDS: "Please fill in all the fields.",
  INVALID_EMAIL_FORMAT: "Please enter a valid email format (e.g., 21bcs1603).",
  LOGIN_FAILED: "Login failed. Please check your credentials.",
};

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChanges = (e: any) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError(ERROR_MESSAGES.EMPTY_FIELDS);
      console.log("");
      return;
    }
    if (!email.match(/^(2[0-9])[a-z]+[0-9]{4,5}$/)) {
      setError(ERROR_MESSAGES.INVALID_EMAIL_FORMAT);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password).then((e) => {
        console.log("login succesfull", e);
      });
      const user = auth.currentUser as User;
      if (user.emailVerified) {
        console.log("home");
      } else {
      }
    } catch (error) {
      setError(ERROR_MESSAGES.LOGIN_FAILED);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="mx-auto max-w-lg h-screen flex items-center justify-center p-6">
        <div className="lg:p-12 lg:bg-[#141516] lg:ring-1 ring-0 ring-zinc-900 shadow-inner rounded-3xl w-full">
          <div className="mb-8">
            <h1 className="text-2xl font-semibold">Welcome</h1>
            <p className="text-sm text-gray-500 leading-8">
              Log in to your account
            </p>
          </div>
          <form className="space-y-6" action="#" method="POST">
            <div className="flex-col gap-8">
              <label htmlFor="username" className="leading-6 text-sm">
                Email
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-fuchsia-300 px-3">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    autoComplete="false"
                    className="w-full border-0 bg-transparent py-1.5 pl-1 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="example@cuchd.in"
                    value={email}
                    required
                    onChange={handleChanges}
                  />
                  <span className="flex select-none items-center pl-3 sm:text-sm">
                    <AtSymbolIcon className="w-5 h-5" />
                  </span>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center mt-5">
                <label htmlFor="password" className="leading-6 text-sm">
                  Password
                </label>
                <h1 className="font-medium leading-6 text-sm text-fuchsia-200 hover:text-fuchsia-50">
                  Forgot Password?
                </h1>
              </div>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-fuchsia-300 px-3">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="false"
                    className="w-full border-0 bg-transparent py-1.5 pl-1 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Your Password"
                    value={password}
                    required
                    onChange={handleChanges}
                  />
                </div>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-fuchsia-200 px-3 py-1.5 mt-10 text-sm font-semibold leading-6 text-gray-900 shadow-sm hover:bg-fuchsia-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? "Logging in..." : "Log in"}
              </button>
            </div>
            {error && (
              <div className="text-red-400 text-sm text-center">{error}</div>
            )}
          </form>
          <div className="flex flex-row justify-between">
            <p className="mt-10 text-center text-sm text-gray-500">
              Not yet registered?{" "}
              <Link
                href="/signup"
                className="font-medium leading-6 text-fuchsia-200 hover:text-fuchsia-50"
              >
                Register
              </Link>
            </p>
            <p className="mt-10 text-center text-sm text-gray-500">
              <Link
                href="/"
                className="font-medium leading-6 text-fuchsia-200 hover:text-fuchsia-50"
              >
                Home
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
