"use client";

import Link from "next/link";
import { useState } from "react";
import { redirect } from "next/navigation";
import { auth } from "../utils/firebase";
import {
  User,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { AtSymbolIcon } from "@heroicons/react/24/outline";

const ERROR_MESSAGES = {
  EMPTY_FIELDS: "Please fill in all the fields.",
  INVALID_EMAIL_FORMAT: "Please enter a valid email format (e.g., 21bcs1603).",
  PASSWORDS_DO_NOT_MATCH: "Passwords do not match.",
  SIGNUP_FAILED: "Signup failed. Please try again later.",
};

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [terms, setTerms] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
      console.log("email updated");
    }
    if (name === "password") {
      setPassword(value);
    }
    if (name === "confirm-password") {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!terms || !email || !password || !confirmPassword) {
      setError(ERROR_MESSAGES.EMPTY_FIELDS);
      return;
    }

    if (!email.match(/^(2[0-9])[a-z]+[0-9]{4,5}@cuchd.in$/)) {
      setError(ERROR_MESSAGES.INVALID_EMAIL_FORMAT);
      return;
    }

    if (password !== confirmPassword) {
      setError(ERROR_MESSAGES.PASSWORDS_DO_NOT_MATCH);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser as User;
      await sendEmailVerification(user);
      alert("Email verification sent" + email);

      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(ERROR_MESSAGES.SIGNUP_FAILED);
      console.error(err);
    }
  };

  return (
    <>
      <div className="mx-auto max-w-lg h-screen flex items-center justify-center p-6">
        <div className="lg:p-12 lg:bg-[#141516] lg:ring-1 ring-0 ring-zinc-900 shadow-inner rounded-3xl w-full">
          <div className="mb-8">
            <h1 className="text-2xl font-semibold">
              Let&apos;s create an account
            </h1>
            <p className="text-sm text-gray-500 leading-8">
              Sign up an account
            </p>
          </div>
          <form className="space-y-6" action="#" method="POST">
            <div className="flex-col gap-8">
              <label htmlFor="email" className="leading-6 text-sm">
                Email
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-fuchsia-300 px-3">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    autoComplete="off"
                    className="w-full border-0 bg-transparent py-1.5 pl-1 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Your UID"
                    value={email}
                    onChange={handleChange}
                  />
                  <span className="flex select-none items-center pl-3 sm:text-sm">
                    <AtSymbolIcon className="w-5 h-5" />
                  </span>
                </div>
              </div>
              <div className="mt-5">
                <label htmlFor="password" className="leading-6 text-sm">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-fuchsia-300 px-3">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="new-password"
                    className="w-full border-0 bg-transparent py-1.5 pl-1 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Your Password"
                    value={password}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mt-5">
                <label htmlFor="confirm-password" className="leading-6 text-sm">
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-fuchsia-300 px-3">
                  <input
                    type="password"
                    name="confirm-password"
                    id="confirm-password"
                    autoComplete="new-password"
                    className="w-full border-0 bg-transparent py-1.5 pl-1 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mt-5">
                <label
                  htmlFor="terms"
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    name="terms"
                    id="terms"
                    className="form-checkbox rounded text-fuchsia-500 focus:ring-fuchsia-300 bg-transparent"
                    checked={terms}
                    onChange={() => setTerms(!terms)}
                  />
                  <span className="text-sm text-gray-500">
                    I agree to the terms and conditions
                  </span>
                </label>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-fuchsia-200 px-3 py-1.5 mt-6 text-sm font-semibold leading-6 text-gray-900 shadow-sm hover:bg-fuchsia-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? "Signing up..." : "Sign up"}
              </button>
            </div>
            {error && (
              <div className="text-red-400 text-sm text-center">{error}</div>
            )}
          </form>
          <div className="flex flex-row justify-between">
            <p className="mt-10 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-medium leading-6 text-fuchsia-200 hover:text-fuchsia-50"
              >
                Log in
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
