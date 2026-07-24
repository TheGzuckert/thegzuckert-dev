import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        surface: {
          DEFAULT: 'hsl(var(--surface))',
          container: 'hsl(var(--surface-container))',
          'container-high': 'hsl(var(--surface-container-high))',
          'container-highest': 'hsl(var(--surface-container-highest))',
          'container-lowest': 'hsl(var(--surface-container-lowest))',
        },
        'on-surface-variant': 'hsl(var(--on-surface-variant))',
        'inverse-primary': 'hsl(var(--inverse-primary))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      spacing: {
        'margin-desktop': '64px',
        'margin-mobile': '20px',
        'component-gap': '16px',
        'container-max': '1280px',
        'section-gap': '120px',
        gutter: '24px',
      },
      maxWidth: {
        'container-max': '1280px',
      },
      fontFamily: {
        sans: ['var(--font-hanken)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      fontSize: {
        'headline-2xl': [
          '72px',
          { lineHeight: '1.1', letterSpacing: '-0.04em', fontWeight: '800' },
        ],
        'headline-xl': [
          '48px',
          { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' },
        ],
        'headline-lg': ['32px', { lineHeight: '1.3', fontWeight: '600' }],
        'headline-lg-mobile': ['28px', { lineHeight: '1.3', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'label-md': [
          '14px',
          { lineHeight: '1.2', letterSpacing: '0.05em', fontWeight: '500' },
        ],
        'label-sm': ['12px', { lineHeight: '1.2', fontWeight: '500' }],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
