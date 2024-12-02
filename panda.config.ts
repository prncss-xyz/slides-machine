import { defineConfig } from '@pandacss/dev'

export default defineConfig({
	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

	// Files to exclude
	exclude: [],

	// Useful for theme customization
	theme: {
		extend: {
			breakpoints: {
				sm: '728px',
				md: '1024px',
				lg: '1280px',
				xl: '1640px',
			},
			textStyles: {
				base: {
					value: {
						fontSize: 3,
					},
				},
			},
			tokens: {
				borderWidths: {
					'1': { value: '0.5px' },
					'2': { value: '1px' },
					'3': { value: '2px' },
					'4': { value: '5px' },
				},
				radii: {
					'1': { value: '3px' },
					'2': { value: '4px' },
					'3': { value: '6px' },
					'4': { value: '8px' },
					'5': { value: '12px' },
					'6': { value: '16px' },
				},
				fonts: {
					sans: { value: 'var(--font-geist-sans)' },
					mono: { value: 'var(--font-geist-mono)' },
				},
				fontSizes: {
					/*
					'1': { value: '12px' },
					'2': { value: '14px' },
					'3': { value: '16px' },
					'4': { value: '18px' },
					'5': { value: '20px' },
					'6': { value: '24px' },
          */
					'3': { value: '0.77rem' },
					'6': { value: '1rem' },
					/* '7': { value: '28px' }, */
					'7': { value: '1.17rem' },
					/* '8': { value: '35px' }, */
					'8': { value: '1.5rem' },
					/* '9': { value: '60px' }, */
					'9': { value: '2.5rem' },
				},
				sizes: {
					'0': { value: '0' },
					'100%': { value: '100%' },
					auto: { value: 'auto' },
					readable: { value: '40ch' },
				},
				spacing: {
					'1': { value: '4px' },
					'2': { value: '8px' },
					'3': { value: '12px' },
					'4': { value: '16px' },
					'5': { value: '24px' },
					'6': { value: '32px' },
					'7': { value: '40px' },
					'8': { value: '48px' },
					'9': { value: '64px' },
					'10': { value: '128px' },
				},
				colors: {
					translucent: { value: 'hsla(0,0%,100%,.7)' },
					panel: { value: '#dddde0' },
					gray1: { value: '#fdfcfd' },
					gray2: { value: '#faf9fb' },
					gray3: { value: '#f2eff3' },
					gray4: { value: '#eae7ec' },
					gray5: { value: '#e3dfe6' },
					gray6: { value: '#dbd8e0' },
					gray7: { value: '#d0cdd7' },
					gray8: { value: '#bcbac7' },
					gray9: { value: '#8e8c99' },
					gray10: { value: '#84828e' },
					gray11: { value: '#65636d' },
					gray12: { value: '#211f26' },
					grayA1: { value: '#55005503' },
					grayA2: { value: '#2b005506' },
					grayA3: { value: '#30004010' },
					grayA4: { value: '#20003618' },
					grayA5: { value: '#20003820' },
					grayA6: { value: '#14003527' },
					grayA7: { value: '#10003332' },
					grayA8: { value: '#08003145' },
					grayA9: { value: '#05001d73' },
					grayA10: { value: '#0500197d' },
					grayA11: { value: '#0400119c' },
					grayA12: { value: '#020008e0' },
					text: { value: '#24292F' },
					link: { value: '#0550AE' },
					error: { value: '#CF222E' },
					ok: { value: '#116329' },
					/*
					accent1: { value: '#fafdfe' },
					accent2: { value: '#f2fafb' },
					accent3: { value: '#def7f9' },
					accent4: { value: '#caf1f6' },
					accent5: { value: '#b5e9f0' },
					accent6: { value: '#9ddde7' },
					accent7: { value: '#7dcedc' },
					accent8: { value: '#3db9cf' },
					accent9: { value: '#00a2c7' },
					accent10: { value: '#0797b9' },
					accent11: { value: '#107d98' },
					accent12: { value: '#0d3c48' },
					accentA1: { value: '#0099cc05' },
					accentA2: { value: '#009db10d' },
					accentA3: { value: '#00c2d121' },
					accentA4: { value: '#00bcd435' },
					accentA5: { value: '#01b4cc4a' },
					accentA6: { value: '#00a7c162' },
					accentA7: { value: '#009fbb82' },
					accentA8: { value: '#00a3c0c2' },
					accentA9: { value: '#00a2c7' },
					accentA10: { value: '#0094b7f8' },
					accentA11: { value: '#007491ef' },
					accentA12: { value: '#00323ef2' },
        */
				},
			},
		},
	},
	outdir: 'src/generated/styled-system',
	jsxFramework: 'react',
})
