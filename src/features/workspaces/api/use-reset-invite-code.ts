import { useMutation, useQueryClient } from "@tanstack/react-query";

import { InferRequestType, InferResponseType } from "hono";

import { client } from "@/lib/rpc";
import { toast } from "sonner";

type ResponseType = InferResponseType<typeof client.api.workspaces[":workspaceId"]["reset-invite-code"]["$post"], 200>;
type RequestType = InferRequestType<typeof client.api.workspaces[":workspaceId"]["reset-invite-code"]["$post"]>;

export const useResetInviteCode = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async ({ param }) => {
      const res = await client.api.workspaces[":workspaceId"]["reset-invite-code"]["$post"]({ param });

      if (!res.ok) {
        throw new Error("Failed to reset invite code");
      }
      return await res.json();
    },
    onSuccess: ({data}) => {
      toast.success(
        "Invite code reset",
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
      toast.error("Failed to reset invite code",
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
