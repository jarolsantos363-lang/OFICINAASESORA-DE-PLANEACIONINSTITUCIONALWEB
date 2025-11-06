import { AllProcessData, PlanStatus, VerificationStatus } from './types';

export const strategicProcesses = [
  "Gestión Estratégica",
  "Gestión Integral de Riesgos",
  "Gestión del Conocimiento y la Innovación",
  "Gestión del SIG",
  "Comunicación y Participación Ciudadana",
  "Gestión Tecnológica"
];

export const misionalProcesses = [
  "Gestión de Operaciones Financieras",
  "Gestión de Proyectos de Promoción y Desarrollo",
  "Operación de Esquemas Empresariales",
  "Gestión Cultural Panóptico",
  "Atención al ciudadano"
];

export const supportProcesses = [
  "Gestión Humana",
  "Gestión Financiera",
  "Gestión Contractual",
  "Gestión Jurídica",
  "Gestión de Recursos Físicos",
  "Gestión Documental",
  "Gestión Control Disciplinario"
];

export const evaluationProcesses = [
  "Evaluación Independiente"
];

const defaultData = {
    planning: {
        mensual: [],
        trimestral: [],
        cuatrimestral: [],
        semestral: [],
        anual: [],
    },
    documentation: [],
    tracking: [
        { name: "Plan de Acción", months: [false, false, false, false, false, false, false, false, false, false, false, false] },
        { name: "Presupuesto", months: [false, false, false, false, false, false, false, false, false, false, false, false] },
        { name: "Indicadores de Gestión", months: [false, false, false, false, false, false, false, false, false, false, false, false] },
        { name: "Plan de Mejoramiento", months: [false, false, false, false, false, false, false, false, false, false, false, false] },
        { name: "Matriz de Riesgos", months: [false, false, false, false, false, false, false, false, false, false, false, false] },
    ]
};

export const ALL_PROCESS_DATA: AllProcessData = {
    "Gestión Estratégica": {
        planning: {
            mensual: [
                {
                    title: "Plan de Accion",
                    items: [
                        { name: "ENERO", status: PlanStatus.Completed, value: 8.0 },
                        { name: "FEBRERO", status: PlanStatus.Completed, value: 8.0 },
                        { name: "MARZO", status: PlanStatus.Completed, value: 8.0 },
                        { name: "ABRIL", status: PlanStatus.Completed, value: 8.0 },
                        { name: "MAYO", status: PlanStatus.Completed, value: 8.0 },
                        { name: "JUNIO", status: PlanStatus.Completed, value: 8.0 },
                        { name: "JULIO", status: PlanStatus.Missing, value: 0.0 },
                        { name: "AGOSTO", status: PlanStatus.Missing, value: 0.0 },
                        { name: "SEPTIEMBRE", status: PlanStatus.Missing, value: 0.0 },
                        { name: "OCTUBRE", status: PlanStatus.Missing, value: 0.0 },
                        { name: "NOVIEMBRE", status: PlanStatus.NotStarted, value: 0.0 },
                        { name: "DICIEMBRE", status: PlanStatus.NotStarted, value: 0.0 },
                    ],
                    total: 50.0,
                },
                {
                    title: "REPORTE PIP",
                    items: [
                        { name: "ENERO", status: PlanStatus.Completed, value: 8.0 },
                        { name: "FEBRERO", status: PlanStatus.Completed, value: 8.0 },
                        { name: "MARZO", status: PlanStatus.Completed, value: 8.0 },
                        { name: "ABRIL", status: PlanStatus.Completed, value: 8.0 },
                        { name: "MAYO", status: PlanStatus.Completed, value: 8.0 },
                        { name: "JUNIO", status: PlanStatus.Completed, value: 8.0 },
                        { name: "JULIO", status: PlanStatus.Missing, value: 0.0 },
                        { name: "AGOSTO", status: PlanStatus.Missing, value: 0.0 },
                        { name: "SEPTIEMBRE", status: PlanStatus.Missing, value: 0.0 },
                        { name: "OCTUBRE", status: PlanStatus.Missing, value: 0.0 },
                        { name: "NOVIEMBRE", status: PlanStatus.NotStarted, value: 0.0 },
                        { name: "DICIEMBRE", status: PlanStatus.NotStarted, value: 0.0 },
                    ],
                    total: 50.0,
                },
            ],
            trimestral: [
                {
                    title: "Reporte indicadores",
                    items: [
                        { name: "1 TRIMESTRE", status: PlanStatus.Completed, value: 33.1 },
                        { name: "2 TRIMESTRE", status: PlanStatus.Completed, value: 33.1 },
                        { name: "3 TRIMESTRE", status: PlanStatus.NotStarted, value: 0.0 },
                    ],
                    total: 66.2,
                },
            ],
            cuatrimestral: [
                {
                    title: "Matriz de aspectos e impacto ambientales",
                    items: [
                        { name: "1 CUATRIMESTRE", status: PlanStatus.Completed, value: 33.1 },
                        { name: "2 CUATRIMESTRE", status: PlanStatus.Missing, value: 0.0 },
                        { name: "3 CUATRIMESTRE", status: PlanStatus.Missing, value: 0.0 },
                    ],
                    total: 33.1,
                },
                {
                    title: "Matriz IPVER",
                    items: [
                        { name: "1 CUATRIMESTRE", status: PlanStatus.Completed, value: 33.1 },
                        { name: "2 CUATRIMESTRE", status: PlanStatus.Missing, value: 0.0 },
                        { name: "3 CUATRIMESTRE", status: PlanStatus.Missing, value: 0.0 },
                    ],
                    total: 33.1,
                },
                {
                    title: "Programa de transparencia y ética publica",
                    items: [
                        { name: "1 CUATRIMESTRE", status: PlanStatus.Completed, value: 33.1 },
                        { name: "2 CUATRIMESTRE", status: PlanStatus.Completed, value: 33.1 },
                        { name: "3 CUATRIMESTRE", status: PlanStatus.Missing, value: 0.0 },
                    ],
                    total: 66.2,
                },
            ],
            semestral: [
                 {
                    title: "Matriz de riesgos y oportunidades",
                    items: [
                        { name: "1 SEMESTRE", status: PlanStatus.Completed, value: 50.0 },
                        { name: "2 SEMESTRE", status: PlanStatus.NotStarted, value: 0.0 },
                    ],
                    total: 50.0,
                },
                {
                    title: "Jornadas inducción y re-induccion",
                    items: [
                        { name: "1 SEMESTRE", status: PlanStatus.Completed, value: 50.0 },
                        { name: "2 SEMESTRE", status: PlanStatus.NotStarted, value: 0.0 },
                    ],
                    total: 50.0,
                },
                {
                    title: "Matriz de requisitos legales",
                    items: [
                        { name: "1 SEMESTRE", status: PlanStatus.Completed, value: 50.0 },
                        { name: "2 SEMESTRE", status: PlanStatus.NotStarted, value: 0.0 },
                    ],
                    total: 50.0,
                },
            ],
            anual: [
                 {
                    title: "Reporte del tratamiento producto o servicio no conforme",
                    items: [{ name: "ANUAL", status: PlanStatus.Completed, value: 100.0 }],
                    total: 100.0,
                },
                {
                    title: "Reporte producto o servicio no conforme",
                    items: [{ name: "ANUAL", status: PlanStatus.Completed, value: 100.0 }],
                    total: 100.0,
                },
                {
                    title: "Gestion del cambio",
                    items: [{ name: "ANUAL", status: PlanStatus.Completed, value: 100.0 }],
                    total: 100.0,
                },
                {
                    title: "Reporte FURAG",
                    items: [{ name: "ANUAL", status: PlanStatus.Completed, value: 100.0 }],
                    total: 100.0,
                },
                {
                    title: "Reporte ITA",
                    items: [{ name: "ANUAL", status: PlanStatus.Completed, value: 100.0 }],
                    total: 100.0,
                },
                {
                    title: "POAI",
                    items: [{ name: "ANUAL", status: PlanStatus.Completed, value: 100.0 }],
                    total: 100.0,
                },
                {
                    title: "Programa de Transparencia Ética y Pública",
                    items: [{ name: "ANUAL", status: PlanStatus.Missing, value: 0.0 }],
                    total: 0.0,
                },
            ],
        },
        documentation: [
            { name: "ACTUALIZACIÓN CARACTERIZACIÓN DE PROCESOS 2025", status: VerificationStatus.SI },
            { name: "ACTUALIZACIÓN DE INDICADORES 2025", status: VerificationStatus.SI },
            { name: "CIERRE 2024", status: VerificationStatus.SI },
            { name: "SEGUIMIENTO INDICADORES 1er TRIMESTRE", status: VerificationStatus.PENDIENTE },
        ],
        tracking: [
            { name: "Plan de Acción", months: [true, true, true, true, true, true, true, true, true, true, false, false] },
            { name: "Presupuesto", months: [true, true, true, true, true, true, true, true, false, false, false, false] },
            { name: "Indicadores de Gestión", months: [true, true, true, true, true, true, true, false, false, false, false, false] },
            { name: "Plan de Mejoramiento", months: [true, true, true, true, true, false, false, false, false, false, false, false] },
            { name: "Matriz de Riesgos", months: [true, true, true, true, false, false, false, false, false, false, false, false] },
        ]
    },
    "Gestión Integral de Riesgos": {
        planning: {
            mensual: [],
            trimestral: [],
            cuatrimestral: [],
            semestral: [
                {
                    title: "Matriz de riesgos y oportunidades",
                    items: [ { name: "1 SEMESTRE", status: PlanStatus.Completed, value: 50 }, { name: "2 SEMESTRE", status: PlanStatus.NotStarted, value: 0 }, ],
                    total: 50
                },
            ],
            anual: []
        },
        documentation: [
             { name: "CIERRE DE SEGUIMIENTO A OBJETIVOS DE GESTIÓN (MATRIZ DE RIESGOS Y OPORTUNIDADES) 2025", status: VerificationStatus.PENDIENTE },
            { name: "ACTUALIZACIÓN MATRIZ DE RIESGOS", status: VerificationStatus.NA },
            { name: "N° DE RIESGOS 2025", status: VerificationStatus.SI },
        ],
        tracking: [
            { name: "Plan de Acción", months: [true, true, true, false, false, false, false, false, false, false, false, false] },
            { name: "Presupuesto", months: [true, true, true, true, true, true, false, false, false, false, false, false] },
            { name: "Indicadores de Gestión", months: [true, true, true, true, true, true, true, true, true, false, false, false] },
            { name: "Plan de Mejoramiento", months: [true, false, false, false, false, false, false, false, false, false, false, false] },
            { name: "Matriz de Riesgos", months: [true, true, true, true, true, true, true, true, true, true, true, true] },
        ]
    },
    "Gestión Humana": {
       planning: {
            mensual: [],
            trimestral: [],
            cuatrimestral: [],
            semestral: [
                {
                    title: "Jornadas inducción y re-inducción",
                    items: [ { name: "1 SEMESTRE", status: PlanStatus.Completed, value: 50 }, { name: "2 SEMESTRE", status: PlanStatus.NotStarted, value: 0 }, ],
                    total: 50
                }
            ],
            anual: []
        },
        documentation: [
             { name: "N° DE ACCIONES CORRECTIVAS DE AUDITORIA INTERNA 2025", status: VerificationStatus.NO },
            { name: "CIERRE DE ACCIONES CORRECTIVAS DE AUDITORIA INTERNA 2025", status: VerificationStatus.NO },
        ],
        tracking: [
            { name: "Plan de Acción", months: [true, true, true, true, true, true, false, false, false, false, false, false] },
            { name: "Presupuesto", months: [true, true, true, true, true, true, false, false, false, false, false, false] },
            { name: "Indicadores de Gestión", months: [true, true, true, false, false, false, false, false, false, false, false, false] },
            { name: "Plan de Mejoramiento", months: [true, true, true, true, false, false, false, false, false, false, false, false] },
            { name: "Matriz de Riesgos", months: [true, true, false, false, false, false, false, false, false, false, false, false] },
        ]
    },
     "default": defaultData,
}