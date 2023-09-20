import Link from "next/link";

export default function Signup() {
  return (
    <>
      <div className="mx-auto max-w-7xl h-screen flex items-center justify-center p-6">
        <div className="lg:p-12 lg:bg-[#141516] lg:ring-1 ring-0 ring-zinc-900 shadow-inner rounded-3xl">
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
              <label htmlFor="username" className="leading-6 text-sm">
                Email
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-fuchsia-300 px-3">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="false"
                    className="lg:w-64 w-full border-0 bg-transparent py-1.5 pl-1 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="21bcs1603"
                  />
                  <span className="flex select-none items-center pl-3 sm:text-sm">
                    /@cuchd.in
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
                    autoComplete="off"
                    className="w-full border-0 bg-transparent py-1.5 pl-1 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Your Password"
                  />
                </div>
              </div>
              <div className="mt-5">
                <label htmlFor="cpassword" className="leading-6 text-sm">
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-fuchsia-300 px-3">
                  <input
                    type="password"
                    name="cpassword"
                    id="password"
                    autoComplete="off"
                    className="w-full border-0 bg-transparent py-1.5 pl-1 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Your Password"
                  />
                </div>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-fuchsia-200 px-3 py-1.5 mt-10 text-sm font-semibold leading-6 text-gray-900 shadow-sm hover:bg-fuchsia-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
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
