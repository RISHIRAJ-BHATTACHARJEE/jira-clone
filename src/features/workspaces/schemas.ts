import { z } from "zod";

export const createWorkSpaceSchema = z.object({
	name: z.string().trim().min(1, "Required"),
	image: z.union([
		z.instanceof(File).optional(),
		z.string().transform((val)=>val === "" ? undefined : val)
	]).optional(),
});

export const updateWorkSpaceSchema = z.object({
	name: z.string().trim().min(1, "Must be 1 or more characters").optional(),
	image: z.union([
		z.instanceof(File).optional(),
		z.string().transform((val)=>val === "" ? undefined : val)
	]).optional(),
});