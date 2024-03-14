import Sidebar from "./components/sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex">
      <div className="">
        <Sidebar />
      </div>
      <main className=" w-full">{children}</main>
    </div>
  );
}
