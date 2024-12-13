import { useState } from "react";
const formatTestDate = (date = new Date()) => {
    const pad = (num) => num.toString().padStart(2, '0');
    
    return {
        iso: date.toISOString(),
        short: `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`,
        timestamp: date.getTime(),
        relative: (days) => {
            const newDate = new Date(date);
            newDate.setDate(date.getDate() + days);
            return newDate.toISOString();
        }
    };
};

let testDate = formatTestDate();

console.log(testDate);
