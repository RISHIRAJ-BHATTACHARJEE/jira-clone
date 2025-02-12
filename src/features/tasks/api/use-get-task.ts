import { Projects } from "@/features/projects/types";
import { client } from "@/lib/rpc";
import { useQuery } from "@tanstack/react-query";

interface UseGetTaskProps {
  taskId: string;
}

export const useGetTask = ({ taskId }: UseGetTaskProps) => {
  const query = useQuery({
    queryKey: ["task", taskId],
    queryFn: async () => {
      const response = await client.api.tasks[":taskId"].$get({ param: {taskId}});

      if (!response.ok) throw new Error("Failed to fetch task");

      const { data } = await response.json();

      const project: Projects = {
        name: data.project.name,
        imageUrl: data.project.imageUrl,
        workspaceId: data.project.workspaceId,
        $id: data.project.$id,
        $collectionId: data.project.$collectionId,
        $databaseId: data.project.$databaseId,
        $createdAt: data.project.$createdAt,
        $updatedAt: data.project.$updatedAt,
        $permissions: data.project.$permissions,
      };

      return { ...data, project };
    },
  });

  return query;
};
