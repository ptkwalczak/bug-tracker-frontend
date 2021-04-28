export type BugState = 'opened' | 'pending' | 'closed';
export interface Bug {
  id: any;
  title: string;
  description: string;
  state: BugState;
}
