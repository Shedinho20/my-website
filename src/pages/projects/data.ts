import img from "../../images/writing.png";
import img2 from "../../images/todoApp.png";
import img3 from "../../images/portfolio.png";
import img4 from "../../images/caloric.png";
import img5 from "../../images/covid.png";
import img6 from "../../images/weather.png";

export const data = [
  {
    id: 1,
    title: "Writing",
    url: "https://github.com/Shedinho20/writing",
    webUrl: "",
    web: false,
    body:
      "Writing is a writing application for taking notes and saving atuomatically. built with ReactJs, Firebase for data management and authentication.",
    tech: ["ReactJS", "Redux", "SCSS"],
    Img: img,
  },
  {
    id: 2,
    title: "ToDo App",
    url: "",
    webUrl: "",
    web: false,
    body: "Slick mobile app that makes it quick to add tasks, organize them into lists, and add due dates",
    tech: ["React Native", "Firebase"],
    Img: img2,
  },
  {
    id: 3,
    title: "Portfolio",
    url: "https://github.com/Shedinho20/my-website",
    webUrl: "https://shedinho.netlify.app/",
    web: true,
    body: "You are vewing it right now 😀",
    tech: ["ReactJS", "TypeScript", "SCSS"],
    Img: img3,
  },
  {
    id: 4,
    title: "Caloric",
    url: "",
    webUrl: "",
    web: false,
    body:
      "A health App that helps you keep daily track of your calories and progress towards your set health goal. (Joint project with Skyblazar)",
    tech: ["ReactJS", "TypeScript", "Styled Comp."],
    Img: img4,
  },
  {
    id: 5,
    title: "Ko-vid",
    webUrl: "https://ko-vid19.netlify.app",
    web: true,
    url: "https://github.com/Shedinho20/Covid",
    body: "Web App to give live update on coronavirus pandemic",
    tech: ["ReactJS", "ChartJs", "API"],
    Img: img5,
  },
  {
    id: 6,
    title: "Weaapp",
    web: true,
    webUrl: "https://weaapp.netlify.app/",
    url: "https://github.com/Shedinho20/weatherApp",
    body:
      "A weather app that gives real time weather update about of your current location and hourly weather data for 5days.",
    tech: ["ReactJS", "API"],
    Img: img6,
  },
];
