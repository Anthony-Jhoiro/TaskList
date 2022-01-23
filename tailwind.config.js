module.exports = {
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}'
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'logo-background': '#BDD3EF',
                'background': '#ebe6e6',
                'secondary': {
                    DEFAULT: '#B34F30',
                    '50': '#EABEB1',
                    '100': '#E6B1A1',
                    '200': '#DD9680',
                    '300': '#D47C60',
                    '400': '#CC6140',
                    '500': '#B34F30',
                    '600': '#873B24',
                    '700': '#5B2818',
                    '800': '#2E140C',
                    '900': '#020101'
                },
                'primary': {
                    DEFAULT: '#0F7391',
                    '50': '#68D0EF',
                    '100': '#56CAED',
                    '200': '#31BFEA',
                    '300': '#17AEDB',
                    '400': '#1390B6',
                    '500': '#0F7391',
                    '600': '#0A4B5E',
                    '700': '#04222B',
                    '800': '#000000',
                    '900': '#000000'
                },
                'success': {
                    DEFAULT: '#94AD40',
                    '50': '#DDE7BE',
                    '100': '#D6E1AF',
                    '200': '#C6D691',
                    '300': '#B7CB73',
                    '400': '#A8C056',
                    '500': '#94AD40',
                    '600': '#718431',
                    '700': '#4E5B22',
                    '800': '#2B3213',
                    '900': '#080903'
                },
                'error': {
                    DEFAULT: '#C21913',
                    '50': '#F59B98',
                    '100': '#F38985',
                    '200': '#EF6560',
                    '300': '#EC413B',
                    '400': '#E71E17',
                    '500': '#C21913',
                    '600': '#8F120E',
                    '700': '#5C0C09',
                    '800': '#290504',
                    '900': '#000000'
                },
                'warning': {
                    DEFAULT: '#F49928',
                    '50': '#FDECD7',
                    '100': '#FCE3C3',
                    '200': '#FAD09C',
                    '300': '#F8BE76',
                    '400': '#F6AB4F',
                    '500': '#F49928',
                    '600': '#D97D0B',
                    '700': '#A35E08',
                    '800': '#6E3F06',
                    '900': '#392103'
                },
                'text-default': '#03141a',
                'text-light': '#B4C4CCFF'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require("@tailwindcss/forms")({
            strategy: 'class'
        }),
        require('tw-elements/dist/plugin')
    ],
}
