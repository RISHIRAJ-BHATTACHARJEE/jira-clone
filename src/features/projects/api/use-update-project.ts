import { useMutation, useQueryClient } from "@tanstack/react-query";

import { InferRequestType, InferResponseType } from "hono";

import { client } from "@/lib/rpc";
import { toast } from "sonner";

type ResponseType = InferResponseType<(typeof client.api.projects)[":projectId"]["$patch"], 200>;
type RequestType = InferRequestType<(typeof client.api.projects)[":projectId"]["$patch"]>;

export const useUpdateProject = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async ({ form, param }) => {
      const res = await client.api.projects[":projectId"]["$patch"]({ form, param });

      if (!res.ok) {
        throw new Error("Failed to update project");
      }
      return await res.json();
    },
    onSuccess: ({data}) => {
      toast.success("Project updated", {
        style: {
          background: "#089900",
          color: "#fff",
          border: "3px solid #000000",
          borderRadius: "12px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          padding: "16px",
          fontSize: "1rem",
          fontWeight: "bold",
          textAlign: "center",
        },
        duration: 4000,
        closeButton: true,
      });
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      queryClient.invalidateQueries({ queryKey: ["project", data.$id] });
    },
    onError: (err) => {
      console.log("Error with image uploading", err.message);
      toast.error("Failed to update project", {
        style: {
          background: "#cc0000",
          color: "#fff",
          border: "3px solid #000000",
          borderRadius: "12px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          padding: "16px",
          fontSize: "1rem",
          fontWeight: "bold",
          textAlign: "center",
        },
        duration: 4000,
        closeButton: true,
      });
    },
  });

  return mutation;
};
