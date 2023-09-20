import Link from "next/link";

export default function Hiring() {
  return (
    <>
      <form className="p-6">
        <div className="space-y-12">
          <div className="border-b border-gray-300/10 pb-12">
            <h2 className="text-2xl font-semibold leading-7 text-gray-300">
              Profile
            </h2>
            <p className="mt-1 leading-6 text-gray-500">
              This information will be displayed publicly so be careful what you
              share.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-2">
                <label htmlFor="uid" className="leading-6">
                  UID
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-500 focus-within:ring-2 focus-within:ring-inset focus-within:ring-fuchsia-300 px-3">
                    <input
                      type="text"
                      name="uid"
                      id="uid"
                      autoComplete="uid"
                      className="w-full border-0 bg-transparent py-1.5 pl-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="21bcs1603"
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="uid" className="leading-6">
                  Section
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-500 focus-within:ring-2 focus-within:ring-inset focus-within:ring-fuchsia-300 px-3">
                    <input
                      type="text"
                      name="uid"
                      id="uid"
                      autoComplete="section"
                      className="w-full border-0 bg-transparent py-1.5 pl-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="XXX"
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="uid" className="leading-6">
                  Group
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-500 focus-within:ring-2 focus-within:ring-inset focus-within:ring-fuchsia-300 px-3">
                    <input
                      type="text"
                      name="uid"
                      id="uid"
                      autoComplete="group"
                      className="w-full border-0 bg-transparent py-1.5 pl-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="A/B"
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="uid" className="leading-6">
                  Year of graduation
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-500 focus-within:ring-2 focus-within:ring-inset focus-within:ring-fuchsia-300 px-3">
                    <input
                      type="text"
                      name="uid"
                      id="uid"
                      autoComplete="graduation-year"
                      className="w-full border-0 bg-transparent py-1.5 pl-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="2025"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="about"
                  className="block font-medium leading-6 text-gray-300"
                >
                  About
                </label>
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    rows={4}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-fuchsia-200 bg-transparent bg-transparent sm: sm:leading-6"
                    defaultValue={""}
                  />
                </div>
                <p className="mt-3 leading-6 text-gray-500">
                  Write a few sentences about yourself.
                </p>
              </div>
              <div className="sm:col-span-4">
                <label htmlFor="role" className="leading-6">
                  Role
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-500 focus-within:ring-2 focus-within:ring-inset focus-within:ring-fuchsia-300 px-3">
                    <input
                      type="text"
                      name="role"
                      id="role"
                      autoComplete="role"
                      className="w-full border-0 bg-transparent py-1.5 pl-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Web Development"
                    />
                  </div>
                  <p className="mt-3 leading-6 text-gray-500">
                    Tell us the job role you want to do.
                  </p>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="exp" className="leading-6">
                  Experience
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-500 focus-within:ring-2 focus-within:ring-inset focus-within:ring-fuchsia-300 px-3">
                    <input
                      type="text"
                      name="exp"
                      id="exp"
                      autoComplete="experience"
                      className="w-full border-0 bg-transparent py-1.5 pl-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="3+"
                    />
                  </div>
                  <p className="mt-3 leading-6 text-gray-500">
                    How much years of experience in this role?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b border-gray-300/10 pb-12">
            <h2 className="text-2xl font-semibold leading-7 text-gray-300">
              Personal Information
            </h2>
            <p className="mt-1 leading-6 text-gray-500">
              Use personal mobile number where you can receive a call.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-3">
                <label
                  htmlFor="first-name"
                  className="block font-medium leading-6 text-gray-300"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    placeholder="Aman"
                    className="w-full rounded-md border-0 py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-fuchsia-200 bg-transparent sm: sm:leading-6"
                  />
                </div>
              </div>
              <div className="col-span-3">
                <label
                  htmlFor="last-name"
                  className="block  font-medium leading-6 text-gray-300"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    placeholder="Singh"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-fuchsia-200 bg-transparent sm: sm:leading-6"
                  />
                </div>
              </div>
              <div className="col-span-3">
                <label
                  htmlFor="phone-number"
                  className="block font-medium leading-6 text-gray-300"
                >
                  Phone number
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="phone-number"
                    placeholder="930XXXXXXX"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-fuchsia-200 bg-transparent sm: sm:leading-6"
                  />
                </div>
              </div>
              <div className="col-span-3 hidden lg:block"></div>
              <div className="col-span-3">
                <label
                  htmlFor="resume"
                  className="block font-medium leading-6 text-gray-300"
                >
                  Resume link
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="resume"
                    id="resume"
                    autoComplete="resume-link"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-fuchsia-200 bg-transparent sm: sm:leading-6"
                  />
                </div>
                <p className="mt-3 leading-6 text-gray-500">
                  Upload your resume on Google Drive and paste the link above.
                </p>
              </div>
              <div className="col-span-3">
                <label
                  htmlFor="github"
                  className="block font-medium leading-6 text-gray-300"
                >
                  Github profile
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="github"
                    id="github"
                    autoComplete="github-profile"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-fuchsia-200 bg-transparent sm: sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <Link
            href={"/"}
            className="text-sm lg:text-base font-medium leading-6 text-gray-300"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="text-sm lg:text-base rounded-xl bg-fuchsia-200 px-3 py-2 font-medium text-gray-900 hover:bg-fuchsia-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-500"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
}
