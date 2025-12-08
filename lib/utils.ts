import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount?: number | null) {
  const value = Number(amount || 0)
  try {
    return new Intl.NumberFormat("en-PH", { style: "currency", currency: "PHP" }).format(value)
  } catch (e) {
    return `₱${value.toFixed(2)}`
  }
}
