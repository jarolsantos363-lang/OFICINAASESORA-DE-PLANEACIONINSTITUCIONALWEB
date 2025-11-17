import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';
import { ArrowRightIcon } from './icons/ArrowRightIcon';
import { CalendarIcon } from './icons/CalendarIcon';

const Calendar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentDate, setCurrentDate] = useState(new Date());
    const widgetRef = useRef<HTMLDivElement>(null);

    const changeMonth = (amount: number) => {
        setCurrentDate(prevDate => {
            const newDate = new Date(prevDate);
            newDate.setMonth(newDate.getMonth() + amount);
            return newDate;
        });
    };
    
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const daysOfWeek = ["Lu", "Ma", "Mi", "Ju", "Vi", "Sá", "Do"];
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    
    const days = [];
    const startDate = new Date(firstDayOfMonth);
    let dayOfWeek = startDate.getDay();
    dayOfWeek = (dayOfWeek === 0) ? 6 : dayOfWeek - 1; 
    startDate.setDate(startDate.getDate() - dayOfWeek);

    for (let i = 0; i < 35; i++) {
        days.push(new Date(startDate));
        startDate.setDate(startDate.getDate() + 1);
    }
    
    const today = new Date();
    const isSameDay = (d1: Date, d2: Date) => 
        d1.getFullYear() === d2.getFullYear() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getDate() === d2.getDate();

    return (
        <div className="calendar-widget-container" ref={widgetRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="calendar-toggle-btn"
                aria-label="Abrir calendario"
            >
                <CalendarIcon />
            </button>
            <div className={`calendar-widget ${isOpen ? 'visible' : ''}`}>
                <div className="flex justify-between items-center mb-4">
                    <button onClick={() => changeMonth(-1)} className="p-1.5 rounded-full hover:bg-gray-700/50 transition-colors"><ArrowLeftIcon className="w-5 h-5"/></button>
                    <h3 className="text-md font-bold text-white">
                        {currentDate.toLocaleString('es-ES', { month: 'long', year: 'numeric' }).replace(/^\w/, c => c.toUpperCase())}
                    </h3>
                    <button onClick={() => changeMonth(1)} className="p-1.5 rounded-full hover:bg-gray-700/50 transition-colors"><ArrowRightIcon className="w-5 h-5"/></button>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center text-xs text-gray-400 font-semibold mb-2">
                    {daysOfWeek.map(day => <div key={day}>{day}</div>)}
                </div>
                <div className="grid grid-cols-7 gap-1">
                    {days.map((day, index) => {
                        const isCurrentMonth = day.getMonth() === currentDate.getMonth();
                        const isToday = isSameDay(day, today);
                        return (
                            <div key={index} className={`
                                w-full aspect-square flex items-center justify-center text-sm rounded-full
                                ${isCurrentMonth ? 'text-gray-200' : 'text-gray-600'}
                                ${isToday ? 'bg-lime-500 text-black font-bold' : ''}
                            `}>
                                {day.getDate()}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Calendar;