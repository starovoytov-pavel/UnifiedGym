interface TabConfig {
  key: string;
  name: string;
  description: string;
}

export const TABS_CONFIG: TabConfig[] = [
  {
    key: "overview",
    name: "Overview",
    description: "Общее описание упражнения",
  },
  {
    key: "muscleGroup",
    name: "Muscle Group",
    description: "Целевые мышечные группы",
  },
  {
    key: "difficultyLevel",
    name: "Difficulty Level",
    description: "Уровень сложности упражнения",
  },
  {
    key: "technique",
    name: "Technique",
    description: "Описание техники выполнения",
  },
  {
    key: "setsReps",
    name: "Sets Reps",
    description: "Рекомендации по количеству подходов и повторений",
  },
  {
    key: "variations",
    name: "Variations",
    description: "Вариации упражнения",
  },
  {
    key: "visuals",
    name: "Visuals",
    description: "Визуальные материалы (видео)",
  },
  {
    key: "commonMistakes",
    name: "Common Mistakes",
    description: "Распространенные ошибки",
  },
  {
    key: "tips",
    name: "Tips",
    description: "Советы по выполнению",
  },
  {
    key: "benefits",
    name: "Benefits",
    description: "Преимущества упражнения",
  },
];
