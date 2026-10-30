/*
 * Little Lantern subject extensions.
 * Topic headings are mapped to Cambridge International syllabus 9702 (2025–2027)
 * and 9618 (2027–2029). Use the official documents linked in the app for exact
 * scope and practical/assessment requirements.
 */
(() => {
  const S = window.LITTLE_LANTERN_SYLLABUS;

  const physicsTopicsAS = [
    ["1", "Physical quantities and units"],
    ["2", "Kinematics"],
    ["3", "Dynamics"],
    ["4", "Forces, density and pressure"],
    ["5", "Work, energy and power"],
    ["6", "Deformation of solids"],
    ["7", "Waves"],
    ["8", "Superposition"],
    ["9", "Electricity"],
    ["10", "D.C. circuits"],
    ["11", "Particle physics"]
  ];
  const physicsTopicsA2 = [
    ["12", "Motion in a circle"],
    ["13", "Gravitational fields"],
    ["14", "Temperature"],
    ["15", "Ideal gases"],
    ["16", "Thermodynamics"],
    ["17", "Oscillations"],
    ["18", "Electric fields"],
    ["19", "Capacitance"],
    ["20", "Magnetic fields"],
    ["21", "Alternating currents"],
    ["22", "Quantum physics"],
    ["23", "Nuclear physics"],
    ["24", "Medical physics"],
    ["25", "Astronomy and cosmology"]
  ];
  const physicsPractical = [["P", "Practical skills, uncertainty and evaluation"]];
  S["9702"] = {
    subjectCode: "9702", subjectName: "Physics", syllabusYear: "2025–2027",
    mappingNote: "This pack is mapped to the 2025–2027 Physics syllabus. Cambridge has published a newer 2028–2030 specification; these notes have not yet been fully re-audited against that version.",
    sourceUrl: "https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-international-as-and-a-level-physics-9702/",
    sourceTitle: "Cambridge International AS & A Level Physics 9702",
    papers: [
      { code: "AS", number: "AS", label: "AS Level theory · Topics 1–11", title: "AS Level Physics", qualification: ["AS", "A2"], topics: physicsTopicsAS },
      { code: "A2", number: "A2", label: "A Level theory · Topics 12–25", title: "A Level Physics", qualification: ["A2"], topics: physicsTopicsA2 },
      { code: "PRACTICAL", number: "P3/P5", label: "Practical skills · AS and A Level", title: "Practical skills, uncertainty and evaluation", qualification: ["AS", "A2"], topics: physicsPractical }
    ],
    routes: {
      AS: [{ id: "PHYSICS_AS", label: "AS Level · Topics 1–11 + practical skills", shortLabel: "AS Physics", subtitle: "AS theory and practical skills", papers: ["AS", "PRACTICAL"], note: "AS Level Physics includes the AS theory topics and the required practical skills." }],
      A2: [{ id: "PHYSICS_ALEVEL", label: "Full A Level · Topics 1–25 + practical skills", shortLabel: "Full A Level", subtitle: "AS and A Level theory, with practical skills", papers: ["AS", "A2", "PRACTICAL"], note: "Full A Level study includes AS content, A Level content, and practical skills." }],
      ALL: [{ id: "PHYSICS_ALL", label: "All Physics topics · complete study library", shortLabel: "Topics 1–25 + practical", subtitle: "All listed theory topics and practical skills", papers: ["AS", "A2", "PRACTICAL"], note: "Study-library view of the 9702 topics. Use your school's entry and the official syllabus to confirm your examination route." }]
    }
  };

  const csGroups = [
    { code: "P1", number: "01", label: "Paper 1 · Theory fundamentals", title: "Theory fundamentals", qualification: ["AS", "A2"], topics: [
      ["1.1", "Data representation"], ["1.2", "Multimedia: graphics and sound"], ["1.3", "Compression"],
      ["2.1", "Networks including the internet"], ["3.1", "Computers and their components"], ["3.2", "Logic gates and logic circuits"],
      ["4.1", "CPU architecture"], ["4.2", "Assembly language"], ["4.3", "Bit manipulation"],
      ["5.1", "Operating systems"], ["5.2", "Language translators"], ["6.1", "Data security"], ["6.2", "Data integrity"],
      ["7.1", "Ethics and ownership"], ["8.1", "Database concepts and normalisation"], ["8.2", "Database management systems"], ["8.3", "DDL and DML"]
    ]},
    { code: "P2", number: "02", label: "Paper 2 · Problem-solving and programming", title: "Fundamental problem-solving and programming", qualification: ["AS", "A2"], topics: [
      ["9.1", "Computational thinking skills"], ["9.2", "Algorithm design"], ["10.1", "Data types and records"], ["10.2", "Arrays"], ["10.3", "Files"], ["10.4", "Abstract data types: introduction"],
      ["11.1", "Programming basics"], ["11.2", "Programming constructs"], ["11.3", "Structured programming"], ["12.1", "Program development life cycle"], ["12.2", "Program design"], ["12.3", "Testing and maintenance"]
    ]},
    { code: "P3", number: "03", label: "Paper 3 · Advanced theory", title: "Advanced theory", qualification: ["A2"], topics: [
      ["13.1", "User-defined data types"], ["13.2", "File organisation and access"], ["13.3", "Floating-point representation"],
      ["14.1", "Protocols and TCP/IP"], ["14.2", "Circuit and packet switching"], ["15.1", "Processors, parallel processing and virtual machines"], ["15.2", "Boolean algebra and logic circuits"],
      ["16.1", "Operating-system processes and memory"], ["16.2", "Translation software, BNF and RPN"], ["17.1", "Encryption, protocols and digital certificates"], ["18.1", "Artificial intelligence and machine learning"],
      ["19.1", "Searching, sorting, ADTs and complexity"], ["19.2", "Recursion"]
    ]},
    { code: "P4", number: "04", label: "Paper 4 · Practical programming", title: "Further programming and practical file processing", qualification: ["A2"], topics: [
      ["20.1", "Programming paradigms and OOP"], ["20.2", "File processing and exception handling"]
    ]}
  ];
  S["9618"] = {
    subjectCode: "9618", subjectName: "Computer Science", syllabusYear: "2027–2029",
    mappingNote: "This pack is mapped to the 2027–2029 Computer Science syllabus. Check the official syllabus update and pseudocode guide for the examination year and programming-language instructions that apply to your entry.",
    sourceUrl: "https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-international-as-and-a-level-computer-science-9618/",
    sourceTitle: "Cambridge International AS & A Level Computer Science 9618",
    papers: csGroups,
    routes: {
      AS: [{ id: "CS_AS", label: "AS Level · Papers 1 and 2 topics", shortLabel: "AS Computer Science", subtitle: "Theory fundamentals and problem-solving/programming", papers: ["P1", "P2"], note: "AS study covers the first 12 syllabus sections. Follow the programming language and entry route specified by your school." }],
      A2: [{ id: "CS_ALEVEL", label: "Full A Level · Papers 1–4 topics", shortLabel: "Full A Level", subtitle: "AS and A Level theory plus further programming", papers: ["P1", "P2", "P3", "P4"], note: "Full A Level study includes AS content, advanced theory, and further programming skills." }],
      ALL: [{ id: "CS_ALL", label: "All Computer Science topics · complete library", shortLabel: "Topics 1–20", subtitle: "All listed theory and programming topic areas", papers: ["P1", "P2", "P3", "P4"], note: "Study-library view of the 9618 syllabus for 2027–2029. Confirm the exact exam route and programming language with your school." }]
    }
  };
})();
