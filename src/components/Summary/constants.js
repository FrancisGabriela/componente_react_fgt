import reactionIcon from "../../assets/images/icon-reaction.svg";
import memoryIcon from "../../assets/images/icon-memory.svg";
import verbalIcon from "../../assets/images/icon-verbal.svg";
import visualIcon from "../../assets/images/icon-visual.svg";

export const summaryTypes = {
  reaction: {
    color: "#f44336",
    background: "#fff6f5",
    icon: reactionIcon
  },
  memory: {
    color: "#ffa726",
    background: "#ffe8b359",
    icon: memoryIcon
  },
  verbal: {
    color: "#05bb8f",
    background: "#a8f9f08a",
    icon: verbalIcon
  },
  visual: {
    color: "#0060d7",
    background: "#9ec6f863",
    icon: visualIcon
  }
};

export const summaryItems = [
  {
    title: "reaction",
    score: "80"
  },
  {
    title: "memory",
    score: 92
  },
  {
    title: "verbal",
    score: 61
  },
  {
    title: "visual",
    score: 72
  }
];
