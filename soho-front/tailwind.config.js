/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
		animation: {
			fadeInDown: 'fadeInDown 0.3s ease-in-out', // 调整动画持续时间为 0.3 秒，缓动函数为 ease-in-out
		  },
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
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
  			}
  		}
  	},
  	animation: {
  		'shake': 'shake 0.5s cubic-bezier(.36,.07,.19,.97) both',
  		'success': 'success 0.3s ease-in-out'
  	},
  	keyframes: {
  		shake: {
  			'10%, 90%': { transform: 'translate3d(-1px, 0, 0)' },
  			'20%, 80%': { transform: 'translate3d(2px, 0, 0)' },
  			'30%, 50%, 70%': { transform: 'translate3d(-2px, 0, 0)' },
  			'40%, 60%': { transform: 'translate3d(2px, 0, 0)' }
  		},
  		success: {
  			'0%': { transform: 'scale(0) translate(-50%, -50%)' },
  			'50%': { transform: 'scale(1.2) translate(-50%, -50%)' },
  			'100%': { transform: 'scale(1) translate(-50%, -50%)' }
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
