import * as z  from "zod"

export const EventFormSchema = z.object({
	title: z.string().min(3, 'Tittle must be at leat 3 characters'),
	description: z.string().min(3, 'Description must be at leat 3 characters')
		.max(400, 'Description must be less than 400 characters'),
	location: z.string().min(3, 'Location must be at leat 3 characters')
		.max(400, 'Location must be less than 400 characters'),
	imageUrl: z.string(),
	startDateTime: z.date(),
	endDateTime: z.date(),
	categoryId: z.string(),
	price: z.string(),
	isFree: z.boolean(),
	url: z.string().url()
  })