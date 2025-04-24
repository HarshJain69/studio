
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
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
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
