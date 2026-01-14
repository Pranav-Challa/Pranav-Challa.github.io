
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'straightedge',
    title: 'StraightEdge Magazine',
    description: 'A mathematical publication co-created with William Joanes.',
    longDescription: 'Co-founded and edited StraightEdge, a mathematics magazine aimed at high school and undergraduate students. We featured articles ranging from group theory to the geometry of soap bubbles, aiming to bridge the gap between curriculum maths and research.',
    tags: ['Mathematics', 'Publishing', 'Education'],
    imageUrl: 'https://images.unsplash.com/photo-1509228468518-180dd48a579a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'quantum-sim',
    title: 'Quantum Logic Simulator',
    description: 'Computational modeling of quantum gate operations.',
    longDescription: 'Built a custom simulation engine to visualize Bloch spheres and quantum gate transformations. Explored Shor’s algorithm and Grover’s search through Python-based numerical models.',
    tags: ['Quantum Computing', 'Python', 'Linear Algebra'],
    imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'stochastic-modelling',
    title: 'Applied Stochastic Models',
    description: 'Simulating complex systems through probabilistic frameworks.',
    longDescription: 'Developed models to simulate epidemic spread and traffic flow using Monte Carlo methods. Presented findings on the optimization of urban grid systems based on these simulations.',
    tags: ['Modelling', 'Simulation', 'Statistics'],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&q=80&w=800'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Pure Mathematics', level: 5, category: 'Frontend' }, // Using Frontend as a proxy for "Primary"
  { name: 'Linear Algebra', level: 5, category: 'Frontend' },
  { name: 'Python (NumPy/SciPy)', level: 4, category: 'Backend' }, // Backend as "Computational"
  { name: 'LaTeX', level: 5, category: 'Tools' },
  { name: 'C++', level: 3, category: 'Backend' },
  { name: 'Stochastic Processes', level: 4, category: 'Frontend' },
  { name: 'Numerical Analysis', level: 4, category: 'Backend' },
  { name: 'Algorithm Design', level: 5, category: 'Tools' },
];

export const PERSONAL_BIO = `
Hi. I’m Pranav Challa, a student interested in mathematics and computer science, currently applying to study mathematics at university. This website contains a selection of things I’ve worked on, including mathematical and computational projects, modelling and simulation work, and some writing. I've worked on projects related to quantum computing and applied modelling and I've also tried to put some of the cooler things I've come across at maths camps and hackathons I've participated in. In particular, do check out my maths magazine I co-created with William Joanes, StraightEdge. Hopefully some of it’s interesting or useful.
`;
