module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    500: '#8257e6',
                },
                blue: {
                    650: '#5F7EFF',
                }
            },
        }
    },
    plugins: [
        require('tailwind-scrollbar'),
    ],
}
