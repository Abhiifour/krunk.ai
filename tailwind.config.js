/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    colors: {
      one: "rgba(230, 238, 255, 1)",
      two: "rgba(230, 238, 255, 0)",
      three: "rgba(229, 238, 255, 1)",
      four: "rgba(250, 252, 255, 1)",
      text: "rgba(51, 51, 51, 1)",
      cardColor: "rgba(255, 255, 255, 1)",
      cardText: "rgba(115, 115, 115, 1)",
      green: "rgba(63, 226, 37, 1)",
      blue: "rgba(76, 130, 239, 1)",
      lightGreen: "rgba(220, 247, 197, 1)",
      heading: "rgba(148, 148, 148, 1)",
      box: "rgba(242, 247, 255, 1)",
      cardBg: "rgba(244, 244, 244, 1)",
      bottomStart: "rgba(239, 243, 253, 1)",
      bottomEnd: "rgba(239, 243, 253, 0)",
      borderColor: "rgba(227, 236, 255, 1)",
    },
  },
  plugins: [],
};
