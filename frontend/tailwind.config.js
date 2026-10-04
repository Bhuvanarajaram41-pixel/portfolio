/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#070A11',
          subtle: '#0B0F19',
          card: '#0E1422',
          hover: '#131B2E',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.07)',
          accent: 'rgba(6, 182, 212, 0.25)',
          glow: 'rgba(34, 211, 238, 0.4)',
        },
        teal: {
          crystal: '#00F2FE',
          accent: '#06B6D4',
          dim: 'rgba(6, 182, 212, 0.15)',
        },
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
          900: '#164e63',
        },
        technical: {
          dark: '#030712',
          surface: '#0B0F19',
          elevated: '#111827',
          muted: '#94A3B8',
          subtext: '#64748B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Cascadia Code', 'SF Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
