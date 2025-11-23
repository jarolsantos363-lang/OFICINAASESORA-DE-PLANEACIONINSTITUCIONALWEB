
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
  value?: string | number;
}

export interface ActivityTrackingItem {
  name: string;
  months: boolean[]; // 12 months, true for completed, false for pending
}

export interface DevelopmentPlanGoal {
  producto: string;
  indicador: string;
  metaProductoCuatrienio: number;
  meta2024Programado: number;
  meta2024Ejecutado: number;
  meta2025Programado: number;
  meta2025Ejecutado: number;
  ejecutado2025OP?: number;
}

export interface ImprovementPlan {
  hallazgos: string;
  fortalezas: string;
  planDeMejoramiento: string;
}

export interface InstitutionalActivity {
  id: number;
  nombre: string;
  unidad: string;
  cantidad: (number | string)[];
  inversion: number[];
  indiceFisico: string;
  indiceInversion: string;
  eficencia: string;
}

export interface ProcessData {
  planning: {
    mensual: Plan[];
    trimestral: Plan[];
    cuatrimestral: Plan[];
    semestral: Plan[];
    anual: Plan[];
  };
  documentation: VerificationItem[];
  tracking: ActivityTrackingItem[];
  developmentPlanGoals: DevelopmentPlanGoal[];
  improvementPlan?: ImprovementPlan;
  institutionalActivities?: InstitutionalActivity[];
  subProcesses?: { [key: string]: ProcessData };
}

export interface AllProcessData {
  [key: string]: ProcessData;
}