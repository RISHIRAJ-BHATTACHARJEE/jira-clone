import { useMutation, useQueryClient } from "@tanstack/react-query";

import { InferRequestType, InferResponseType } from "hono";

import { client } from "@/lib/rpc";
import { toast } from "sonner";

type ResponseType = InferResponseType<typeof client.api.workspaces[":workspaceId"]["join"]["$post"], 200>;
type RequestType = InferRequestType<typeof client.api.workspaces[":workspaceId"]["join"]["$post"]>;

export const useJoinWorkspace = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async ({ param, json }) => {
      const res = await client.api.workspaces[":workspaceId"]["join"]["$post"]({ param, json });

      if (!res.ok) {
        throw new Error("Failed to join workspace");
      }
      return await res.json();
    },
    onSuccess: ({data}) => {
      toast.success(
        "Joined Workspace",
        {
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
        }
      );
      queryClient.invalidateQueries({ queryKey: ["workspaces"] });
      queryClient.invalidateQueries({ queryKey: ["workspace", data.$id] });
    },
    onError: () => {
      toast.error("Failed to join workspace",
        {
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
        }
      );
    },
  });
  return mutation;
};
