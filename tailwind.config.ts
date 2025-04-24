
import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'rgb(var(--background) / <alpha-value>)',
  			foreground: 'rgb(var(--foreground) / <alpha-value>)',
  			card: {
  				DEFAULT: 'rgb(var(--card) / <alpha-value>)',
  				foreground: 'rgb(var(--card-foreground) / <alpha-value>)'
  			},
  			popover: {
  				DEFAULT: 'rgb(var(--popover) / <alpha-value>)',
  				foreground: 'rgb(var(--popover-foreground) / <alpha-value>)'
  			},
  			primary: {
  				DEFAULT: 'rgb(var(--primary) / <alpha-value>)',
  				foreground: 'rgb(var(--primary-foreground) / <alpha-value>)'
  			},
  			secondary: {
  				DEFAULT: 'rgb(var(--secondary) / <alpha-value>)',
  				foreground: 'rgb(var(--secondary-foreground) / <alpha-value>)'
  			},
  			muted: {
  				DEFAULT: 'rgb(var(--muted) / <alpha-value>)',
  				foreground: 'rgb(var(--muted-foreground) / <alpha-value>)'
  			},
  			accent: {
  				DEFAULT: 'rgb(var(--accent) / <alpha-value>)',
  				foreground: 'rgb(var(--accent-foreground) / <alpha-value>)'
  			},
  			destructive: {
  				DEFAULT: 'rgb(var(--destructive) / <alpha-value>)',
  				foreground: 'rgb(var(--destructive-foreground) / <alpha-value>)'
  			},
  			border: 'rgb(var(--border) / <alpha-value>)',
  			input: 'rgb(var(--input) / <alpha-value>)',
  			ring: 'rgb(var(--ring) / <alpha-value>)',
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
          backgroundImage: {
              'grid-pattern':
                  'url("data:image/svg+xml,%3Csvg width=\'42\' height=\'44\' viewBox=\'0 0 42 44\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0H42V44H0V0Z\' fill=\'white\'/%3E%3Cg opacity=\'0.08\'%3E%3Cpath d=\'M1.47656 4.29318L40.4766 4.29318\' stroke=\'%23333333\' strokeWidth=\'0.75\' strokeLinecap=\'round\' strokeLinejoin=\'round\'/%3E%3Cpath d=\'M1.47656 15.4119L40.4766 15.4119\' stroke=\'%23333333\' strokeWidth=\'0.75\' strokeLinecap=\'round\' strokeLinejoin=\'round\'/%3E%3Cpath d=\'M1.47656 26.5306L40.4766 26.5306\' stroke=\'%23333333\' strokeWidth=\'0.75\' strokeLinecap=\'round\' strokeLinejoin=\'round\'/%3E%3Cpath d=\'M1.47656 37.6494L40.4766 37.6494\' stroke=\'%23333333\' strokeWidth=\'0.75\' strokeLinecap=\'round\' strokeLinejoin=\'round\'/%3E%3Cpath d=\'M4.90625 1.2998L4.90625 41.9497\' stroke=\'%23333333\' strokeWidth=\'0.75\' strokeLinecap=\'round\' strokeLinejoin=\'round\'/%3E%3Cpath d=\'M15.7373 1.2998L15.7373 41.9497\' stroke=\'%23333333\' strokeWidth=\'0.75\' strokeLinecap=\'round\' strokeLinejoin=\'round\'/%3E%3Cpath d=\'M26.5684 1.2998L26.5684 41.9497\' stroke=\'%23333333\' strokeWidth=\'0.75\' strokeLinecap=\'round\' strokeLinejoin=\'round\'/%3E%3Cpath d=\'M37.3994 1.2998L37.3994 41.9497\' stroke=\'%23333333\' strokeWidth=\'0.75\' strokeLinecap=\'round\' strokeLinejoin=\'round\'/%3E%3C/g%3E%3C/svg%3E")',
          },
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
