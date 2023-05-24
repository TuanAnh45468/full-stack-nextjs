import Head from "../head";
import GlassPane from "@/components/GlassPane";
import "@/styles/global.css";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <Head />
      <body className="h-screen w-screen candy-mesh p-6">
        <GlassPane className="w-full h-full flex items-center">
          <Sidebar></Sidebar>
          {children}
        </GlassPane>
      </body>
    </html>
  );
}
