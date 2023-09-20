import Link from "next/link";

export default function Overview() {
  return (
    <>
      <div className="p-6">
        <div className="lg:text-center">
          <div className="lg:max-w-4xl mx-auto lg:text-center lg:mb-10 lg:mt-8">
            <h1 className="lg:text-7xl text-4xl font-semibold">
              Unlock your talent potential with us today
            </h1>
            <p className="lg:text-2xl text-lg text-gray-500 my-5">
              Orci molestie nam vulputate nunc habitant gravida. Interdum vitae
              vivamus ipsum aliquet consectetur aliquam.
            </p>
            <Link
              href={"/login"}
              className="inline-grid my-1 font-medium rounded-xl py-3 px-6 lg:text-lg text-base bg-fuchsia-200 text-gray-900 hover:bg-fuchsia-50 transition-colors duration-200 ease-in-out"
            >
              Get started today
            </Link>
          </div>
          <div className="max-w-lg mx-auto my-10">
            <h1 className="mb-5 text-lg text-center">Popular Jobs</h1>
            <div className="grid lg:grid-cols-3 grid-rows-3 lg:gap-0 gap-3 lg:divide-x divide-gray-300">
              {["Web Developer", "App Developer", "Problem Solver"].map(
                (item, index) => (
                  <button
                    key={index}
                    className={`lg:py-3 py-2 lg:ring-0 ring-1 ring-fuchsia-50 text-base lg:text-lg text-fuchsia-50 lg:rounded-none rounded-xl hover:bg-fuchsia-50 hover:text-gray-900 transition-colors duration-200 ease-in-out ${
                      index == 0
                        ? "lg:rounded-l-xl"
                        : index == 2
                        ? "lg:rounded-r-xl"
                        : ""
                    }`}
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
