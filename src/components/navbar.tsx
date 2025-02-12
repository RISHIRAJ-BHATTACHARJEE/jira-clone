"use client"

import { usePathname } from "next/navigation";
import MobileSidebar from "./mobile-sidebar";

import { UserButton } from "@/features/auth/components/user-button";

const pathNameMap = {
  "tasks": {
    title: "My Tasks",
    description: "View all of your tasks here"
  },
  "projects": {
    title: "My Projects",
    description: "View tasks of your project here"
  },
}

const defaultMap = {
  title: "Home",
  description: "Monitor all your projects and tasks here"
}

const Navbar = () => {
  const pathname = usePathname();
  const pathnameParts = pathname.split("/")
  const pathnameKey = pathnameParts[3] as keyof typeof pathNameMap;

  const { title, description } = pathNameMap[pathnameKey] || defaultMap;

  return (
    <nav className="pt-4 px-6 flex items-center justify-between">
      <div className="flex-col hidden lg:flex">
        <h1 className="text-3xl font-semibold">{title}</h1>
        <p className="text-muted-foreground pt-2">
          {description}
        </p>
      </div>
      <MobileSidebar />
      <UserButton />
    </nav>
  );
};

export default Navbar;
