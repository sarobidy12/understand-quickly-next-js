import Link from "next/link";
import React from "react";

interface Props {
  to: string;
  name: string;
  mail: string;
}

const User: React.FC<Props> = ({ to, name, mail }) => {
  return (
    <div>
      <Link
        href={to}
        className="group block rounded-lg p-6 bg-white ring-1 ring-slate-900/10  space-y-3 hover:bg-sky-500 hover:ring-sky-500"
      >
        <div className="flex items-center space-x-3">
          <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">
            {name}
          </h3>
        </div>
        <p className="text-slate-500 group-hover:text-white text-sm">{mail}</p>
      </Link>
    </div>
  );
};

export default User;
