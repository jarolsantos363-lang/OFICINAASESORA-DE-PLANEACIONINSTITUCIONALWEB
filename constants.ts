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
    { name: "ACTUALIZACIÓN CARACTERIZACIÓN VIGENCIA 2025", status: VerificationStatus.PENDIENTE },
    { name: "ACTUALIZACIÓN INDICADORES Feb-2025", status: VerificationStatus.PENDIENTE },
    { name: "SEGUIMIENTO INDICADORES 1er TRIMESTRE", status: VerificationStatus.NO },
    { name: "ACTUALIZACIÓN MATRIZ DE REQUISITOS LEGALES PRIMER SEMESTRE", status: VerificationStatus.NO },
    { name: "ACTUALIZACIÓN DE FORMATOS", status: VerificationStatus.SI },
    { name: "ACTUALIZACIÓN DE PROCEDIMIENTOS", status: VerificationStatus.NO },
    { name: "ACTUALIZACION MATRIZ DE RIESGOS Y OPORTUNIDADES 2025", status: VerificationStatus.PENDIENTE },
    { name: "PUBLICADO EN INTEGRA", status: VerificationStatus.SI }
];


const defaultData = {
    planning: {
        mensual: [
            { title: "Reporte de Actividades Mensual", items: [], total: 0.0 }
        ],
        trimestral: [
            { title: "Informe Trimestral de Gestión", items: [], total: 0.0 }
        ],
        cuatrimestral: [],
        semestral: [
            { title: "Evaluación Semestral de Objetivos", items: [], total: 0.0 }
        ],
        anual: [
            { title: "Plan de Acción Anual", items: [], total: 0.0 }
        ],
    },
    documentation: defaultDocumentation,
    tracking: [
        { name: "Plan de Acción", months: [false, false, false, false, false, false, false, false, false, false, false, false] },
        { name: "Presupuesto", months: [false, false, false, false, false, false, false, false, false, false, false, false] },
        { name: "Indicadores de Gestión", months: [false, false, false, false, false, false, false, false, false, false, false, false] },
        { name: "Plan de Mejoramiento", months: [false, false, false, false, false, false, false, false, false, false, false, false] },
        { name: "Matriz de Riesgos", months: [false, false, false, false, false, false, false, false, false, false, false, false] },
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
            { name: "ACTUALIZACIÓN CARACTERIZACIÓN VIGENCIA 2025", status: VerificationStatus.NA },
            { name: "N° DE INDICADORES 2024", status: VerificationStatus.SI, value: 3 },
            { name: "CIERRE 2024", status: VerificationStatus.SI },
            { name: "ACTUALIZACIÓN INDICADORES Feb-2025", status: VerificationStatus.PENDIENTE },
            { name: "N° DE INDICADORES 2025", status: VerificationStatus.NO },
            { name: "SEGUIMIENTO INDICADORES 1er TRIMESTRE", status: VerificationStatus.SI },
            { name: "ACTUALIZACIÓN RODA 2025", status: VerificationStatus.NO },
            { name: "ACTUALIZACIÓN MATRIZ DE REQUISITOS LEGALES PRIMER SEMESTRE", status: VerificationStatus.NO },
            { name: "N° DE FORMATOS", status: VerificationStatus.SI },
            { name: "ACTUALIZACIÓN DE FORMATOS", status: VerificationStatus.SI },
            { name: "N° DE PROCEDIMIENTOS", status: VerificationStatus.SI },
            { name: "ACTUALIZACIÓN DE PROCEDIMIENTOS", status: VerificationStatus.NO },
            { name: "N° DE MANUALES", status: VerificationStatus.SI },
            { name: "ACTUALIZACIÓN DE MANUALES", status: VerificationStatus.NO },
            { name: "ACTUALIZACIÓN MATRIZ DE ASPECTOS E IMPACTOS AMBIENTALES", status: VerificationStatus.SI },
            { name: "ACTUALIZACIÓN MATRIZ IPVR", status: VerificationStatus.SI },
            { name: "CIERRE DE SEGUIMIENTOS 2024 MATRIZ DE RIESGOS Y OPORTUNIDADES", status: VerificationStatus.SI },
            { name: "ACTUALIZACION MATRIZ DE RIESGOS Y OPORTUNIDADES 2025", status: VerificationStatus.NA },
            { name: "N° DE RIESGOS 2025", status: VerificationStatus.SI },
            { name: "N° DE ACCIONES CORRECTIVAS DE AUDITORIA INTERNA 2024", status: VerificationStatus.NO },
            { name: "CIERRE DE ACCIONES CORRECTIVAS DE AUDITORIA INTERNA 2025", status: VerificationStatus.NO },
            { name: "ACTUALIZACION MATRIZ PRODUCTO NO CONFORME", status: VerificationStatus.NO },
            { name: "ACTUALIZACIÓN MATRIZ GESTIÓN DEL CAMBIO", status: VerificationStatus.SI },
            { name: "PUBLICADO EN INTEGRA", status: VerificationStatus.SI }
        ],
        tracking: [
            { name: "Plan de Acción", months: [true, true, true, true, true, true, true, true, true, true, false, false] },
            { name: "Presupuesto", months: [true, true, true, true, true, true, true, true, false, false, false, false] },
            { name: "Indicadores de Gestión", months: [true, true, true, true, true, true, true, false, false, false, false, false] },
            { name: "Plan de Mejoramiento", months: [true, true, true, true, true, false, false, false, false, false, false, false] },
            { name: "Matriz de Riesgos", months: [true, true, true, true, false, false, false, false, false, false, false, false] },
        ],
        developmentPlanGoals: [
            {
                producto: "3206002-Documentos de lineamientos técnicos",
                metaProductoCuatrienio: 1,
                meta2025Programado: 0,
                meta2025Ejecutado: 0,
            },
            {
                producto: "3206002-Documentos de lineamientos técnicos",
                metaProductoCuatrienio: 1,
                meta2025Programado: 0,
                meta2025Ejecutado: 0,
            },
            {
                producto: "4599018-Documentos de lineamientos técnicos realizados",
                metaProductoCuatrienio: 4,
                meta2025Programado: 2,
                meta2025Ejecutado: 0,
            },
        ],
    },
    "Gestión Integral de Riesgos": {
        planning: {
            mensual: [],
            trimestral: [],
            cuatrimestral: [],
            semestral: [
                {
                    title: "Matriz de riscos y oportunidades",
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
        ],
        developmentPlanGoals: [],
    },
    "Gestión del Conocimiento y la Innovación": defaultData,
    "Gestión del SIG": defaultData,
    "Comunicación y Participación Ciudadana": defaultData,
    "Gestión Tecnológica": defaultData,
    "Gestión de Operaciones Financieras": defaultData,
    "Gestión de Proyectos de Promoción y Desarrollo": {
        planning: {
            mensual: [],
            trimestral: [
                {
                    title: "Seguimiento Contratos de Obra",
                    items: [
                        { name: "1 TRIMESTRE", status: PlanStatus.Completed, value: 33.1 },
                        { name: "2 TRIMESTRE", status: PlanStatus.Completed, value: 33.1 },
                        { name: "3 TRIMESTRE", status: PlanStatus.NotStarted, value: 0.0 },
                    ],
                    total: 66.2,
                },
            ],
            cuatrimestral: [],
            semestral: [],
            anual: [
                {
                    title: "Reporte Anual de Proyectos",
                    items: [{ name: "ANUAL", status: PlanStatus.NotStarted, value: 0.0 }],
                    total: 0.0,
                }
            ],
        },
        documentation: [
            { name: "ACTA DE INICIO PROYECTOS 2025", status: VerificationStatus.PENDIENTE },
            { name: "REVISIÓN AVANCES DE OBRA", status: VerificationStatus.SI },
            { name: "INFORME SUPERVISIÓN", status: VerificationStatus.NO },
            { name: "PUBLICADO EN SECOP", status: VerificationStatus.SI }
        ],
        tracking: [
            { name: "Ejecución Proyectos", months: [true, true, true, true, true, true, false, false, false, false, false, false] },
            { name: "Contratación", months: [true, true, false, false, false, false, false, false, false, false, false, false] },
        ],
        developmentPlanGoals: [],
        subProcesses: {
            "Panóptico": {
                ...defaultData,
                planning: {
                    ...defaultData.planning,
                    anual: [
                        {
                            title: "Plan de Eventos Culturales 2025",
                            items: [
                                { name: "ANUAL", status: PlanStatus.NotStarted, value: 0.0 }
                            ],
                            total: 0.0,
                        }
                    ],
                },
                documentation: [
                    { name: "CONVENIO INTERADMINISTRATIVO VIGENTE", status: VerificationStatus.SI },
                    { name: "INFORME DE GESTIÓN SEMESTRAL", status: VerificationStatus.PENDIENTE },
                    { name: "PÓLIZAS DE SEGURO AL DÍA", status: VerificationStatus.SI },
                    { name: "PLAN DE MANEJO PMU", status: VerificationStatus.NO },
                ],
            },
            "Bicicletas": {
                ...defaultData,
                planning: {
                    ...defaultData.planning,
                    semestral: [
                        {
                            title: "Mantenimiento Preventivo Flota",
                            items: [
                                { name: "1 SEMESTRE", status: PlanStatus.Completed, value: 50.0 },
                                { name: "2 SEMESTRE", status: PlanStatus.NotStarted, value: 0.0 },
                            ],
                            total: 50.0,
                        }
                    ],
                },
                documentation: [
                    { name: "MANUAL OPERATIVO SISTEMA", status: VerificationStatus.SI },
                    { name: "CONTRATO DE SEGUROS VIGENTE", status: VerificationStatus.PENDIENTE },
                    { name: "INFORME DE USO MENSUAL", status: VerificationStatus.PENDIENTE },
                    { name: "ACTUALIZACIÓN PLATAFORMA", status: VerificationStatus.NO },
                    { name: "REGISTRO FOTOGRÁFICO MANTENIMIENTO", status: VerificationStatus.SI },
                ],
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
             { name: "N° DE ACCIONES CORRECTIVAS DE AUDITORIA INTERNA 2025", status: VerificationStatus.NO },
            { name: "CIERRE DE ACCIONES CORRECTIVAS DE AUDITORIA INTERNA 2025", status: VerificationStatus.NO },
        ],
        tracking: [
            { name: "Plan de Acción", months: [true, true, true, true, true, true, false, false, false, false, false, false] },
            { name: "Presupuesto", months: [true, true, true, true, true, true, false, false, false, false, false, false] },
            { name: "Indicadores de Gestión", months: [true, true, true, false, false, false, false, false, false, false, false, false] },
            { name: "Plan de Mejoramiento", months: [true, true, true, true, false, false, false, false, false, false, false, false] },
            { name: "Matriz de Riesgos", months: [true, true, false, false, false, false, false, false, false, false, false, false] },
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
                    { name: "CONTRATO DE CONCESIÓN VIGENTE", status: VerificationStatus.SI },
                    { name: "INFORME DE EXPANSIÓN Y MODERNIZACIÓN", status: VerificationStatus.PENDIENTE },
                    { name: "CERTIFICADO RETILAP", status: VerificationStatus.NO },
                ],
                developmentPlanGoals: [
                    {
                        producto: "2102013-Redes de alumbrado público mejoradas",
                        metaProductoCuatrienio: 6523,
                        meta2025Programado: 2174,
                        meta2025Ejecutado: 1196,
                    },
                    {
                        producto: "2102010-Redes de alumbrado público ampliadas",
                        metaProductoCuatrienio: 300,
                        meta2025Programado: 93,
                        meta2025Ejecutado: 201,
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