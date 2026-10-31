window.LITTLE_LANTERN_NOTES = {
  "version": 2,
  "subjectCode": "9709",
  "syllabusYear": "2026–2027",
  "modules": {
    "P1": "Pure Mathematics 1  Paper 1",
    "P2": "Pure Mathematics 2  Paper 2",
    "P3": "Pure Mathematics 3  Paper 3",
    "M1": "Mechanics  Paper 4",
    "S1": "Probability & Statistics 1  Paper 5",
    "S2": "Probability & Statistics 2  Paper 6"
  },
  "source": {
    "p1UserResource": "As-Math-P1-Notes-by-Rafique-Akhtar1-compressed.pdf (user-provided; used as a topic-reference, not reproduced verbatim)",
    "officialSyllabus": "https://www.cambridgeinternational.org/Images/697427-2026-2027-syllabus.pdf",
    "practiceNote": "All practice questions in this app are original, independently authored exam-style questions; they are not copied from Cambridge past papers.",
    "coverageNote": "All six Cambridge International Mathematics 9709 components for the 2026–2027 syllabus are represented. Notes are original summaries aligned to topic headings and selected objectives; use the official syllabus as the final authority."
  },
  "topics": {
    "9709-1.1": {
      "intro": "Quadratics describe parabolas and let you solve equations, inequalities, and intersections. In an exam, choose the method that makes the structure easiest to see: factorising, completing the square, or the quadratic formula.",
      "learn": [
        "For ax² + bx + c = 0, the discriminant is Δ = b² − 4ac. Δ > 0 gives two distinct real roots, Δ = 0 a repeated real root, and Δ < 0 no real roots.",
        "Completing the square gives ax² + bx + c = a(x + b/(2a))² − Δ/(4a). For a graph y = ax² + bx + c, the vertex has x-coordinate −b/(2a).",
        "Solve quadratic inequalities by finding roots and checking the sign between and outside them. Include or exclude boundary points according to ≤, ≥, < or >.",
        "For one linear and one quadratic equation, substitute the line into the curve. A tangent gives a repeated root, so the resulting quadratic has discriminant zero.",
        "Recognise equations that become quadratic after a substitution, for example x⁴ − 5x² + 4 = 0 by setting u = x². After solving for u, return to x and check all valid roots.",
        "Exam habit: write the governing relationship first, substitute values only after the symbols and conditions are clear, and show enough intermediate working for each method mark.",
        "After obtaining a result, check its meaning in the original question: roots must satisfy the equation, probabilities must be between 0 and 1, and physical answers should have sensible signs and units."
      ],
      "formulae": [
        "Quadratic formula: x = (−b ± √(b² − 4ac))/(2a)",
        "Axis of symmetry: x = −b/(2a)",
        "Vertex form: y = a(x − h)² + k",
        "Tangency: discriminant of the intersection quadratic = 0"
      ],
      "example": {
        "question": "Find the vertex and roots of y = x² − 6x + 5.",
        "steps": [
          "Complete the square: x² − 6x + 5 = (x − 3)² − 4.",
          "The vertex is (3, −4), and the axis is x = 3.",
          "Factorise x² − 6x + 5 = (x − 1)(x − 5)."
        ],
        "answer": "Vertex (3, −4); roots x = 1 and x = 5."
      },
      "watch": [
        "A repeated root is counted twice algebraically, even though it is one distinct real value.",
        "When multiplying an inequality by a negative number, reverse the inequality sign.",
        "For tangency, set the discriminant to zero only after forming the correct intersection equation.",
        "When a substitution such as u = x² is used, reject impossible u-values and then solve every remaining equation in x."
      ],
      "questions": [
        {
          "level": "Warm-up",
          "question": "Solve x² − 5x + 6 = 0.",
          "answer": "x = 2 or x = 3.",
          "steps": [
            "Factorise: (x − 2)(x − 3) = 0.",
            "Set each factor to zero."
          ]
        },
        {
          "level": "Developing",
          "question": "Solve x² − 4x − 5 ≤ 0.",
          "answer": "−1 ≤ x ≤ 5.",
          "steps": [
            "Factorise: (x − 5)(x + 1) = 0, so the roots are −1 and 5.",
            "The parabola opens upwards, so it is at or below the x-axis between the roots."
          ]
        },
        {
          "level": "Challenge",
          "question": "The line y = 2x + k is tangent to y = x² − 4x + 1. Find k.",
          "answer": "k = −8.",
          "steps": [
            "At an intersection, x² − 4x + 1 = 2x + k, giving x² − 6x + (1 − k) = 0.",
            "Tangency requires Δ = 0: 36 − 4(1 − k) = 0.",
            "32 + 4k = 0, so k = −8."
          ]
        }
      ],
      "prerequisite": "",
      "examStrategy": [
        "Identify a, b and c before using the discriminant.",
        "For intersections, form one equation in one variable before using the discriminant.",
        "For a quadratic inequality, find the critical roots and test a value in each interval.",
        "For a quadratic in a function of x, substitute a temporary variable and then solve back for x."
      ],
      "workedExamples": [
        {
          "question": "Find k if x² + (k − 1)x + k = 0 has equal roots.",
          "steps": [
            "Equal roots require discriminant zero.",
            "Δ = (k − 1)² − 4k = k² − 6k + 1 = 0.",
            "Solve the quadratic in k."
          ],
          "answer": "k = 3 ± 2√2."
        }
      ],
      "focusChecklist": [
        "Complete the square to find a vertex.",
        "Use Δ to count roots or test tangency.",
        "Solve inequalities with an interval sign check."
      ]
    },
    "9709-1.2": {
      "intro": "A function assigns exactly one output to each input in its domain. Functions questions often test notation, domain/range, inverse functions, composition, and transformations of graphs.",
      "learn": [
        "The domain is the set of permitted inputs; the range is the set of outputs actually produced.",
        "For fg(x), apply g first and then f: fg(x) = f(g(x)). The output of the inner function must lie in the domain of the outer one.",
        "An inverse reverses a one-to-one function. To find it, write y = f(x), interchange x and y, then solve for y; state the relevant domain/range restrictions.",
        "Graph transformations: y = f(x) + a shifts up a; y = f(x + a) shifts left a; y = af(x) stretches vertically by factor |a| (reflection if a < 0); y = f(ax) changes horizontal scale by factor 1/|a|.",
        "Exam habit: write the governing relationship first, substitute values only after the symbols and conditions are clear, and show enough intermediate working for each method mark.",
        "After obtaining a result, check its meaning in the original question: roots must satisfy the equation, probabilities must be between 0 and 1, and physical answers should have sensible signs and units."
      ],
      "formulae": [
        "Inverse: f⁻¹(f(x)) = x where defined",
        "Composition: fg(x) = f(g(x))",
        "Reflection of inverse graph: mirror in y = x"
      ],
      "example": {
        "question": "Let f(x) = 2x + 1 and g(x) = x². Find fg(2) and gf(2).",
        "steps": [
          "fg(2) = f(g(2)) = f(4) = 9.",
          "gf(2) = g(f(2)) = g(5) = 25."
        ],
        "answer": "fg(2) = 9 and gf(2) = 25; order matters."
      },
      "watch": [
        "Do not confuse f(g(x)) with g(f(x)).",
        "The inverse exists as a function only when the original function is one-to-one on its chosen domain.",
        "Horizontal shifts work opposite to the sign inside the brackets: f(x + 3) shifts left 3."
      ],
      "questions": [
        {
          "level": "Warm-up",
          "question": "If f(x) = 3x − 5, find f(4).",
          "answer": "7.",
          "steps": [
            "Substitute x = 4: f(4) = 12 − 5 = 7."
          ]
        },
        {
          "level": "Developing",
          "question": "For f(x) = x² − 1 with domain x ≥ 0, find f⁻¹(x) and its domain.",
          "answer": "f⁻¹(x) = √(x + 1), with domain x ≥ −1.",
          "steps": [
            "Write y = x² − 1, so y + 1 = x².",
            "Since the original domain requires x ≥ 0, take the positive root: x = √(y + 1).",
            "Swap the variable names. The inverse's domain is the original range, x ≥ −1."
          ]
        },
        {
          "level": "Challenge",
          "question": "Let f(x) = x² for x ≥ 0 and g(x) = 2x − 3. Find gf(x) and state its domain.",
          "answer": "gf(x) = 2x² − 3, x ≥ 0.",
          "steps": [
            "gf(x) = g(f(x)) = 2(x²) − 3.",
            "The inner function f is defined for x ≥ 0, and g accepts every real input."
          ]
        }
      ],
      "prerequisite": "",
      "examStrategy": [
        "For fg(x), apply g first, then f.",
        "For an inverse, swap x and y and solve; translate the original domain into the inverse range.",
        "For graph transformations, describe horizontal shifts using the expression inside the function.",
        "A composite gf is defined only where x is in the domain of f and f(x) is in the domain of g."
      ],
      "workedExamples": [
        {
          "question": "Find the inverse of f(x) = (3x − 2)/(x + 1).",
          "steps": [
            "Set y = (3x − 2)/(x + 1).",
            "Then yx + y = 3x − 2, so x(y − 3) = −y − 2.",
            "Solve for x and exchange the variable names."
          ],
          "answer": "f⁻¹(x) = (x + 2)/(3 − x), x ≠ 3."
        }
      ],
      "focusChecklist": [
        "Find composition in the correct order.",
        "State domain and range restrictions.",
        "Describe transformations precisely."
      ]
    },
    "9709-1.3": {
      "intro": "Coordinate geometry translates geometric relationships into equations. Straight lines use gradients and points; circles use centre-radius form, and intersections are found algebraically.",
      "learn": [
        "Gradient through (x₁,y₁) and (x₂,y₂) is (y₂ − y₁)/(x₂ − x₁), provided x₂ ≠ x₁.",
        "A line may be written y = mx + c, y − y₁ = m(x − x₁), or ax + by + c = 0. Parallel lines have equal gradients; perpendicular non-vertical lines have gradient product −1.",
        "A circle with centre (a,b) and radius r has equation (x − a)² + (y − b)² = r².",
        "For a line-circle intersection, substitute the line into the circle. Zero, one, or two real roots indicate no intersection, tangency, or two intersections.",
        "Exam habit: write the governing relationship first, substitute values only after the symbols and conditions are clear, and show enough intermediate working for each method mark.",
        "After obtaining a result, check its meaning in the original question: roots must satisfy the equation, probabilities must be between 0 and 1, and physical answers should have sensible signs and units."
      ],
      "formulae": [
        "Distance: √((x₂ − x₁)² + (y₂ − y₁)²)",
        "Midpoint: ((x₁ + x₂)/2, (y₁ + y₂)/2)",
        "Circle: (x − a)² + (y − b)² = r²",
        "Tangent radius is perpendicular to the tangent at the point of contact"
      ],
      "example": {
        "question": "Find the line through (2,3) with gradient −2.",
        "steps": [
          "Use y − y₁ = m(x − x₁).",
          "y − 3 = −2(x − 2), so y = −2x + 7."
        ],
        "answer": "y = −2x + 7."
      },
      "watch": [
        "Use the same coordinate order consistently: x-coordinate first, then y-coordinate.",
        "A vertical line has equation x = constant; it has no finite gradient.",
        "Do not assume a circle's centre lies on an axis unless the equation shows it."
      ],
      "questions": [
        {
          "level": "Warm-up",
          "question": "Find the gradient of the line through (1,2) and (5,10).",
          "answer": "2.",
          "steps": [
            "m = (10 − 2)/(5 − 1) = 8/4 = 2."
          ]
        },
        {
          "level": "Developing",
          "question": "Write the equation of the circle with centre (3, −1) and radius 4.",
          "answer": "(x − 3)² + (y + 1)² = 16.",
          "steps": [
            "Use (x − a)² + (y − b)² = r².",
            "Substitute a = 3, b = −1, r = 4."
          ]
        },
        {
          "level": "Challenge",
          "question": "Find the values of k for which y = x + k is tangent to x² + y² = 4.",
          "answer": "k = ±2√2.",
          "steps": [
            "Substitute y = x + k into the circle: 2x² + 2kx + k² − 4 = 0.",
            "Tangency requires Δ = (2k)² − 8(k² − 4) = 0.",
            "32 − 4k² = 0, so k² = 8 and k = ±2√2."
          ]
        }
      ],
      "prerequisite": "",
      "examStrategy": [
        "Use the point-gradient form for a line through a known point.",
        "Complete the square to identify a circle’s centre and radius.",
        "For intersections, substitute one equation into the other.",
        "At a tangent point, use the fact that the radius is perpendicular to the tangent."
      ],
      "workedExamples": [
        {
          "question": "Find the centre and radius of x² + y² − 4x + 6y − 12 = 0.",
          "steps": [
            "Group x and y terms and complete both squares.",
            "x²−4x + y²+6y = 12.",
            "(x−2)²−4 + (y+3)²−9 = 12."
          ],
          "answer": "Centre (2, −3), radius 5."
        }
      ],
      "focusChecklist": [
        "Write a line equation from given information.",
        "Interpret the standard circle form.",
        "Use algebra to study line-circle intersections."
      ]
    },
    "9709-1.4": {
      "intro": "Circular measure uses radians to describe angles naturally in circle geometry. When θ is in radians, arc length and sector area have especially simple formulas.",
      "learn": [
        "A full turn is 2π radians and a straight angle is π radians. Convert degrees to radians by multiplying by π/180.",
        "For radius r and angle θ in radians, arc length s = rθ and sector area A = ½r²θ.",
        "Perimeter of a sector is 2r + rθ. The area of a triangle formed by two radii with included angle θ is ½r² sin θ.",
        "The minor segment area is sector area minus the triangle area. Use radians in s = rθ and A = ½r²θ.",
        "Exam habit: write the governing relationship first, substitute values only after the symbols and conditions are clear, and show enough intermediate working for each method mark.",
        "After obtaining a result, check its meaning in the original question: roots must satisfy the equation, probabilities must be between 0 and 1, and physical answers should have sensible signs and units."
      ],
      "formulae": [
        "Radians: θ(rad) = θ(deg) × π/180",
        "Arc length: s = rθ",
        "Sector area: A = ½r²θ",
        "Sector perimeter: 2r + rθ"
      ],
      "example": {
        "question": "A sector has radius 6 cm and angle 1.2 radians. Find its arc length and area.",
        "steps": [
          "s = rθ = 6 × 1.2 = 7.2 cm.",
          "A = ½r²θ = ½ × 36 × 1.2 = 21.6 cm²."
        ],
        "answer": "Arc length 7.2 cm; sector area 21.6 cm²."
      },
      "watch": [
        "Do not substitute a degree measure directly into radian formulas.",
        "Length is measured in units; area is in square units.",
        "For a sector perimeter, remember to include both radii as well as the arc."
      ],
      "questions": [
        {
          "level": "Warm-up",
          "question": "Convert 150° to radians.",
          "answer": "5π/6.",
          "steps": [
            "150 × π/180 = 5π/6."
          ]
        },
        {
          "level": "Developing",
          "question": "A circle has radius 8 cm and a sector angle 0.75 radians. Find the arc length and sector area.",
          "answer": "s = 6 cm; A = 24 cm².",
          "steps": [
            "s = 8 × 0.75 = 6 cm.",
            "A = ½ × 8² × 0.75 = 24 cm²."
          ]
        },
        {
          "level": "Challenge",
          "question": "A sector of radius 10 cm has perimeter 30 cm. Find its angle and area.",
          "answer": "θ = 1 radian; area = 50 cm².",
          "steps": [
            "Perimeter = 2r + rθ: 30 = 20 + 10θ.",
            "Hence θ = 1.",
            "Area = ½ × 10² × 1 = 50 cm²."
          ]
        }
      ],
      "prerequisite": "",
      "examStrategy": [
        "Check that angles are in radians before using s=rθ or A=½r²θ.",
        "For a segment, subtract the triangle area from the sector area.",
        "For triangles, use ½ab sin C when two sides and the included angle are known.",
        "Keep length and area units separate."
      ],
      "workedExamples": [
        {
          "question": "Find the area of the minor segment of a circle with radius 4 cm and angle π/3 radians.",
          "steps": [
            "Sector area = ½×4²×π/3 = 8π/3.",
            "Triangle area = ½×4²×sin(π/3) = 4√3.",
            "Subtract the triangle area from the sector area."
          ],
          "answer": "Area = 8π/3 − 4√3 cm²."
        }
      ],
      "focusChecklist": [
        "Convert between degrees and radians.",
        "Calculate arc length and sector area.",
        "Use segment area as sector minus triangle."
      ]
    },
    "9709-1.5": {
      "intro": "Trigonometry links angles and ratios and lets you solve equations over a stated interval. Work carefully with exact angles, graph period, and the full set of solutions.",
      "learn": [
        "Know exact values for 30°, 45°, 60° and related angles. Draw a sign diagram or use the unit circle to choose the correct quadrants.",
        "The identities sin²θ + cos²θ = 1 and tan θ = sin θ / cos θ can simplify expressions and equations.",
        "For y = sin x and y = cos x, the period is 2π (or 360°); for tan x, the period is π (or 180°). Transformations change amplitude, period, and phase.",
        "For an equation such as sin 2x = a, first solve for the angle 2x, then map every solution back into the required interval for x.",
        "Exam habit: write the governing relationship first, substitute values only after the symbols and conditions are clear, and show enough intermediate working for each method mark.",
        "After obtaining a result, check its meaning in the original question: roots must satisfy the equation, probabilities must be between 0 and 1, and physical answers should have sensible signs and units."
      ],
      "formulae": [
        "sin²θ + cos²θ = 1",
        "tan θ = sin θ / cos θ",
        "sin(90° − θ) = cos θ",
        "Exact values: sin 30° = ½; cos 60° = ½; tan 45° = 1"
      ],
      "example": {
        "question": "Solve sin θ = ½ for 0° ≤ θ ≤ 360°.",
        "steps": [
          "The reference angle is 30° because sin 30° = ½.",
          "Sine is positive in quadrants I and II."
        ],
        "answer": "θ = 30° or 150°."
      },
      "watch": [
        "Check the interval endpoints and all quadrants that have the correct sign.",
        "When the angle is 2θ or 3θ, solutions for the whole angle may map to more than two values of θ.",
        "Use degrees or radians consistently from start to finish."
      ],
      "questions": [
        {
          "level": "Warm-up",
          "question": "State the exact values of sin 30°, cos 60° and tan 45°.",
          "answer": "½, ½ and 1.",
          "steps": [
            "These are standard exact-angle values; learn them rather than rounding them."
          ]
        },
        {
          "level": "Developing",
          "question": "Solve cos θ = −½ for 0° ≤ θ ≤ 360°.",
          "answer": "θ = 120° or 240°.",
          "steps": [
            "The reference angle is 60°.",
            "Cosine is negative in quadrants II and III."
          ]
        },
        {
          "level": "Challenge",
          "question": "Solve 2cos²θ − 3sinθ = 0 for 0° ≤ θ ≤ 360°.",
          "answer": "θ = 30° or 150°.",
          "steps": [
            "Replace cos²θ with 1 − sin²θ: 2(1 − sin²θ) − 3sinθ = 0.",
            "Rearrange: 2sin²θ + 3sinθ − 2 = 0 = (2sinθ − 1)(sinθ + 2).",
            "sinθ = ½ is valid; sinθ = −2 is impossible. The two solutions are 30° and 150°."
          ]
        }
      ],
      "prerequisite": "",
      "examStrategy": [
        "Sketch one period and mark the maximum, minimum, intercepts and period.",
        "Use exact values before a calculator approximation.",
        "Solve the reference angle first, then locate all relevant quadrants.",
        "For a multiple angle such as sin 2x, solve for 2x and convert back to x."
      ],
      "workedExamples": [
        {
          "question": "Solve sin x = −√3/2 for 0° ≤ x ≤ 360°.",
          "steps": [
            "The reference angle is 60°.",
            "Sine is negative in quadrants III and IV."
          ],
          "answer": "x = 240° or 300°."
        }
      ],
      "focusChecklist": [
        "Sketch transformed trig graphs.",
        "Use exact values and identities.",
        "List all solutions in the required interval."
      ]
    },
    "9709-1.6": {
      "intro": "Series describe ordered number patterns and sums. The key is to identify whether the sequence is arithmetic (constant difference), geometric (constant ratio), or a binomial expansion.",
      "learn": [
        "For an arithmetic progression (AP), nth term uₙ = a + (n−1)d and Sₙ = n/2[2a + (n−1)d].",
        "For a geometric progression (GP), uₙ = arⁿ⁻¹ and Sₙ = a(rⁿ − 1)/(r − 1) when r ≠ 1.",
        "An infinite GP converges only when |r| < 1; its sum is a/(1 − r).",
        "For positive integer n, (a + b)ⁿ can be expanded with binomial coefficients nCr. The coefficient pattern is symmetric; the term in bʳ is nCr aⁿ⁻ʳbʳ.",
        "Exam habit: write the governing relationship first, substitute values only after the symbols and conditions are clear, and show enough intermediate working for each method mark.",
        "After obtaining a result, check its meaning in the original question: roots must satisfy the equation, probabilities must be between 0 and 1, and physical answers should have sensible signs and units."
      ],
      "formulae": [
        "AP term: uₙ = a + (n − 1)d",
        "AP sum: Sₙ = n/2[2a + (n − 1)d]",
        "GP term: uₙ = arⁿ⁻¹",
        "Infinite GP sum: S∞ = a/(1 − r), only if |r| < 1",
        "Binomial term: nCr aⁿ⁻ʳbʳ"
      ],
      "example": {
        "question": "Find the 10th term of the AP 5, 8, 11, … .",
        "steps": [
          "First term a = 5 and common difference d = 3.",
          "u₁₀ = 5 + 9 × 3 = 32."
        ],
        "answer": "32."
      },
      "watch": [
        "For an AP, subtract consecutive terms; for a GP, divide consecutive non-zero terms.",
        "An infinite GP with |r| ≥ 1 does not have a finite sum.",
        "In a binomial expansion, powers of a decrease while powers of b increase."
      ],
      "questions": [
        {
          "level": "Warm-up",
          "question": "Find the 10th term of 5, 8, 11, … .",
          "answer": "32.",
          "steps": [
            "u₁₀ = 5 + 9(3) = 32."
          ]
        },
        {
          "level": "Developing",
          "question": "A GP is 3, 6, 12, … . Find the sum of its first five terms.",
          "answer": "93.",
          "steps": [
            "a = 3, r = 2, n = 5.",
            "S₅ = 3(2⁵ − 1)/(2 − 1) = 93."
          ]
        },
        {
          "level": "Challenge",
          "question": "Find the coefficient of x³ in (2 + x)⁵.",
          "answer": "40.",
          "steps": [
            "The x³ term is ⁵C₃ × 2² × x³.",
            "⁵C₃ = 10, and 10 × 4 = 40."
          ]
        }
      ],
      "prerequisite": "",
      "examStrategy": [
        "Identify the common difference or common ratio before selecting a formula.",
        "Use two pieces of information to form simultaneous equations when a and d, or a and r, are unknown.",
        "For an infinite GP, check |r|<1 before using the sum-to-infinity formula.",
        "In binomial expansion, track the descending power of the first term and ascending power of the second."
      ],
      "workedExamples": [
        {
          "question": "An AP has first term 7 and common difference 4. Which term is 47?",
          "steps": [
            "Use uₙ = a+(n−1)d.",
            "47 = 7 + 4(n−1), so 40 = 4(n−1)."
          ],
          "answer": "n = 11; 47 is the 11th term."
        }
      ],
      "focusChecklist": [
        "Find an nth term or partial sum.",
        "Distinguish AP from GP.",
        "Check convergence before an infinite sum."
      ]
    },
    "9709-1.7": {
      "intro": "Differentiation measures instantaneous rate of change and the gradient of a curve. In P1, use the power rule, sums and constant multiples, and the chain rule for composite powers.",
      "learn": [
        "The derivative is the gradient function. At x = a, the tangent gradient is f′(a). A normal is perpendicular to the tangent, so its gradient is the negative reciprocal when the tangent is not horizontal.",
        "Power rule: d(xⁿ)/dx = nxⁿ⁻¹. Constants differentiate to zero. For (ax + b)ⁿ, multiply by the derivative of the inside: na(ax+b)ⁿ⁻¹.",
        "Stationary points satisfy f′(x) = 0. Use the second derivative or a sign change in f′ to classify a local maximum/minimum.",
        "For connected rates, differentiate the relationship between variables with respect to time, then substitute the instant's values and rate.",
        "Exam habit: write the governing relationship first, substitute values only after the symbols and conditions are clear, and show enough intermediate working for each method mark.",
        "After obtaining a result, check its meaning in the original question: roots must satisfy the equation, probabilities must be between 0 and 1, and physical answers should have sensible signs and units."
      ],
      "formulae": [
        "d(xⁿ)/dx = nxⁿ⁻¹",
        "Chain rule: d[(ax+b)ⁿ]/dx = an(ax+b)ⁿ⁻¹",
        "Tangent at x=a: y − f(a) = f′(a)(x − a)",
        "Stationary points: f′(x) = 0"
      ],
      "example": {
        "question": "Find the tangent to y = x² + 3x at x = 2.",
        "steps": [
          "Point: y = 4 + 6 = 10.",
          "Gradient: dy/dx = 2x + 3, so at x = 2 the gradient is 7.",
          "Use y − 10 = 7(x − 2)."
        ],
        "answer": "y = 7x − 4."
      },
      "watch": [
        "The derivative gives a gradient, not the y-coordinate of a point; calculate f(a) separately.",
        "For the chain rule, remember the derivative of the inside expression.",
        "A stationary point need not be a maximum or minimum in general; check its nature."
      ],
      "questions": [
        {
          "level": "Warm-up",
          "question": "Differentiate y = 4x³ − 3x² + 5.",
          "answer": "dy/dx = 12x² − 6x.",
          "steps": [
            "Differentiate each term: 4x³ → 12x²; −3x² → −6x; constant → 0."
          ]
        },
        {
          "level": "Developing",
          "question": "Find the tangent to y = x² + 3x at x = 2.",
          "answer": "y = 7x − 4.",
          "steps": [
            "At x = 2, y = 10 and dy/dx = 7.",
            "Use y − 10 = 7(x − 2)."
          ]
        },
        {
          "level": "Challenge",
          "question": "For f(x) = x³ − 6x² + 9x, find and classify the stationary points.",
          "answer": "Local maximum at (1,4); local minimum at (3,0).",
          "steps": [
            "f′(x) = 3x² − 12x + 9 = 3(x − 1)(x − 3), so x = 1 or 3.",
            "f(1) = 4 and f(3) = 0.",
            "f″(x) = 6x − 12: f″(1) = −6 gives a maximum; f″(3) = 6 gives a minimum."
          ]
        }
      ],
      "prerequisite": "",
      "examStrategy": [
        "Differentiate first, then substitute the x-coordinate to get the gradient.",
        "Calculate the point on the curve separately.",
        "Use a second derivative or the sign of the first derivative to classify a stationary point.",
        "For related rates, differentiate with respect to time before substituting the instant’s values."
      ],
      "workedExamples": [
        {
          "question": "A circle has radius 4 cm and dr/dt = 0.5 cm s⁻¹. Find dA/dt at that instant.",
          "steps": [
            "A = πr².",
            "Differentiate with respect to time: dA/dt = 2πr(dr/dt).",
            "Substitute r=4 and dr/dt=0.5."
          ],
          "answer": "dA/dt = 4π cm² s⁻¹."
        }
      ],
      "focusChecklist": [
        "Find tangent and normal equations.",
        "Locate and classify stationary points.",
        "Solve simple connected-rate questions."
      ]
    },
    "9709-1.8": {
      "intro": "Integration reverses differentiation and accumulates quantities. P1 includes indefinite and definite integrals, constants of integration, areas between curves, volumes of revolution, and simple improper integrals.",
      "learn": [
        "Reverse the power rule: ∫xⁿ dx = xⁿ⁺¹/(n+1) + C for n ≠ −1. Integrate sums term-by-term and keep the constant C for indefinite integrals.",
        "Use a known point to determine C when a curve is specified by its gradient and a point.",
        "For a definite integral, evaluate the antiderivative at the upper limit and subtract its value at the lower limit.",
        "Area between curves is ∫(upper − lower) dx where the order is consistent. Volume about the x-axis is V = π∫y² dx; about the y-axis with x expressed as a function of y, use V = π∫x² dy.",
        "Exam habit: write the governing relationship first, substitute values only after the symbols and conditions are clear, and show enough intermediate working for each method mark.",
        "After obtaining a result, check its meaning in the original question: roots must satisfy the equation, probabilities must be between 0 and 1, and physical answers should have sensible signs and units."
      ],
      "formulae": [
        "∫xⁿ dx = xⁿ⁺¹/(n+1) + C, n ≠ −1",
        "∫(ax+b)ⁿ dx = (ax+b)ⁿ⁺¹/[a(n+1)] + C",
        "Area = ∫(upper curve − lower curve) dx",
        "Volume about x-axis: V = π∫y² dx"
      ],
      "example": {
        "question": "Given dy/dx = 3x² − 4x and the curve passes through (1,5), find y.",
        "steps": [
          "Integrate: y = x³ − 2x² + C.",
          "Substitute (1,5): 5 = 1 − 2 + C, hence C = 6."
        ],
        "answer": "y = x³ − 2x² + 6."
      },
      "watch": [
        "Do not forget +C when the integral is indefinite.",
        "A definite integral can be negative; geometric area is non-negative and may need splitting or reversing the order.",
        "For a volume of revolution, square the radius function before integrating."
      ],
      "questions": [
        {
          "level": "Warm-up",
          "question": "Evaluate ∫(6x² − 4x + 3) dx.",
          "answer": "2x³ − 2x² + 3x + C.",
          "steps": [
            "Raise each power by one and divide by the new power."
          ]
        },
        {
          "level": "Developing",
          "question": "Given dy/dx = 3x² − 4x and y = 5 when x = 1, find the curve equation.",
          "answer": "y = x³ − 2x² + 6.",
          "steps": [
            "Integrate to get y = x³ − 2x² + C.",
            "Use 5 = 1 − 2 + C, so C = 6."
          ]
        },
        {
          "level": "Challenge",
          "question": "Find the volume generated when y = √x, 0 ≤ x ≤ 4, is rotated about the x-axis.",
          "answer": "8π cubic units.",
          "steps": [
            "V = π∫₀⁴ y² dx = π∫₀⁴ x dx.",
            "V = π[x²/2]₀⁴ = 8π."
          ]
        }
      ],
      "prerequisite": "",
      "examStrategy": [
        "For a definite integral, evaluate F(upper)−F(lower).",
        "For area, use upper curve minus lower curve and split where the curves cross.",
        "For volume about an axis, square the radius function and check whether the region lies between two curves.",
        "For an improper integral, interpret the infinite endpoint as a limit."
      ],
      "workedExamples": [
        {
          "question": "Find the area between y=2x and y=x² from x=0 to x=2.",
          "steps": [
            "The line is above the curve on [0,2].",
            "Area = ∫₀²(2x−x²)dx = [x²−x³/3]₀²."
          ],
          "answer": "Area = 4/3 square units."
        }
      ],
      "focusChecklist": [
        "Integrate powers and linear functions.",
        "Use a condition to find C.",
        "Calculate area and volume with correct limits."
      ]
    },
    "9709-4.1": {
      "intro": "Mechanics models forces on particles. Start with a clear force diagram, choose axes, resolve every force, and use equilibrium equations before introducing friction limits.",
      "learn": [
        "Draw weight vertically down, reaction perpendicular to a surface, tension along a string, and any applied force in its stated direction.",
        "Resolve each force into components parallel and perpendicular to your chosen axes. In equilibrium, the net force in each direction is zero.",
        "On a rough surface, friction opposes impending or actual motion. At limiting equilibrium F = μR; otherwise F ≤ μR.",
        "For a smooth surface, friction is absent. Newton's third-law force pairs act on different bodies and therefore do not cancel on one body's diagram.",
        "Exam habit: write the governing relationship first, substitute values only after the symbols and conditions are clear, and show enough intermediate working for each method mark.",
        "After obtaining a result, check its meaning in the original question: roots must satisfy the equation, probabilities must be between 0 and 1, and physical answers should have sensible signs and units."
      ],
      "formulae": [
        "Weight: W = mg",
        "Equilibrium: ΣFₓ = 0 and ΣFᵧ = 0",
        "Limiting friction: F = μR; generally F ≤ μR",
        "Resolve: horizontal component F cos θ, vertical component F sin θ when θ is measured from horizontal"
      ],
      "example": {
        "question": "A 4 kg particle rests on a rough horizontal plane with coefficient of friction 0.25. Find the limiting friction, using g = 10 m s⁻².",
        "steps": [
          "The reaction is R = mg = 4 × 10 = 40 N.",
          "At limiting equilibrium, F = μR = 0.25 × 40."
        ],
        "answer": "10 N."
      },
      "watch": [
        "Be precise about the angle from which a force is measured before choosing sine or cosine.",
        "The reaction is not always equal to the weight; a vertical force component may change it.",
        "Do not use F = μR unless the question states limiting equilibrium or motion at limiting friction."
      ],
      "questions": [
        {
          "level": "Warm-up",
          "question": "Find the weight of a 3 kg particle using g = 10 m s⁻².",
          "answer": "30 N.",
          "steps": [
            "W = mg = 3 × 10 = 30 N."
          ]
        },
        {
          "level": "Developing",
          "question": "A 10 N force acts at 30° above the horizontal. Find its horizontal and vertical components.",
          "answer": "Horizontal = 5√3 N; vertical = 5 N.",
          "steps": [
            "Horizontal: 10 cos 30° = 5√3 N.",
            "Vertical: 10 sin 30° = 5 N."
          ]
        },
        {
          "level": "Challenge",
          "question": "A 4 kg particle rests on a smooth plane inclined at 30° to the horizontal. It is held at rest by a force parallel to the plane. Find the holding force and the normal reaction, using g = 10.",
          "answer": "Holding force = 20 N up the plane; reaction = 20√3 N.",
          "steps": [
            "Resolve weight down the plane: mg sin 30° = 40 × ½ = 20 N.",
            "Resolve perpendicular to the plane: R = mg cos 30° = 40 × √3/2 = 20√3 N."
          ]
        }
      ],
      "prerequisite": "",
      "examStrategy": [
        "Draw one force diagram per particle and label every force.",
        "Choose axes parallel/perpendicular to a plane when this reduces components.",
        "Resolve forces before applying equilibrium equations.",
        "Use F=μR only at limiting equilibrium; otherwise friction may be smaller."
      ],
      "workedExamples": [
        {
          "question": "A 5 kg block is at rest on a rough horizontal surface. A 12 N horizontal force pulls it and friction balances it. Using g=10, find the reaction and friction.",
          "steps": [
            "Vertical equilibrium gives R=mg=5×10.",
            "Horizontal equilibrium means friction balances the 12 N pull."
          ],
          "answer": "R=50 N and friction=12 N, opposite the pull."
        }
      ],
      "focusChecklist": [
        "Resolve a force into components.",
        "Use horizontal and vertical equilibrium.",
        "Apply limiting friction only when specified."
      ]
    },
    "9709-4.2": {
      "intro": "Kinematics describes motion along a straight line. Choose a positive direction, keep signed velocity and acceleration consistent, and use constant-acceleration equations or graph/calculus relationships.",
      "learn": [
        "Distance and speed are scalars; displacement, velocity and acceleration have direction and may be signed.",
        "On a displacement-time graph, gradient is velocity. On a velocity-time graph, gradient is acceleration and signed area gives displacement.",
        "For constant acceleration: v = u + at; s = ut + ½at²; v² = u² + 2as; s = ½(u+v)t.",
        "With calculus, v = ds/dt and a = dv/dt; integrating velocity gives displacement change.",
        "Exam habit: write the governing relationship first, substitute values only after the symbols and conditions are clear, and show enough intermediate working for each method mark.",
        "After obtaining a result, check its meaning in the original question: roots must satisfy the equation, probabilities must be between 0 and 1, and physical answers should have sensible signs and units."
      ],
      "formulae": [
        "v = u + at",
        "s = ut + ½at²",
        "v² = u² + 2as",
        "Average velocity over constant acceleration: (u+v)/2"
      ],
      "example": {
        "question": "A particle starts from rest and accelerates at 3 m s⁻² for 4 s. Find its final velocity and displacement.",
        "steps": [
          "v = u + at = 0 + 3×4 = 12 m s⁻¹.",
          "s = ut + ½at² = 0 + ½×3×16 = 24 m."
        ],
        "answer": "Final velocity 12 m s⁻¹; displacement 24 m."
      },
      "watch": [
        "Use displacement rather than distance when direction changes.",
        "A negative area on a velocity-time graph represents motion in the negative direction.",
        "Use SUVAT only when acceleration is constant over the interval."
      ],
      "questions": [
        {
          "level": "Warm-up",
          "question": "A particle has u = 5 m s⁻¹ and constant acceleration 2 m s⁻² for 3 s. Find v.",
          "answer": "11 m s⁻¹.",
          "steps": [
            "v = u + at = 5 + 2×3 = 11."
          ]
        },
        {
          "level": "Developing",
          "question": "Velocity increases uniformly from 2 m s⁻¹ to 10 m s⁻¹ in 4 s. Find acceleration and displacement.",
          "answer": "a = 2 m s⁻²; displacement = 24 m.",
          "steps": [
            "a = (10 − 2)/4 = 2 m s⁻².",
            "Displacement = average velocity × time = ((2+10)/2)×4 = 24 m."
          ]
        },
        {
          "level": "Challenge",
          "question": "A particle moves with initial velocity 20 m s⁻¹ and constant acceleration −2 m s⁻² for 6 s. Find its final velocity and displacement.",
          "answer": "v = 8 m s⁻¹; s = 84 m.",
          "steps": [
            "v = 20 − 2×6 = 8.",
            "s = 20×6 + ½(−2)(6²) = 120 − 36 = 84 m."
          ]
        }
      ],
      "prerequisite": "",
      "examStrategy": [
        "Choose a positive direction and give velocities/accelerations signs.",
        "Use SUVAT only over an interval of constant acceleration.",
        "For a velocity-time graph, signed area is displacement and total absolute area is distance.",
        "When an object changes direction, find when velocity is zero and split the distance calculation."
      ],
      "workedExamples": [
        {
          "question": "A particle has velocity 4 m s⁻¹ east for 5 s, then 3 m s⁻¹ west for 2 s. Find displacement and total distance.",
          "steps": [
            "Take east as positive.",
            "Displacement = 4×5 + (−3)×2 = 14 m.",
            "Distance = 4×5 + 3×2 = 26 m."
          ],
          "answer": "Displacement 14 m east; distance 26 m."
        }
      ],
      "focusChecklist": [
        "Choose the correct constant-acceleration formula.",
        "Interpret velocity-time graphs.",
        "Distinguish displacement from distance."
      ]
    },
    "9709-4.3": {
      "intro": "Linear momentum is mass multiplied by velocity. For a direct collision in a closed system, total momentum before impact equals total momentum after impact.",
      "learn": [
        "Momentum is directional. Choose one direction as positive and use signed velocities in the conservation equation.",
        "For two particles: m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂.",
        "If the particles coalesce, they share one final velocity v, so m₁u₁ + m₂u₂ = (m₁+m₂)v.",
        "The syllabus does not require impulse or coefficient of restitution for this component; focus on conservation of linear momentum in one dimension.",
        "Exam habit: write the governing relationship first, substitute values only after the symbols and conditions are clear, and show enough intermediate working for each method mark.",
        "After obtaining a result, check its meaning in the original question: roots must satisfy the equation, probabilities must be between 0 and 1, and physical answers should have sensible signs and units."
      ],
      "formulae": [
        "Momentum: p = mv",
        "Conservation: total momentum before = total momentum after",
        "Coalescing bodies: v = (m₁u₁ + m₂u₂)/(m₁ + m₂)"
      ],
      "example": {
        "question": "A 0.4 kg particle moving at 8 m s⁻¹ collides with a stationary 0.6 kg particle and they stick together. Find their common velocity.",
        "steps": [
          "Initial momentum = 0.4×8 + 0.6×0 = 3.2 kg m s⁻¹.",
          "Combined mass = 1.0 kg, so v = 3.2/1.0."
        ],
        "answer": "3.2 m s⁻¹ in the original direction."
      },
      "watch": [
        "Momentum is not conserved for one particle alone; write an equation for the whole collision system.",
        "Opposite directions require opposite signs.",
        "If bodies stick together, do not calculate separate final velocities."
      ],
      "questions": [
        {
          "level": "Warm-up",
          "question": "Find the momentum of a 2 kg particle moving at 5 m s⁻¹ to the right.",
          "answer": "10 kg m s⁻¹ to the right.",
          "steps": [
            "p = mv = 2×5 = 10."
          ]
        },
        {
          "level": "Developing",
          "question": "A 0.4 kg particle moving at 8 m s⁻¹ strikes a stationary 0.6 kg particle. They coalesce. Find the final velocity.",
          "answer": "3.2 m s⁻¹ in the original direction.",
          "steps": [
            "0.4×8 + 0 = (0.4+0.6)v.",
            "3.2 = v."
          ]
        },
        {
          "level": "Challenge",
          "question": "A 2 kg particle moves right at 6 m s⁻¹ and collides with a 4 kg particle moving left at 1 m s⁻¹. They stick together. Find the final velocity.",
          "answer": "4/3 m s⁻¹ to the right.",
          "steps": [
            "Take right as positive: initial momentum = 2×6 + 4×(−1) = 8.",
            "Combined mass is 6 kg, so 6v = 8 and v = 4/3 m s⁻¹."
          ]
        }
      ],
      "prerequisite": "",
      "examStrategy": [
        "Choose a positive direction and assign signs to all initial/final velocities.",
        "Write conservation of momentum for the whole system.",
        "If particles coalesce, use one common final velocity.",
        "Check whether the final sign matches the stated direction."
      ],
      "workedExamples": [
        {
          "question": "A 2 kg particle moving right at 6 m s⁻¹ collides with a 1 kg particle moving left at 3 m s⁻¹. They stick together. Find the final velocity.",
          "steps": [
            "Take right as positive: initial momentum = 2×6 + 1×(−3) = 9.",
            "Combined mass = 3 kg, so 3v=9."
          ],
          "answer": "v=3 m s⁻¹ to the right."
        }
      ],
      "focusChecklist": [
        "Conserve momentum with signs.",
        "Model coalescing particles.",
        "Interpret a negative velocity correctly."
      ]
    },
    "9709-4.4": {
      "intro": "Newton's laws connect resultant force, mass and acceleration. A force diagram and separate equations for connected particles usually make the setup much clearer.",
      "learn": [
        "Newton's first law describes constant velocity when resultant force is zero; the second law is F = ma in the direction of the resultant; the third law pairs equal and opposite forces on different bodies.",
        "Weight W = mg. In this component, calculations commonly use g = 10 m s⁻² unless a value is specified.",
        "For connected particles linked by a light inextensible string over a smooth pulley, the string tension is the same and acceleration magnitudes match while the string remains taut.",
        "On a rough plane, include friction opposing motion. For a plane inclined at θ, resolve weight into mg sin θ down the plane and mg cos θ perpendicular to it.",
        "Exam habit: write the governing relationship first, substitute values only after the symbols and conditions are clear, and show enough intermediate working for each method mark.",
        "After obtaining a result, check its meaning in the original question: roots must satisfy the equation, probabilities must be between 0 and 1, and physical answers should have sensible signs and units."
      ],
      "formulae": [
        "Resultant force: ΣF = ma",
        "Weight: W = mg",
        "Inclined plane: component down plane = mg sin θ; normal component = mg cos θ",
        "Limiting friction: F = μR"
      ],
      "example": {
        "question": "A 5 kg particle accelerates at 2 m s⁻² on a smooth horizontal surface. Find the resultant horizontal force.",
        "steps": [
          "Newton's second law gives F = ma.",
          "F = 5×2."
        ],
        "answer": "10 N."
      },
      "watch": [
        "Apply F = ma to each particle separately before combining equations.",
        "For a connected-particle system, internal tensions cancel only when equations for the whole system are combined.",
        "If motion direction is assumed incorrectly, the algebra may produce a negative acceleration; interpret the sign rather than changing signs mid-solution."
      ],
      "questions": [
        {
          "level": "Warm-up",
          "question": "What resultant force accelerates a 5 kg particle at 2 m s⁻²?",
          "answer": "10 N.",
          "steps": [
            "F = ma = 5×2 = 10 N."
          ]
        },
        {
          "level": "Developing",
          "question": "A 3 kg mass hangs at rest from a light vertical string. Find the tension, using g = 10.",
          "answer": "30 N.",
          "steps": [
            "It is at rest, so tension balances weight.",
            "T = mg = 3×10 = 30 N."
          ]
        },
        {
          "level": "Challenge",
          "question": "A 4 kg block on a rough horizontal surface (μ = 0.25) is connected over a smooth pulley to a hanging 2 kg mass. The system moves with the 2 kg mass downward. Find acceleration and tension, using g = 10.",
          "answer": "a = 5/3 m s⁻²; T = 50/3 N.",
          "steps": [
            "Friction on the 4 kg block is μR = 0.25×40 = 10 N.",
            "For the system: driving force = 20 − 10 = 10 N; total mass = 6 kg, so a = 10/6 = 5/3.",
            "For the hanging mass: 20 − T = 2(5/3), so T = 50/3 N."
          ]
        }
      ],
      "prerequisite": "",
      "examStrategy": [
        "Draw a separate force diagram for each connected particle.",
        "Use the same acceleration magnitude for bodies joined by a taut inextensible string.",
        "For a hanging mass, decide which direction is positive before writing Newton’s second law.",
        "Eliminate tension only after writing equations for each body."
      ],
      "workedExamples": [
        {
          "question": "A 3 kg block on a smooth table is connected to a hanging 2 kg mass. Using g=10, find acceleration and tension.",
          "steps": [
            "Driving force on the system is 2g=20 N and total mass is 5 kg.",
            "Acceleration a=20/5=4 m s⁻².",
            "For the table block, T=3a=12 N."
          ],
          "answer": "a=4 m s⁻²; T=12 N."
        }
      ],
      "focusChecklist": [
        "Apply F=ma to each body.",
        "Resolve forces on an inclined plane.",
        "Use friction and string constraints consistently."
      ]
    },
    "9709-4.5": {
      "intro": "Work, energy and power provide alternative ways to solve motion problems. Energy methods are often shorter when speed and height change but the forces are complicated.",
      "learn": [
        "Work done by a constant force is W = Fs cos θ, where θ is the angle between force and displacement.",
        "Kinetic energy is ½mv²; gravitational potential energy near Earth's surface is mgh.",
        "The change in mechanical energy equals the work done by external non-conservative forces. If no energy is dissipated, mechanical energy is conserved.",
        "Power is work done per unit time. For a force acting in the direction of motion, P = Fv; average power is total work divided by elapsed time.",
        "Exam habit: write the governing relationship first, substitute values only after the symbols and conditions are clear, and show enough intermediate working for each method mark.",
        "After obtaining a result, check its meaning in the original question: roots must satisfy the equation, probabilities must be between 0 and 1, and physical answers should have sensible signs and units."
      ],
      "formulae": [
        "Work: W = Fs cos θ",
        "Kinetic energy: Eₖ = ½mv²",
        "Gravitational potential energy: Eₚ = mgh",
        "Power: P = W/t; P = Fv for force parallel to velocity"
      ],
      "example": {
        "question": "A 2 kg object falls 5 m. Find the loss in gravitational potential energy using g = 10 m s⁻².",
        "steps": [
          "Loss in GPE = mgh = 2×10×5."
        ],
        "answer": "100 J."
      },
      "watch": [
        "The angle in W = Fs cos θ is between the force and displacement, not necessarily the horizontal.",
        "Use the change in kinetic energy, not just final kinetic energy, when speed changes from a non-zero initial value.",
        "Convert kilowatts to watts and minutes to seconds when calculating power in SI units."
      ],
      "questions": [
        {
          "level": "Warm-up",
          "question": "A 10 N force acts along a displacement of 3 m. Find the work done.",
          "answer": "30 J.",
          "steps": [
            "W = Fs = 10×3 = 30 J."
          ]
        },
        {
          "level": "Developing",
          "question": "A 2 kg object drops through 5 m. Find its loss of GPE, using g = 10.",
          "answer": "100 J.",
          "steps": [
            "mgh = 2×10×5 = 100 J."
          ]
        },
        {
          "level": "Challenge",
          "question": "A 1000 kg car speeds up from 10 m s⁻¹ to 20 m s⁻¹ in 15 s. If the net work becomes kinetic energy, find the work done and average power.",
          "answer": "Work = 150 000 J; average power = 10 000 W.",
          "steps": [
            "ΔEₖ = ½×1000×(20² − 10²) = 500×300 = 150 000 J.",
            "Average power = work/time = 150 000/15 = 10 000 W."
          ]
        }
      ],
      "prerequisite": "",
      "examStrategy": [
        "Choose energy methods when the question compares speeds and heights.",
        "Work is zero when a constant force is perpendicular to displacement.",
        "Use change in kinetic energy, not just final kinetic energy.",
        "Power P=Fv applies when the force component along the velocity is used."
      ],
      "workedExamples": [
        {
          "question": "A 2 kg particle speeds up from 3 to 7 m s⁻¹. Find the net work done.",
          "steps": [
            "Net work equals change in kinetic energy.",
            "ΔEₖ = ½×2×(7²−3²) = 49−9."
          ],
          "answer": "40 J."
        }
      ],
      "focusChecklist": [
        "Calculate work using the angle between force and displacement.",
        "Use conservation of energy when appropriate.",
        "Find power from work/time or force×speed."
      ]
    },
    "9709-5.1": {
      "intro": "Representation of data is about choosing a display and summarising a distribution. Always distinguish exact data from estimates read from grouped tables or cumulative-frequency graphs.",
      "learn": [
        "Stem-and-leaf diagrams preserve individual values; back-to-back diagrams compare two data sets. Box-and-whisker plots compare median, quartiles, range and interquartile range.",
        "For grouped continuous data, a histogram uses frequency density = frequency/class width as bar height.",
        "Cumulative frequency graphs give estimates of medians, quartiles, percentiles and proportions within ranges.",
        "For raw data, mean = Σx/n and variance can be calculated from Σx²/n − mean². For grouped data, use class midpoints, so the results are estimates.",
        "Exam habit: write the governing relationship first, substitute values only after the symbols and conditions are clear, and show enough intermediate working for each method mark.",
        "After obtaining a result, check its meaning in the original question: roots must satisfy the equation, probabilities must be between 0 and 1, and physical answers should have sensible signs and units."
      ],
      "formulae": [
        "Mean: x̄ = Σx/n",
        "Variance: Var = Σx²/n − x̄²",
        "Standard deviation = √variance",
        "Histogram frequency density = frequency/class width",
        "Interquartile range = Q₃ − Q₁"
      ],
      "example": {
        "question": "For data 2, 3, 3, 5, 7, find the mean, median, mode and range.",
        "steps": [
          "Sum = 20 across 5 values, so mean = 4.",
          "The middle value is 3, and the most frequent value is 3.",
          "Range = 7 − 2 = 5."
        ],
        "answer": "Mean 4; median 3; mode 3; range 5."
      },
      "watch": [
        "Histogram bar height is frequency density, not frequency, when class widths differ.",
        "For grouped data, midpoint calculations are estimates because exact observations within classes are unknown.",
        "Standard deviation measures spread around the mean; it is not the same as range or IQR."
      ],
      "questions": [
        {
          "level": "Warm-up",
          "question": "For 2, 3, 3, 5, 7, find the mean and range.",
          "answer": "Mean = 4; range = 5.",
          "steps": [
            "Mean = 20/5 = 4.",
            "Range = 7 − 2 = 5."
          ]
        },
        {
          "level": "Developing",
          "question": "A grouped table has class intervals 0–10, 10–20, 20–30 with frequencies 2, 5, 3. Estimate the mean.",
          "answer": "16.",
          "steps": [
            "Use midpoints 5, 15, 25.",
            "Estimated total = 2×5 + 5×15 + 3×25 = 160; total frequency = 10.",
            "Estimated mean = 160/10 = 16."
          ]
        },
        {
          "level": "Challenge",
          "question": "Grouped data have classes 0–10, 10–20, 20–30, 30–40 with frequencies 4, 10, 12, 4. Estimate Q₁ and the median by linear interpolation.",
          "answer": "Q₁ ≈ 13.5; median ≈ 20.83.",
          "steps": [
            "Total n = 30. Q₁ is at n/4 = 7.5th value; cumulative frequency reaches 4 before class 10–20.",
            "Q₁ ≈ 10 + ((7.5−4)/10)×10 = 13.5.",
            "Median is at n/2 = 15th value in class 20–30; previous cumulative frequency 14.",
            "Median ≈ 20 + ((15−14)/12)×10 ≈ 20.83."
          ]
        }
      ],
      "prerequisite": "",
      "examStrategy": [
        "Choose a display that preserves the information the question asks about.",
        "In histograms with unequal class widths, use frequency density on the vertical axis.",
        "For cumulative frequency, use N/4, N/2 and 3N/4 to estimate quartiles.",
        "For grouped mean/variance, use class midpoints and state that the answer is an estimate."
      ],
      "workedExamples": [
        {
          "question": "A histogram class has frequency 18 and width 6. Find its frequency density.",
          "steps": [
            "Frequency density = frequency/class width.",
            "18/6 = 3."
          ],
          "answer": "Frequency density = 3."
        }
      ],
      "focusChecklist": [
        "Summarise data with mean and spread.",
        "Read quartiles from a cumulative frequency graph.",
        "Use correct histogram heights."
      ]
    },
    "9709-5.2": {
      "intro": "Permutations count ordered arrangements; combinations count selections where order does not matter. Restrictions and repeated objects are handled by building a count that avoids overcounting.",
      "learn": [
        "n! = n(n−1)…2×1, with 0! = 1.",
        "Arrangements of r distinct objects from n: nPr = n!/(n−r)!. Selections of r objects from n: nCr = n!/[r!(n−r)!].",
        "For repeated letters, divide the total factorial by the factorials of each repeated multiplicity.",
        "For restrictions such as two people together, treat them as a block; for 'not together', subtract together arrangements from all arrangements. Circular arrangements are not included in this syllabus component.",
        "Exam habit: write the governing relationship first, substitute values only after the symbols and conditions are clear, and show enough intermediate working for each method mark.",
        "After obtaining a result, check its meaning in the original question: roots must satisfy the equation, probabilities must be between 0 and 1, and physical answers should have sensible signs and units."
      ],
      "formulae": [
        "nPr = n!/(n−r)!",
        "nCr = n!/[r!(n−r)!]",
        "Repeated arrangements: n!/(a!b!c!…)"
      ],
      "example": {
        "question": "How many ways can 3 students be selected from 8?",
        "steps": [
          "Order is irrelevant, so use combinations.",
          "⁸C₃ = 8!/(3!5!) = (8×7×6)/(3×2×1)."
        ],
        "answer": "56 ways."
      },
      "watch": [
        "If roles or positions differ, order usually matters; use permutations rather than combinations.",
        "When using a block, remember that the objects inside the block may be arranged in more than one order.",
        "Subtracting a restricted case is often safer than counting every allowed arrangement directly."
      ],
      "questions": [
        {
          "level": "Warm-up",
          "question": "How many ways can 5 distinct books be arranged in a row?",
          "answer": "120.",
          "steps": [
            "There are 5! = 5×4×3×2×1 = 120 arrangements."
          ]
        },
        {
          "level": "Developing",
          "question": "How many ways can 3 students be chosen from 8 for a committee?",
          "answer": "56.",
          "steps": [
            "A committee has no internal order, so use ⁸C₃ = 56."
          ]
        },
        {
          "level": "Challenge",
          "question": "How many distinct arrangements of BANANA have the two Ns not adjacent?",
          "answer": "40.",
          "steps": [
            "All arrangements: 6!/(3!2!) = 60.",
            "Treat NN as one block: arrange the 5 objects NN, A, A, A, B in 5!/3! = 20 ways.",
            "Not adjacent = 60 − 20 = 40."
          ]
        }
      ],
      "prerequisite": "",
      "examStrategy": [
        "Decide whether order matters: arrangements use permutations; selections use combinations.",
        "For repeated objects, divide by factorials of the repeated counts.",
        "For restrictions, place the constrained objects first or count the complement.",
        "Use a clear multiplication structure and explain the final count."
      ],
      "workedExamples": [
        {
          "question": "How many distinct arrangements are there of the letters in LEVEL?",
          "steps": [
            "There are 5 letters, with L repeated twice and E repeated twice.",
            "Divide 5! by 2!2!."
          ],
          "answer": "30 arrangements."
        }
      ],
      "focusChecklist": [
        "Count permutations with or without repetition.",
        "Count selections with combinations.",
        "Handle restrictions without double-counting."
      ]
    },
    "9709-5.3": {
      "intro": "Probability quantifies how likely events are. Use a sample space or tree diagram to separate cases, and identify whether events are independent, mutually exclusive, or conditional.",
      "learn": [
        "For equally likely outcomes, P(A) = number of favourable outcomes / total outcomes. The complement has probability 1 − P(A).",
        "For mutually exclusive events, P(A ∪ B) = P(A)+P(B). For independent events, P(A ∩ B) = P(A)P(B).",
        "Conditional probability: P(A|B) = P(A ∩ B)/P(B), provided P(B) > 0.",
        "Without replacement, probabilities change after each draw. Use branch probabilities in a tree and multiply along a path; add probabilities for mutually exclusive paths.",
        "Exam habit: write the governing relationship first, substitute values only after the symbols and conditions are clear, and show enough intermediate working for each method mark.",
        "After obtaining a result, check its meaning in the original question: roots must satisfy the equation, probabilities must be between 0 and 1, and physical answers should have sensible signs and units."
      ],
      "formulae": [
        "P(A′) = 1 − P(A)",
        "P(A ∩ B) = P(A)P(B) when independent",
        "P(A|B) = P(A ∩ B)/P(B)",
        "For a tree: multiply along branches, add disjoint paths"
      ],
      "example": {
        "question": "A bag has 3 red and 2 blue balls. One ball is selected at random. Find P(red).",
        "steps": [
          "There are 5 equally likely balls and 3 are red."
        ],
        "answer": "3/5."
      },
      "watch": [
        "Independent does not mean mutually exclusive: independent events can occur together.",
        "Do not keep the original denominator after a draw without replacement.",
        "For 'at least one', it can be simpler to calculate one minus the probability of none."
      ],
      "questions": [
        {
          "level": "Warm-up",
          "question": "A bag contains 3 red and 2 blue balls. Find the probability of choosing red.",
          "answer": "3/5.",
          "steps": [
            "Favourable outcomes = 3; total = 5."
          ]
        },
        {
          "level": "Developing",
          "question": "Two fair six-sided dice are thrown. Find the probability that their scores sum to 7.",
          "answer": "1/6.",
          "steps": [
            "The six ordered pairs are (1,6), (2,5), (3,4), (4,3), (5,2), (6,1).",
            "There are 6 favourable outcomes out of 36, giving 1/6."
          ]
        },
        {
          "level": "Challenge",
          "question": "A box contains 6 red and 4 blue counters. Two are chosen without replacement. Find the probability of at least one red.",
          "answer": "13/15.",
          "steps": [
            "Use the complement: no red means both counters are blue.",
            "P(both blue) = (4/10)(3/9) = 2/15.",
            "P(at least one red) = 1 − 2/15 = 13/15."
          ]
        }
      ],
      "prerequisite": "",
      "examStrategy": [
        "For mutually exclusive events, add probabilities; for independent events, multiply them.",
        "Use a tree diagram for multi-stage events and multiply along branches.",
        "For conditional probability, restrict the sample space to the condition.",
        "Check that probabilities sum to 1 and that the answer lies between 0 and 1."
      ],
      "workedExamples": [
        {
          "question": "Given P(A)=0.6, P(B)=0.5 and P(A∩B)=0.3, find P(A|B).",
          "steps": [
            "P(A|B)=P(A∩B)/P(B).",
            "Substitute 0.3/0.5."
          ],
          "answer": "P(A|B)=0.6."
        }
      ],
      "focusChecklist": [
        "Use addition and multiplication rules.",
        "Apply conditional probability.",
        "Determine independence from the given probabilities."
      ]
    },
    "9709-5.4": {
      "intro": "A discrete random variable takes separate countable values with assigned probabilities. Probability tables support expectations and variances, while binomial and geometric models describe repeated independent trials.",
      "learn": [
        "A probability distribution must have probabilities between 0 and 1, and their total must equal 1.",
        "E(X) = ΣxP(X=x); Var(X) = E(X²) − [E(X)]².",
        "For X ~ B(n,p), P(X=r) = nCr pʳ(1−p)ⁿ⁻ʳ; E(X)=np and Var(X)=np(1−p).",
        "For X ~ Geo(p), where X is the trial number of the first success, P(X=r)=(1−p)ʳ⁻¹p, E(X)=1/p and Var(X)=(1−p)/p².",
        "Exam habit: write the governing relationship first, substitute values only after the symbols and conditions are clear, and show enough intermediate working for each method mark.",
        "After obtaining a result, check its meaning in the original question: roots must satisfy the equation, probabilities must be between 0 and 1, and physical answers should have sensible signs and units."
      ],
      "formulae": [
        "E(X) = ΣxP(X=x)",
        "Var(X) = Σx²P(X=x) − [E(X)]²",
        "Binomial: P(X=r)=nCr pʳqⁿ⁻ʳ; mean np, variance npq",
        "Geometric: P(X=r)=qʳ⁻¹p; mean 1/p; variance q/p²"
      ],
      "example": {
        "question": "X takes values 0 and 1 with probabilities 0.3 and 0.7. Find E(X).",
        "steps": [
          "E(X) = 0(0.3) + 1(0.7)."
        ],
        "answer": "E(X) = 0.7."
      },
      "watch": [
        "Check all probabilities sum to 1 before calculating expectations.",
        "Variance is not E(X²) alone; subtract the square of the mean.",
        "For a geometric distribution, r starts at 1 when X is the trial on which the first success occurs."
      ],
      "questions": [
        {
          "level": "Warm-up",
          "question": "X is 0 with probability 0.3 and 1 with probability 0.7. Find E(X).",
          "answer": "0.7.",
          "steps": [
            "E(X)=0×0.3+1×0.7=0.7."
          ]
        },
        {
          "level": "Developing",
          "question": "If X ~ B(5, 0.2), find P(X=2).",
          "answer": "0.2048.",
          "steps": [
            "P(X=2)=⁵C₂(0.2)²(0.8)³.",
            "=10×0.04×0.512 = 0.2048."
          ]
        },
        {
          "level": "Challenge",
          "question": "A test has success probability 0.25 independently each attempt. Let X be the attempt number of the first success. Find P(X=3), E(X) and Var(X).",
          "answer": "P(X=3)=0.140625; E(X)=4; Var(X)=12.",
          "steps": [
            "P(X=3)=(0.75)²(0.25)=0.140625.",
            "E(X)=1/p=4.",
            "Var(X)=(1−p)/p²=0.75/0.0625=12."
          ]
        }
      ],
      "prerequisite": "",
      "examStrategy": [
        "List all possible values of X and pair each with its probability.",
        "Check Σp(x)=1 before calculating expectations.",
        "E(X)=Σxp(x); Var(X)=E(X²)−[E(X)]².",
        "For a function of X, calculate the expected value by applying the function to each possible value, not by assuming E(g(X))=g(E(X))."
      ],
      "workedExamples": [
        {
          "question": "X takes values 0, 1, 2 with probabilities 0.2, 0.5, 0.3. Find E(X) and Var(X).",
          "steps": [
            "E(X)=0(0.2)+1(0.5)+2(0.3)=1.1.",
            "E(X²)=0+0.5+4(0.3)=1.7.",
            "Variance=1.7−1.1²."
          ],
          "answer": "E(X)=1.1; Var(X)=0.49."
        }
      ],
      "focusChecklist": [
        "Build a probability distribution.",
        "Calculate expectation and variance.",
        "Interpret expected value in context."
      ]
    },
    "9709-5.5": {
      "intro": "The normal distribution models a continuous variable with a symmetric bell-shaped curve. Standardisation converts a value into a z-score so normal tables or a calculator can be used.",
      "learn": [
        "If X ~ N(μ,σ²), its mean is μ and standard deviation is σ. Note that the second parameter is variance, not standard deviation.",
        "Standardise with Z = (X−μ)/σ. Translate wording such as 'more than', 'below' and 'between' into the correct tail or area.",
        "For an unknown mean or standard deviation, set up an equation using the known normal probability and the corresponding z-value.",
        "A binomial distribution may be approximated by a normal distribution when np and n(1−p) are sufficiently large (in this syllabus both > 5), with a continuity correction.",
        "Exam habit: write the governing relationship first, substitute values only after the symbols and conditions are clear, and show enough intermediate working for each method mark.",
        "After obtaining a result, check its meaning in the original question: roots must satisfy the equation, probabilities must be between 0 and 1, and physical answers should have sensible signs and units."
      ],
      "formulae": [
        "Z = (X − μ)/σ",
        "For X ~ N(μ, σ²): mean μ, standard deviation σ",
        "Continuity correction for P(X ≥ k): use P(Y > k − 0.5)",
        "For binomial approximation: mean np, variance np(1−p)"
      ],
      "example": {
        "question": "X ~ N(50, 4²). Find P(X < 54).",
        "steps": [
          "Z = (54−50)/4 = 1.",
          "The standard normal cumulative probability below 1 is approximately 0.8413."
        ],
        "answer": "P(X < 54) ≈ 0.8413."
      },
      "watch": [
        "Use σ, not σ², as the divisor when standardising.",
        "A normal curve has total area 1; symmetric intervals have symmetric probabilities.",
        "For a discrete binomial count approximated by a continuous normal variable, apply the continuity correction in the correct direction."
      ],
      "questions": [
        {
          "level": "Warm-up",
          "question": "X ~ N(50, 4²). Find P(X < 54).",
          "answer": "Approximately 0.8413.",
          "steps": [
            "Z = (54−50)/4 = 1; Φ(1) ≈ 0.8413."
          ]
        },
        {
          "level": "Developing",
          "question": "X ~ N(100, 15²). Find P(85 < X < 130).",
          "answer": "Approximately 0.8185.",
          "steps": [
            "Standardise: z₁ = (85−100)/15 = −1; z₂ = (130−100)/15 = 2.",
            "Probability = Φ(2) − Φ(−1) ≈ 0.9772 − 0.1587 = 0.8185."
          ]
        },
        {
          "level": "Challenge",
          "question": "X ~ B(100, 0.3). Use a normal approximation with continuity correction to estimate P(X ≥ 35).",
          "answer": "Approximately 0.163.",
          "steps": [
            "Mean = np = 30; variance = npq = 21, so standard deviation = √21.",
            "P(X ≥ 35) ≈ P(Y > 34.5).",
            "z = (34.5−30)/√21 ≈ 0.982; upper-tail probability ≈ 0.163."
          ]
        }
      ],
      "prerequisite": "",
      "examStrategy": [
        "Standardise with z=(x−μ)/σ.",
        "For a probability interval, sketch or identify the relevant tail area before using the tables/calculator.",
        "Use symmetry around μ for the normal curve.",
        "For inverse normal questions, identify the percentile first and then transform back with x=μ+zσ."
      ],
      "workedExamples": [
        {
          "question": "X ~ N(50, 6²). Find P(X<56).",
          "steps": [
            "z=(56−50)/6=1.",
            "P(X<56)=P(Z<1)."
          ],
          "answer": "Approximately 0.8413."
        }
      ],
      "focusChecklist": [
        "Standardise a value.",
        "Find central and tail probabilities.",
        "Find a percentile from a given probability."
      ]
    },
    "9709-6.1": {
      "intro": "The Poisson distribution models counts of events in a fixed interval when events occur independently at a stable average rate. The parameter λ is the expected count in that interval.",
      "learn": [
        "If X ~ Po(λ), then P(X=r) = e⁻λ λʳ/r! for r = 0,1,2,… .",
        "For a Poisson variable, E(X)=Var(X)=λ.",
        "When a rate changes with interval length, scale λ in direct proportion to time, distance or area.",
        "A Poisson approximation to B(n,p) is suitable for large n and small p (syllabus guide: n > 50 and np < 5 approximately). A normal approximation to Poisson may be considered for large λ, with continuity correction.",
        "Exam habit: write the governing relationship first, substitute values only after the symbols and conditions are clear, and show enough intermediate working for each method mark.",
        "After obtaining a result, check its meaning in the original question: roots must satisfy the equation, probabilities must be between 0 and 1, and physical answers should have sensible signs and units."
      ],
      "formulae": [
        "P(X=r)=e⁻λ λʳ/r!",
        "E(X)=Var(X)=λ",
        "At least one: P(X≥1)=1−e⁻λ",
        "For rate c per unit and interval t: λ=ct"
      ],
      "example": {
        "question": "If X ~ Po(3), find P(X=0).",
        "steps": [
          "P(X=0)=e⁻³ × 3⁰/0! = e⁻³."
        ],
        "answer": "Approximately 0.0498."
      },
      "watch": [
        "Scale λ when the time interval changes; do not scale the probability itself.",
        "For 'at least one', use the complement where convenient.",
        "Do not confuse the Poisson mean λ with a probability p."
      ],
      "questions": [
        {
          "level": "Warm-up",
          "question": "If X ~ Po(3), find P(X=0).",
          "answer": "e⁻³ ≈ 0.0498.",
          "steps": [
            "Substitute r = 0 in the Poisson formula."
          ]
        },
        {
          "level": "Developing",
          "question": "If X ~ Po(4), find P(X ≤ 2).",
          "answer": "13e⁻⁴ ≈ 0.2381.",
          "steps": [
            "Add P(0), P(1), P(2): e⁻⁴(1 + 4 + 4²/2!).",
            "= e⁻⁴(1+4+8)=13e⁻⁴ ≈ 0.2381."
          ]
        },
        {
          "level": "Challenge",
          "question": "Calls arrive at an average of 2.4 per hour. Assuming a Poisson model, find the probability of at least 2 calls in 30 minutes.",
          "answer": "1 − 2.2e⁻¹·² ≈ 0.3378.",
          "steps": [
            "For half an hour, λ = 2.4×0.5 = 1.2.",
            "P(X≥2)=1−P(0)−P(1)=1−e⁻¹·²(1+1.2)."
          ]
        }
      ],
      "prerequisite": "",
      "examStrategy": [
        "Convert the stated rate to the same time/space unit as the random variable.",
        "Use P(X=x)=e⁻λ λˣ/x! for exact values.",
        "For “at least one”, use 1−P(X=0); for “more than r”, subtract the cumulative probability up to r from 1.",
        "For sums of independent Poisson variables, add their means."
      ],
      "workedExamples": [
        {
          "question": "A process has mean 3 events per hour. Find the probability of at least one event in an hour.",
          "steps": [
            "X~Po(3).",
            "P(X≥1)=1−P(X=0)=1−e⁻³."
          ],
          "answer": "1−e⁻³ ≈ 0.9502."
        }
      ],
      "focusChecklist": [
        "Use the Poisson formula.",
        "Calculate tail probabilities efficiently.",
        "Scale the mean for a changed time interval."
      ]
    },
    "9709-6.2": {
      "intro": "Linear combinations let you find the expectation and variance of transformed or combined random variables. Independence is the key condition for adding variances of separate variables.",
      "learn": [
        "E(aX+b)=aE(X)+b and Var(aX+b)=a²Var(X). Adding a constant changes the mean but not the variance.",
        "E(aX+bY)=aE(X)+bE(Y). If X and Y are independent, Var(aX+bY)=a²Var(X)+b²Var(Y).",
        "If independent normal variables are combined linearly, the result is normal. Independent Poisson variables add to another Poisson variable with parameter equal to the sum.",
        "When subtracting independent variables, subtract expectations but still add their variance contributions.",
        "Exam habit: write the governing relationship first, substitute values only after the symbols and conditions are clear, and show enough intermediate working for each method mark.",
        "After obtaining a result, check its meaning in the original question: roots must satisfy the equation, probabilities must be between 0 and 1, and physical answers should have sensible signs and units."
      ],
      "formulae": [
        "E(aX+b)=aE(X)+b",
        "Var(aX+b)=a²Var(X)",
        "If independent: Var(aX+bY)=a²Var(X)+b²Var(Y)",
        "Independent Poisson: X+Y ~ Po(λ₁+λ₂)"
      ],
      "example": {
        "question": "X and Y are independent, with E(X)=5, Var(X)=4, E(Y)=2 and Var(Y)=9. Find E(2X−Y) and Var(2X−Y).",
        "steps": [
          "E(2X−Y)=2×5−2=8.",
          "Var(2X−Y)=4×4+9=25 because X and Y are independent."
        ],
        "answer": "Expectation 8; variance 25."
      },
      "watch": [
        "A coefficient is squared when calculating variance.",
        "Independence is needed for the simple sum-of-variances rule; it is not stated automatically.",
        "Subtracting Y changes the expectation sign but not the positive variance contribution."
      ],
      "questions": [
        {
          "level": "Warm-up",
          "question": "If E(X)=4 and Var(X)=9, find E(3X+2) and Var(3X+2).",
          "answer": "14 and 81.",
          "steps": [
            "E = 3×4+2 = 14.",
            "Var = 3²×9 = 81."
          ]
        },
        {
          "level": "Developing",
          "question": "X and Y are independent with E(X)=5, Var(X)=4, E(Y)=2 and Var(Y)=9. Find the mean and variance of T=2X−Y.",
          "answer": "E(T)=8; Var(T)=25.",
          "steps": [
            "E(T)=2×5−2=8.",
            "Var(T)=2²×4 + (−1)²×9 = 16+9=25."
          ]
        },
        {
          "level": "Challenge",
          "question": "Independent X ~ N(10, 2²) and Y ~ N(4, 1²). Find the distribution of T=2X+3Y.",
          "answer": "T ~ N(32, 25).",
          "steps": [
            "Mean: 2×10 + 3×4 = 32.",
            "Variance: 2²×4 + 3²×1 = 16+9 = 25.",
            "A linear combination of independent normal variables is normal, so T ~ N(32,25)."
          ]
        }
      ],
      "prerequisite": "",
      "examStrategy": [
        "For independent X and Y, expectations add linearly and variances use squared coefficients.",
        "For independent variables, Var(X+Y)=Var(X)+Var(Y) and Var(aX+bY)=a²Var(X)+b²Var(Y).",
        "A negative coefficient changes the mean contribution but is squared in the variance.",
        "Do not add standard deviations directly; add variances, then take the square root."
      ],
      "workedExamples": [
        {
          "question": "Independent X and Y have Var(X)=4 and Var(Y)=9. Find Var(2X−3Y).",
          "steps": [
            "Independence gives Var(2X−3Y)=4Var(X)+9Var(Y).",
            "Substitute 4 and 9."
          ],
          "answer": "Var(2X−3Y)=16+81=97."
        }
      ],
      "focusChecklist": [
        "Find expectations of linear combinations.",
        "Find variances under independence.",
        "Use covariance if dependence is explicitly modelled."
      ]
    },
    "9709-6.3": {
      "intro": "A continuous random variable is described by a probability density function (pdf). Probability is area under the pdf, so the total area across its domain must equal one.",
      "learn": [
        "A valid pdf f(x) is non-negative on its domain and integrates to 1 over that domain.",
        "P(a < X < b)=∫ₐᵇ f(x) dx. For a continuous variable, the probability at a single point is zero.",
        "E(X)=∫x f(x) dx and Var(X)=E(X²)−[E(X)]², with E(X²)=∫x² f(x) dx.",
        "Median and percentiles can be found by choosing a point where the required proportion of total area lies to the left. The syllabus focuses on a pdf defined over a single interval.",
        "Exam habit: write the governing relationship first, substitute values only after the symbols and conditions are clear, and show enough intermediate working for each method mark.",
        "After obtaining a result, check its meaning in the original question: roots must satisfy the equation, probabilities must be between 0 and 1, and physical answers should have sensible signs and units."
      ],
      "formulae": [
        "Total area: ∫ f(x) dx = 1 over the domain",
        "P(a<X<b)=∫ₐᵇ f(x) dx",
        "E(X)=∫x f(x) dx",
        "Var(X)=∫x² f(x) dx − [E(X)]²"
      ],
      "example": {
        "question": "A pdf is f(x)=kx for 0<x<2 and zero elsewhere. Find k.",
        "steps": [
          "A total probability of 1 requires ∫₀² kx dx = 1.",
          "The integral is k[x²/2]₀² = 2k, so 2k=1."
        ],
        "answer": "k = 1/2."
      },
      "watch": [
        "A pdf's height can exceed 1; it is the area, not every height, that represents probability.",
        "Include the correct limits of integration and check the total area equals 1.",
        "Variance is E(X²) minus the square of E(X), not the square of E(X²)."
      ],
      "questions": [
        {
          "level": "Warm-up",
          "question": "A pdf is constant, f(x)=k, for 0<x<4. Find k.",
          "answer": "k = 1/4.",
          "steps": [
            "1 = ∫₀⁴ k dx = 4k, so k = 1/4."
          ]
        },
        {
          "level": "Developing",
          "question": "A pdf is f(x)=kx for 0<x<2. Find k and P(X>1).",
          "answer": "k=1/2; P(X>1)=3/4.",
          "steps": [
            "Normalise: ∫₀² kx dx = 2k = 1, so k=1/2.",
            "P(X>1)=∫₁² x/2 dx = [x²/4]₁² = 1−1/4 = 3/4."
          ]
        },
        {
          "level": "Challenge",
          "question": "A random variable has pdf f(x)=3x²/8 for 0<x<2. Find E(X) and Var(X).",
          "answer": "E(X)=3/2; Var(X)=3/20.",
          "steps": [
            "E(X)=∫₀² x(3x²/8)dx = (3/8)[x⁴/4]₀² = 3/2.",
            "E(X²)=(3/8)∫₀² x⁴dx = (3/8)(32/5)=12/5.",
            "Var(X)=12/5−(3/2)²=12/5−9/4=3/20."
          ]
        }
      ],
      "prerequisite": "",
      "examStrategy": [
        "A probability density function must be non-negative on its support and integrate to 1.",
        "Find an unknown constant by integrating across the full support.",
        "Probabilities are areas under the density curve, i.e. integrals over intervals.",
        "E(X)=∫xf(x)dx and E(X²)=∫x²f(x)dx; Var(X)=E(X²)−[E(X)]²."
      ],
      "workedExamples": [
        {
          "question": "For f(x)=2(1−x), 0<x<1, find P(X<1/2).",
          "steps": [
            "Integrate: P(X<1/2)=∫₀^(1/2)2(1−x)dx.",
            "An antiderivative is 2x−x².",
            "Evaluate at 1/2 and 0."
          ],
          "answer": "P(X<1/2)=3/4."
        }
      ],
      "focusChecklist": [
        "Check a pdf integrates to 1.",
        "Calculate probabilities as areas.",
        "Use E(X) and E(X²) for variance."
      ]
    },
    "9709-6.4": {
      "intro": "Sampling uses a subset to learn about a population. Random selection reduces systematic bias, while sampling distributions quantify how much sample statistics vary from sample to sample.",
      "learn": [
        "A population is the whole group of interest; a sample is the observed subset. A biased sampling process can systematically misrepresent the population.",
        "For sample mean X̄ from a population with mean μ and variance σ², E(X̄)=μ and Var(X̄)=σ²/n, so its standard deviation is σ/√n.",
        "From a sample, the sample mean x̄ is an unbiased estimate of the population mean μ. An unbiased estimate of the population variance uses n − 1 in the denominator: s² = [Σx² − (Σx)²/n]/(n − 1).",
        "If the parent population is normal, the sample mean is normal. For a large sample, the Central Limit Theorem gives an approximate normal distribution for X̄.",
        "A confidence interval for a population mean with known σ is x̄ ± zσ/√n. For a population proportion, use p̂ ± z√(p̂(1−p̂)/n) for a sufficiently large sample.",
        "Exam habit: write the governing relationship first, substitute values only after the symbols and conditions are clear, and show enough intermediate working for each method mark.",
        "After obtaining a result, check its meaning in the original question: roots must satisfy the equation, probabilities must be between 0 and 1, and physical answers should have sensible signs and units."
      ],
      "formulae": [
        "E(X̄)=μ",
        "Var(X̄)=σ²/n; standard error = σ/√n",
        "Mean confidence interval: x̄ ± zσ/√n",
        "Proportion confidence interval: p̂ ± z√(p̂(1−p̂)/n)",
        "Unbiased sample variance: s² = [Σx² − (Σx)²/n]/(n − 1)"
      ],
      "example": {
        "question": "A population standard deviation is 10. For samples of size 25, find the standard deviation of the sample mean.",
        "steps": [
          "SE(X̄) = σ/√n = 10/√25."
        ],
        "answer": "2."
      },
      "watch": [
        "Larger sample sizes reduce standard error by a factor of √n.",
        "Use the population standard deviation σ, not the sample standard deviation, when the question specifies known σ.",
        "A confidence interval estimates a population parameter; it is not a range containing a stated proportion of individual observations.",
        "For the unbiased sample variance, divide the sum of squared deviations by n − 1, not n."
      ],
      "questions": [
        {
          "level": "Warm-up",
          "question": "A population has standard deviation 10. Find the standard error of the sample mean for n=25.",
          "answer": "2.",
          "steps": [
            "SE = 10/√25 = 10/5 = 2."
          ]
        },
        {
          "level": "Developing",
          "question": "A sample of size 100 has mean 50 from a population with known σ=20. Find an approximate 95% confidence interval for the population mean.",
          "answer": "(46.08, 53.92).",
          "steps": [
            "Standard error = 20/√100 = 2.",
            "Use z ≈ 1.96: 50 ± 1.96×2 = 50 ± 3.92."
          ]
        },
        {
          "level": "Challenge",
          "question": "In a random sample of 400 people, 230 support a proposal. Find an approximate 95% confidence interval for the population proportion.",
          "answer": "Approximately (0.527, 0.623).",
          "steps": [
            "p̂ = 230/400 = 0.575.",
            "SE ≈ √(0.575×0.425/400) ≈ 0.02472.",
            "0.575 ± 1.96×0.02472 ≈ 0.575 ± 0.04845."
          ]
        },
        {
          "level": "Extension",
          "question": "A random sample is 2, 4, 5, 7, 12. Find the sample mean and the unbiased estimate of the population variance.",
          "answer": "Sample mean = 6; unbiased variance estimate s² = 14.5.",
          "steps": [
            "The sum is 30, so x̄ = 30/5 = 6.",
            "The squared deviations from 6 are 16, 4, 1, 1 and 36; their sum is 58.",
            "Use the unbiased estimator: s² = 58/(5 − 1) = 14.5."
          ]
        }
      ],
      "prerequisite": "",
      "examStrategy": [
        "State whether the statistic is unbiased and give its expected value where requested.",
        "For a sample mean, the standard error uses σ/√n when the population standard deviation is known.",
        "For a confidence interval, identify the estimate, critical z-value and standard error.",
        "For the unbiased sample variance, divide the sum of squared deviations by n−1."
      ],
      "workedExamples": [
        {
          "question": "A population has σ=12. A random sample of size 36 has mean 40. Find an approximate 95% confidence interval for μ using z=1.96.",
          "steps": [
            "Standard error = 12/√36 = 2.",
            "Margin = 1.96×2 = 3.92.",
            "Interval = 40 ± 3.92."
          ],
          "answer": "(36.08, 43.92)."
        }
      ],
      "focusChecklist": [
        "Calculate standard errors.",
        "Construct and interpret a confidence interval.",
        "Use the unbiased variance formula when required."
      ]
    },
    "9709-6.5": {
      "intro": "A hypothesis test uses sample evidence to decide whether a claim about a population parameter is plausible. The test direction comes from the alternative hypothesis and the context of the question.",
      "learn": [
        "H₀ is the null hypothesis and H₁ is the alternative. Choose one-tailed or two-tailed testing from the wording before finding the critical region or p-value.",
        "At significance level α, reject H₀ if the observed result lies in the rejection region or if the p-value is at most α. Otherwise, do not reject H₀; this does not prove H₀ true.",
        "Tests may use a binomial or Poisson count, or a normal sample mean with known population variance/large sample. Use the correct tail probability.",
        "Type I error: reject a true H₀. Type II error: fail to reject a false H₀. State the conclusion in the context given.",
        "Type I error means rejecting a true H₀; its probability is evaluated under H₀. Type II error means not rejecting H₀ when a specified alternative is true; calculate it using the distribution under that alternative and the acceptance region.",
        "Exam habit: write the governing relationship first, substitute values only after the symbols and conditions are clear, and show enough intermediate working for each method mark.",
        "After obtaining a result, check its meaning in the original question: roots must satisfy the equation, probabilities must be between 0 and 1, and physical answers should have sensible signs and units."
      ],
      "formulae": [
        "One-tailed upper test: P(X ≥ observed | H₀)",
        "Two-tailed tests consider extremeness in both directions",
        "Decision: reject H₀ if p-value ≤ significance level",
        "For known σ, z = (x̄−μ₀)/(σ/√n)",
        "Type I error probability: P(reject H₀ | H₀ true) | Type II error probability: P(not reject H₀ | stated alternative true)"
      ],
      "example": {
        "question": "A fair coin is tossed 8 times. Let X be the number of heads. Under H₀, X ~ B(8,0.5). For the upper-tail result X ≥ 7, find the p-value.",
        "steps": [
          "P(X≥7)=P(X=7)+P(X=8).",
          "= [⁸C₇ + ⁸C₈]/2⁸ = (8+1)/256."
        ],
        "answer": "p-value = 9/256 ≈ 0.0352."
      },
      "watch": [
        "Write H₀ and H₁ before deciding the tail; the phrase 'different' generally signals a two-tailed alternative.",
        "A result that is not significant is insufficient evidence to reject H₀, not proof that H₀ is correct.",
        "Always give the conclusion in context and reference the stated significance level."
      ],
      "questions": [
        {
          "level": "Warm-up",
          "question": "A test uses a 5% significance level and has p-value 0.03. What is the decision?",
          "answer": "Reject H₀.",
          "steps": [
            "Since 0.03 < 0.05, the result is significant at the 5% level."
          ]
        },
        {
          "level": "Developing",
          "question": "Under H₀, X ~ B(8,0.5). An upper-tail test observes X=7. Find the p-value and decision at 5%.",
          "answer": "p-value = 9/256 ≈ 0.0352; reject H₀.",
          "steps": [
            "P(X≥7) = [⁸C₇(0.5)⁷(0.5) + ⁸C₈(0.5)⁸] = 9/256.",
            "Because 0.0352 < 0.05, reject H₀."
          ]
        },
        {
          "level": "Challenge",
          "question": "A machine's output has known standard deviation 15. A sample of 36 items has mean 105. Test H₀: μ=100 against H₁: μ>100 at 5%, using the normal approximation.",
          "answer": "z = 2; p ≈ 0.0228; reject H₀ at 5%.",
          "steps": [
            "Standard error = 15/√36 = 2.5.",
            "z = (105−100)/2.5 = 2.",
            "For an upper-tail test P(Z≥2) ≈ 0.0228 < 0.05, so there is evidence that the population mean exceeds 100."
          ]
        },
        {
          "level": "Extension",
          "question": "A 5% upper-tail test of H₀: μ = 50 against H₁: μ > 50 uses a normal population with known σ = 10 and a sample of n = 25. Find the approximate probability of a Type II error when the true mean is μ = 54. Use z₀.₉₅ = 1.645.",
          "answer": "Critical sample mean ≈ 53.29; Type II error probability ≈ 0.361.",
          "steps": [
            "The standard error is σ/√n = 10/5 = 2.",
            "The upper-tail critical value gives x̄crit = 50 + 1.645(2) = 53.29. The test does not reject H₀ when x̄ ≤ 53.29.",
            "When μ = 54, X̄ ~ N(54, 2²), so β = P(X̄ ≤ 53.29) = Φ((53.29 − 54)/2) = Φ(−0.355) ≈ 0.361."
          ]
        }
      ],
      "prerequisite": "",
      "examStrategy": [
        "State H₀ and H₁ clearly and choose one-tail or two-tail from the wording.",
        "Calculate the observed statistic or p-value under H₀.",
        "Compare the p-value with the significance level, or compare the statistic with a critical region.",
        "Write the conclusion in context; “do not reject H₀” is not proof that H₀ is true."
      ],
      "workedExamples": [
        {
          "question": "A test has p-value 0.018. State the decision at the 5% significance level.",
          "steps": [
            "Compare 0.018 with 0.05.",
            "Since 0.018 < 0.05, the observed result is significant."
          ],
          "answer": "Reject H₀ at the 5% level."
        }
      ],
      "focusChecklist": [
        "Set up hypotheses correctly.",
        "Calculate a one-tail or two-tail probability.",
        "Conclude in context and understand Type I/II errors."
      ]
    },
    "9709-2.1": {
      "intro": "Paper 2 algebra extends the P1 skills into modulus equations and inequalities, polynomial division, and factor/remainder theorems. The most important habit is to translate the wording into an algebraic condition before manipulating it.",
      "learn": [
        "The modulus |A| is the non-negative distance of A from zero. Thus |A| = c has no solution if c < 0, one solution if c = 0, and usually two branches if c > 0.",
        "For |x − a| < b with b > 0, the solution is a − b < x < a + b. For |x − a| > b, the solution lies outside that interval: x < a − b or x > a + b.",
        "For |A| = |B|, solve A = B and A = −B, then combine the valid solutions. For an inequality with a modulus, split into cases or use the interval interpretation carefully.",
        "Polynomial division has the form dividend = divisor × quotient + remainder. If dividing by a linear expression ax + b, the remainder is a constant; it equals P(−b/a).",
        "Factor theorem: (x − a) is a factor of P(x) exactly when P(a) = 0. Remainder theorem: the remainder on division by (x − a) is P(a).",
        "For a factor (ax + b), set x = −b/a when applying the factor or remainder theorem. Do not substitute −b instead unless a = 1."
      ],
      "formulae": [
        "|x − a| < b ⇔ a − b < x < a + b, b > 0",
        "|A| = |B| ⇔ A = B or A = −B",
        "P(x) = (x − a)Q(x) + P(a)",
        "Factor theorem: P(a) = 0 ⇔ (x − a) is a factor"
      ],
      "example": {
        "question": "Solve |2x − 3| ≤ 5.",
        "steps": [
          "Write the double inequality −5 ≤ 2x − 3 ≤ 5.",
          "Add 3 throughout: −2 ≤ 2x ≤ 8.",
          "Divide by 2: −1 ≤ x ≤ 4."
        ],
        "answer": "−1 ≤ x ≤ 4."
      },
      "watch": [
        "When solving |A| = k, reject the problem immediately if k < 0.",
        "A strict inequality does not include its boundary values; ≤ and ≥ do.",
        "For polynomial remainders, substitute the root of the divisor into P(x), not into the quotient.",
        "When dividing by x − a, the substitution is x = a; when dividing by ax + b, it is x = −b/a."
      ],
      "questions": [
        {
          "level": "Warm-up",
          "question": "Solve |3x − 6| = 9.",
          "answer": "x = 5 or x = −1.",
          "steps": [
            "3x − 6 = 9 gives x = 5.",
            "3x − 6 = −9 gives x = −1."
          ]
        },
        {
          "level": "Developing",
          "question": "Divide x³ − 2x² − 5x + 6 by x − 1. Give the quotient and remainder.",
          "answer": "Quotient x² − x − 6; remainder 0.",
          "steps": [
            "Synthetic division by 1 gives coefficients 1, −1, −6, 0.",
            "So x³ − 2x² − 5x + 6 = (x − 1)(x² − x − 6)."
          ]
        },
        {
          "level": "Challenge",
          "question": "Let P(x) = x³ + ax² − 4x + 4. Given that x − 2 is a factor, find a and factorise P(x) completely.",
          "answer": "a = −1; P(x) = (x − 2)(x − 1)(x + 2).",
          "steps": [
            "P(2) = 8 + 4a − 8 + 4 = 4a + 4 = 0, so a = −1.",
            "Then P(x) = x³ − x² − 4x + 4.",
            "Dividing by x − 2 gives x² + x − 2 = (x − 1)(x + 2)."
          ]
        },
        {
          "level": "Extension",
          "question": "Solve |2x − 1| < 5.",
          "answer": "−2 < x < 3.",
          "steps": [
            "Write −5 < 2x − 1 < 5.",
            "Add 1: −4 < 2x < 6.",
            "Divide by 2: −2 < x < 3."
          ]
        }
      ],
      "prerequisite": "P1 algebra is assumed. This topic adds modulus and polynomial techniques rather than replacing the quadratic skills from P1.",
      "examStrategy": [
        "Identify the expression inside the modulus and decide whether the question is an equation or inequality.",
        "For polynomial work, write the dividend/divisor relationship or define P(x) explicitly.",
        "Use substitutions from the factor/remainder theorem to find unknown constants before factorising.",
        "Check each candidate in the original equation and preserve strict versus inclusive inequality boundaries."
      ],
      "workedExamples": [
        {
          "question": "Find the remainder when P(x) = 2x³ − x² + 4x − 7 is divided by 2x + 1.",
          "steps": [
            "The zero of 2x + 1 is x = −1/2.",
            "The remainder is P(−1/2) = 2(−1/8) − 1/4 + 4(−1/2) − 7 = −1/4 − 1/4 − 2 − 7."
          ],
          "answer": "Remainder = −9.5 (−19/2)."
        }
      ],
      "focusChecklist": [
        "Solve a modulus equation by splitting into two signed equations.",
        "Use the factor/remainder theorem for divisors of the form ax + b.",
        "Perform polynomial division and identify quotient and remainder."
      ]
    },
    "9709-2.2": {
      "intro": "Exponential and logarithmic functions are inverse ideas: logarithms answer the question “what power?”. Their laws simplify products, quotients and powers, while natural logarithms let you solve equations where the unknown is in an exponent.",
      "learn": [
        "For a > 0 and a ≠ 1, logₐ x = y means aʸ = x. For natural logarithms, ln x is the logarithm to base e and is defined only when x > 0.",
        "Use ln(ab) = ln a + ln b, ln(a/b) = ln a − ln b and ln(aʳ) = r ln a. These laws require the logarithm arguments to be positive.",
        "The graphs y = eˣ and y = ln x are reflections in y = x. The exponential is always positive; the logarithm has domain x > 0 and range all real numbers.",
        "To solve aˣ = c, take logarithms: x = ln c / ln a, with c > 0. To solve equations involving eˣ and e²ˣ, substitute u = eˣ and remember u > 0.",
        "For y = kxⁿ, take logs to obtain ln y = ln k + n ln x. A plot of ln y against ln x is a straight line with gradient n and intercept ln k.",
        "For y = kaˣ, ln y = ln k + x ln a. A plot of ln y against x has gradient ln a and intercept ln k."
      ],
      "formulae": [
        "ln(ab) = ln a + ln b",
        "ln(a/b) = ln a − ln b",
        "ln(aⁿ) = n ln a",
        "aˣ = c ⇒ x = ln c / ln a",
        "y = kxⁿ ⇒ ln y = ln k + n ln x",
        "y = kaˣ ⇒ ln y = ln k + x ln a"
      ],
      "example": {
        "question": "Solve 3^(2x − 1) = 7.",
        "steps": [
          "Take natural logarithms: (2x − 1)ln 3 = ln 7.",
          "Rearrange: 2x − 1 = ln 7 / ln 3.",
          "Therefore x = (1 + ln 7 / ln 3)/2."
        ],
        "answer": "x = (1 + ln 7 / ln 3)/2 ≈ 1.386."
      },
      "watch": [
        "Check that every logarithm argument is positive before taking or combining logs.",
        "Do not write ln(a + b) = ln a + ln b; there is no such law.",
        "When substituting u = eˣ, use u > 0 and discard non-positive roots.",
        "Keep exact logarithmic answers until the final numerical approximation."
      ],
      "questions": [
        {
          "level": "Warm-up",
          "question": "Solve ln(x − 2) = 0.",
          "answer": "x = 3.",
          "steps": [
            "Exponentiate: x − 2 = e⁰ = 1.",
            "Hence x = 3, which satisfies x > 2."
          ]
        },
        {
          "level": "Developing",
          "question": "Solve 5^(2x − 1) = 7, giving an exact answer.",
          "answer": "x = (1 + ln 7 / ln 5)/2.",
          "steps": [
            "Take logs: (2x − 1)ln 5 = ln 7.",
            "Rearrange to obtain x = (1 + ln 7/ln 5)/2."
          ]
        },
        {
          "level": "Challenge",
          "question": "Solve e^(2x) − 5eˣ + 6 = 0.",
          "answer": "x = ln 2 or x = ln 3.",
          "steps": [
            "Set u = eˣ, so u² − 5u + 6 = 0.",
            "Factor: (u − 2)(u − 3) = 0.",
            "Both u = 2 and u = 3 are positive, giving x = ln 2 or x = ln 3."
          ]
        },
        {
          "level": "Extension",
          "question": "A model has the form y = kaˣ and passes through (0, 5) and (2, 45), with k > 0 and a > 0. Find k and a.",
          "answer": "k = 5 and a = 3.",
          "steps": [
            "At x = 0, y = k = 5.",
            "At x = 2, 45 = 5a², so a² = 9.",
            "Since a > 0, a = 3."
          ]
        }
      ],
      "prerequisite": "P1 function notation and exponent laws are assumed. Logarithm arguments must remain within their mathematical domains.",
      "examStrategy": [
        "First isolate the exponential/logarithmic expression.",
        "Choose whether to equate bases, apply a logarithm, or substitute u = eˣ.",
        "State any domain restrictions before accepting roots.",
        "For linearisation, write down which plotted axes are used, then interpret the gradient and intercept."
      ],
      "workedExamples": [
        {
          "question": "For y = kxⁿ, the line ln y = 2 ln x + ln 7 is obtained. Find k and n.",
          "steps": [
            "Compare ln y = ln k + n ln x with ln y = 2 ln x + ln 7.",
            "The gradient coefficient gives n = 2.",
            "The intercept gives ln k = ln 7."
          ],
          "answer": "k = 7 and n = 2."
        }
      ],
      "focusChecklist": [
        "Solve an equation with an unknown in the exponent.",
        "Solve a quadratic in eˣ while respecting positivity.",
        "Interpret gradient/intercept after taking logarithms."
      ]
    },
    "9709-2.3": {
      "intro": "P2 trigonometry moves beyond basic sine, cosine and tangent equations. It uses all six trigonometric functions, compound-angle and double-angle identities, and rewriting a sin x + b cos x as one shifted sinusoidal curve.",
      "learn": [
        "The reciprocal functions are sec x = 1/cos x, cosec x = 1/sin x and cot x = 1/tan x = cos x/sin x. They are undefined where their denominators are zero.",
        "Useful identities are sec²x = 1 + tan²x and cosec²x = 1 + cot²x, alongside sin²x + cos²x = 1.",
        "Compound-angle formulas: sin(A ± B) = sin A cos B ± cos A sin B; cos(A ± B) = cos A cos B ∓ sin A sin B; tan(A ± B) = (tan A ± tan B)/(1 ∓ tan A tan B).",
        "Double-angle formulas include sin 2A = 2sin A cos A, cos 2A = cos²A − sin²A = 1 − 2sin²A = 2cos²A − 1, and tan 2A = 2tan A/(1 − tan²A).",
        "For a sin x + b cos x = R sin(x + α), choose R = √(a² + b²), R cos α = a and R sin α = b. Check the quadrant of α from the signs of a and b.",
        "Use identities strategically: simplify one side, convert to a common function, or use a double-angle form to turn a trigonometric equation into a quadratic."
      ],
      "formulae": [
        "sec²x = 1 + tan²x",
        "cosec²x = 1 + cot²x",
        "sin 2x = 2sin x cos x",
        "cos 2x = 1 − 2sin²x = 2cos²x − 1",
        "a sin x + b cos x = R sin(x + α), R = √(a² + b²)"
      ],
      "example": {
        "question": "Given that θ is acute and sin θ = 3/5, find sin 2θ and cos 2θ.",
        "steps": [
          "Since θ is acute, cos θ = 4/5.",
          "sin 2θ = 2sin θ cos θ = 2(3/5)(4/5) = 24/25.",
          "cos 2θ = cos²θ − sin²θ = 16/25 − 9/25 = 7/25."
        ],
        "answer": "sin 2θ = 24/25; cos 2θ = 7/25."
      },
      "watch": [
        "Be careful with the sign in cos(A ± B): the sign between the cosine products is opposite.",
        "When using a double-angle identity, choose the version that matches the function already present.",
        "For R sin(x + α), match the coefficients after expansion rather than guessing α.",
        "Check reciprocal-function domains and reject invalid divisions by zero."
      ],
      "questions": [
        {
          "level": "Warm-up",
          "question": "Simplify sec²x − tan²x.",
          "answer": "1.",
          "steps": [
            "Use sec²x = 1 + tan²x.",
            "Subtract tan²x to leave 1."
          ]
        },
        {
          "level": "Developing",
          "question": "Given sin θ = 3/5 and θ acute, find cos 2θ.",
          "answer": "7/25.",
          "steps": [
            "Since θ is acute, cos θ = 4/5.",
            "cos 2θ = cos²θ − sin²θ = 16/25 − 9/25 = 7/25."
          ]
        },
        {
          "level": "Challenge",
          "question": "Solve 2sin²x − 3cos x = 0 for 0° ≤ x ≤ 360°.",
          "answer": "x = 60° or 300°.",
          "steps": [
            "Use sin²x = 1 − cos²x: 2(1 − cos²x) − 3cos x = 0.",
            "Rearrange to 2cos²x + 3cos x − 2 = 0 = (2cos x − 1)(cos x + 2).",
            "cos x = −2 is impossible, so cos x = 1/2 and x = 60°, 300°."
          ]
        },
        {
          "level": "Extension",
          "question": "Write 3sin x + 4cos x as R sin(x + α), where R > 0 and α is acute. Find R and α to 1 decimal place.",
          "answer": "R = 5; α ≈ 53.1°.",
          "steps": [
            "Expand R sin(x + α) = R sin x cos α + R cos x sin α.",
            "Match coefficients: R cos α = 3 and R sin α = 4.",
            "R = √(3² + 4²) = 5 and tan α = 4/3, so α ≈ 53.1°."
          ]
        }
      ],
      "prerequisite": "P1 exact trig values and basic identities are assumed. Use degrees or radians exactly as specified by the question.",
      "examStrategy": [
        "Record the identity you use before rearranging.",
        "Convert to a single trigonometric function where possible.",
        "Solve for the full angle first; then list every value in the stated interval.",
        "Substitute candidate angles into the original equation if the algebra introduced extra possibilities."
      ],
      "workedExamples": [
        {
          "question": "Expand cos(x − 30°) exactly.",
          "steps": [
            "Use cos(A − B) = cos A cos B + sin A sin B.",
            "cos(x − 30°) = cos x(√3/2) + sin x(1/2)."
          ],
          "answer": "cos(x − 30°) = (√3/2)cos x + (1/2)sin x."
        }
      ],
      "focusChecklist": [
        "Recall the three compound-angle identities.",
        "Use a double-angle identity to create a quadratic.",
        "Convert a sine/cosine combination into one shifted sinusoid."
      ]
    },
    "9709-2.4": {
      "intro": "P2 differentiation introduces derivatives of exponential, logarithmic and trigonometric functions and requires product, quotient and chain rules. It also includes first derivatives of parametric and implicit relations.",
      "learn": [
        "Remember d(eˣ)/dx = eˣ, d(ln x)/dx = 1/x, d(sin x)/dx = cos x, d(cos x)/dx = −sin x and d(tan x)/dx = sec²x. Trigonometric derivatives assume angles in radians.",
        "Product rule: d(uv)/dx = u(dv/dx) + v(du/dx). Choose u and v clearly before differentiating.",
        "Quotient rule: d(u/v)/dx = [v(du/dx) − u(dv/dx)]/v². The denominator is squared and the order in the numerator matters.",
        "For parametric equations x = f(t), y = g(t), dy/dx = (dy/dt)/(dx/dt), provided dx/dt ≠ 0.",
        "For implicit differentiation, differentiate both sides with respect to x and apply the chain rule to every term containing y. For example, d(y²)/dx = 2y(dy/dx).",
        "Once dy/dx is found, substitute the point to get a tangent gradient; for a normal use the negative reciprocal when the tangent gradient is non-zero."
      ],
      "formulae": [
        "d(eˣ)/dx = eˣ",
        "d(ln x)/dx = 1/x",
        "d(sin x)/dx = cos x",
        "d(cos x)/dx = −sin x",
        "d(tan x)/dx = sec²x",
        "(uv)′ = u′v + uv′",
        "(u/v)′ = (u′v − uv′)/v²",
        "dy/dx = (dy/dt)/(dx/dt)"
      ],
      "example": {
        "question": "Differentiate y = x² ln x.",
        "steps": [
          "Use the product rule with u = x² and v = ln x.",
          "u′ = 2x and v′ = 1/x.",
          "dy/dx = 2x ln x + x²(1/x)."
        ],
        "answer": "dy/dx = 2x ln x + x."
      },
      "watch": [
        "The derivative of ln x is 1/x, not ln(1/x).",
        "For a quotient, keep the order u′v − uv′.",
        "Differentiate y with respect to x implicitly; do not treat y as a constant.",
        "For parametric differentiation, divide dy/dt by dx/dt, not the reverse."
      ],
      "questions": [
        {
          "level": "Warm-up",
          "question": "Differentiate y = x² ln x.",
          "answer": "dy/dx = 2x ln x + x.",
          "steps": [
            "Apply the product rule: (x²)′ln x + x²(ln x)′.",
            "This gives 2x ln x + x."
          ]
        },
        {
          "level": "Developing",
          "question": "Differentiate y = (2x + 1)/(x − 1).",
          "answer": "dy/dx = −3/(x − 1)².",
          "steps": [
            "Use the quotient rule: [2(x − 1) − (2x + 1)]/(x − 1)².",
            "The numerator simplifies to −3."
          ]
        },
        {
          "level": "Challenge",
          "question": "For x² + y² = xy + 7, find dy/dx in terms of x and y.",
          "answer": "dy/dx = (y − 2x)/(2y − x), where 2y − x ≠ 0.",
          "steps": [
            "Differentiate: 2x + 2y(dy/dx) = y + x(dy/dx).",
            "Collect derivative terms: (2y − x)(dy/dx) = y − 2x.",
            "Divide by 2y − x."
          ]
        },
        {
          "level": "Extension",
          "question": "Given x = t² + 1 and y = t³ − 3t, find dy/dx when t = 2.",
          "answer": "dy/dx = 9/4.",
          "steps": [
            "dx/dt = 2t, so dx/dt = 4 at t = 2.",
            "dy/dt = 3t² − 3, so dy/dt = 9 at t = 2.",
            "dy/dx = (dy/dt)/(dx/dt) = 9/4."
          ]
        }
      ],
      "prerequisite": "P1 power-rule differentiation is assumed. Product/quotient rules and parametric/implicit differentiation are the main additions.",
      "examStrategy": [
        "Choose the correct rule before substituting values.",
        "Write each derivative in an unsimplified form first so the method is visible.",
        "For an implicit relation, gather all dy/dx terms on one side.",
        "For a tangent or normal, calculate the point and gradient separately."
      ],
      "workedExamples": [
        {
          "question": "Differentiate y = eˣ sin x.",
          "steps": [
            "Apply the product rule: (eˣ)sin x + eˣ(cos x).",
            "Factor out eˣ."
          ],
          "answer": "dy/dx = eˣ(sin x + cos x)."
        }
      ],
      "focusChecklist": [
        "Apply product and quotient rules.",
        "Differentiate an implicitly defined curve.",
        "Use parametric equations to find a tangent gradient."
      ]
    },
    "9709-2.5": {
      "intro": "P2 integration extends reverse differentiation to exponentials, reciprocal linear functions and trigonometric functions. It also uses trigonometric identities and the trapezium rule for numerical estimates.",
      "learn": [
        "Reverse the chain rule for linear inner expressions: ∫e^(ax+b) dx = e^(ax+b)/a + C, and ∫1/(ax+b) dx = (1/a)ln|ax+b| + C for a ≠ 0.",
        "Trigonometric integrals: ∫sin(ax+b) dx = −cos(ax+b)/a + C; ∫cos(ax+b) dx = sin(ax+b)/a + C; ∫sec²(ax+b) dx = tan(ax+b)/a + C.",
        "For sin²x or cos²x, use cos 2x = 1 − 2sin²x or cos 2x = 2cos²x − 1 before integrating.",
        "Trapezium rule with n equal strips has width h = (b − a)/n. If ordinates are y₀,…,yₙ, the estimate is h/2 × [y₀ + yₙ + 2(y₁ + … + yₙ₋₁)].",
        "A convex curve (curving upwards) tends to make the trapezium rule overestimate the area beneath it; a concave curve tends to make it underestimate. Read the graph/context carefully.",
        "For definite integrals, substitute limits only after finding the antiderivative. Include units if the integral represents an area or another quantity."
      ],
      "formulae": [
        "∫e^(ax+b) dx = e^(ax+b)/a + C",
        "∫1/(ax+b) dx = (1/a)ln|ax+b| + C",
        "∫sin(ax+b) dx = −cos(ax+b)/a + C",
        "∫cos(ax+b) dx = sin(ax+b)/a + C",
        "∫sec²(ax+b) dx = tan(ax+b)/a + C",
        "Trapezium rule: h/2[y₀ + yₙ + 2Σ(interior ordinates)]"
      ],
      "example": {
        "question": "Evaluate ∫sin²x dx.",
        "steps": [
          "Use sin²x = (1 − cos 2x)/2.",
          "Integrate term by term: ∫(1/2)dx − ∫(cos 2x)/2 dx.",
          "The second integral is sin 2x/4."
        ],
        "answer": "∫sin²x dx = x/2 − sin 2x/4 + C."
      },
      "watch": [
        "For a linear inner expression, divide by its coefficient after integrating.",
        "The logarithmic integral requires absolute value bars: ln|ax+b|.",
        "For the trapezium rule, double only the interior ordinates, not the first and last.",
        "Make sure you use the correct strip width and the requested number of decimal places."
      ],
      "questions": [
        {
          "level": "Warm-up",
          "question": "Evaluate ∫sin(2x + 1) dx.",
          "answer": "−½ cos(2x + 1) + C.",
          "steps": [
            "The derivative of 2x + 1 is 2.",
            "Divide the antiderivative of sine by 2: −cos(2x + 1)/2 + C."
          ]
        },
        {
          "level": "Developing",
          "question": "Use the trapezium rule with 4 equal strips to estimate ∫₀⁴ x² dx.",
          "answer": "22.",
          "steps": [
            "The width is h = 1 and the ordinates are 0, 1, 4, 9, 16.",
            "Estimate = 1/2[0 + 16 + 2(1 + 4 + 9)] = 22.",
            "Since x² is convex on this interval, the trapezia overestimate the exact area."
          ]
        },
        {
          "level": "Challenge",
          "question": "Evaluate ∫sin²x dx.",
          "answer": "x/2 − sin 2x/4 + C.",
          "steps": [
            "Use sin²x = (1 − cos 2x)/2.",
            "Integrate: x/2 − (1/2)(sin 2x/2) + C."
          ]
        },
        {
          "level": "Extension",
          "question": "Evaluate ∫₀¹ 1/(2x + 1) dx exactly.",
          "answer": "½ ln 3.",
          "steps": [
            "An antiderivative is ½ ln|2x + 1|.",
            "Evaluate: ½ln 3 − ½ln 1 = ½ln 3."
          ]
        }
      ],
      "prerequisite": "P1 integration is assumed. P2 adds exponential/trigonometric integrals and the trapezium rule; general integration by substitution is not required for this topic.",
      "examStrategy": [
        "Identify the integrand family before integrating.",
        "Check the derivative of the inner bracket and account for its coefficient.",
        "For trig powers, use an identity to reduce the power first.",
        "For the trapezium rule, list ordinates in order and show h."
      ],
      "workedExamples": [
        {
          "question": "Evaluate ∫sec²(3x − 2) dx.",
          "steps": [
            "The derivative of 3x − 2 is 3.",
            "Since d(tan(3x − 2))/dx = 3sec²(3x − 2), divide by 3."
          ],
          "answer": "⅓ tan(3x − 2) + C."
        }
      ],
      "focusChecklist": [
        "Integrate functions with a linear inner expression.",
        "Use a double-angle identity before integrating a squared trigonometric function.",
        "Apply the trapezium rule with equal strips."
      ]
    },
    "9709-2.6": {
      "intro": "Numerical solution finds an approximate root when an exact algebraic answer is awkward. P2 focuses on graph/sign-change bracketing and using a supplied iteration formula to refine approximations.",
      "learn": [
        "For f(x) = 0, if f(a) and f(b) have opposite signs and f is continuous on [a,b], at least one root lies between a and b.",
        "A graph can estimate where a root occurs. A sign table refines the interval by testing values on either side of the crossing.",
        "An iteration xₙ₊₁ = F(xₙ) starts from an initial estimate x₀ and repeatedly substitutes the latest value. Keep sufficient calculator precision between iterations.",
        "The sequence converges when successive values approach a stable root. Some rearrangements do not converge, so follow the given formula rather than assuming every iteration works.",
        "If the question asks for a specified degree of accuracy, carry enough intermediate digits and round only at the end. Check whether the requested answer is to a given number of decimal places or significant figures."
      ],
      "formulae": [
        "Root bracket: f(a)f(b) < 0 is a sign change",
        "Iteration: xₙ₊₁ = F(xₙ)",
        "For a root of x² = c, one useful iteration is xₙ₊₁ = ½(xₙ + c/xₙ)"
      ],
      "example": {
        "question": "Show that a root of x³ − 2x − 2 = 0 lies between 1 and 2.",
        "steps": [
          "Let f(x) = x³ − 2x − 2.",
          "f(1) = 1 − 2 − 2 = −3.",
          "f(2) = 8 − 4 − 2 = 2. The sign changes between 1 and 2."
        ],
        "answer": "A root lies in (1, 2)."
      },
      "watch": [
        "A root is bracketed by opposite signs, not merely by two non-zero function values.",
        "Substitute into the iteration formula carefully; xₙ₊₁ uses xₙ, not xₙ₊₁ itself.",
        "Do not round every intermediate result to the final accuracy; that can alter later iterates.",
        "An iteration may oscillate or diverge if the rearrangement is unsuitable."
      ],
      "questions": [
        {
          "level": "Warm-up",
          "question": "For f(x) = x³ − 2x − 2, show a root lies between 1 and 2.",
          "answer": "A root lies between 1 and 2.",
          "steps": [
            "f(1) = −3 and f(2) = 2.",
            "The signs are opposite, so the continuous function crosses zero within the interval."
          ]
        },
        {
          "level": "Developing",
          "question": "Use xₙ₊₁ = ½(xₙ + 2/xₙ), starting with x₀ = 1.5, to find x₃ to 4 decimal places.",
          "answer": "x₃ ≈ 1.4142.",
          "steps": [
            "x₁ = ½(1.5 + 2/1.5) = 1.4166667…",
            "x₂ ≈ ½(1.4166667 + 2/1.4166667) ≈ 1.4142157.",
            "x₃ ≈ 1.4142136, which rounds to 1.4142."
          ]
        },
        {
          "level": "Challenge",
          "question": "For f(x) = ln x + x − 2, calculate f(1) and f(2), and hence give an interval of width 1 containing a root.",
          "answer": "The root lies between 1 and 2.",
          "steps": [
            "f(1) = 0 + 1 − 2 = −1.",
            "f(2) = ln 2 + 2 − 2 = ln 2 > 0.",
            "There is a sign change on (1, 2)."
          ]
        },
        {
          "level": "Extension",
          "question": "An iteration is defined by xₙ₊₁ = ½(xₙ + 3/xₙ), with x₀ = 1.5. Calculate x₁ and x₂ to 4 decimal places.",
          "answer": "x₁ = 1.7500; x₂ ≈ 1.7321.",
          "steps": [
            "x₁ = ½(1.5 + 3/1.5) = ½(3.5) = 1.75.",
            "x₂ = ½(1.75 + 3/1.75) ≈ 1.732142857.",
            "To 4 decimal places, x₂ = 1.7321."
          ]
        }
      ],
      "prerequisite": "P1 algebra and calculator skills are assumed. Numerical answers should include the requested interval or accuracy statement.",
      "examStrategy": [
        "Define f(x) by moving all terms to one side.",
        "Evaluate the function at trial endpoints and display the signs.",
        "Use the exact iteration supplied and keep full precision until rounding.",
        "State the final bracket or approximation in the requested format."
      ],
      "workedExamples": [
        {
          "question": "Use xₙ₊₁ = 2 − ln xₙ with x₀ = 1.5 to calculate x₁ to 4 decimal places.",
          "steps": [
            "Substitute x₀ = 1.5: x₁ = 2 − ln(1.5).",
            "Use ln(1.5) ≈ 0.405465."
          ],
          "answer": "x₁ ≈ 1.5945."
        }
      ],
      "focusChecklist": [
        "Bracket a root using a sign change.",
        "Carry out at least three iterations without premature rounding.",
        "Report the requested precision explicitly."
      ]
    },
    "9709-3.1": {
      "intro": "P3 algebra combines modulus and polynomial methods from P2 with partial fractions and binomial expansions for rational powers. In longer questions, choose the representation that makes later algebra or integration easiest.",
      "learn": [
        "Use modulus properties and inequalities as in P2. For polynomial expressions, division gives P(x) = D(x)Q(x) + R(x), where the remainder degree is lower than the divisor degree.",
        "The factor theorem and remainder theorem help find unknown coefficients: a factor (ax+b) means P(−b/a)=0, while the remainder on division by (ax+b) is P(−b/a).",
        "Partial fractions are used when the numerator degree is less than the denominator degree. For distinct linear factors use A/(ax+b) + B/(cx+d) + …; for a repeated linear factor include each required power, e.g. A/(x−a) + B/(x−a)².",
        "For a linear factor multiplied by an irreducible quadratic, use A/(ax+b) + (Cx+D)/(x²+px+q). Match coefficients or substitute convenient values to find constants.",
        "For rational n, the binomial expansion begins (1+x)ⁿ = 1 + nx + n(n−1)x²/2 + n(n−1)(n−2)x³/6 + … and is valid for |x| < 1.",
        "For an expansion such as (1−2x)^−1/2, replace x in the standard formula by −2x and impose |−2x| < 1, so |x| < 1/2."
      ],
      "formulae": [
        "Remainder on division by x − a: P(a)",
        "Distinct linear factors: A/(x−a) + B/(x−b)",
        "Repeated linear factor: A/(x−a) + B/(x−a)²",
        "(1+x)ⁿ = 1 + nx + n(n−1)x²/2 + …",
        "Rational binomial expansion requires |x| < 1"
      ],
      "example": {
        "question": "Express (3x + 5)/((x + 1)(x + 2)) in partial fractions.",
        "steps": [
          "Write (3x + 5)/((x + 1)(x + 2)) = A/(x + 1) + B/(x + 2).",
          "Then 3x + 5 = A(x + 2) + B(x + 1).",
          "Comparing coefficients gives A + B = 3 and 2A + B = 5, so A = 2 and B = 1."
        ],
        "answer": "2/(x + 1) + 1/(x + 2)."
      },
      "watch": [
        "Do not attempt ordinary partial fractions when the numerator degree is greater than or equal to the denominator degree without first dividing.",
        "A repeated linear factor needs terms for each power up to its multiplicity.",
        "For the factor ax+b, substitute x = −b/a.",
        "For binomial expansions, apply the convergence restriction to the entire substituted expression, not just the original x."
      ],
      "questions": [
        {
          "level": "Warm-up",
          "question": "Solve |x − 2| = 3.",
          "answer": "x = −1 or x = 5.",
          "steps": [
            "x − 2 = 3 gives x = 5.",
            "x − 2 = −3 gives x = −1."
          ]
        },
        {
          "level": "Developing",
          "question": "Express (3x + 5)/((x + 1)(x + 2)) in partial fractions.",
          "answer": "2/(x + 1) + 1/(x + 2).",
          "steps": [
            "Set the numerator equal to A(x + 2) + B(x + 1).",
            "A + B = 3 and 2A + B = 5, so A = 2 and B = 1."
          ]
        },
        {
          "level": "Challenge",
          "question": "Expand (1 + 2x)^(-1/2) up to and including the x² term. State the interval of validity.",
          "answer": "1 − x + 3x²/2; valid for −1/2 < x < 1/2.",
          "steps": [
            "Use n = −1/2 and u = 2x in 1 + nu + n(n−1)u²/2 + …",
            "The first terms are 1 − x + 3x²/2.",
            "The condition |2x| < 1 gives −1/2 < x < 1/2."
          ]
        },
        {
          "level": "Extension",
          "question": "Find the remainder when P(x) = x³ − 3x² + 2x + 8 is divided by x + 1.",
          "answer": "Remainder = 2.",
          "steps": [
            "By the remainder theorem, evaluate P(−1).",
            "P(−1) = −1 − 3 − 2 + 8 = 2."
          ]
        }
      ],
      "prerequisite": "P1 and P2 algebra are assumed. This topic adds rational partial fractions and binomial expansions for non-integer powers.",
      "examStrategy": [
        "Check numerator and denominator degrees before selecting partial fractions.",
        "Choose convenient x-values when finding constants, then compare coefficients if needed.",
        "Use the standard binomial expansion and stop at the requested power.",
        "State the range of x for which the expansion is valid."
      ],
      "workedExamples": [
        {
          "question": "Find A and B if 1/((x − 1)(x + 2)) = A/(x − 1) + B/(x + 2).",
          "steps": [
            "Multiply by (x − 1)(x + 2): 1 = A(x + 2) + B(x − 1).",
            "Put x = 1: 1 = 3A, so A = 1/3.",
            "Put x = −2: 1 = −3B, so B = −1/3."
          ],
          "answer": "A = 1/3 and B = −1/3."
        }
      ],
      "focusChecklist": [
        "Apply the factor/remainder theorem to a non-monic linear divisor.",
        "Set up and solve a partial-fraction decomposition.",
        "Expand a rational power and state its validity interval."
      ]
    },
    "9709-3.2": {
      "intro": "P3 logarithmic and exponential functions extend P2 techniques into more involved algebraic models and equations. The same domain discipline matters: logarithms require positive arguments and eˣ is always positive.",
      "learn": [
        "Use the laws ln(ab)=ln a+ln b, ln(a/b)=ln a−ln b and ln(aⁿ)=n ln a where the arguments permit them.",
        "ln x and eˣ are inverse functions: ln(eˣ)=x and e^(ln x)=x for x>0. The graph of e^(kx) increases for k>0 and decreases for k<0.",
        "For exponential equations, equate powers when the bases can be made the same; otherwise take logarithms. A substitution u=eˣ often converts an equation into a polynomial in u.",
        "For y=kxⁿ, a log-log plot has gradient n. For y=kaˣ, a plot of ln y against x has gradient ln a. Check whether the data and model make the logarithms defined.",
        "Keep exact expressions such as ln 2 and ln 3 until a decimal value is requested. If a substitution creates candidates, translate every candidate back to x and check validity."
      ],
      "formulae": [
        "ln(ab)=ln a+ln b",
        "ln(a/b)=ln a−ln b",
        "ln(aⁿ)=n ln a",
        "y=kxⁿ ⇒ ln y = ln k + n ln x",
        "y=kaˣ ⇒ ln y = ln k + x ln a"
      ],
      "example": {
        "question": "Solve 2^(x+1) = 16.",
        "steps": [
          "Write 16 = 2⁴.",
          "Equate exponents: x + 1 = 4."
        ],
        "answer": "x = 3."
      },
      "watch": [
        "Do not take logarithms of a non-positive expression.",
        "When a quadratic in eˣ is formed, only positive values of eˣ are allowed.",
        "For y = kaˣ, the gradient of ln y against x is ln a, not a.",
        "When using a log-log graph, explain that the gradient corresponds to the power n."
      ],
      "questions": [
        {
          "level": "Warm-up",
          "question": "Solve 2^(x+1) = 16.",
          "answer": "x = 3.",
          "steps": [
            "Write 16 = 2⁴.",
            "Then x + 1 = 4."
          ]
        },
        {
          "level": "Developing",
          "question": "Solve e^(2x) − 5eˣ + 6 = 0.",
          "answer": "x = ln 2 or x = ln 3.",
          "steps": [
            "Let u = eˣ > 0.",
            "u² − 5u + 6 = 0 gives u = 2 or 3.",
            "Therefore x = ln 2 or ln 3."
          ]
        },
        {
          "level": "Challenge",
          "question": "A relationship y = kxⁿ is linearised to ln y = 3 ln x + ln 4. Find k and n.",
          "answer": "k = 4, n = 3.",
          "steps": [
            "Compare with ln y = ln k + n ln x.",
            "n is the coefficient of ln x, so n = 3.",
            "ln k = ln 4, so k = 4."
          ]
        },
        {
          "level": "Extension",
          "question": "A model y = kaˣ passes through (1, 6) and (3, 54), with k,a > 0. Find k and a.",
          "answer": "k = 2, a = 3.",
          "steps": [
            "Divide the equations: 54/6 = a^(3−1), so a² = 9.",
            "Since a > 0, a = 3.",
            "Then 6 = 3k, so k = 2."
          ]
        }
      ],
      "prerequisite": "P1 and P2 logarithmic laws and exponent rules are assumed.",
      "examStrategy": [
        "Simplify the equation before taking logs when possible.",
        "If eˣ is substituted, explicitly note u > 0.",
        "Translate between a linearised plot and the original model.",
        "Check the original equation after solving."
      ],
      "workedExamples": [
        {
          "question": "Solve 4eˣ = 7 exactly.",
          "steps": [
            "Divide by 4: eˣ = 7/4.",
            "Take natural logarithms."
          ],
          "answer": "x = ln(7/4)."
        }
      ],
      "focusChecklist": [
        "Solve exponential equations exactly.",
        "Interpret a log-linear or log-log relationship.",
        "Check domain restrictions before accepting a logarithm."
      ]
    },
    "9709-3.3": {
      "intro": "P3 trigonometry develops the P2 identities into more demanding exact simplifications and equations. A good solution is built around choosing an identity that reduces the number of different trigonometric functions.",
      "learn": [
        "Reciprocal functions: sec x=1/cos x, cosec x=1/sin x and cot x=cos x/sin x. They have vertical asymptotes where the denominator is zero.",
        "Use compound-angle identities to expand or combine shifted sine and cosine expressions. Check the signs carefully, particularly in cos(A±B).",
        "Double-angle identities can be written in several equivalent forms; select the one that matches the expression you are trying to simplify.",
        "For a sin x + b cos x, write R sin(x+α) or R cos(x−α), matching coefficients after expansion. R=√(a²+b²); angle α must be placed in the correct quadrant.",
        "For trigonometric equations, factor or reduce to a quadratic where possible. Reject values such as sin x = 2 and then list solutions within the required interval."
      ],
      "formulae": [
        "sin(A±B)=sin A cos B ± cos A sin B",
        "cos(A±B)=cos A cos B ∓ sin A sin B",
        "tan(A±B)=(tan A ± tan B)/(1 ∓ tan A tan B)",
        "sin 2x = 2sin x cos x",
        "cos 2x = 1 − 2sin²x = 2cos²x − 1",
        "R = √(a²+b²)"
      ],
      "example": {
        "question": "Express 3sin x + 4cos x in the form R sin(x + α), with R > 0 and α acute.",
        "steps": [
          "Expand R sin(x + α) = R sin x cos α + R cos x sin α.",
          "Match coefficients: R cos α = 3 and R sin α = 4.",
          "R = √(3² + 4²) = 5 and tan α = 4/3."
        ],
        "answer": "5 sin(x + 53.1°) approximately."
      },
      "watch": [
        "Before dividing by sin x or cos x, consider whether that quantity could be zero.",
        "For compound angles, preserve parentheses around the angle.",
        "A trigonometric equation may have several answers in a full period; give all valid roots.",
        "In a R-form, verify the coefficient match by expanding your final expression."
      ],
      "questions": [
        {
          "level": "Warm-up",
          "question": "Simplify cosec²x − cot²x.",
          "answer": "1.",
          "steps": [
            "Use cosec²x = 1 + cot²x.",
            "Subtract cot²x to obtain 1."
          ]
        },
        {
          "level": "Developing",
          "question": "Find the exact value of cos 2θ if θ is acute and sin θ = 5/13.",
          "answer": "119/169.",
          "steps": [
            "Since θ is acute, cos θ = 12/13.",
            "cos 2θ = cos²θ − sin²θ = 144/169 − 25/169 = 119/169."
          ]
        },
        {
          "level": "Challenge",
          "question": "Solve 2sin²x − 3cos x = 0 for 0° ≤ x ≤ 360°.",
          "answer": "x = 60° or 300°.",
          "steps": [
            "Replace sin²x by 1 − cos²x.",
            "This gives (2cos x − 1)(cos x + 2) = 0.",
            "Only cos x = 1/2 is possible, giving 60° and 300°."
          ]
        },
        {
          "level": "Extension",
          "question": "Write 5sin x − 12cos x as R sin(x − α), where R > 0 and α is acute.",
          "answer": "13 sin(x − α), where α = arctan(12/5) ≈ 67.4°.",
          "steps": [
            "Expand R sin(x − α) = R sin x cos α − R cos x sin α.",
            "Match R cos α = 5 and R sin α = 12.",
            "R = 13 and tan α = 12/5."
          ]
        }
      ],
      "prerequisite": "P1 and P2 trigonometric identities are assumed.",
      "examStrategy": [
        "Select an identity based on the expression that needs to disappear or combine.",
        "Simplify to one trig function where possible.",
        "Check the domain and interval before listing roots.",
        "For R-form, use coefficient matching and an angle in the correct quadrant."
      ],
      "workedExamples": [
        {
          "question": "Use a double-angle identity to show that 1 − 2sin²x = cos 2x.",
          "steps": [
            "Recall cos 2x = cos²x − sin²x.",
            "Substitute cos²x = 1 − sin²x.",
            "Then cos 2x = (1 − sin²x) − sin²x."
          ],
          "answer": "cos 2x = 1 − 2sin²x."
        }
      ],
      "focusChecklist": [
        "Recall reciprocal and Pythagorean identities.",
        "Convert a sine/cosine combination to R-form.",
        "Solve equations and reject impossible trig values."
      ]
    },
    "9709-3.4": {
      "intro": "P3 differentiation combines exponential, logarithmic and trigonometric derivatives with product/quotient rules, parametric curves and implicit curves. It also includes the derivative of tan⁻¹x, but not the derivatives of sin⁻¹x or cos⁻¹x.",
      "learn": [
        "Core derivatives: (eˣ)′=eˣ, (ln x)′=1/x, (sin x)′=cos x, (cos x)′=−sin x, (tan x)′=sec²x and (tan⁻¹x)′=1/(1+x²). Trig formulas use radians.",
        "Product rule: (uv)′=u′v+uv′. Quotient rule: (u/v)′=(u′v−uv′)/v².",
        "For a composite function, differentiate the outside and multiply by the derivative of the inside (chain rule).",
        "For x=f(t), y=g(t), dy/dx=(dy/dt)/(dx/dt). For implicit equations, differentiate each term and retain dy/dx whenever differentiating a y-expression.",
        "Use the derivative to find tangent and normal gradients. To calculate a tangent equation, also evaluate the coordinates of the point."
      ],
      "formulae": [
        "d(tan⁻¹x)/dx = 1/(1+x²)",
        "(uv)′ = u′v + uv′",
        "(u/v)′ = (u′v − uv′)/v²",
        "dy/dx = (dy/dt)/(dx/dt)",
        "Tangent: y − y₁ = m(x − x₁)"
      ],
      "example": {
        "question": "Differentiate y = xeˣ.",
        "steps": [
          "Use the product rule with u = x and v = eˣ.",
          "dy/dx = eˣ + xeˣ.",
          "Factorise if useful."
        ],
        "answer": "dy/dx = eˣ(x + 1)."
      },
      "watch": [
        "The derivative of tan⁻¹x is 1/(1+x²), not tan⁻¹(x) itself.",
        "Use radians for trigonometric differentiation.",
        "For a quotient, do not reverse the numerator order.",
        "In parametric differentiation, check that dx/dt is not zero at the point."
      ],
      "questions": [
        {
          "level": "Warm-up",
          "question": "Differentiate y = e^(2x) + ln x.",
          "answer": "dy/dx = 2e^(2x) + 1/x.",
          "steps": [
            "Use the chain rule on e^(2x).",
            "Differentiate ln x as 1/x."
          ]
        },
        {
          "level": "Developing",
          "question": "Differentiate y = x ln x.",
          "answer": "dy/dx = ln x + 1.",
          "steps": [
            "Product rule: derivative is 1·ln x + x·(1/x)."
          ]
        },
        {
          "level": "Challenge",
          "question": "Differentiate y = (ln x)/x² for x > 0.",
          "answer": "dy/dx = (1 − 2ln x)/x³.",
          "steps": [
            "Write y = (ln x)x⁻².",
            "Differentiate: y′ = (1/x)x⁻² − 2x⁻³ ln x.",
            "Factor x⁻³ to get (1 − 2ln x)/x³."
          ]
        },
        {
          "level": "Extension",
          "question": "Differentiate y = tan⁻¹(3x).",
          "answer": "dy/dx = 3/(1 + 9x²).",
          "steps": [
            "Apply the chain rule to tan⁻¹(3x).",
            "The derivative of the outside is 1/[1 + (3x)²] and the inside derivative is 3."
          ]
        }
      ],
      "prerequisite": "P1 differentiation and P2 product/quotient rules are assumed.",
      "examStrategy": [
        "Identify every rule needed before simplifying.",
        "Keep intermediate derivatives clear, especially for products and quotients.",
        "For implicit differentiation, collect derivative terms before isolating dy/dx.",
        "For tangents/normals, evaluate the gradient at the required point."
      ],
      "workedExamples": [
        {
          "question": "Find dy/dx if x = t + 1/t and y = t², at t = 1.",
          "steps": [
            "dx/dt = 1 − 1/t², so dx/dt = 0 at t = 1.",
            "dy/dt = 2t, so dy/dt = 2.",
            "The ratio dy/dx is not finite at t = 1 because dx/dt = 0; this corresponds to a vertical tangent when the curve is regular."
          ],
          "answer": "The tangent is vertical at t = 1; dy/dx is undefined there."
        }
      ],
      "focusChecklist": [
        "Differentiate a product or quotient involving ln x or eˣ.",
        "Use tan⁻¹ derivative in a chain-rule expression.",
        "Differentiate parametric or implicit equations."
      ]
    },
    "9709-3.5": {
      "intro": "P3 integration is the broadest integration topic: it includes advanced standard integrals, partial fractions, f′(x)/f(x) patterns, integration by parts and a specified substitution. Choosing a suitable method is often the real challenge.",
      "learn": [
        "Standard integrals include ∫e^(ax+b)dx, ∫1/(ax+b)dx, ∫sin(ax+b)dx, ∫cos(ax+b)dx and ∫sec²(ax+b)dx. Track the derivative of the inner expression.",
        "Recognise ∫f′(x)/f(x) dx = ln|f(x)| + C. The numerator must be the derivative of the denominator, possibly up to a constant factor.",
        "For integration by parts, ∫u(dv/dx)dx = uv − ∫v(du/dx)dx. Choose u so that differentiating it simplifies it; choose dv so it is straightforward to integrate.",
        "For partial fractions, decompose the rational function first, then integrate each simple fraction. Terms 1/(ax+b) give logarithms; terms such as 1/(x²+a²) relate to tan⁻¹(x/a) when in the correct form.",
        "For a supplied substitution u=g(x), replace the relevant expression and its differential consistently; for a definite integral, also transform the limits or return to x before applying them.",
        "Trigonometric identities may be needed before integrating powers such as sin²x or cos²x. Do not force integration by parts when a simple identity is enough."
      ],
      "formulae": [
        "∫f′(x)/f(x) dx = ln|f(x)| + C",
        "∫u dv = uv − ∫v du",
        "∫e^(ax+b)dx = e^(ax+b)/a + C",
        "∫1/(ax+b)dx = (1/a)ln|ax+b| + C",
        "∫1/√(x²+a²) dx = ln|x+√(x²+a²)| + C"
      ],
      "example": {
        "question": "Evaluate ∫ x eˣ dx.",
        "steps": [
          "Use integration by parts with u = x and dv/dx = eˣ.",
          "Then du/dx = 1 and v = eˣ.",
          "∫xeˣ dx = xeˣ − ∫eˣ dx."
        ],
        "answer": "∫xeˣ dx = eˣ(x − 1) + C."
      },
      "watch": [
        "For integration by parts, keep the subtraction sign in uv − ∫v du.",
        "In ln|f(x)|, retain the absolute value unless the domain proves f(x) is positive.",
        "Always add +C to an indefinite integral.",
        "If a substitution is supplied, make sure every x and dx has been transformed consistently."
      ],
      "questions": [
        {
          "level": "Warm-up",
          "question": "Evaluate ∫ 2x/(x² + 1) dx.",
          "answer": "ln(x² + 1) + C.",
          "steps": [
            "The derivative of x² + 1 is 2x.",
            "Apply the f′/f pattern."
          ]
        },
        {
          "level": "Developing",
          "question": "Evaluate ∫xeˣ dx.",
          "answer": "eˣ(x − 1) + C.",
          "steps": [
            "Let u = x and dv/dx = eˣ.",
            "By parts: xeˣ − ∫eˣ dx = xeˣ − eˣ + C."
          ]
        },
        {
          "level": "Challenge",
          "question": "Evaluate ∫(3x + 5)/((x + 1)(x + 2)) dx.",
          "answer": "2ln|x + 1| + ln|x + 2| + C.",
          "steps": [
            "Decompose: (3x + 5)/((x + 1)(x + 2)) = 2/(x + 1) + 1/(x + 2).",
            "Integrate each term using ∫1/(x+a) dx = ln|x+a| + C."
          ]
        },
        {
          "level": "Extension",
          "question": "Evaluate ∫ x/√(x² + 4) dx.",
          "answer": "√(x² + 4) + C.",
          "steps": [
            "The derivative of x² + 4 is 2x.",
            "Since d(√(x²+4))/dx = x/√(x²+4), the given integrand is its derivative."
          ]
        }
      ],
      "prerequisite": "P1, P2 integration and P3 partial fractions are assumed. Choose between a standard form, a derivative-over-function pattern, by parts, and a supplied substitution.",
      "examStrategy": [
        "Classify the integrand before writing any working.",
        "If it resembles f′/f, check numerator and denominator derivatives.",
        "For by-parts questions, state u and dv explicitly.",
        "For partial fractions, decompose and integrate term by term; for definite integrals, evaluate the limits accurately."
      ],
      "workedExamples": [
        {
          "question": "Evaluate ∫ ln x dx for x > 0.",
          "steps": [
            "Use integration by parts with u = ln x and dv/dx = 1.",
            "Then du/dx = 1/x and v = x.",
            "∫ln x dx = x ln x − ∫1 dx."
          ],
          "answer": "x ln x − x + C."
        }
      ],
      "focusChecklist": [
        "Use the derivative-over-function pattern.",
        "Set up integration by parts for a product.",
        "Combine partial fractions and integration."
      ]
    },
    "9709-3.6": {
      "intro": "P3 numerical methods use the same root-bracketing and iteration ideas as P2, but appear alongside more advanced functions. A correct iteration requires careful substitution and sufficient working precision.",
      "learn": [
        "Rewrite the equation as f(x)=0, then use a graph or sign change to bracket the root. Give the requested interval, not just a decimal estimate, when bracketing is asked for.",
        "An iterative formula xₙ₊₁=F(xₙ) generates the next approximation from the current one. Make a small table of n and xₙ to avoid mixing values.",
        "Keep calculator precision until the last step and follow the specified rounding convention. “3 decimal places” is not the same as “3 significant figures”.",
        "An iteration may fail to converge. Recognise this if the terms oscillate, grow, or fail to settle; only use the rearrangement provided or justified in the question.",
        "When the root is part of a wider problem, interpret the numerical value in the original equation and check it is in the correct interval."
      ],
      "formulae": [
        "f(a)f(b) < 0 indicates a sign change",
        "Iteration: xₙ₊₁ = F(xₙ)",
        "Keep full precision until final rounding"
      ],
      "example": {
        "question": "Show that x³ − x − 1 = 0 has a root between 1 and 2.",
        "steps": [
          "Let f(x)=x³−x−1.",
          "f(1)=−1 and f(2)=5.",
          "The signs differ, so a root lies between 1 and 2."
        ],
        "answer": "A root lies in (1, 2)."
      },
      "watch": [
        "A sign change is the key evidence for a bracket.",
        "Do not round intermediate iterates to the final accuracy unless instructed.",
        "Copy the iteration formula exactly; a different rearrangement can converge differently.",
        "Use the requested notation x₀, x₁, x₂ consistently."
      ],
      "questions": [
        {
          "level": "Warm-up",
          "question": "Show that a root of x³ − x − 1 = 0 lies between 1 and 2.",
          "answer": "The root lies in (1, 2).",
          "steps": [
            "f(1)=−1; f(2)=5.",
            "The function changes sign on the interval."
          ]
        },
        {
          "level": "Developing",
          "question": "Use xₙ₊₁ = ½(xₙ + 3/xₙ), x₀ = 1.5, to find x₂ to 4 decimal places.",
          "answer": "x₂ ≈ 1.7321.",
          "steps": [
            "x₁ = ½(1.5 + 3/1.5) = 1.75.",
            "x₂ = ½(1.75 + 3/1.75) ≈ 1.732142857.",
            "Rounded to 4 decimal places: 1.7321."
          ]
        },
        {
          "level": "Challenge",
          "question": "Use xₙ₊₁ = (2xₙ + 5)^(1/3), x₀ = 2, to calculate x₂ to 3 decimal places.",
          "answer": "x₁ = 2.080; x₂ ≈ 2.093.",
          "steps": [
            "x₁ = ∛9 ≈ 2.0800838.",
            "x₂ = ∛(2×2.0800838+5) = ∛9.1601676 ≈ 2.0928.",
            "So x₂ ≈ 2.093."
          ]
        },
        {
          "level": "Extension",
          "question": "For f(x)=ln x + x − 2, state the signs of f(1) and f(2) and the resulting root interval.",
          "answer": "f(1)=−1; f(2)=ln 2 > 0; root lies in (1,2).",
          "steps": [
            "f(1)=ln 1 + 1 − 2 = −1.",
            "f(2)=ln 2 + 2 − 2 = ln 2, which is positive.",
            "Hence there is a sign change in (1,2)."
          ]
        }
      ],
      "prerequisite": "P1–P2 algebra and numerical iteration skills are assumed.",
      "examStrategy": [
        "Define the function f clearly.",
        "Show endpoint values, including their signs.",
        "Use a table for iteration values and do not round prematurely.",
        "State the root’s interval or the final approximation at the exact requested accuracy."
      ],
      "workedExamples": [
        {
          "question": "Use xₙ₊₁ = 2 − ln xₙ with x₀ = 1.5 to find x₁ to 4 decimal places.",
          "steps": [
            "Substitute x₀: x₁ = 2 − ln(1.5).",
            "ln(1.5) ≈ 0.405465."
          ],
          "answer": "x₁ ≈ 1.5945."
        }
      ],
      "focusChecklist": [
        "Find a sign-changing interval.",
        "Apply a given iteration accurately.",
        "Distinguish decimal places from significant figures."
      ]
    },
    "9709-3.7": {
      "intro": "Vectors describe direction and magnitude in two or three dimensions. Paper 3 uses position vectors, vector equations of straight lines, line relationships and the scalar product for angles and perpendicularity.",
      "learn": [
        "A vector may be written as a column vector, xi + yj (+ zk), or as AB. The displacement vector AB is position vector b − a.",
        "The magnitude of a = (x,y,z) is |a|=√(x²+y²+z²). A unit vector in the direction of a is a/|a|, provided a is not the zero vector.",
        "The midpoint of points A and B has position vector (a+b)/2. For a parallelogram, vector sums around opposite corners give the corresponding diagonal relationship.",
        "A line can be written r = a + λb: a is a point on the line and b is a direction vector. Two line equations intersect if their coordinates can be equal for a common set of parameters; parallel lines have proportional direction vectors.",
        "The scalar product is a·b = a₁b₁ + a₂b₂ (+ a₃b₃) = |a||b|cos θ. If a·b=0 for two non-zero vectors, the vectors are perpendicular.",
        "To test whether two 3D lines intersect, equate x, y and z components and solve the parameter equations. If they are not parallel and no common solution exists, they are skew."
      ],
      "formulae": [
        "|a| = √(a·a)",
        "a·b = a₁b₁ + a₂b₂ (+ a₃b₃)",
        "a·b = |a||b|cos θ",
        "Midpoint position vector = (a+b)/2",
        "Line: r = a + λb"
      ],
      "example": {
        "question": "Find the angle between a = (1, 2, 2) and b = (2, 1, 2).",
        "steps": [
          "a·b = 1×2 + 2×1 + 2×2 = 8.",
          "|a|=√9=3 and |b|=√9=3.",
          "So cos θ = 8/(3×3) = 8/9."
        ],
        "answer": "θ = cos⁻¹(8/9) ≈ 27.3°."
      },
      "watch": [
        "Do not confuse a point’s position vector with a displacement vector between two points.",
        "The parameter λ may be any real number unless the problem restricts it.",
        "For a line intersection, every coordinate equation must hold for the same parameters.",
        "Angle calculations use the scalar product; vector product/cross product is not required for this syllabus."
      ],
      "questions": [
        {
          "level": "Warm-up",
          "question": "Find the magnitude of the vector (3, −4, 12).",
          "answer": "13.",
          "steps": [
            "Magnitude = √(3² + (−4)² + 12²) = √169 = 13."
          ]
        },
        {
          "level": "Developing",
          "question": "Find the angle between a = (1,2,2) and b = (2,1,2).",
          "answer": "θ = cos⁻¹(8/9) ≈ 27.3°.",
          "steps": [
            "a·b=8 and both magnitudes are 3.",
            "cos θ=8/9."
          ]
        },
        {
          "level": "Challenge",
          "question": "The lines r=(1,0,2)+λ(1,2,−1) and r=(3,4,0)+μ(−1,0,1) are given. Determine whether they intersect.",
          "answer": "They intersect at (3, 4, 0).",
          "steps": [
            "Equate y-components: 2λ = 4, so λ = 2.",
            "Equate z-components: 2 − λ = μ, so μ = 0.",
            "The x-components are then 1 + 2 = 3 and 3 − 0 = 3, so all three coordinates match."
          ]
        },
        {
          "level": "Extension",
          "question": "Find k if (1,2,k) is perpendicular to (2,−1,3).",
          "answer": "k = 0.",
          "steps": [
            "Perpendicular vectors have zero scalar product.",
            "2 − 2 + 3k = 0, so k = 0."
          ]
        }
      ],
      "prerequisite": "P1 coordinate geometry and basic algebra are assumed.",
      "examStrategy": [
        "Write the relevant vector equation or scalar-product relationship first.",
        "For line intersections, solve parameter equations simultaneously and verify all coordinates.",
        "For angles, calculate the dot product and both magnitudes before using arccos.",
        "State exact vectors/points and include units or angle units where relevant."
      ],
      "workedExamples": [
        {
          "question": "Find the position vector of the midpoint of A=(2,−1,4) and B=(6,3,0).",
          "steps": [
            "Average the corresponding components.",
            "Midpoint = ((2+6)/2, (−1+3)/2, (4+0)/2)."
          ],
          "answer": "(4, 1, 2)."
        }
      ],
      "focusChecklist": [
        "Calculate vector magnitudes and unit vectors.",
        "Write and compare equations of lines.",
        "Use the scalar product to find angles or unknown values."
      ]
    },
    "9709-3.8": {
      "intro": "A differential equation relates a quantity to its rate of change. In P3, equations with separable variables are solved by placing all y terms with dy and all x terms with dx, integrating, then applying an initial condition.",
      "learn": [
        "Translate a rate statement into a differential equation. “Rate proportional to the amount” gives dy/dx = ky; “rate proportional to the difference from a fixed level” may give dy/dt = k(A−y).",
        "For a separable equation dy/dx = f(x)g(y), rearrange as dy/g(y) = f(x)dx, then integrate both sides.",
        "Use a constant of integration on the general solution. An initial condition such as y(0)=c determines the constant and produces a particular solution.",
        "If integrating 1/y, obtain ln|y|; converting from ln|y| to an exponential expression may require an arbitrary positive or signed constant depending on the context.",
        "Interpret the model: a positive constant may represent growth while a negative constant represents decay in dy/dx=ky. Apply the context and the initial value to choose the meaningful solution."
      ],
      "formulae": [
        "dy/dx = ky ⇒ y = Ae^(kx)",
        "Separate: dy/g(y) = f(x)dx",
        "Integrate both sides and add a constant",
        "Use the initial condition to determine the constant"
      ],
      "example": {
        "question": "Solve dy/dx = 2xy, given y = 3 when x = 0.",
        "steps": [
          "Separate variables: (1/y)dy = 2x dx.",
          "Integrate: ln|y| = x² + C.",
          "Exponentiate: y = Ae^(x²). Since y(0)=3, A=3."
        ],
        "answer": "y = 3e^(x²)."
      },
      "watch": [
        "Separate variables before integrating; do not integrate while variables remain mixed.",
        "When dividing by y, note that the derivation assumes y ≠ 0; check whether y=0 is also a solution if relevant.",
        "Use the initial condition after obtaining the general form.",
        "For a model, explain what the constant and sign mean in context."
      ],
      "questions": [
        {
          "level": "Warm-up",
          "question": "Solve dy/dx = 3x².",
          "answer": "y = x³ + C.",
          "steps": [
            "Integrate 3x² with respect to x.",
            "Include the constant of integration."
          ]
        },
        {
          "level": "Developing",
          "question": "Solve dy/dx = 2xy, given y(0)=3.",
          "answer": "y = 3e^(x²).",
          "steps": [
            "Separate: dy/y = 2x dx.",
            "Integrate: ln|y|=x²+C.",
            "Use y(0)=3 to obtain y=3e^(x²)."
          ]
        },
        {
          "level": "Challenge",
          "question": "Solve dy/dx = (x + 1)y, given y(0)=2.",
          "answer": "y = 2e^(x²/2 + x).",
          "steps": [
            "Separate: dy/y = (x+1)dx.",
            "Integrate: ln|y| = x²/2 + x + C.",
            "Use y(0)=2, so C=ln 2, giving y=2e^(x²/2+x)."
          ]
        },
        {
          "level": "Extension",
          "question": "A population N satisfies dN/dt = −0.2N and N(0)=100. Find N as a function of t.",
          "answer": "N = 100e^(−0.2t).",
          "steps": [
            "Separate: dN/N = −0.2dt.",
            "Integrate: ln N = −0.2t + C for N>0.",
            "Use N(0)=100 to get C=ln100."
          ]
        }
      ],
      "prerequisite": "P3 integration techniques are assumed. The variables in the differential equation must be separable for this method.",
      "examStrategy": [
        "Translate the verbal rate relation into a differential equation.",
        "Separate the variables and show both integrals.",
        "Write the arbitrary constant before applying the initial condition.",
        "Check the particular solution by substitution when practical."
      ],
      "workedExamples": [
        {
          "question": "Solve dy/dx = 4x/y, given y=2 when x=0.",
          "steps": [
            "Separate: y dy = 4x dx.",
            "Integrate: y²/2 = 2x² + C, so y² = 4x² + C₁.",
            "Use y(0)=2 to find C₁=4."
          ],
          "answer": "y² = 4x² + 4; for the branch through y=2, y = 2√(x²+1)."
        }
      ],
      "focusChecklist": [
        "Separate variables correctly.",
        "Find the general solution.",
        "Use an initial value to find a particular solution and interpret it."
      ]
    },
    "9709-3.9": {
      "intro": "Complex numbers extend real numbers by using i² = −1. P3 includes Cartesian and polar forms, conjugates, modulus and argument, roots, and simple geometric loci on an Argand diagram.",
      "learn": [
        "In z = a + bi, the real part is a and the imaginary part is b. Two complex numbers are equal only when both real and imaginary parts match.",
        "The conjugate is z* = a − bi and the modulus is |z| = √(a²+b²). The argument is the angle from the positive real axis to the point (a,b), interpreted in the requested range.",
        "For division in Cartesian form, multiply numerator and denominator by the conjugate of the denominator so the denominator becomes real.",
        "Polar form is z = r(cos θ + i sin θ), where r=|z| and θ=arg z. Products multiply moduli and add arguments; quotients divide moduli and subtract arguments.",
        "If a polynomial has real coefficients, non-real roots occur in conjugate pairs. If one complex root is known, its conjugate can help factorise the polynomial.",
        "On an Argand diagram, |z−a|=r is a circle with centre at a and radius r; |z−a|<r is the interior. arg(z−a)=α describes a ray from a with direction angle α, excluding the point a."
      ],
      "formulae": [
        "i² = −1",
        "z* = a − bi for z = a + bi",
        "|z| = √(a²+b²)",
        "z₁z₂: moduli multiply, arguments add",
        "z₁/z₂: moduli divide, arguments subtract",
        "z = r(cos θ + i sin θ)"
      ],
      "example": {
        "question": "Find the square roots of 5 + 12i in Cartesian form.",
        "steps": [
          "Notice (3 + 2i)² = 9 + 12i + 4i² = 9 + 12i − 4 = 5 + 12i.",
          "The two square roots are opposites of one another."
        ],
        "answer": "3 + 2i and −3 − 2i."
      },
      "watch": [
        "Use i²=−1 at every multiplication step.",
        "For division, multiply both numerator and denominator by the denominator’s conjugate.",
        "Arguments depend on the quadrant; do not use tan⁻¹(b/a) alone without checking signs.",
        "A locus with |z−a| is a distance condition in the Argand plane."
      ],
      "questions": [
        {
          "level": "Warm-up",
          "question": "Simplify (2 + 3i) + (1 − 5i).",
          "answer": "3 − 2i.",
          "steps": [
            "Add real parts: 2+1=3.",
            "Add imaginary parts: 3i−5i=−2i."
          ]
        },
        {
          "level": "Developing",
          "question": "Write (3 + 4i)/(1 − 2i) in Cartesian form.",
          "answer": "−1 + 2i.",
          "steps": [
            "Multiply top and bottom by 1+2i.",
            "Numerator: (3+4i)(1+2i)=3+10i+8i²=−5+10i.",
            "Denominator: (1−2i)(1+2i)=1+4=5.",
            "Divide by 5."
          ]
        },
        {
          "level": "Challenge",
          "question": "Find the two square roots of 5 + 12i.",
          "answer": "±(3 + 2i).",
          "steps": [
            "Check (3+2i)² = 9+12i−4 = 5+12i.",
            "The other square root is the negative of the first."
          ]
        },
        {
          "level": "Extension",
          "question": "Describe the locus |z − (1 + 2i)| = 3 on an Argand diagram.",
          "answer": "A circle with centre (1,2) and radius 3.",
          "steps": [
            "The complex number 1+2i represents the point (1,2).",
            "The modulus gives the distance from that point.",
            "Equality to 3 fixes the distance at 3."
          ]
        }
      ],
      "prerequisite": "Basic algebra and trigonometry are assumed. Be clear whether an argument is in degrees or radians and use the interval specified by the question.",
      "examStrategy": [
        "Choose Cartesian form for simple addition/subtraction and conjugate-based division.",
        "Use modulus and argument for polar multiplication/division.",
        "Check a proposed square root by squaring it explicitly.",
        "Translate modulus equations into distances on the Argand diagram."
      ],
      "workedExamples": [
        {
          "question": "Find the modulus and a principal argument of z = −1 + i.",
          "steps": [
            "|z| = √((-1)² + 1²) = √2.",
            "The point (−1,1) is in quadrant II with reference angle 45°."
          ],
          "answer": "|z| = √2; principal argument = 3π/4 (or 135°)."
        }
      ],
      "focusChecklist": [
        "Perform Cartesian operations.",
        "Find modulus and argument.",
        "Describe simple complex loci geometrically."
      ]
    }
  }
};