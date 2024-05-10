import {z} from "zod";

export const SeasonFormSchema = z.object({
  startDate: z.date({
    required_error: "La date de début est obligatoire.",
  }),
  label: z.string({
    required_error: "Le libellé est obligatoire."
  })
});
