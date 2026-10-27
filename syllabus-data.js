/*
 * Little Lantern starter data.
 * Mathematics 9709 topic headings transcribed from the Cambridge International
 * AS & A Level Mathematics syllabus overview for examination in 2026 and 2027.
 * The official syllabus PDF remains the authority for full learning objectives.
 */
window.LITTLE_LANTERN_SYLLABUS = {
  "9709": {
    subjectCode: "9709",
    subjectName: "Mathematics",
    syllabusYear: "2026–2027",
    sourceUrl: "https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-international-as-and-a-level-mathematics-9709/",
    sourceTitle: "Cambridge International AS & A Level Mathematics 9709",
    papers: [
      {
        code: "P1", number: "01", title: "Pure Mathematics 1", qualification: ["AS", "A2"],
        topics: [
          ["1.1", "Quadratics"], ["1.2", "Functions"], ["1.3", "Coordinate geometry"], ["1.4", "Circular measure"],
          ["1.5", "Trigonometry"], ["1.6", "Series"], ["1.7", "Differentiation"], ["1.8", "Integration"]
        ]
      },
      {
        code: "P2", number: "02", title: "Pure Mathematics 2", qualification: ["AS"], asOnly: true,
        topics: [
          ["2.1", "Algebra"], ["2.2", "Logarithmic and exponential functions"], ["2.3", "Trigonometry"],
          ["2.4", "Differentiation"], ["2.5", "Integration"], ["2.6", "Numerical solution of equations"]
        ]
      },
      {
        code: "P3", number: "03", title: "Pure Mathematics 3", qualification: ["A2"],
        topics: [
          ["3.1", "Algebra"], ["3.2", "Logarithmic and exponential functions"], ["3.3", "Trigonometry"],
          ["3.4", "Differentiation"], ["3.5", "Integration"], ["3.6", "Numerical solution of equations"],
          ["3.7", "Vectors"], ["3.8", "Differential equations"], ["3.9", "Complex numbers"]
        ]
      },
      {
        code: "P4", number: "04", title: "Mechanics", qualification: ["AS", "A2"],
        topics: [
          ["4.1", "Forces and equilibrium"], ["4.2", "Kinematics of motion in a straight line"],
          ["4.3", "Momentum"], ["4.4", "Newton’s laws of motion"], ["4.5", "Energy, work and power"]
        ]
      },
      {
        code: "P5", number: "05", title: "Probability & Statistics 1", qualification: ["AS", "A2"],
        topics: [
          ["5.1", "Representation of data"], ["5.2", "Permutations and combinations"], ["5.3", "Probability"],
          ["5.4", "Discrete random variables"], ["5.5", "The normal distribution"]
        ]
      },
      {
        code: "P6", number: "06", title: "Probability & Statistics 2", qualification: ["A2"],
        topics: [
          ["6.1", "The Poisson distribution"], ["6.2", "Linear combinations of random variables"],
          ["6.3", "Continuous random variables"], ["6.4", "Sampling and estimation"], ["6.5", "Hypothesis tests"]
        ]
      }
    ],
    routes: {
      AS: [
        { id: "AS_P1_P2", label: "P1 + P2 · Pure only (AS-only)", shortLabel: "P1 + P2", subtitle: "Pure Mathematics 1 and Pure Mathematics 2", papers: ["P1", "P2"], note: "This pure-mathematics-only route is AS Level only. Cambridge states that it cannot be carried forward to complete the full A Level." },
        { id: "AS_P1_P4", label: "P1 + P4 · Pure + Mechanics", shortLabel: "P1 + P4", subtitle: "Pure Mathematics 1 and Mechanics", papers: ["P1", "P4"], note: "AS route: Pure Mathematics 1 plus Mechanics. Choose the route your school entered you for." },
        { id: "AS_P1_P5", label: "P1 + P5 · Pure + Statistics 1", shortLabel: "P1 + P5", subtitle: "Pure Mathematics 1 and Probability & Statistics 1", papers: ["P1", "P5"], note: "AS route: Pure Mathematics 1 plus Probability & Statistics 1. Choose the route your school entered you for." }
      ],
      A2: [
        { id: "A_P1_P3_P4_P5", label: "P1 + P3 + P4 + P5 · Mechanics + Statistics 1", shortLabel: "P1 + P3 + P4 + P5", subtitle: "Pure Mathematics 1, Pure Mathematics 3, Mechanics, and Probability & Statistics 1", papers: ["P1", "P3", "P4", "P5"], note: "Full A Level route: Pure Mathematics 1 and 3, Mechanics, and Probability & Statistics 1." },
        { id: "A_P1_P3_P5_P6", label: "P1 + P3 + P5 + P6 · Statistics 1 + 2", shortLabel: "P1 + P3 + P5 + P6", subtitle: "Pure Mathematics 1, Pure Mathematics 3, and Probability & Statistics 1 and 2", papers: ["P1", "P3", "P5", "P6"], note: "Full A Level route: Pure Mathematics 1 and 3, Probability & Statistics 1 and 2. Paper 5 is a prerequisite for Paper 6." }
      ]
    }
  }
};
