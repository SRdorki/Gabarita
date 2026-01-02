/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                bg: {
                    primary: '#F5F5F7', // Off-white Papel
                    secondary: '#FFFFFF', // Branco Puro
                    primaryDark: '#121212', // Preto OLED Suave
                    secondaryDark: '#1E1E1E' // Cinza Carvão
                },
                text: {
                    primary: '#1A237E', // Azul Profundo
                    primaryDark: '#E0E0E0' // Cinza Claro
                },
                brand: {
                    accent: '#00C853', // Verde Gabarita
                    accentLight: '#69F0AE' // Verde Neon Suave
                },
                alert: {
                    error: '#D32F2F',
                    errorLight: '#FF5252'
                }
            }
        },
    },
    plugins: [],
}
