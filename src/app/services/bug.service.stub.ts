import { Bug } from '../bugs/bug.interface';

export const BUGS_RESPONSE_MOCK: Bug[] = [
  {
    id: 1,
    title: 'opened bug 1',
    description: 'test bug 1 description',
    state: 'opened',
  },
  {
    id: 2,
    title: 'closed bug 2',
    description: 'test bug 1 description',
    state: 'closed',
  },
  {
    id: 3,
    title: 'pending bug 3',
    description: 'test bug 1 description',
    state: 'pending',
  },
  {
    id: 4,
    title: 'test bug 4',
    description: 'test bug 1 description',
    state: 'opened',
  },
];
