import Image from "next/image";
import Link from "next/link";
import Menu from "../../components/Menu";
import Navbar from "@/components/Navbar";


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="h-screen flex bg-gray-100 dark:bg-dark">
        {/* LEFT */}
        <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-2 flex flex-col h-full bg-white dark:bg-dark">
          <Link href="/" className="flex items-center justify-center lg:justify-start gap-2">
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block font-bold">
            MK School
          </span>
          </Link>
          <Menu/>
        </div>
        {/* RIGHT */}
        <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#dbdbdd] dark:bg-gray-800 overflow-scroll flex flex-col">
          
          <Navbar/>
          {children}
          </div>
        </div>
  );
}
