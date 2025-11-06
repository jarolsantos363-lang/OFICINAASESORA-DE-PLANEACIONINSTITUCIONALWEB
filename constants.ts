
import { Plan, VerificationItem, PlanStatus, VerificationStatus } from './types';

export const MENSUAL_DATA: Plan[] = [
  {
    title: "Plan De Acción",
    items: [
      { name: "ENERO", status: PlanStatus.Completed, value: 8 },
      { name: "FEBRERO", status: PlanStatus.Completed, value: 8 },
      { name: "MARZO", status: PlanStatus.Completed, value: 8 },
      { name: "ABRIL", status: PlanStatus.Completed, value: 8 },
      { name: "MAYO", status: PlanStatus.Completed, value: 8 },
      { name: "JUNIO", status: PlanStatus.Completed, value: 8 },
      { name: "JULIO", status: PlanStatus.Missing, value: 0 },
      { name: "AGOSTO", status: PlanStatus.Missing, value: 0 },
      { name: "SEPTIEMBRE", status: PlanStatus.Missing, value: 0 },
      { name: "OCTUBRE", status: PlanStatus.Missing, value: 0 },
      { name: "NOVIEMBRE", status: PlanStatus.NotStarted, value: 0 },
      { name: "DICIEMBRE", status: PlanStatus.NotStarted, value: 0 },
    ],
    total: 50,
  },
  {
    title: "Reporte PIP",
    items: [
        { name: "ENERO", status: PlanStatus.Completed, value: 8 },
        { name: "FEBRERO", status: PlanStatus.Completed, value: 8 },
        { name: "MARZO", status: PlanStatus.Completed, value: 8 },
        { name: "ABRIL", status: PlanStatus.Completed, value: 8 },
        { name: "MAYO", status: PlanStatus.Completed, value: 8 },
        { name: "JUNIO", status: PlanStatus.Completed, value: 8 },
        { name: "JULIO", status: PlanStatus.Missing, value: 0 },
        { name: "AGOSTO", status: PlanStatus.Missing, value: 0 },
        { name: "SEPTIEMBRE", status: PlanStatus.Missing, value: 0 },
        { name: "OCTUBRE", status: PlanStatus.Missing, value: 0 },
        { name: "NOVIEMBRE", status: PlanStatus.NotStarted, value: 0 },
        { name: "DICIEMBRE", status: PlanStatus.NotStarted, value: 0 },
    ],
  }
];

export const TRIMESTRAL_DATA: Plan[] = [
    {
        title: "Reporte indicadores",
        items: [
            { name: "1 TRIMESTRE", status: PlanStatus.Completed, value: 33.1 },
            { name: "2 TRIMESTRE", status: PlanStatus.Completed, value: 33.1 },
            { name: "3 TRIMESTRE", status: PlanStatus.NotStarted, value: 0 },
        ],
        total: 66.2
    }
];

export const CUATRIMESTRAL_DATA: Plan[] = [
    {
        title: "Matriz de aspectos e impacto",
        items: [
            { name: "1 CAUTRIMESTRE", status: PlanStatus.Completed, value: 33.1 },
            { name: "2 CAUTRIMESTRE", status: PlanStatus.Missing, value: 0 },
            { name: "3 CAUTRIMESTRE", status: PlanStatus.Missing, value: 0 },
        ]
    },
    {
        title: "Matriz IPVER",
        items: [
            { name: "1 CAUTRIMESTRE", status: PlanStatus.Completed, value: 33.1 },
            { name: "2 CAUTRIMESTRE", status: PlanStatus.Missing, value: 0 },
            { name: "3 CAUTRIMESTRE", status: PlanStatus.Missing, value: 0 },
        ]
    },
    {
        title: "Programa de transparencia y ética publica",
        items: [
            { name: "1 CAUTRIMESTRE", status: PlanStatus.Completed, value: 33.1 },
            { name: "2 CAUTRIMESTRE", status: PlanStatus.Completed, value: 33.1 },
            { name: "3 CAUTRIMESTRE", status: PlanStatus.Missing, value: 0 },
        ]
    }
];

export const SEMESTRAL_DATA: Plan[] = [
    {
        title: "Matriz de riesgos y oportunidades",
        items: [
            { name: "1 SEMESTRE", status: PlanStatus.Completed, value: 50 },
            { name: "2 SEMESTRE", status: PlanStatus.NotStarted, value: 0 },
        ],
    },
    {
        title: "Jornadas inducción y re-inducción",
        items: [
            { name: "1 SEMESTRE", status: PlanStatus.Completed, value: 50 },
            { name: "2 SEMESTRE", status: PlanStatus.NotStarted, value: 0 },
        ]
    },
    {
        title: "Matriz de requisitos legales",
        items: [
            { name: "1 SEMESTRE", status: PlanStatus.Completed, value: 50 },
            { name: "2 SEMESTRE", status: PlanStatus.NotStarted, value: 50 },
        ]
    }
];

export const ANUAL_DATA: Plan[] = [
    {
        title: "Reporte del tratamiento producto o servicio no conforme",
        items: [{ name: "ANUAL", status: PlanStatus.Completed, value: 100 }]
    },
    {
        title: "Gestion del cambio",
        items: [{ name: "ANUAL", status: PlanStatus.Completed, value: 100 }]
    },
    {
        title: "Reporte FURAG",
        items: [{ name: "ANUAL", status: PlanStatus.Completed, value: 100 }]
    },
    {
        title: "Reporte ITA",
        items: [{ name: "ANUAL", status: PlanStatus.Completed, value: 100 }]
    },
    {
        title: "POAI",
        items: [{ name: "ANUAL", status: PlanStatus.Completed, value: 100 }]
    },
    {
        title: "Programa De Transparencia Etcia y Publica",
        items: [{ name: "ANUAL", status: PlanStatus.Missing, value: 0 }]
    }
];

export const DOCUMENTATION_DATA: VerificationItem[] = [
    { name: "ACTUALIZACIÓN CARACTERIZACIÓN DE PROCESOS 2025", status: VerificationStatus.NA },
    { name: "ACTUALIZACIÓN DE INDICADORES 2025", status: VerificationStatus.SI },
    { name: "CIERRE 2024", status: VerificationStatus.SI },
    { name: "ACTUALIZACIÓN DE INDICADORES La", status: VerificationStatus.PENDIENTE },
    { name: "SEGUIMIENTO INDICADORES 1er TRIMESTRE", status: VerificationStatus.NO },
    { name: "ACTUALIZACIÓN DOFA 2025", status: VerificationStatus.SI },
    { name: "EDAFÍS PRIMER SEMESTRE", status: VerificationStatus.NO },
    { name: "ACTUALIZACIÓN MATRIZ DE PROCESOS", status: VerificationStatus.NO },
    { name: "N° DE FORMATOS", status: VerificationStatus.SI },
    { name: "ACTUALIZACIÓN DE PROCEDIMIENTOS", status: VerificationStatus.SI },
    { name: "N° DE PROCEDIMIENTOS", status: VerificationStatus.NO },
    { name: "ACTUALIZACIÓN DE MANUALES", status: VerificationStatus.SI },
    { name: "N° DE MANUALES", status: VerificationStatus.NA },
    { name: "ACTUALIZACIÓN MATRIZ DE ASPECTOS E IMPACTOS AMBIENTALES", status: VerificationStatus.NO },
    { name: "ACTUALIZACIÓN MATRIZ IPVR", status: VerificationStatus.SI },
    { name: "CIERRE DE SEGUIMIENTO A OBJETIVOS DE GESTIÓN (MATRIZ DE RIESGOS Y OPORTUNIDADES) 2025", status: VerificationStatus.SI },
    { name: "ACTUALIZACIÓN MATRIZ DE RIESGOS", status: VerificationStatus.NA },
    { name: "N° DE RIESGOS 2025", status: VerificationStatus.SI },
    { name: "N° DE ACCIONES CORRECTIVAS DE AUDITORIA INTERNA 2025", status: VerificationStatus.NO },
    { name: "CIERRE DE ACCIONES CORRECTIVAS DE AUDITORIA INTERNA 2025", status: VerificationStatus.NO },
    { name: "ACTUALIZACIÓN MATRIZ PRODUCTO NO CONFORME", status: VerificationStatus.NA },
    { name: "ACTUALIZACIÓN MATRIZ GESTIÓN DEL CAMBIO", status: VerificationStatus.NO },
    { name: "PUBLICACIÓN EN PÁGINA", status: VerificationStatus.SI }
];
