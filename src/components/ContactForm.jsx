import { useId, useState } from 'react'
import { useForm } from 'react-hook-form'
import { AlertCircle, CheckCircle2, Loader2, Send } from 'lucide-react'
import { submitInquiry } from '../utils/submitInquiry'

const TIMELINE = ['Within 3 months', '3–6 months', '6–12 months', 'Just exploring']
const EXTRA = {
  buy: [
    { name: 'budget', label: 'Budget Range', options: ['Under $500K', '$500K – $1M', '$1M – $2M', '$2M+'] },
    { name: 'timeline', label: 'Timeline', options: TIMELINE },
  ],
  sell: [
    { name: 'propertyAddress', label: 'Property Address', required: true, placeholder: '123 Main St, City, State' },
    { name: 'timeline', label: 'Timeline', options: TIMELINE },
  ],
  contact: [],
  property: [],
}

function Field({ id, label, error, optional, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-navy">
        {label} {optional && <span className="font-normal text-ink/50">(optional)</span>}
      </label>
      {children}
      {error && <p id={`${id}-error`} role="alert" className="mt-1 text-sm text-red-600">{error.message}</p>}
    </div>
  )
}

export default function ContactForm({ variant = 'contact', defaultMessage = '', submitLabel = 'Send Message', context }) {
  const uid = useId()
  const [status, setStatus] = useState('idle') // idle | success | error
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({ defaultValues: { message: defaultMessage } })

  const onSubmit = async (data) => {
    setStatus('idle')
    try {
      await submitInquiry({ variant, context, ...data })
      setStatus('success')
      reset({ message: defaultMessage })
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div role="status" className="rounded-2xl bg-white p-10 text-center shadow-sm ring-1 ring-navy/5">
        <CheckCircle2 className="mx-auto text-green-600" size={44} aria-hidden="true" />
        <h3 className="mt-4 text-2xl font-semibold">Thank you — your message is ready</h3>
        <p className="mx-auto mt-2 max-w-sm text-sm text-ink/70">
          This is a demo form, so nothing was emailed. Connect an email service to deliver real inquiries.
        </p>
        <button type="button" onClick={() => setStatus('idle')} className="btn btn-outline mt-6">Send Another Message</button>
      </div>
    )
  }

  const id = (n) => `${uid}-${n}`
  const a11y = (n) => ({ id: id(n), 'aria-invalid': errors[n] ? 'true' : 'false', 'aria-describedby': errors[n] ? `${id(n)}-error` : undefined })

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy/5 sm:p-8">
      {status === 'error' && (
        <div role="alert" className="flex items-start gap-3 rounded-lg bg-red-50 p-4 text-sm text-red-700">
          <AlertCircle size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
          Something went wrong while sending your message. Please try again.
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id={id('name')} label="Full Name" error={errors.name}>
          <input type="text" autoComplete="name" placeholder="Jane Doe" className="input" {...a11y('name')}
            {...register('name', { required: 'Please enter your full name', minLength: { value: 2, message: 'Name must be at least 2 characters' } })} />
        </Field>
        <Field id={id('email')} label="Email" error={errors.email}>
          <input type="email" autoComplete="email" placeholder="you@example.com" className="input" {...a11y('email')}
            {...register('email', { required: 'Please enter your email', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, message: 'Enter a valid email address' } })} />
        </Field>
      </div>

      <Field id={id('phone')} label="Phone Number" error={errors.phone}>
        <input type="tel" autoComplete="tel" placeholder="(555) 123-4567" className="input" {...a11y('phone')}
          {...register('phone', { required: 'Please enter your phone number', validate: (v) => v.replace(/\D/g, '').length >= 10 || 'Enter a valid phone number (10+ digits)' })} />
      </Field>

      {EXTRA[variant].map((f) => (
        <Field key={f.name} id={id(f.name)} label={f.label} error={errors[f.name]} optional={!f.required}>
          {f.options ? (
            <select className="input" {...a11y(f.name)} {...register(f.name)}>
              <option value="">Select…</option>
              {f.options.map((o) => <option key={o}>{o}</option>)}
            </select>
          ) : (
            <input type="text" placeholder={f.placeholder} className="input" {...a11y(f.name)}
              {...register(f.name, f.required ? { required: `Please enter the ${f.label.toLowerCase()}` } : {})} />
          )}
        </Field>
      ))}

      <Field id={id('message')} label="Message" error={errors.message}>
        <textarea rows={5} placeholder="How can we help?" className="input resize-y" {...a11y('message')}
          {...register('message', { required: 'Please enter a message', minLength: { value: 10, message: 'Message must be at least 10 characters' } })} />
      </Field>

      <button type="submit" disabled={isSubmitting} className="btn btn-gold w-full sm:w-auto">
        {isSubmitting ? <Loader2 size={18} className="animate-spin" aria-hidden="true" /> : <Send size={18} aria-hidden="true" />}
        {isSubmitting ? 'Sending…' : submitLabel}
      </button>
    </form>
  )
}
