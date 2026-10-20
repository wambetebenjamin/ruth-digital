import { z } from "zod";

const phoneRegex = /^[0-9+()\-\s]{9,20}$/;

export const strategyCallSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(90),
  email: z.string().trim().email("Please enter a valid email address").max(160),
  phone: z
    .string()
    .trim()
    .regex(phoneRegex, "Please enter a valid phone number")
    .max(20),
  company: z.string().trim().min(2, "Please enter your company name").max(120),
  website: z
    .string()
    .trim()
    .max(200)
    .optional()
    .or(z.literal("")),
  adBudget: z.enum([
    "Under KES 50,000",
    "KES 50,000 to 150,000",
    "KES 150,000 to 400,000",
    "Over KES 400,000",
    "Not running ads yet",
  ]),
  platform: z.enum(["Instagram", "Facebook", "TikTok", "LinkedIn", "Google", "Not sure yet"]),
  goal: z.string().trim().min(10, "Please tell us a little more, at least 10 characters").max(1200),
  callTime: z.enum([
    "Weekday mornings, 8am to 11am",
    "Weekday afternoons, 11am to 3pm",
    "Weekday evenings, 3pm to 6pm",
    "Saturday morning",
  ]),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Please accept the privacy policy to continue" }),
  }),
  recaptchaToken: z.string().optional(),
});

export type StrategyCallInput = z.infer<typeof strategyCallSchema>;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(90),
  email: z.string().trim().email("Please enter a valid email address").max(160),
  phone: z.string().trim().max(20).optional().or(z.literal("")),
  subject: z.string().trim().min(3, "Please add a subject").max(140),
  message: z.string().trim().min(10, "Please write at least 10 characters").max(2000),
  recaptchaToken: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const customPackageSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(90),
  email: z.string().trim().email("Please enter a valid email address").max(160),
  phone: z.string().trim().max(20).optional().or(z.literal("")),
  company: z.string().trim().min(2, "Please enter your company name").max(120),
  budget: z.string().trim().min(1, "Please choose a budget band").max(60),
  needs: z.string().trim().min(10, "Please describe what you need").max(1500),
  recaptchaToken: z.string().optional(),
});

export type CustomPackageInput = z.infer<typeof customPackageSchema>;

export const adBudgetOptions = [
  "Under KES 50,000",
  "KES 50,000 to 150,000",
  "KES 150,000 to 400,000",
  "Over KES 400,000",
  "Not running ads yet",
] as const;

export const platformOptions = [
  "Instagram",
  "Facebook",
  "TikTok",
  "LinkedIn",
  "Google",
  "Not sure yet",
] as const;

export const callTimeOptions = [
  "Weekday mornings, 8am to 11am",
  "Weekday afternoons, 11am to 3pm",
  "Weekday evenings, 3pm to 6pm",
  "Saturday morning",
] as const;
