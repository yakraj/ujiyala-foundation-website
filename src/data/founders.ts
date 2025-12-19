import santoshImg from "../assets/santosh.png";
import vikasImg from "../assets/vikas.png";
import MariyaImg from "../assets/mariya.png";
import YakrajImg from "../assets/yakraj.png";
import DattaImg from "../assets/datta.png";
import vinayakImg from "../assets/vinayak.png";
import LahanbaiImg from "../assets/lahanbai.png";

export interface Founder {
  name: string;
  role: string;
  img: string;
  bio?: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

export const FOUNDERS: Founder[] = [
  {
    name: "Santosh Kadam",
    role: "Founder & President",
    img: santoshImg,
    bio: "Visionary leader with a passion for social change and community upliftment in rural Nashik.",
  },
  {
    name: "Vikas Pagar",
    role: "Co-Founder & Vice President",
    img: vikasImg,
    bio: "Dedicated to empowering women and children through education and health initiatives.",
  },
  {
    name: "Mariya Chavan",
    role: "Co-Founder & Secretary",
    img: MariyaImg,
    bio: "Dedicated to empowering women and children through education and health initiatives.",
  },
  {
    name: "Lahanbai Sonawane",
    role: "Co-Founder & Treasurer",
    img: LahanbaiImg,
    bio: "Handles finances and ensures transparency in all our operations and rural projects.",
  },
  {
    name: "Yakraj Pariyar",
    role: "Co-Founder & IT Head",
    img: YakrajImg,
    bio: "Heads IT and digital systems—ensuring reliable infrastructure, security, and hands‑on technical support for staff and projects.",
  },
  {
    name: "Datta Pagar",
    role: "Co-Founder",
    img: DattaImg,
    bio: "Leads logistics and outreach programs across the Nashik district.",
  },
  {
    name: "Vinayak Jagtap",
    role: "Co-Founder",
    img: vinayakImg,
    bio: "Drives women empowerment and self-help group initiatives in villages.",
  },
];
