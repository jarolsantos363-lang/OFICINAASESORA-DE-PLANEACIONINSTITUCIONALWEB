
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
  "Atención al ciudadano",
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
    { name: "ACTUALIZACIÓN CARACTERIZACIÓN VIGENCIA 2025", status: VerificationStatus.PENDIENTE },
    { name: "N° DE INDICADORES 2024", status: VerificationStatus.PENDIENTE },
    { name: "CIERRE 2024", status: VerificationStatus.PENDIENTE },
    { name: "ACTUALIZACIÓN INDICADORES Feb-2025", status: VerificationStatus.PENDIENTE },
    { name: "N° DE INDICADORES 2025", status: VerificationStatus.PENDIENTE },
    { name: "SEGUIMIENTO INDICADORES 1er TRIMESTRE", status: VerificationStatus.PENDIENTE },
    { name: "ACTUALIZACIÓN FODA 2025", status: VerificationStatus.PENDIENTE },
    { name: "ACTUALIZACIÓN MATRIZ DE REQUISITOS LEGALES PRIMER SEMESTRE", status: VerificationStatus.PENDIENTE },
    { name: "N° DE FORMATOS", status: VerificationStatus.PENDIENTE },
    { name: "ACTUALIZACIÓN DE FORMATOS", status: VerificationStatus.PENDIENTE },
    { name: "N° DE PROCEDIMIENTOS", status: VerificationStatus.PENDIENTE },
    { name: "ACTUALIZACIÓN DE PROCEDIMIENTOS", status: VerificationStatus.PENDIENTE },
    { name: "N° DE MANUALES", status: VerificationStatus.PENDIENTE },
    { name: "ACTUALIZACIÓN DE MANUALES", status: VerificationStatus.PENDIENTE },
    { name: "ACTUALIZACION MATRIZ DE ASPECTOS E IMPACTOS AMBIENTALES", status: VerificationStatus.PENDIENTE },
    { name: "ACTUALIZACION MATRIZ IPVR", status: VerificationStatus.PENDIENTE },
    { name: "CIERRE DE SEGUIMIENTOS 2024 MATRIZ DE RIESGOS Y OPORTUNIDADES", status: VerificationStatus.PENDIENTE },
    { name: "ACTUALIZACION MATRIZ DE RIESGOS Y OPORTUNIDADES 2025", status: VerificationStatus.PENDIENTE },
    { name: "N° DE RIESGOS 2025", status: VerificationStatus.PENDIENTE },
    { name: "N° DE ACCIONES CORRECTIVAS DE AUDITORIA INTERNA 2024", status: VerificationStatus.PENDIENTE },
    { name: "CIERRE DE ACCIONES CORRECTIVAS DE AUDITORIA INTERNA 2025", status: VerificationStatus.PENDIENTE },
    { name: "ACTUALIZACION MATRIZ PRODUCTO NO CONFORME", status: VerificationStatus.PENDIENTE },
    { name: "ACTUALIZACIÓN MATRIZ GESTIÓN DEL CAMBIO", status: VerificationStatus.PENDIENTE },
    { name: "PUBLICADO EN INTEGRA", status: VerificationStatus.PENDIENTE }
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

const standardImprovementPlan = {
  hallazgos: 'FALTA DE DOCUMNETACION',
  fortalezas: 'BUENA ORGANIZACION',
  planDeMejoramiento: 'Ya realizado',
};

const standardPlanning = {
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
                producto: "3206002-Documentos de lineamientos técnicos- Estudio Tecnico implementacion solucion de servicios energeticos ecoeficientes",
                indicador: "320600200-Documentos de lineamientos técnicos realizados- Granja Solar",
                metaProductoCuatrienio: 1,
                meta2024Programado: 0,
                meta2024Ejecutado: 0,
                meta2025Programado: 0,
                meta2025Ejecutado: 0,
                ejecutado2025OP: 0,
            },
            {
                producto: "3206002-Documentos de lineamientos técnicos- Implemnetación ISO 14064 Gases de efecto inverndero",
                indicador: "320600200-Documentos de lineamientos técnicos realizados- Huella de Carbono ",
                metaProductoCuatrienio: 1,
                meta2024Programado: 0,
                meta2024Ejecutado: 0,
                meta2025Programado: 0,
                meta2025Ejecutado: 0,
                ejecutado2025OP: 0,
            },
            {
                producto: "4599018-Documentos de lineamientos técnicos realizados- Implementación regimen especial de control y vigilancia de la superintendencia financiera",
                indicador: "459901800-Documentos de lineamientos técnicos realizados- Calificadora de riesgos",
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
          hallazgos: 'FALTA DE DOCUMNETACION',
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
                        producto: "330207-Servicios de restauración del patrimonio cultural material inmueble",
                        indicador: "330207300-Restauraciones realizadas",
                        metaProductoCuatrienio: 4,
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
                    hallazgos: 'FALTA DE DOCUMNETACION',
                    fortalezas: 'BUENA ORGANIZACION',
                    planDeMejoramiento: 'Ya realizado',
                },
            },
            "Parques y Zonas Verdes": {
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
                    ...standardPlanning,
                },
                documentation: defaultDocumentation,
                tracking: [
                    { name: "Plan de Acción", months: [true, true, true, true, true, true, false, false, false, false, false, false] },
                ],
                developmentPlanGoals: [
                    {
                        producto: "4002023-Parques mejorados",
                        indicador: "400202300-Parques mejorados",
                        metaProductoCuatrienio: 1000,
                        meta2024Programado: 200,
                        meta2024Ejecutado: 1394,
                        meta2025Programado: 266,
                        meta2025Ejecutado: 13687,
                        ejecutado2025OP: 129085747,
                    },
                    {
                        producto: "4002022-Parques mantenidos",
                        indicador: "400202200-Parques mantenidos",
                        metaProductoCuatrienio: 407,
                        meta2024Programado: 30,
                        meta2024Ejecutado: 28,
                        meta2025Programado: 126,
                        meta2025Ejecutado: 75,
                        ejecutado2025OP: 85763667,
                    },
                    {
                        producto: "4002025-Zonas verdes adecuadas",
                        indicador: "400202500-Zonas verdes adecuadas",
                        metaProductoCuatrienio: 1500,
                        meta2024Programado: 200,
                        meta2024Ejecutado: 1106,
                        meta2025Programado: 433,
                        meta2025Ejecutado: 370,
                        ejecutado2025OP: 14270000,
                    },
                    {
                        producto: "4002026-Zonas verdes mantenidas",
                        indicador: "400202600-Zonas verdes mantenidas",
                        metaProductoCuatrienio: 1500,
                        meta2024Programado: 200,
                        meta2024Ejecutado: 1106,
                        meta2025Programado: 433,
                        meta2025Ejecutado: 370,
                        ejecutado2025OP: 8135461,
                    },
                ],
                improvementPlan: standardImprovementPlan,
            },
            "Relleno Sanitario": {
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
                    ...standardPlanning,
                },
                documentation: defaultDocumentation,
                tracking: [
                    { name: "Plan de Acción", months: [true, true, true, true, true, true, true, true, false, false, false, false] },
                ],
                developmentPlanGoals: [],
                 improvementPlan: standardImprovementPlan,
            },
        },
    },
    "Gestión Humana": {
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
            ...standardPlanning,
        },
        documentation: defaultDocumentation,
        tracking: [
            { name: "Plan de Acción", months: [true, true, true, true, true, true, true, true, false, false, false, false] },
        ],
        developmentPlanGoals: [],
        improvementPlan: standardImprovementPlan,
    },
    "Gestión Financiera": {
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
            ...standardPlanning,
        },
        documentation: defaultDocumentation,
        tracking: [
            { name: "Plan de Acción", months: [true, true, true, true, true, true, true, true, false, false, false, false] },
        ],
        developmentPlanGoals: [],
        improvementPlan: standardImprovementPlan,
    },
    "Gestión Contractual": {
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
            ...standardPlanning,
        },
        documentation: defaultDocumentation,
        tracking: [
            { name: "Plan de Acción", months: [true, true, true, true, true, true, true, true, true, true, false, false] },
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
        improvementPlan: standardImprovementPlan,
    },
    "Gestión Jurídica": {
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
            ...standardPlanning,
        },
        documentation: defaultDocumentation,
        tracking: [
            { name: "Plan de Acción", months: [true, true, true, true, true, true, true, true, false, false, false, false] },
        ],
        developmentPlanGoals: [],
        improvementPlan: standardImprovementPlan,
    },
    "Gestión de Recursos Físicos": {
        planning: {
            mensual: [
                 {
                    title: "Plan De Accion",
                    items: [
                        { name: "ENERO", status: PlanStatus.Completed, value: 8.0 },
                        { name: "FEBRERO", status: PlanStatus.Completed, value: 8.0 },
                        { name: "MARZO", status: PlanStatus.Completed, value: 8.0 },
                        { name: "ABRIL", status: PlanStatus.Completed, value: 8.0 },
                        { name: "MAYO", status: PlanStatus.Completed, value: 0.0 },
                        { name: "JUNIO", status: PlanStatus.Completed, value: 0.0 },
                        { name: "JULIO", status: PlanStatus.Completed, value: 0.0 },
                        { name: "AGOSTO", status: PlanStatus.Completed, value: 0.0 },
                        { name: "SEPTIEMBRE", status: PlanStatus.Missing, value: 0.0 },
                        { name: "OCTUBRE", status: PlanStatus.Missing, value: 0.0 },
                        { name: "NOVIEMBRE", status: PlanStatus.NotStarted, value: 0.0 },
                        { name: "DICIEMBRE", status: PlanStatus.NotStarted, value: 0.0 },
                    ],
                    total: 50.0,
                },
                 {
                    title: "Materializacion de riesgos operativos",
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
            ...standardPlanning,
        },
        documentation: defaultDocumentation,
        tracking: [
            { name: "Plan de Acción", months: [true, true, true, true, true, true, true, true, false, false, false, false] },
        ],
        developmentPlanGoals: [],
        improvementPlan: standardImprovementPlan,
    },
    "Gestión Documental": {
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
                 {
                    title: "Materializacion de riesgos operativos",
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
            ...standardPlanning,
        },
        documentation: defaultDocumentation,
        tracking: [
            { name: "Plan de Acción", months: [true, true, true, true, true, true, true, false, false, false, false, false] },
        ],
        developmentPlanGoals: [],
        improvementPlan: standardImprovementPlan,
    },
    "Gestión Control Disciplinario": {
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
                 {
                    title: "Materializacion de riesgos operativos",
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
            ...standardPlanning,
        },
        documentation: defaultDocumentation,
        tracking: [
            { name: "Plan de Acción", months: [true, true, true, true, true, true, true, true, false, false, false, false] },
        ],
        developmentPlanGoals: [],
        improvementPlan: standardImprovementPlan,
    },
    "Evaluación Independiente": {
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
                 {
                    title: "Materializacion de riesgos operativos",
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
            ...standardPlanning,
        },
        documentation: defaultDocumentation,
        tracking: [
            { name: "Plan de Acción", months: [true, true, true, true, true, true, true, true, false, false, false, false] },
        ],
        developmentPlanGoals: [],
        improvementPlan: standardImprovementPlan,
    },
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
                    ...standardPlanning,
                },
                 documentation: defaultDocumentation,
                tracking: [
                    { name: "Plan de Acción", months: [true, true, true, true, true, true, true, false, false, false, false, false] },
                ],
                developmentPlanGoals: [
                    {
                        producto: "2102013-Redes de alumbrado público mejoradas",
                        indicador: "210201300-Redes de alumbrado público mejoradas",
                        metaProductoCuatrienio: 6523,
                        meta2024Programado: 0,
                        meta2024Ejecutado: 182,
                        meta2025Programado: 2174,
                        meta2025Ejecutado: 1196,
                        ejecutado2025OP: 0,
                    },
                    {
                        producto: "2102010-Redes de alumbrado público ampliadas",
                        indicador: "210201000-Redes de alumbrado público ampliadas",
                        metaProductoCuatrienio: 300,
                        meta2024Programado: 20,
                        meta2024Ejecutado: 50,
                        meta2025Programado: 93,
                        meta2025Ejecutado: 201,
                        ejecutado2025OP: 0,
                    },
                ],
                improvementPlan: standardImprovementPlan,
            },
            "Plazas de Mercado": {
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
                                { name: "JUNIO", status: PlanStatus.Missing, value: 0.0 },
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
                    ...standardPlanning,
                },
                documentation: defaultDocumentation,
                tracking: [
                    { name: "Plan de Acción", months: [true, true, true, true, true, false, false, false, false, false, false, false] },
                ],
                developmentPlanGoals: [
                     {
                        producto: "4599016-Sedes mantenidas",
                        indicador: "459901600-Sedes mantenidas",
                        metaProductoCuatrienio: 9,
                        meta2024Programado: 4,
                        meta2024Ejecutado: 4,
                        meta2025Programado: 2,
                        meta2025Ejecutado: 4,
                        ejecutado2025OP: 0,
                    },
                ],
                improvementPlan: standardImprovementPlan,
            },
            "Parques y Zonas Verdes": {
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
                    ...standardPlanning,
                },
                documentation: defaultDocumentation,
                tracking: [
                    { name: "Plan de Acción", months: [true, true, true, true, true, true, false, false, false, false, false, false] },
                ],
                developmentPlanGoals: [
                    {
                        producto: "4002023-Parques mejorados",
                        indicador: "400202300-Parques mejorados",
                        metaProductoCuatrienio: 1000,
                        meta2024Programado: 200,
                        meta2024Ejecutado: 1394,
                        meta2025Programado: 266,
                        meta2025Ejecutado: 13687,
                        ejecutado2025OP: 129085747,
                    },
                    {
                        producto: "4002022-Parques mantenidos",
                        indicador: "400202200-Parques mantenidos",
                        metaProductoCuatrienio: 407,
                        meta2024Programado: 30,
                        meta2024Ejecutado: 30,
                        meta2025Programado: 126,
                        meta2025Ejecutado: 75,
                        ejecutado2025OP: 85763667,
                    },
                    {
                        producto: "4002025-Zonas verdes adecuadas",
                        indicador: "400202500-Zonas verdes adecuadas",
                        metaProductoCuatrienio: 1500,
                        meta2024Programado: 200,
                        meta2024Ejecutado: 1106,
                        meta2025Programado: 433,
                        meta2025Ejecutado: 370,
                        ejecutado2025OP: 14270000,
                    },
                    {
                        producto: "4002026-Zonas verdes mantenidas",
                        indicador: "400202600-Zonas verdes mantenidas",
                        metaProductoCuatrienio: 1500,
                        meta2024Programado: 200,
                        meta2024Ejecutado: 1106,
                        meta2025Programado: 433,
                        meta2025Ejecutado: 370,
                        ejecutado2025OP: 8135461,
                    },
                ],
                improvementPlan: standardImprovementPlan,
            },
            "Relleno Sanitario": {
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
                    ...standardPlanning,
                },
                documentation: defaultDocumentation,
                tracking: [
                    { name: "Plan de Acción", months: [true, true, true, true, true, true, true, true, false, false, false, false] },
                ],
                developmentPlanGoals: [],
                 improvementPlan: standardImprovementPlan,
            },
        },
    },
    "Atención al ciudadano": {
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
            ...standardPlanning,
        },
        documentation: defaultDocumentation,
        tracking: [
            { name: "Plan de Acción", months: [true, true, true, true, true, true, true, true, false, false, false, false] },
        ],
        developmentPlanGoals: [],
        improvementPlan: standardImprovementPlan,
    },
    "default": defaultData,
}
