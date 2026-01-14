
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'straightedge',
    title: 'StraightEdge Magazine',
    description: 'A curated mathematical publication bridging the gap between curriculum and research.',
    longDescription: 'Co-founded and edited StraightEdge, a mathematics magazine aimed at high school and undergraduate students. We featured articles ranging from group theory to the geometry of soap bubbles, aiming to bridge the gap between curriculum maths and research.',
    tags: ['Mathematics', 'Publishing', 'Education'],
    imageUrl: 'https://images.unsplash.com/photo-1509228468518-180dd48a579a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'quantum-sim',
    title: 'Logic Simulation',
    description: 'Computational modeling of quantum gate operations using custom numerical engines.',
    longDescription: 'Built a custom simulation engine to visualize Bloch spheres and quantum gate transformations. Explored Shor’s algorithm and Grover’s search through Python-based numerical models.',
    tags: ['Quantum', 'Python', 'Linear Algebra'],
    imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'stochastic-modelling',
    title: 'Stochastic Models',
    description: 'Simulating complex epidemic and traffic systems through probabilistic frameworks.',
    longDescription: 'Developed models to simulate epidemic spread and traffic flow using Monte Carlo methods. Presented findings on the optimization of urban grid systems based on these simulations.',
    tags: ['Modelling', 'Simulation', 'Statistics'],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&q=80&w=800'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Pure Mathematics', level: 5, category: 'Frontend' },
  { name: 'Linear Algebra', level: 5, category: 'Frontend' },
  { name: 'Python (NumPy/SciPy)', level: 4, category: 'Backend' },
  { name: 'LaTeX', level: 5, category: 'Tools' },
  { name: 'C++', level: 3, category: 'Backend' },
  { name: 'Stochastic Processes', level: 4, category: 'Frontend' },
  { name: 'Numerical Analysis', level: 4, category: 'Backend' },
  { name: 'Algorithm Design', level: 5, category: 'Tools' },
];

export const PERSONAL_BIO = `
I’m Pranav Challa, a student exploring the intersection of pure mathematics and computational architecture.

Currently focused on university applications, my background spans mathematical publishing, quantum logic simulation, and applied stochastic modeling. I believe the most elegant solutions exist where abstract logic meets systemic implementation.

Beyond the screen, I co-founded StraightEdge—a magazine dedicated to making research-level mathematics accessible to undergraduate students. Most of my time is spent oscillating between rigorous proofs and building simulations that bring those proofs to life.
`;
