import { z } from 'zod'

export const contactSchema = z.object({
  // Honeypot — must be empty
  website: z.string().max(0, { message: 'Spam détecté' }).optional().default(''),

  prenom: z.string().min(2, '2 caractères minimum').max(60),
  nom: z.string().min(2).max(60),
  email: z.string().email('Email invalide').max(120),
  telephone: z
    .string()
    .regex(/^(\+33|0)[1-9](\d{2}){4}$/, 'Numéro français invalide')
    .optional()
    .or(z.literal('')),
  codePostal: z.string().regex(/^\d{5}$/, 'Code postal invalide'),
  sujet: z.enum(['devis', 'entretien', 'question', 'autre']),
  message: z.string().min(20, 'Au moins 20 caractères').max(2000),
  consentement: z.literal(true, {
    errorMap: () => ({ message: 'Vous devez accepter la politique de confidentialité' }),
  }),
  newsletter: z.boolean().default(false),
  // Anti-bot timing: form filled in less than 3s = bot
  startedAt: z.number().refine((t) => Date.now() - t > 3000, 'Soumission trop rapide'),
})

export type ContactFormData = z.infer<typeof contactSchema>
