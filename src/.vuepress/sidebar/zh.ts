import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "Java基础学习输入",
      icon: "basic",
      prefix: "Java/",
      children: [
        "JavaBasisInput",
      ],
    },
    {
      text: "Java基础",
      icon: "java",
      prefix: "Java/",
      children: [
        "JavaBasis",
      ]
    },
    {
      text: "案例",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "文档",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
    "slides",
  ],
});
