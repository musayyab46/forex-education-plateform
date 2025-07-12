import { Outlet } from "react-router-dom";
import Navbar from "./Navbar"; // you'll create this next

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Outlet />
      </main>
    </>
  );
}
