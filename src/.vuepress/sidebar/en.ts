import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/docs": [
    {
      text: "Grammar docs",
      link: "",
      children: [
        // "term",
        "cheat",
        {
          text: "Sections",
          children: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "pt"],
        },
      ],
    },
  ],
  "/turorial": [
    {
      text: "Tutorials",
      link: "",
      children: [
        "beginner", "numerals", "loanwords", "idioms", "old"
      ],
    },
  ],
  "/en/sup": [
    {
      text: "Supplements",
      link: "",
      children: [
        {
          text: "To Lexicon",
          children: [
            // "beginner", "numerals", "loanwords", "idioms", "old"
          ],
        },
        {
          text: "To Grammar",
          link: "",
          children: [
            // "beginner", "numerals", "loanwords", "idioms", "old"
          ],
        }, {
          text: "To Others",
          link: "",
          children: [
            // "beginner", "numerals", "loanwords", "idioms", "old"
          ],
        },
      ],
    },
  ],
});
