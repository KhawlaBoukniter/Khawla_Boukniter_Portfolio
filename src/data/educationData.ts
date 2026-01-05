export interface Education {
  id: string;
  name: string;
  degree: string;
  duration: string;
  location: string;
  score: string;
}

export const educationData: Education[] = [
  {
    id: "1",
    name: "YouCode - UM6P",
    degree: "Développement Web Full Stack (PHP - Java)",
    duration: "2024 - 2026",
    location: "Safi, Maroc",
    score: "En cours",
  },
  {
    id: "2",
    name: "ALX - Software Engineering",
    degree: "Certification",
    duration: "2022 - 2023",
    location: "Online",
    score: "Validée",
  },
  {
    id: "3",
    name: "Lycée Al Khawarizmi",
    degree: "Baccalauréat Sciences Mathématiques",
    duration: "2022",
    location: "Safi, Maroc",
    score: "Obtenu",
  },
];
