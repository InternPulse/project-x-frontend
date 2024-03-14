import Sidebar from "./components/sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex w-full">
      <div className=" w-[20%]">
        <Sidebar />
      </div>{" "}
      <main className="p-4 bg-offGray w-full">{children}</main>
    </div>
  );
}
