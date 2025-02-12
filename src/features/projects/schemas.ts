import { z } from "zod";

export const createProjectSchema = z.object({
	name: z.string().trim().min(1, "Required"),
	image: z.union([
		z.instanceof(File).optional(),
		z.string().transform((val)=>val === "" ? undefined : val)
	]).optional(),
	workspaceId: z.string(),
});

export const updateProjectSchema = z.object({
	name: z.string().trim().min(1, "Must be 1 or more characters").optional(),
	image: z.union([
		z.instanceof(File).optional(),
		z.string().transform((val)=>val === "" ? undefined : val)
	]).optional(),
	workspaceId: z.string(),
});