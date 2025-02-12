"use client"

import { useGetProjects } from "@/features/projects/api/use-get-projects";
import ProjectAvatar from "@/features/projects/components/project-avatar";
import { useCreateProjectModal } from "@/features/projects/hooks/use-create-project-modal";
import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaPlusCircle } from "react-icons/fa";


export const Projects = () => {
  const pathname = usePathname()
  const { open } = useCreateProjectModal();
  const workspaceId = useWorkspaceId();
  const {data} = useGetProjects({workspaceId})


  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase text-neutral-500">Projects</p>
        <FaPlusCircle
          onClick={open}
          className="size-5 text-neutral-500 cursor-pointer hover:opacity-75"
        />
      </div>
      {data?.documents.map((project)=>{
        const href = `/workspaces/${workspaceId}/projects/${project.$id}`
        const isActive = pathname === href;
      
        return (
          <Link href={href} key={project.$id}>
            <div className={cn("flex items-center gap-2.5 rounded-md hover:opacity-75 transition cursor-pointer text-neutral-500 py-2 px-1.5",
              isActive && "bg-white shadow-md hover:opacity-100 text-primary"
            )}>
              <ProjectAvatar image={project.imageUrl} name={project.name}/>
              <span className="truncate">{project.name}</span>
            </div>
          </Link>
        )
      })}
    </div>
  );
};
