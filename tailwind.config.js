// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       animation: {
//         "fade-in": "fadeIn 1s ease-out",
//         "fade-in-up": "fadeInUp 1s ease-out",
//         "fade-in-down": "fadeInDown 1s ease-out",
//       },
//       keyframes: {
//         fadeIn: {
//           "0%": { opacity: 0 },
//           "100%": { opacity: 1 },
//         },
//         fadeInUp: {
//           "0%": { opacity: 0, transform: "translateY(20px)" },
//           "100%": { opacity: 1, transform: "translateY(0)" },
//         },
//         fadeInDown: {
//           "0%": { opacity: 0, transform: "translateY(-20px)" },
//           "100%": { opacity: 1, transform: "translateY(0)" },
//         },
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "gradient-animation": "gradientShift 5s ease infinite",
        "fade-in-up": "fadeInUp 1s ease-out",
        "fade-in": "fadeIn 1s ease-out",
        "card-slide-up": "cardSlideUp 1s ease-out", // Added card-slide-up animation
        "title-bounce": "titleBounce 1.5s ease-out", // Added title-bounce animation (if you want to use it on titles)
      },
      keyframes: {
        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        cardSlideUp: {
          // New keyframe for card sliding up
          "0%": { opacity: 0, transform: "translateY(50px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        titleBounce: {
          // New keyframe for title bounce
          "0%": { transform: "translateY(0)", animationTimingFunction: "ease-in" },
          "50%": { transform: "translateY(-10px)", animationTimingFunction: "ease-out" },
          "100%": { transform: "translateY(0)", animationTimingFunction: "ease-in" },
        },
      },
    },
  },
  plugins: [],
};
