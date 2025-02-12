import { useMutation, useQueryClient } from "@tanstack/react-query";

import { InferRequestType, InferResponseType } from "hono";

import { client } from "@/lib/rpc";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type ResponseType = InferResponseType<(typeof client.api.auth.login)["$post"]>;
type RequestType = InferRequestType<(typeof client.api.auth.login)["$post"]>;

export const useLogin = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async ({ json }) => {
      const res = await client.api.auth.login["$post"]({ json });
      if (!res.ok) {
        throw new Error("login failed");
      }
      return await res.json();
    },
    onSuccess: () => {
      toast.success("Login successful", {
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
      router.refresh();
      queryClient.invalidateQueries({ queryKey: ["current"] });
    },
    onError: () => {
      toast.error("Login failed",
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
