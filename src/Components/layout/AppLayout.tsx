import { Outlet } from "react-router-dom"
import Header from "../Header"

export default function AppLayout() {
  return (
    <div className="flex min-h-screen bg-[#0B1220] text-white">

      {/* Sidebar (your existing one) */} 
      <div className="hidden md:flex"> 
        <Header />
      </div>
      

      {/* Page Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>

    </div>
  )
}