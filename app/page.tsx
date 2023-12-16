import Card from "./Component/Card";

export default function Home() {
  return (
    <div className="w-3/4">
      <h1 className="text-2xl font-bold">Welcome simple blog.</h1>
      <p>
        This is un simple project with next.js, just for lean how use next.js
      </p>
      <div className="flex flex-row gap-3	 my-3">
        <div className="basis-1/2">
          <Card to="/blog" title="Blog" description="Read item in this blog" />
        </div>
        <div className="basis-1/2">
          <Card to="/user" title="User" description="View all user avaible" />
        </div>
      </div>
    </div>
  );
}
