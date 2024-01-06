interface TabConfig {
  name: string;
  title: string;
  description: string;
}

export const TABS_CONFIG: TabConfig[] = [
  {
    name: "overview",
    title: "Overview",
    description: "Общее описание упражнения",
  },
  {
    name: "muscleGroup",
    title: "Muscle Group",
    description: "Целевые мышечные группы",
  },
  {
    name: "difficultyLevel",
    title: "Difficulty Level",
    description: "Уровень сложности упражнения",
  },
  {
    name: "technique",
    title: "Technique",
    description: "Описание техники выполнения",
  },
  {
    name: "setsReps",
    title: "Sets Reps",
    description: "Рекомендации по количеству подходов и повторений",
  },
  {
    name: "variations",
    title: "Variations",
    description: "Вариации упражнения",
  },
  {
    name: "visuals",
    title: "Visuals",
    description: "Визуальные материалы (видео)",
  },
  {
    name: "commonMistakes",
    title: "Common Mistakes",
    description: "Распространенные ошибки",
  },
  {
    name: "tips",
    title: "Tips",
    description: "Советы по выполнению",
  },
  {
    name: "benefits",
    title: "Benefits",
    description: "Преимущества упражнения",
  },
];
