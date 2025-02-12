import { useMutation, useQueryClient } from "@tanstack/react-query";

import { InferRequestType, InferResponseType } from "hono";

import { client } from "@/lib/rpc";
import { toast } from "sonner";

type ResponseType = InferResponseType<(typeof client.api.workspaces)["$post"]>;
type RequestType = InferRequestType<(typeof client.api.workspaces)["$post"]>;

export const useCreateWorkspace = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async ({ form }) => {
      const res = await client.api.workspaces["$post"]({ form });

      if (!res.ok) {
        throw new Error("Failed to create workspace");
      }
      return await res.json();
    },
    onSuccess: () => {
      toast.success(
        "Workspace created",
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
    },
    onError: (err) => {
      console.log("Error with image uploading", err.message);
      toast.error("Failed to create workspace",
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
