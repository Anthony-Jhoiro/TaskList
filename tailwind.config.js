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
                    DEFAULT: '#EBA783',
                    '50': '#FFFFFF',
                    '100': '#FFFFFF',
                    '200': '#FCF2EC',
                    '300': '#F6D9C9',
                    '400': '#F1C0A6',
                    '500': '#EBA783',
                    '600': '#E38553',
                    '700': '#DB6323',
                    '800': '#AA4D1B',
                    '900': '#7A3714'
                },
                'primary': {
                    DEFAULT: '#6CADEB',
                    '50': '#FFFFFF',
                    '100': '#FCFDFF',
                    '200': '#D8E9FA',
                    '300': '#B4D5F5',
                    '400': '#90C1F0',
                    '500': '#6CADEB',
                    '600': '#3B91E4',
                    '700': '#1C75CB',
                    '800': '#15599A',
                    '900': '#0E3C68'
                },
                'tertiary': {
                    DEFAULT: '#AF7AEB',
                    '50': '#FFFFFF',
                    '100': '#FFFFFF',
                    '200': '#EFE4FB',
                    '300': '#DAC1F6',
                    '400': '#C49DF0',
                    '500': '#AF7AEB',
                    '600': '#9249E4',
                    '700': '#7520D5',
                    '800': '#5A19A4',
                    '900': '#3F1173'
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
