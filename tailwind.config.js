/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/**/*.html',
    './content/**/*.md',
    './static/**/*.html',
    './assets/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
      },
      colors: {
        'primary': {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#6366F1',
          600: '#6366F1',
          700: '#4F46E5',
          800: '#4F46E5',
          900: '#4F46E5',
        },
        'secondary': {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        'business': {
          purple: '#6366F1',
          'purple-light': '#8B5CF6',
          'purple-dark': '#4F46E5',
          pink: '#EC4899',
          'pink-light': '#F472B6',
          coral: '#F97316',
          'gray-900': '#111827',
          'gray-800': '#1F2937',
          'gray-700': '#374151',
          'gray-600': '#4B5563',
          'gray-500': '#6B7280',
          'gray-400': '#9CA3AF',
          'gray-300': '#D1D5DB',
          'gray-200': '#E5E7EB',
          'gray-100': '#F3F4F6',
          'gray-50': '#F9FAFB',
          white: '#FFFFFF',
        },
        'accent': {
          green: '#86EFAC',
          'green-container': '#BBF7D0',
          brown: '#D2B48C',
          'brown-container': '#F3E8D5',
          rose: '#FDA4AF',
          'rose-container': '#FECDD3',
          'light-purple': '#C4B5FD',
          'light-purple-container': '#DDD6FE',
        },
        'background': {
          'light-blue': '#EFF6FF',
          'card-background': '#F8FAFC',
        }
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#374151',
            a: {
              color: '#2563eb',
              textDecoration: 'none',
              '&:hover': {
                color: '#1d4ed8',
              },
            },
            h1: {
              color: '#111827',
              fontWeight: '700',
            },
            h2: {
              color: '#111827',
              fontWeight: '600',
            },
            h3: {
              color: '#111827',
              fontWeight: '600',
            },
            h4: {
              color: '#111827',
              fontWeight: '500',
            },
            code: {
              color: '#1f2937',
              backgroundColor: '#f3f4f6',
              padding: '0.125rem 0.25rem',
              borderRadius: '0.25rem',
              fontSize: '0.875rem',
            },
            pre: {
              backgroundColor: '#1f2937',
              color: '#f9fafb',
            },
            blockquote: {
              borderLeftColor: '#bfdbfe',
              color: '#4b5563',
            },
            th: {
              backgroundColor: '#f3f4f6',
              color: '#111827',
              fontWeight: '600',
            },
            td: {
              borderColor: '#d1d5db',
            },
          },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      minHeight: {
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '3/2': '3 / 2',
        '2/3': '2 / 3',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}