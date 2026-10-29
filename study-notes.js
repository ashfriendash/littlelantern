window.LITTLE_LANTERN_NOTES = {
  "version": 1,
  "subjectCode": "9709",
  "syllabusYear": "2026–2027",
  "modules": {
    "P1": "Pure Mathematics 1 · Paper 1",
    "M1": "Mechanics · Paper 4",
    "S1": "Probability & Statistics 1 · Paper 5",
    "S2": "Probability & Statistics 2 · Paper 6"
  },
  "source": {
    "p1UserResource": "As-Math-P1-Notes-by-Rafique-Akhtar1-compressed.pdf (user-provided; used as a topic-reference, not reproduced verbatim)",
    "officialSyllabus": "https://www.cambridgeinternational.org/Images/697427-2026-2027-syllabus.pdf",
    "practiceNote": "Practice questions are original and written in a Cambridge structured-question style; they are not copied past-paper questions."
  },
  "topics": {
    "9709-1.1": {
      "intro": "Quadratics describe parabolas and let you solve equations, inequalities, and intersections. In an exam, choose the method that makes the structure easiest to see: factorising, completing the square, or the quadratic formula.",
      "learn": [
        "For ax² + bx + c = 0, the discriminant is Δ = b² − 4ac. Δ > 0 gives two distinct real roots, Δ = 0 a repeated real root, and Δ < 0 no real roots.",
        "Completing the square gives ax² + bx + c = a(x + b/(2a))² − Δ/(4a). For a graph y = ax² + bx + c, the vertex has x-coordinate −b/(2a).",
        "Solve quadratic inequalities by finding roots and checking the sign between and outside them. Include or exclude boundary points according to ≤, ≥, < or >.",
        "For one linear and one quadratic equation, substitute the line into the curve. A tangent gives a repeated root, so the resulting quadratic has discriminant zero.",
        "Recognise equations that become quadratic after a substitution, for example x⁴ − 5x² + 4 = 0 by setting u = x². After solving for u, return to x and check all valid roots."
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
      "prerequisite": ""
    },
    "9709-1.2": {
      "intro": "A function assigns exactly one output to each input in its domain. Functions questions often test notation, domain/range, inverse functions, composition, and transformations of graphs.",
      "learn": [
        "The domain is the set of permitted inputs; the range is the set of outputs actually produced.",
        "For fg(x), apply g first and then f: fg(x) = f(g(x)). The output of the inner function must lie in the domain of the outer one.",
        "An inverse reverses a one-to-one function. To find it, write y = f(x), interchange x and y, then solve for y; state the relevant domain/range restrictions.",
        "Graph transformations: y = f(x) + a shifts up a; y = f(x + a) shifts left a; y = af(x) stretches vertically by factor |a| (reflection if a < 0); y = f(ax) changes horizontal scale by factor 1/|a|."
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
      "prerequisite": ""
    },
    "9709-1.3": {
      "intro": "Coordinate geometry translates geometric relationships into equations. Straight lines use gradients and points; circles use centre-radius form, and intersections are found algebraically.",
      "learn": [
        "Gradient through (x₁,y₁) and (x₂,y₂) is (y₂ − y₁)/(x₂ − x₁), provided x₂ ≠ x₁.",
        "A line may be written y = mx + c, y − y₁ = m(x − x₁), or ax + by + c = 0. Parallel lines have equal gradients; perpendicular non-vertical lines have gradient product −1.",
        "A circle with centre (a,b) and radius r has equation (x − a)² + (y − b)² = r².",
        "For a line-circle intersection, substitute the line into the circle. Zero, one, or two real roots indicate no intersection, tangency, or two intersections."
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
      "prerequisite": ""
    },
    "9709-1.4": {
      "intro": "Circular measure uses radians to describe angles naturally in circle geometry. When θ is in radians, arc length and sector area have especially simple formulas.",
      "learn": [
        "A full turn is 2π radians and a straight angle is π radians. Convert degrees to radians by multiplying by π/180.",
        "For radius r and angle θ in radians, arc length s = rθ and sector area A = ½r²θ.",
        "Perimeter of a sector is 2r + rθ. The area of a triangle formed by two radii with included angle θ is ½r² sin θ.",
        "The minor segment area is sector area minus the triangle area. Use radians in s = rθ and A = ½r²θ."
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
      "prerequisite": ""
    },
    "9709-1.5": {
      "intro": "Trigonometry links angles and ratios and lets you solve equations over a stated interval. Work carefully with exact angles, graph period, and the full set of solutions.",
      "learn": [
        "Know exact values for 30°, 45°, 60° and related angles. Draw a sign diagram or use the unit circle to choose the correct quadrants.",
        "The identities sin²θ + cos²θ = 1 and tan θ = sin θ / cos θ can simplify expressions and equations.",
        "For y = sin x and y = cos x, the period is 2π (or 360°); for tan x, the period is π (or 180°). Transformations change amplitude, period, and phase.",
        "For an equation such as sin 2x = a, first solve for the angle 2x, then map every solution back into the required interval for x."
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
      "prerequisite": ""
    },
    "9709-1.6": {
      "intro": "Series describe ordered number patterns and sums. The key is to identify whether the sequence is arithmetic (constant difference), geometric (constant ratio), or a binomial expansion.",
      "learn": [
        "For an arithmetic progression (AP), nth term uₙ = a + (n−1)d and Sₙ = n/2[2a + (n−1)d].",
        "For a geometric progression (GP), uₙ = arⁿ⁻¹ and Sₙ = a(rⁿ − 1)/(r − 1) when r ≠ 1.",
        "An infinite GP converges only when |r| < 1; its sum is a/(1 − r).",
        "For positive integer n, (a + b)ⁿ can be expanded with binomial coefficients nCr. The coefficient pattern is symmetric; the term in bʳ is nCr aⁿ⁻ʳbʳ."
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
      "prerequisite": ""
    },
    "9709-1.7": {
      "intro": "Differentiation measures instantaneous rate of change and the gradient of a curve. In P1, use the power rule, sums and constant multiples, and the chain rule for composite powers.",
      "learn": [
        "The derivative is the gradient function. At x = a, the tangent gradient is f′(a). A normal is perpendicular to the tangent, so its gradient is the negative reciprocal when the tangent is not horizontal.",
        "Power rule: d(xⁿ)/dx = nxⁿ⁻¹. Constants differentiate to zero. For (ax + b)ⁿ, multiply by the derivative of the inside: na(ax+b)ⁿ⁻¹.",
        "Stationary points satisfy f′(x) = 0. Use the second derivative or a sign change in f′ to classify a local maximum/minimum.",
        "For connected rates, differentiate the relationship between variables with respect to time, then substitute the instant's values and rate."
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
      "prerequisite": ""
    },
    "9709-1.8": {
      "intro": "Integration reverses differentiation and accumulates quantities. P1 includes indefinite and definite integrals, constants of integration, areas between curves, volumes of revolution, and simple improper integrals.",
      "learn": [
        "Reverse the power rule: ∫xⁿ dx = xⁿ⁺¹/(n+1) + C for n ≠ −1. Integrate sums term-by-term and keep the constant C for indefinite integrals.",
        "Use a known point to determine C when a curve is specified by its gradient and a point.",
        "For a definite integral, evaluate the antiderivative at the upper limit and subtract its value at the lower limit.",
        "Area between curves is ∫(upper − lower) dx where the order is consistent. Volume about the x-axis is V = π∫y² dx; about the y-axis with x expressed as a function of y, use V = π∫x² dy."
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
      "prerequisite": ""
    },
    "9709-4.1": {
      "intro": "Mechanics models forces on particles. Start with a clear force diagram, choose axes, resolve every force, and use equilibrium equations before introducing friction limits.",
      "learn": [
        "Draw weight vertically down, reaction perpendicular to a surface, tension along a string, and any applied force in its stated direction.",
        "Resolve each force into components parallel and perpendicular to your chosen axes. In equilibrium, the net force in each direction is zero.",
        "On a rough surface, friction opposes impending or actual motion. At limiting equilibrium F = μR; otherwise F ≤ μR.",
        "For a smooth surface, friction is absent. Newton's third-law force pairs act on different bodies and therefore do not cancel on one body's diagram."
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
      "prerequisite": ""
    },
    "9709-4.2": {
      "intro": "Kinematics describes motion along a straight line. Choose a positive direction, keep signed velocity and acceleration consistent, and use constant-acceleration equations or graph/calculus relationships.",
      "learn": [
        "Distance and speed are scalars; displacement, velocity and acceleration have direction and may be signed.",
        "On a displacement-time graph, gradient is velocity. On a velocity-time graph, gradient is acceleration and signed area gives displacement.",
        "For constant acceleration: v = u + at; s = ut + ½at²; v² = u² + 2as; s = ½(u+v)t.",
        "With calculus, v = ds/dt and a = dv/dt; integrating velocity gives displacement change."
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
      "prerequisite": ""
    },
    "9709-4.3": {
      "intro": "Linear momentum is mass multiplied by velocity. For a direct collision in a closed system, total momentum before impact equals total momentum after impact.",
      "learn": [
        "Momentum is directional. Choose one direction as positive and use signed velocities in the conservation equation.",
        "For two particles: m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂.",
        "If the particles coalesce, they share one final velocity v, so m₁u₁ + m₂u₂ = (m₁+m₂)v.",
        "The syllabus does not require impulse or coefficient of restitution for this component; focus on conservation of linear momentum in one dimension."
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
      "prerequisite": ""
    },
    "9709-4.4": {
      "intro": "Newton's laws connect resultant force, mass and acceleration. A force diagram and separate equations for connected particles usually make the setup much clearer.",
      "learn": [
        "Newton's first law describes constant velocity when resultant force is zero; the second law is F = ma in the direction of the resultant; the third law pairs equal and opposite forces on different bodies.",
        "Weight W = mg. In this component, calculations commonly use g = 10 m s⁻² unless a value is specified.",
        "For connected particles linked by a light inextensible string over a smooth pulley, the string tension is the same and acceleration magnitudes match while the string remains taut.",
        "On a rough plane, include friction opposing motion. For a plane inclined at θ, resolve weight into mg sin θ down the plane and mg cos θ perpendicular to it."
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
      "prerequisite": ""
    },
    "9709-4.5": {
      "intro": "Work, energy and power provide alternative ways to solve motion problems. Energy methods are often shorter when speed and height change but the forces are complicated.",
      "learn": [
        "Work done by a constant force is W = Fs cos θ, where θ is the angle between force and displacement.",
        "Kinetic energy is ½mv²; gravitational potential energy near Earth's surface is mgh.",
        "The change in mechanical energy equals the work done by external non-conservative forces. If no energy is dissipated, mechanical energy is conserved.",
        "Power is work done per unit time. For a force acting in the direction of motion, P = Fv; average power is total work divided by elapsed time."
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
      "prerequisite": ""
    },
    "9709-5.1": {
      "intro": "Representation of data is about choosing a display and summarising a distribution. Always distinguish exact data from estimates read from grouped tables or cumulative-frequency graphs.",
      "learn": [
        "Stem-and-leaf diagrams preserve individual values; back-to-back diagrams compare two data sets. Box-and-whisker plots compare median, quartiles, range and interquartile range.",
        "For grouped continuous data, a histogram uses frequency density = frequency/class width as bar height.",
        "Cumulative frequency graphs give estimates of medians, quartiles, percentiles and proportions within ranges.",
        "For raw data, mean = Σx/n and variance can be calculated from Σx²/n − mean². For grouped data, use class midpoints, so the results are estimates."
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
      "prerequisite": ""
    },
    "9709-5.2": {
      "intro": "Permutations count ordered arrangements; combinations count selections where order does not matter. Restrictions and repeated objects are handled by building a count that avoids overcounting.",
      "learn": [
        "n! = n(n−1)…2×1, with 0! = 1.",
        "Arrangements of r distinct objects from n: nPr = n!/(n−r)!. Selections of r objects from n: nCr = n!/[r!(n−r)!].",
        "For repeated letters, divide the total factorial by the factorials of each repeated multiplicity.",
        "For restrictions such as two people together, treat them as a block; for 'not together', subtract together arrangements from all arrangements. Circular arrangements are not included in this syllabus component."
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
      "prerequisite": ""
    },
    "9709-5.3": {
      "intro": "Probability quantifies how likely events are. Use a sample space or tree diagram to separate cases, and identify whether events are independent, mutually exclusive, or conditional.",
      "learn": [
        "For equally likely outcomes, P(A) = number of favourable outcomes / total outcomes. The complement has probability 1 − P(A).",
        "For mutually exclusive events, P(A ∪ B) = P(A)+P(B). For independent events, P(A ∩ B) = P(A)P(B).",
        "Conditional probability: P(A|B) = P(A ∩ B)/P(B), provided P(B) > 0.",
        "Without replacement, probabilities change after each draw. Use branch probabilities in a tree and multiply along a path; add probabilities for mutually exclusive paths."
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
      "prerequisite": ""
    },
    "9709-5.4": {
      "intro": "A discrete random variable takes separate countable values with assigned probabilities. Probability tables support expectations and variances, while binomial and geometric models describe repeated independent trials.",
      "learn": [
        "A probability distribution must have probabilities between 0 and 1, and their total must equal 1.",
        "E(X) = ΣxP(X=x); Var(X) = E(X²) − [E(X)]².",
        "For X ~ B(n,p), P(X=r) = nCr pʳ(1−p)ⁿ⁻ʳ; E(X)=np and Var(X)=np(1−p).",
        "For X ~ Geo(p), where X is the trial number of the first success, P(X=r)=(1−p)ʳ⁻¹p, E(X)=1/p and Var(X)=(1−p)/p²."
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
      "prerequisite": ""
    },
    "9709-5.5": {
      "intro": "The normal distribution models a continuous variable with a symmetric bell-shaped curve. Standardisation converts a value into a z-score so normal tables or a calculator can be used.",
      "learn": [
        "If X ~ N(μ,σ²), its mean is μ and standard deviation is σ. Note that the second parameter is variance, not standard deviation.",
        "Standardise with Z = (X−μ)/σ. Translate wording such as 'more than', 'below' and 'between' into the correct tail or area.",
        "For an unknown mean or standard deviation, set up an equation using the known normal probability and the corresponding z-value.",
        "A binomial distribution may be approximated by a normal distribution when np and n(1−p) are sufficiently large (in this syllabus both > 5), with a continuity correction."
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
      "prerequisite": ""
    },
    "9709-6.1": {
      "intro": "The Poisson distribution models counts of events in a fixed interval when events occur independently at a stable average rate. The parameter λ is the expected count in that interval.",
      "learn": [
        "If X ~ Po(λ), then P(X=r) = e⁻λ λʳ/r! for r = 0,1,2,… .",
        "For a Poisson variable, E(X)=Var(X)=λ.",
        "When a rate changes with interval length, scale λ in direct proportion to time, distance or area.",
        "A Poisson approximation to B(n,p) is suitable for large n and small p (syllabus guide: n > 50 and np < 5 approximately). A normal approximation to Poisson may be considered for large λ, with continuity correction."
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
      "prerequisite": ""
    },
    "9709-6.2": {
      "intro": "Linear combinations let you find the expectation and variance of transformed or combined random variables. Independence is the key condition for adding variances of separate variables.",
      "learn": [
        "E(aX+b)=aE(X)+b and Var(aX+b)=a²Var(X). Adding a constant changes the mean but not the variance.",
        "E(aX+bY)=aE(X)+bE(Y). If X and Y are independent, Var(aX+bY)=a²Var(X)+b²Var(Y).",
        "If independent normal variables are combined linearly, the result is normal. Independent Poisson variables add to another Poisson variable with parameter equal to the sum.",
        "When subtracting independent variables, subtract expectations but still add their variance contributions."
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
      "prerequisite": ""
    },
    "9709-6.3": {
      "intro": "A continuous random variable is described by a probability density function (pdf). Probability is area under the pdf, so the total area across its domain must equal one.",
      "learn": [
        "A valid pdf f(x) is non-negative on its domain and integrates to 1 over that domain.",
        "P(a < X < b)=∫ₐᵇ f(x) dx. For a continuous variable, the probability at a single point is zero.",
        "E(X)=∫x f(x) dx and Var(X)=E(X²)−[E(X)]², with E(X²)=∫x² f(x) dx.",
        "Median and percentiles can be found by choosing a point where the required proportion of total area lies to the left. The syllabus focuses on a pdf defined over a single interval."
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
      "prerequisite": ""
    },
    "9709-6.4": {
      "intro": "Sampling uses a subset to learn about a population. Random selection reduces systematic bias, while sampling distributions quantify how much sample statistics vary from sample to sample.",
      "learn": [
        "A population is the whole group of interest; a sample is the observed subset. A biased sampling process can systematically misrepresent the population.",
        "For sample mean X̄ from a population with mean μ and variance σ², E(X̄)=μ and Var(X̄)=σ²/n, so its standard deviation is σ/√n.",
        "From a sample, the sample mean x̄ is an unbiased estimate of the population mean μ. An unbiased estimate of the population variance uses n − 1 in the denominator: s² = [Σx² − (Σx)²/n]/(n − 1).",
        "If the parent population is normal, the sample mean is normal. For a large sample, the Central Limit Theorem gives an approximate normal distribution for X̄.",
        "A confidence interval for a population mean with known σ is x̄ ± zσ/√n. For a population proportion, use p̂ ± z√(p̂(1−p̂)/n) for a sufficiently large sample."
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
      "prerequisite": ""
    },
    "9709-6.5": {
      "intro": "A hypothesis test uses sample evidence to decide whether a claim about a population parameter is plausible. The test direction comes from the alternative hypothesis and the context of the question.",
      "learn": [
        "H₀ is the null hypothesis and H₁ is the alternative. Choose one-tailed or two-tailed testing from the wording before finding the critical region or p-value.",
        "At significance level α, reject H₀ if the observed result lies in the rejection region or if the p-value is at most α. Otherwise, do not reject H₀; this does not prove H₀ true.",
        "Tests may use a binomial or Poisson count, or a normal sample mean with known population variance/large sample. Use the correct tail probability.",
        "Type I error: reject a true H₀. Type II error: fail to reject a false H₀. State the conclusion in the context given.",
        "Type I error means rejecting a true H₀; its probability is evaluated under H₀. Type II error means not rejecting H₀ when a specified alternative is true; calculate it using the distribution under that alternative and the acceptance region."
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
      "prerequisite": ""
    }
  }
};
