import Link from "next/link";
import React from "react";

interface Props {
  to: string;
  title: string;
  description: string;
}

const Card: React.FC<Props> = ({ to, title, description }) => {
  return (
    <div>
      <Link
        href={to}
        className="group block rounded-lg p-6 bg-white ring-1 ring-slate-900/10  space-y-3 hover:bg-sky-500 hover:ring-sky-500"
      >
        <div className="flex items-center space-x-3">
          <svg
            className="h-6 w-6 stroke-sky-500 group-hover:stroke-white"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
          </svg>
          <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">
            {title}
          </h3>
        </div>
        <p className="text-slate-500 group-hover:text-white text-sm">
          {description}
        </p>
      </Link>
    </div>
  );
};

export default Card;
