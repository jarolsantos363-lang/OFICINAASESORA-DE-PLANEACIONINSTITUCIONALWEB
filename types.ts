
export enum PlanStatus {
  Completed = 'COMPLETED',
  Missing = 'MISSING',
  NotStarted = 'NOT_STARTED',
}

export interface Activity {
  name: string;
  status: PlanStatus;
  value: number;
}

export interface Plan {
  title: string;
  items: Activity[];
  total?: number;
}

export enum VerificationStatus {
  SI = 'SI',
  NO = 'NO',
  PENDIENTE = 'PENDIENTE',
  NA = 'N/A',
}

export interface VerificationItem {
  name: string;
  status: VerificationStatus;
}

export type ActiveView = 'planning' | 'documentation';
