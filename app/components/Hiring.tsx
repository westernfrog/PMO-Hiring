import {
  ArrowUpRightIcon,
  BeakerIcon,
  BookOpenIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const info = [
  {
    title: "Technical Team",
    href: "/",
    icon: CodeBracketIcon,
    linkName: "Tech apply",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inmollitia, accusamus magnam quos asperiores nihil praesentium molestiae ullam fugiat dolorem.",
  },
  {
    title: "Non-Technical Team",
    href: "/",
    icon: BookOpenIcon,
    linkName: "Non-Tech apply",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In mollitia, accusamus magnam quos asperiores nihil praesentium molestiae ullam fugiat dolorem tempora ipsa voluptatem voluptas voluptatibus alias. Fugiat voluptate sunt quod!",
  },
  {
    title: "R & D Team",
    href: "/",
    icon: BeakerIcon,
    linkName: "R & D apply",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In mollitia, accusamus magnam quos.",
  },
];

export default function Hiring() {
  return (
    <>
      <div className="mx-auto max-w-7xl p-6">
        <div className="lg:grid grid-cols-2 border-t border-gray-500 lg:pt-40 lg:py-2 py-20">
          <h1 className="text-2xl lg:text-center mb-5">We are hiring</h1>
          <div>
            <p className="lg:text-2xl text-lg lg:leading-10 text-gray-400 lg:text-gray-100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              optio hic corporis ducimus eaque, est enim. Explicabo soluta ex
              qui ipsa id molestias illum exercitationem accusamus libero error.
              Vel, quaerat!
            </p>
          </div>
        </div>
        <div className="lg:bg-[#141516] rounded-3xl lg:px-16 lg:py-20 lg:my-36">
          <div className="flex lg:flex-row flex-col items-center justify-between gap-16">
            {info.map((item, index) => (
              <div
                key={index}
                className="grid items-center lg:border-none border-b border-gray-300/10 pb-5"
              >
                <div>
                  <div className="bg-fuchsia-200 w-7 h-7 rounded-2xl shadow-xl p-8 mb-10 grid items-center justify-center content-center">
                    <item.icon className="w-7 h-7 text-gray-900" />
                  </div>
                  <h1 className="mb-8 text-2xl font-medium">{item.title}</h1>
                  <p className="text-gray-400 text-xl">{item.desc}</p>
                </div>
                <div className="my-12">
                  <Link
                    href={item.href}
                    className="font-medium rounded-xl py-3 px-4 text-base bg-fuchsia-200 text-gray-900 hover:bg-fuchsia-50 transition-colors duration-200 ease-in-out"
                  >
                    {item.linkName}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
