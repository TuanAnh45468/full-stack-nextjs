import Head from "../head";
import GlassPane from "@/components/GlassPane";
import "@/styles/global.css";

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <Head />
      <body className="h-screen w-screen candy-mesh p-6">
        <GlassPane className="w-full h-full flex items-center justify-center">
          {children}
        </GlassPane>
      </body>
    </html>
  );
}
