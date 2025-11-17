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
  "Operacion De Esquemas Empresariales",
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

export const allProcessCategories = [
    ...strategicProcesses,
    ...misionalProcesses,
    ...supportProcesses,
    ...evaluationProcesses,
];

const defaultDocumentation = [
    { name: "ACTUALIZACIÓN CARACTERIZACIÓN VIGENCIA 2025", status: VerificationStatus.PENDIENTE, value: "INICIA 01/01/2026" },
    { name: "N° DE INDICADORES 2024", status: VerificationStatus.PENDIENTE, value: "INICIA 01/01/202" },
    { name: "CIERRE 2024", status: VerificationStatus.PENDIENTE, value: "INICIA 01/01/202" },
    { name: "ACTUALIZACIÓN INDICADORES Feb-2025", status: VerificationStatus.PENDIENTE, value: "INICIA 01/01/202" },
    { name: "N° DE INDICADORES 2025", status: VerificationStatus.PENDIENTE, value: "INICIA 01/01/202" },
    { name: "SEGUIMIENTO INDICADORES 1er TRIMESTRE", status: VerificationStatus.PENDIENTE, value: "INICIA 01/01/2026" },
    { name: "ACTUALIZACIÓN FODA 2025", status: VerificationStatus.PENDIENTE, value: "INICIA 01/01/2026" },
    { name: "ACTUALIZACIÓN MATRIZ DE REQUISITOS LEGALES PRIMER SEMESTRE", status: VerificationStatus.PENDIENTE, value: "INICIA 01/01/202" },
    { name: "N° DE FORMATOS", status: VerificationStatus.PENDIENTE, value: "INICIA 01/01/202" },
    { name: "ACTUALIZACIÓN DE FORMATOS", status: VerificationStatus.PENDIENTE, value: "INICIA 01/01/2026" },
    { name: "N° DE PROCEDIMIENTOS", status: VerificationStatus.PENDIENTE, value: "INICIA 01/01/20" },
    { name: "ACTUALIZACIÓN DE PROCEDIMIENTOS", status: VerificationStatus.PENDIENTE, value: "INICIA 01/01/2026" },
    { name: "N° DE MANUALES", status: VerificationStatus.PENDIENTE, value: "INICIA 01/01/2026" },
    { name: "ACTUALIZACIÓN DE MANUALES", status: VerificationStatus.PENDIENTE, value: "INICIA 01/01/202" },
    { name: "ACTUALIZACION MATRIZ DE ASPECTOS E IMPACTOS AMBIENTALES", status: VerificationStatus.PENDIENTE, value: "INICIA 01/01/202" },
    { name: "ACTUALIZACION MATRIZ IPVR", status: VerificationStatus.PENDIENTE, value: "INICIA 01/01/202" },
    { name: "CIERRE DE SEGUIMIENTOS 2024 MATRIZ DE RIESGOS Y OPORTUNIDADES", status: VerificationStatus.PENDIENTE, value: "INICIA 01/01/2026" },
    { name: "ACTUALIZACION MATRIZ DE RIESGOS Y OPORTUNIDADES 2025", status: VerificationStatus.PENDIENTE, value: "INICIA 01/01/202" },
    { name: "N° DE RIESGOS 2025", status: VerificationStatus.PENDIENTE, value: "INICIA 01/01/202" },
    { name: "N° DE ACCIONES CORRECTIVAS DE AUDITORIA INTERNA 2024", status: VerificationStatus.PENDIENTE, value: "INICIA 01/01/202" },
    { name: "CIERRE DE ACCIONES CORRECTIVAS DE AUDITORIA INTERNA 2025", status: VerificationStatus.PENDIENTE, value: "INICIA 01/01/202" },
    { name: "ACTUALIZACION MATRIZ PRODUCTO NO CONFORME", status: VerificationStatus.PENDIENTE, value: "INICIA 01/01/202" },
    { name: "ACTUALIZACIÓN MATRIZ GESTIÓN DEL CAMBIO", status: VerificationStatus.PENDIENTE, value: "INICIA 01/01/202" },
    { name: "PUBLICADO EN INTEGRA", status: VerificationStatus.PENDIENTE, value: "INICIA 01/01/2026" }
];


const defaultData = {
    planning: {
        mensual: [],
        trimestral: [],
        cuatrimestral: [],
        semestral: [],
        anual: [],
    },
    documentation: defaultDocumentation,
    tracking: [
        { name: "Plan de Acción", months: [false, false, false, false, false, false, false, false, false, false, false, false] },
    ],
    developmentPlanGoals: [],
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
                        { name: "JULIO", status: PlanStatus.Completed, value: 0.0 },
                        { name: "AGOSTO", status: PlanStatus.Completed, value: 0.0 },
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
                        { name: "3 CUATRIMESTRE", status: PlanStatus.NotStarted, value: 0.0 },
                    ],
                    total: 33.1,
                },
                {
                    title: "Matriz de riesgos y oportunidades",
                    items: [
                        { name: "1 CAUTRIMESTRE", status: PlanStatus.Missing, value: 0.0 },
                        { name: "2 CAUTRIMESTRE", status: PlanStatus.Missing, value: 0.0 },
                        { name: "3 CAUTRIMESTRE", status: PlanStatus.NotStarted, value: 0.0 },
                    ],
                    total: 0.0,
                },
                {
                    title: "Matriz IPVER",
                    items: [
                        { name: "1 CUATRIMESTRE", status: PlanStatus.Completed, value: 33.1 },
                        { name: "2 CUATRIMESTRE", status: PlanStatus.Completed, value: 33.1 },
                        { name: "3 CUATRIMESTRE", status: PlanStatus.NotStarted, value: 0.0 },
                    ],
                    total: 66.2,
                },
                {
                    title: "Programa de transparencia y ética publica",
                    items: [
                        { name: "1 CUATRIMESTRE", status: PlanStatus.Completed, value: 33.1 },
                        { name: "2 CUATRIMESTRE", status: PlanStatus.Completed, value: 33.1 },
                        { name: "3 CUATRIMESTRE", status: PlanStatus.NotStarted, value: 0.0 },
                    ],
                    total: 66.2,
                },
            ],
            semestral: [
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
        documentation: defaultDocumentation,
        tracking: [
            { name: "Plan de Acción", months: [true, true, true, true, true, true, true, true, false, false, false, false] },
        ],
        developmentPlanGoals: [
            {
                producto: "3206002-Documentos de lineamientos técnicos",
                indicador: "320600200-Documentos de lineamientos técnicos realizados",
                metaProductoCuatrienio: 1,
                meta2024Programado: 0,
                meta2024Ejecutado: 0,
                meta2025Programado: 0,
                meta2025Ejecutado: 0,
                ejecutado2025OP: 0,
            },
            {
                producto: "3206002-Documentos de lineamientos técnicos",
                indicador: "320600200-Documentos de lineamientos técnicos realizados",
                metaProductoCuatrienio: 1,
                meta2024Programado: 0,
                meta2024Ejecutado: 0,
                meta2025Programado: 0,
                meta2025Ejecutado: 0,
                ejecutado2025OP: 0,
            },
            {
                producto: "4599018-Documentos de lineamientos técnicos realizados",
                indicador: "459901800-Documentos de lineamientos técnicos realizados",
                metaProductoCuatrienio: 4,
                meta2024Programado: 0,
                meta2024Ejecutado: 0,
                meta2025Programado: 2,
                meta2025Ejecutado: 0,
                ejecutado2025OP: 0,
            },
        ],
        improvementPlan: {
          hallazgos: 'FALTA DE DOCUMNETACION',
          fortalezas: 'BUENA ORGANIZACION',
          planDeMejoramiento: 'Ya realizado',
        },
    },
    "Gestión Integral de Riesgos": {
        planning: {
            mensual: [
                {
                    title: "Plan De Accion",
                    items: [
                        { name: "ENERO", status: PlanStatus.Completed, value: 8.0 },
                        { name: "FEBRERO", status: PlanStatus.Completed, value: 8.0 },
                        { name: "MARZO", status: PlanStatus.Completed, value: 8.0 },
                        { name: "ABRIL", status: PlanStatus.Completed, value: 8.0 },
                        { name: "MAYO", status: PlanStatus.Completed, value: 8.0 },
                        { name: "JUNIO", status: PlanStatus.Completed, value: 8.0 },
                        { name: "JULIO", status: PlanStatus.Completed, value: 8.0 },
                        { name: "AGOSTO", status: PlanStatus.Missing, value: 0.0 },
                        { name: "SEPTIEMBRE", status: PlanStatus.Missing, value: 0.0 },
                        { name: "OCTUBRE", status: PlanStatus.Missing, value: 0.0 },
                        { name: "NOVIEMBRE", status: PlanStatus.NotStarted, value: 0.0 },
                        { name: "DICIEMBRE", status: PlanStatus.NotStarted, value: 0.0 },
                    ],
                    total: 59.0,
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
                    title: "Matriz de aspectos e impactos ambientales",
                    items: [
                        { name: "1 CAUTRIMESTRE", status: PlanStatus.Completed, value: 33.1 },
                        { name: "2 CAUTRIMESTRE", status: PlanStatus.Missing, value: 0.0 },
                        { name: "3 CUATRIMESTRE", status: PlanStatus.NotStarted, value: 0.0 },
                    ],
                    total: 33.1,
                },
                {
                    title: "Matriz de riesgos y oportunidades",
                    items: [
                        { name: "1 CAUTRIMESTRE", status: PlanStatus.Missing, value: 0.0 },
                        { name: "2 CAUTRIMESTRE", status: PlanStatus.Missing, value: 0.0 },
                        { name: "3 CUATRIMESTRE", status: PlanStatus.NotStarted, value: 0.0 },
                    ],
                    total: 0.0,
                },
                {
                    title: "Matriz IPVER",
                    items: [
                        { name: "1 CAUTRIMESTRE", status: PlanStatus.Completed, value: 33.1 },
                        { name: "2 CAUTRIMESTRE", status: PlanStatus.Missing, value: 0.0 },
                        { name: "3 CUATRIMESTRE", status: PlanStatus.NotStarted, value: 0.0 },
                    ],
                    total: 33.1,
                },
                {
                    title: "Programa de transparencia y ética publica",
                    items: [
                        { name: "1 CAUTRIMESTRE", status: PlanStatus.Completed, value: 33.1 },
                        { name: "2 CAUTRIMESTRE", status: PlanStatus.Completed, value: 33.1 },
                        { name: "3 CUATRIMESTRE", status: PlanStatus.NotStarted, value: 0.0 },
                    ],
                    total: 66.2,
                },
            ],
            semestral: [
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
                    title: "Programa De Transparencia Etica y Publica",
                    items: [{ name: "ANUAL", status: PlanStatus.Missing, value: 0.0 }],
                    total: 0.0,
                },
            ],
        },
        documentation: defaultDocumentation,
        tracking: [
            { name: "Plan de Acción", months: [true, true, true, true, true, true, true, false, false, false, false, false] },
        ],
        developmentPlanGoals: [],
        improvementPlan: {
          hallazgos: 'FALTA DE DOCUMNETACION',
          fortalezas: 'BUENA ORGANIZACION',
          planDeMejoramiento: 'Ya realizado',
        },
    },
    "Gestión del Conocimiento y la Innovación": defaultData,
    "Gestión del SIG": {
        planning: {
            mensual: [
                {
                    title: "Plan De Accion",
                    items: [
                        { name: "ENERO", status: PlanStatus.Completed, value: 8.0 },
                        { name: "FEBRERO", status: PlanStatus.Completed, value: 8.0 },
                        { name: "MARZO", status: PlanStatus.Completed, value: 8.0 },
                        { name: "ABRIL", status: PlanStatus.Completed, value: 8.0 },
                        { name: "MAYO", status: PlanStatus.Completed, value: 8.0 },
                        { name: "JUNIO", status: PlanStatus.Completed, value: 8.0 },
                        { name: "JULIO", status: PlanStatus.Completed, value: 8.0 },
                        { name: "AGOSTO", status: PlanStatus.Completed, value: 0.0 },
                        { name: "SEPTIEMBRE", status: PlanStatus.Missing, value: 0.0 },
                        { name: "OCTUBRE", status: PlanStatus.Missing, value: 0.0 },
                        { name: "NOVIEMBRE", status: PlanStatus.NotStarted, value: 0.0 },
                        { name: "DICIEMBRE", status: PlanStatus.NotStarted, value: 0.0 },
                    ],
                    total: 58.0,
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
                    title: "Matriz de aspectos e impactos ambientales",
                    items: [
                        { name: "1 CAUTRIMESTRE", status: PlanStatus.Completed, value: 33.1 },
                        { name: "2 CAUTRIMESTRE", status: PlanStatus.Missing, value: 0.0 },
                        { name: "3 CUATRIMESTRE", status: PlanStatus.NotStarted, value: 0.0 },
                    ],
                    total: 33.1,
                },
                {
                    title: "Matriz de riesgos y oportunidades",
                    items: [
                        { name: "1 CAUTRIMESTRE", status: PlanStatus.Missing, value: 0.0 },
                        { name: "2 CAUTRIMESTRE", status: PlanStatus.Missing, value: 0.0 },
                        { name: "3 CAUTRIMESTRE", status: PlanStatus.NotStarted, value: 0.0 },
                    ],
                    total: 0.0,
                },
                 {
                    title: "Matriz IPVER",
                    items: [
                        { name: "1 CAUTRIMESTRE", status: PlanStatus.Completed, value: 33.1 },
                        { name: "2 CAUTRIMESTRE", status: PlanStatus.Missing, value: 0.0 },
                        { name: "3 CUATRIMESTRE", status: PlanStatus.NotStarted, value: 0.0 },
                    ],
                    total: 33.1,
                },
                {
                    title: "Programa de transparencia y ética publica",
                    items: [
                        { name: "1 CAUTRIMESTRE", status: PlanStatus.Completed, value: 33.1 },
                        { name: "2 CAUTRIMESTRE", status: PlanStatus.Completed, value: 33.1 },
                        { name: "3 CUATRIMESTRE", status: PlanStatus.NotStarted, value: 0.0 },
                    ],
                    total: 66.2,
                },
            ],
            semestral: [
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
                    title: "Programa De Transparencia Etica y Publica",
                    items: [{ name: "ANUAL", status: PlanStatus.Missing, value: 0.0 }],
                    total: 0.0,
                },
            ],
        },
        documentation: defaultDocumentation,
        tracking: [
            { name: "Plan de Acción", months: [true, true, true, true, true, true, true, true, false, false, false, false] },
        ],
        developmentPlanGoals: [],
        improvementPlan: {
          hallazgos: 'FALTA DE DOCUMNETACION',
          fortalezas: 'BUENA ORGANIZACION',
          planDeMejoramiento: 'Ya realizado',
        },
    },
    "Comunicación y Participación Ciudadana": {
        planning: {
            mensual: [
                {
                    title: "Plan De Accion",
                    items: [
                        { name: "ENERO", status: PlanStatus.Completed, value: 8.0 },
                        { name: "FEBRERO", status: PlanStatus.Completed, value: 8.0 },
                        { name: "MARZO", status: PlanStatus.Completed, value: 8.0 },
                        { name: "ABRIL", status: PlanStatus.Completed, value: 8.0 },
                        { name: "MAYO", status: PlanStatus.Completed, value: 8.0 },
                        { name: "JUNIO", status: PlanStatus.Completed, value: 8.0 },
                        { name: "JULIO", status: PlanStatus.Completed, value: 8.0 },
                        { name: "AGOSTO", status: PlanStatus.Completed, value: 8.0 },
                        { name: "SEPTIEMBRE", status: PlanStatus.Completed, value: 8.0 },
                        { name: "OCTUBRE", status: PlanStatus.Completed, value: 8.0 },
                        { name: "NOVIEMBRE", status: PlanStatus.NotStarted, value: 0.0 },
                        { name: "DICIEMBRE", status: PlanStatus.NotStarted, value: 0.0 },
                    ],
                    total: 84.0,
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
                    title: "Matriz de aspectos e impactos ambientales",
                    items: [
                        { name: "1 CAUTRIMESTRE", status: PlanStatus.Completed, value: 33.1 },
                        { name: "2 CAUTRIMESTRE", status: PlanStatus.Missing, value: 0.0 },
                        { name: "3 CUATRIMESTRE", status: PlanStatus.NotStarted, value: 0.0 },
                    ],
                    total: 33.1,
                },
                {
                    title: "Matriz de riesgos y oportunidades",
                    items: [
                        { name: "1 CAUTRIMESTRE", status: PlanStatus.Missing, value: 0.0 },
                        { name: "2 CAUTRIMESTRE", status: PlanStatus.Missing, value: 0.0 },
                        { name: "3 CAUTRIMESTRE", status: PlanStatus.NotStarted, value: 0.0 },
                    ],
                    total: 0.0,
                },
                 {
                    title: "Matriz IPVER",
                    items: [
                        { name: "1 CAUTRIMESTRE", status: PlanStatus.Completed, value: 33.1 },
                        { name: "2 CAUTRIMESTRE", status: PlanStatus.Missing, value: 0.0 },
                        { name: "3 CUATRIMESTRE", status: PlanStatus.NotStarted, value: 0.0 },
                    ],
                    total: 33.1,
                },
                {
                    title: "Programa de transparencia y ética publica",
                    items: [
                        { name: "1 CAUTRIMESTRE", status: PlanStatus.Completed, value: 33.1 },
                        { name: "2 CAUTRIMESTRE", status: PlanStatus.Completed, value: 33.1 },
                        { name: "3 CUATRIMESTRE", status: PlanStatus.NotStarted, value: 0.0 },
                    ],
                    total: 66.2,
                },
            ],
            semestral: [
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
                    title: "Programa De Transparencia Etica y Publica",
                    items: [{ name: "ANUAL", status: PlanStatus.Missing, value: 0.0 }],
                    total: 0.0,
                },
            ],
        },
        documentation: defaultDocumentation,
        tracking: [
            { name: "Plan de Acción", months: [true, true, true, true, true, true, true, true, true, true, false, false] },
        ],
        developmentPlanGoals: [],
        improvementPlan: {
          hallazgos: 'FALTA DE DOCUMNETACION',
          fortalezas: 'BUENA ORGANIZACION',
          planDeMejoramiento: 'Ya realizado',
        },
    },
    "Gestión Tecnológica": {
        planning: {
            mensual: [
                {
                    title: "Plan De Accion",
                    items: [
                        { name: "ENERO", status: PlanStatus.Completed, value: 8.0 },
                        { name: "FEBRERO", status: PlanStatus.Completed, value: 8.0 },
                        { name: "MARZO", status: PlanStatus.Completed, value: 8.0 },
                        { name: "ABRIL", status: PlanStatus.Completed, value: 8.0 },
                        { name: "MAYO", status: PlanStatus.Completed, value: 8.0 },
                        { name: "JUNIO", status: PlanStatus.Completed, value: 8.0 },
                        { name: "JULIO", status: PlanStatus.Completed, value: 8.0 },
                        { name: "AGOSTO", status: PlanStatus.Completed, value: 8.0 },
                        { name: "SEPTIEMBRE", status: PlanStatus.Completed, value: 8.0 },
                        { name: "OCTUBRE", status: PlanStatus.Missing, value: 0.0 },
                        { name: "NOVIEMBRE", status: PlanStatus.NotStarted, value: 0.0 },
                        { name: "DICIEMBRE", status: PlanStatus.NotStarted, value: 0.0 },
                    ],
                    total: 76.0,
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
                    title: "Matriz de aspectos e impactos ambientales",
                    items: [
                        { name: "1 CAUTRIMESTRE", status: PlanStatus.Completed, value: 33.1 },
                        { name: "2 CAUTRIMESTRE", status: PlanStatus.Missing, value: 0.0 },
                        { name: "3 CUATRIMESTRE", status: PlanStatus.NotStarted, value: 0.0 },
                    ],
                    total: 33.1,
                },
                {
                    title: "Matriz de riesgos y oportunidades",
                    items: [
                        { name: "1 CAUTRIMESTRE", status: PlanStatus.Missing, value: 0.0 },
                        { name: "2 CAUTRIMESTRE", status: PlanStatus.Missing, value: 0.0 },
                        { name: "3 CAUTRIMESTRE", status: PlanStatus.NotStarted, value: 0.0 },
                    ],
                    total: 0.0,
                },
                 {
                    title: "Matriz IPVER",
                    items: [
                        { name: "1 CAUTRIMESTRE", status: PlanStatus.Completed, value: 33.1 },
                        { name: "2 CAUTRIMESTRE", status: PlanStatus.Missing, value: 0.0 },
                        { name: "3 CUATRIMESTRE", status: PlanStatus.NotStarted, value: 0.0 },
                    ],
                    total: 33.1,
                },
                {
                    title: "Programa de transparencia y ética publica",
                    items: [
                        { name: "1 CAUTRIMESTRE", status: PlanStatus.Completed, value: 33.1 },
                        { name: "2 CAUTRIMESTRE", status: PlanStatus.Completed, value: 33.1 },
                        { name: "3 CUATRIMESTRE", status: PlanStatus.NotStarted, value: 0.0 },
                    ],
                    total: 66.2,
                },
            ],
            semestral: [
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
                    title: "Programa De Transparencia Etica y Publica",
                    items: [{ name: "ANUAL", status: PlanStatus.Missing, value: 0.0 }],
                    total: 0.0,
                },
            ],
        },
        documentation: defaultDocumentation,
        tracking: [
            { name: "Plan de Acción", months: [true, true, true, true, true, true, true, true, true, false, false, false] },
        ],
        developmentPlanGoals: [],
        improvementPlan: {
          hallazgos: 'FALTA DE DOCUMNETACION',
          fortalezas: 'BUENA ORGANIZACION',
          planDeMejoramiento: 'Ya realizado',
        },
    },
    "Gestión de Operaciones Financieras": {
        planning: {
            mensual: [
                {
                    title: "Plan De Accion",
                    items: [
                        { name: "ENERO", status: PlanStatus.Completed, value: 8.0 },
                        { name: "FEBRERO", status: PlanStatus.Completed, value: 8.0 },
                        { name: "MARZO", status: PlanStatus.Completed, value: 8.0 },
                        { name: "ABRIL", status: PlanStatus.Completed, value: 8.0 },
                        { name: "MAYO", status: PlanStatus.Completed, value: 8.0 },
                        { name: "JUNIO", status: PlanStatus.Completed, value: 8.0 },
                        { name: "JULIO", status: PlanStatus.Completed, value: 8.0 },
                        { name: "AGOSTO", status: PlanStatus.Completed, value: 8.0 },
                        { name: "SEPTIEMBRE", status: PlanStatus.Missing, value: 0.0 },
                        { name: "OCTUBRE", status: PlanStatus.Missing, value: 0.0 },
                        { name: "NOVIEMBRE", status: PlanStatus.NotStarted, value: 0.0 },
                        { name: "DICIEMBRE", status: PlanStatus.NotStarted, value: 0.0 },
                    ],
                    total: 67.0,
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
                    title: "Matriz de aspectos e impactos ambientales",
                    items: [
                        { name: "1 CAUTRIMESTRE", status: PlanStatus.Completed, value: 33.1 },
                        { name: "2 CAUTRIMESTRE", status: PlanStatus.Missing, value: 0.0 },
                        { name: "3 CUATRIMESTRE", status: PlanStatus.NotStarted, value: 0.0 },
                    ],
                    total: 33.1,
                },
                {
                    title: "Matriz de riesgos y oportunidades",
                    items: [
                        { name: "1 CAUTRIMESTRE", status: PlanStatus.Missing, value: 0.0 },
                        { name: "2 CAUTRIMESTRE", status: PlanStatus.Missing, value: 0.0 },
                        { name: "3 CAUTRIMESTRE", status: PlanStatus.NotStarted, value: 0.0 },
                    ],
                    total: 0.0,
                },
                 {
                    title: "Matriz IPVER",
                    items: [
                        { name: "1 CAUTRIMESTRE", status: PlanStatus.Completed, value: 33.1 },
                        { name: "2 CAUTRIMESTRE", status: PlanStatus.Missing, value: 0.0 },
                        { name: "3 CUATRIMESTRE", status: PlanStatus.NotStarted, value: 0.0 },
                    ],
                    total: 33.1,
                },
                {
                    title: "Programa de transparencia y ética publica",
                    items: [
                        { name: "1 CAUTRIMESTRE", status: PlanStatus.Completed, value: 33.1 },
                        { name: "2 CAUTRIMESTRE", status: PlanStatus.Completed, value: 33.1 },
                        { name: "3 CUATRIMESTRE", status: PlanStatus.NotStarted, value: 0.0 },
                    ],
                    total: 66.2,
                },
            ],
            semestral: [
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
                    title: "Programa De Transparencia Etica y Publica",
                    items: [{ name: "ANUAL", status: PlanStatus.Missing, value: 0.0 }],
                    total: 0.0,
                },
            ],
        },
        documentation: defaultDocumentation,
        tracking: [
            { name: "Plan de Acción", months: [true, true, true, true, true, true, true, true, false, false, false, false] },
        ],
        developmentPlanGoals: [],
        improvementPlan: {
          hallazgos: 'FALTA DE DOCUMNETACION',
          fortalezas: 'BUENA ORGANIZACION',
          planDeMejoramiento: 'Ya realizado',
        },
    },
    "Gestión de Proyectos de Promoción y Desarrollo": {
        planning: {
            mensual: [
                {
                    title: "Plan De Accion",
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
                    title: "Matriz de aspectos e impactos ambientales",
                    items: [
                        { name: "1 CAUTRIMESTRE", status: PlanStatus.Completed, value: 33.1 },
                        { name: "2 CAUTRIMESTRE", status: PlanStatus.Missing, value: 0.0 },
                        { name: "3 CUATRIMESTRE", status: PlanStatus.NotStarted, value: 0.0 },
                    ],
                    total: 33.1,
                },
                {
                    title: "Matriz de riesgos y oportunidades",
                    items: [
                        { name: "1 CAUTRIMESTRE", status: PlanStatus.Missing, value: 0.0 },
                        { name: "2 CAUTRIMESTRE", status: PlanStatus.Missing, value: 0.0 },
                        { name: "3 CAUTRIMESTRE", status: PlanStatus.NotStarted, value: 0.0 },
                    ],
                    total: 0.0,
                },
                 {
                    title: "Matriz IPVER",
                    items: [
                        { name: "1 CAUTRIMESTRE", status: PlanStatus.Completed, value: 33.1 },
                        { name: "2 CAUTRIMESTRE", status: PlanStatus.Missing, value: 0.0 },
                        { name: "3 CUATRIMESTRE", status: PlanStatus.NotStarted, value: 0.0 },
                    ],
                    total: 33.1,
                },
                {
                    title: "Programa de transparencia y ética publica",
                    items: [
                        { name: "1 CAUTRIMESTRE", status: PlanStatus.Completed, value: 33.1 },
                        { name: "2 CAUTRIMESTRE", status: PlanStatus.Completed, value: 33.1 },
                        { name: "3 CUATRIMESTRE", status: PlanStatus.NotStarted, value: 0.0 },
                    ],
                    total: 66.2,
                },
            ],
            semestral: [
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
                    title: "Programa De Transparencia Etica y Publica",
                    items: [{ name: "ANUAL", status: PlanStatus.Missing, value: 0.0 }],
                    total: 0.0,
                },
            ],
        },
        documentation: defaultDocumentation,
        tracking: [
            { name: "Plan de Acción", months: [true, true, true, true, true, true, false, false, false, false, false, false] },
        ],
        developmentPlanGoals: [],
        improvementPlan: {
          hallazgos: 'FALTA DE DOCUMENTACION',
          fortalezas: 'BUENA ORGANIZACION',
          planDeMejoramiento: 'Ya realizado',
        },
        subProcesses: {
            "Panóptico": {
                planning: {
                    mensual: [
                        {
                            title: "Plan De Accion",
                            items: [
                                { name: "ENERO", status: PlanStatus.Completed, value: 8.0 },
                                { name: "FEBRERO", status: PlanStatus.Completed, value: 8.0 },
                                { name: "MARZO", status: PlanStatus.Completed, value: 8.0 },
                                { name: "ABRIL", status: PlanStatus.Completed, value: 8.0 },
                                { name: "MAYO", status: PlanStatus.Completed, value: 8.0 },
                                { name: "JUNIO", status: PlanStatus.Completed, value: 8.0 },
                                { name: "JULIO", status: PlanStatus.Completed, value: 8.0 },
                                { name: "AGOSTO", status: PlanStatus.Completed, value: 8.0 },
                                { name: "SEPTIEMBRE", status: PlanStatus.Missing, value: 0.0 },
                                { name: "OCTUBRE", status: PlanStatus.Missing, value: 0.0 },
                                { name: "NOVIEMBRE", status: PlanStatus.NotStarted, value: 0.0 },
                                { name: "DICIEMBRE", status: PlanStatus.NotStarted, value: 0.0 },
                            ],
                            total: 67.0,
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
                            title: "Matriz de aspectos e impactos ambientales",
                            items: [
                                { name: "1 CAUTRIMESTRE", status: PlanStatus.Completed, value: 33.1 },
                                { name: "2 CAUTRIMESTRE", status: PlanStatus.Missing, value: 0.0 },
                                { name: "3 CUATRIMESTRE", status: PlanStatus.NotStarted, value: 0.0 },
                            ],
                            total: 33.1,
                        },
                        {
                            title: "Matriz de riesgos y oportunidades",
                            items: [
                                { name: "1 CAUTRIMESTRE", status: PlanStatus.Missing, value: 0.0 },
                                { name: "2 CAUTRIMESTRE", status: PlanStatus.Missing, value: 0.0 },
                                { name: "3 CUATRIMESTRE", status: PlanStatus.NotStarted, value: 0.0 },
                            ],
                            total: 0.0,
                        },
                        {
                            title: "Matriz IPVER",
                            items: [
                                { name: "1 CAUTRIMESTRE", status: PlanStatus.Completed, value: 33.1 },
                                { name: "2 CAUTRIMESTRE", status: PlanStatus.Missing, value: 0.0 },
                                { name: "3 CUATRIMESTRE", status: PlanStatus.NotStarted, value: 0.0 },
                            ],
                            total: 33.1,
                        },
                        {
                            title: "Programa de transparencia y ética publica",
                            items: [
                                { name: "1 CAUTRIMESTRE", status: PlanStatus.Completed, value: 33.1 },
                                { name: "2 CAUTRIMESTRE", status: PlanStatus.Completed, value: 33.1 },
                                { name: "3 CUATRIMESTRE", status: PlanStatus.NotStarted, value: 0.0 },
                            ],
                            total: 66.2,
                        },
                    ],
                    semestral: [
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
                            title: "Programa De Transparencia Etica y Publica",
                            items: [{ name: "ANUAL", status: PlanStatus.Missing, value: 0.0 }],
                            total: 0.0,
                        },
                    ],
                },
                documentation: defaultDocumentation,
                tracking: [
                    { name: "Plan de Acción", months: [true, true, true, true, true, true, true, true, false, false, false, false] },
                ],
                developmentPlanGoals: [
                    {
                        producto: "330207-Servicios de restauración del patrimonio cultural material inmueble",
                        indicador: "330207300-Restauraciones realizadas",
                        metaProductoCuatrienio: 5,
                        meta2024Programado: 1,
                        meta2024Ejecutado: 1,
                        meta2025Programado: 1,
                        meta2025Ejecutado: 1,
                        ejecutado2025OP: 635354566,
                    },
                ],
                improvementPlan: {
                    hallazgos: 'FALTA DE DOCUMNETACION',
                    fortalezas: 'BUENA ORGANIZACION',
                    planDeMejoramiento: 'Ya realizado',
                },
            },
            "Bicicletas": {
                planning: {
                    mensual: [
                        {
                            title: "Plan De Accion",
                            items: [
                                { name: "ENERO", status: PlanStatus.Completed, value: 8.0 },
                                { name: "FEBRERO", status: PlanStatus.Completed, value: 8.0 },
                                { name: "MARZO", status: PlanStatus.Completed, value: 8.0 },
                                { name: "ABRIL", status: PlanStatus.Completed, value: 8.0 },
                                { name: "MAYO", status: PlanStatus.Completed, value: 8.0 },
                                { name: "JUNIO", status: PlanStatus.Completed, value: 8.0 },
                                { name: "JULIO", status: PlanStatus.Completed, value: 8.0 },
                                { name: "AGOSTO", status: PlanStatus.Completed, value: 8.0 },
                                { name: "SEPTIEMBRE", status: PlanStatus.Missing, value: 0.0 },
                                { name: "OCTUBRE", status: PlanStatus.Missing, value: 0.0 },
                                { name: "NOVIEMBRE", status: PlanStatus.NotStarted, value: 0.0 },
                                { name: "DICIEMBRE", status: PlanStatus.NotStarted, value: 0.0 },
                            ],
                            total: 67.0,
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
                            title: "Matriz de aspectos e impactos ambientales",
                            items: [
                                { name: "1 CAUTRIMESTRE", status: PlanStatus.Completed, value: 33.1 },
                                { name: "2 CAUTRIMESTRE", status: PlanStatus.Missing, value: 0.0 },
                                { name: "3 CUATRIMESTRE", status: PlanStatus.NotStarted, value: 0.0 },
                            ],
                            total: 33.1,
                        },
                        {
                            title: "Matriz de riesgos y oportunidades",
                            items: [
                                { name: "1 CAUTRIMESTRE", status: PlanStatus.Missing, value: 0.0 },
                                { name: "2 CAUTRIMESTRE", status: PlanStatus.Missing, value: 0.0 },
                                { name: "3 CAUTRIMESTRE", status: PlanStatus.NotStarted, value: 0.0 },
                            ],
                            total: 0.0,
                        },
                        {
                            title: "Matriz IPVER",
                            items: [
                                { name: "1 CAUTRIMESTRE", status: PlanStatus.Completed, value: 33.1 },
                                { name: "2 CAUTRIMESTRE", status: PlanStatus.Missing, value: 0.0 },
                                { name: "3 CUATRIMESTRE", status: PlanStatus.NotStarted, value: 0.0 },
                            ],
                            total: 33.1,
                        },
                        {
                            title: "Programa de transparencia y ética publica",
                            items: [
                                { name: "1 CAUTRIMESTRE", status: PlanStatus.Completed, value: 33.1 },
                                { name: "2 CAUTRIMESTRE", status: PlanStatus.Completed, value: 33.1 },
                                { name: "3 CUATRIMESTRE", status: PlanStatus.NotStarted, value: 0.0 },
                            ],
                            total: 66.2,
                        },
                    ],
                    semestral: [
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
                            title: "Programa De Transparencia Etica y Publica",
                            items: [{ name: "ANUAL", status: PlanStatus.Missing, value: 0.0 }],
                            total: 0.0,
                        },
                    ],
                },
                documentation: defaultDocumentation,
                tracking: [
                    { name: "Plan de Acción", months: [true, true, true, true, true, true, true, true, false, false, false, false] },
                ],
                developmentPlanGoals: [
                    {
                        producto: "2408043-Estaciones mantenidas",
                        indicador: "240804300-Estaciones mantenidas",
                        metaProductoCuatrienio: 32,
                        meta2024Programado: 8,
                        meta2024Ejecutado: 8,
                        meta2025Programado: 8,
                        meta2025Ejecutado: 8,
                        ejecutado2025OP: 458260000,
                    },
                ],
                improvementPlan: {
                    hallazgos: 'FALTA DE DOCUMENTACION',
                    fortalezas: 'BUENA ORGANIZACION',
                    planDeMejoramiento: 'Ya realizado',
                },
            }
        }
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
             { name: "N° DE ACCIONES CORRECTIVAS DE AUDITORIA INTERNA 2025", status: VerificationStatus.PENDIENTE },
            { name: "CIERRE DE ACCIONES CORRECTIVAS DE AUDITORIA INTERNA 2025", status: VerificationStatus.PENDIENTE },
        ],
        tracking: [
            { name: "Plan de Acción", months: [true, true, true, true, true, true, false, false, false, false, false, false] },
        ],
        developmentPlanGoals: [],
    },
    "Gestión Financiera": defaultData,
    "Gestión Contractual": defaultData,
    "Gestión Jurídica": defaultData,
    "Gestión de Recursos Físicos": defaultData,
    "Gestión Documental": defaultData,
    "Gestión Control Disciplinario": defaultData,
    "Evaluación Independiente": defaultData,
    "Operacion De Esquemas Empresariales": {
        planning: {
            mensual: [],
            trimestral: [],
            cuatrimestral: [],
            semestral: [],
            anual: [],
        },
        documentation: [],
        tracking: [],
        developmentPlanGoals: [],
        subProcesses: {
            "Alumbrado Público": {
                ...defaultData,
                documentation: [
                    { name: "CONTRATO DE CONCESIÓN VIGENTE", status: VerificationStatus.PENDIENTE },
                    { name: "INFORME DE EXPANSIÓN Y MODERNIZACIÓN", status: VerificationStatus.PENDIENTE },
                    { name: "CERTIFICADO RETILAP", status: VerificationStatus.PENDIENTE },
                ],
                developmentPlanGoals: [
                    {
                        producto: "2102013-Redes de alumbrado público mejoradas",
                        indicador: "210201300-Luminarias modernizadas",
                        metaProductoCuatrienio: 6523,
                        meta2024Programado: 0,
                        meta2024Ejecutado: 0,
                        meta2025Programado: 2174,
                        meta2025Ejecutado: 1196,
                        ejecutado2025OP: 0,
                    },
                    {
                        producto: "2102010-Redes de alumbrado público ampliadas",
                        indicador: "210201000-Luminarias nuevas instaladas",
                        metaProductoCuatrienio: 300,
                        meta2024Programado: 0,
                        meta2024Ejecutado: 0,
                        meta2025Programado: 93,
                        meta2025Ejecutado: 201,
                        ejecutado2025OP: 0,
                    },
                ],
            },
            "Plazas de Mercado": defaultData,
            "Parques y Zonas Verdes": defaultData,
            "Relleno Sanitario": defaultData,
            "Gestión Cultural Panóptico": defaultData,
            "Atención al ciudadano": defaultData,
        },
    },
     "default": defaultData,
}