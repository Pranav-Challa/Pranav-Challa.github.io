
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
    id: 'non-linear',
    title: 'Non-linear Markov Chains in Stochastic modelling',
    description: 'My alternative framework to model product diffusion - UNFINISHED',
    longDescription: 'In my brief experience of modelling, I've found that models of product diffusion are very limited. Though there have been generalisations to the Bass diffusion model, I've always found it to be inadequate. I've sorta worked on an idea for a replacement that can be applied more generally. I haven't done a huge amount of work on it, but I've added a brief document I wrote on it along with an example. I hope to perhaps create a Python module to speed up prototyping these models, but I'll say more about them in a future StraightEdge article.',
    tags: ['Modelling', 'Simulation', 'Statistics'],
    imageUrl: 'https://drive.google.com/file/d/1rDtMXybVXdhwuqpdrvHdYjMEf8NgJAnc/view?usp=drive_link'
  }
];

export const SKILLS: Skill[] = [

];

export const PERSONAL_BIO = `
Hi. I’m Pranav Challa, a student exploring the intersection of pure mathematics and computational architecture. This website contains a selection of things I’ve worked on, including mathematical and computational projects, modelling and simulation work, and some writing. I've worked on projects related to quantum computing and applied modelling and I've also tried to include in this website some of the cooler things I've come across at maths camps and hackathons I've participated in. In particular, do check out my maths magazine I co-created with William Joanes, StraightEdge. Hopefully some of it’s interesting or useful.
`;
