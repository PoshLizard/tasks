import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<string>("Christmas");
    const alphabetOrder = [
        "Christmas",
        "Easter",
        "Halloween",
        "Independence Day",
        "Thanksgiving",
    ];
    const yearOrder = [
        "Easter",
        "Independence Day",
        "Halloween",
        "Thanksgiving",
        "Christmas",
    ];

    const emojis: Record<string, string> = {
        Christmas: "🎄",
        Easter: "🐰",
        Halloween: "🎃",
        "Independence Day": "🎆",
        Thanksgiving: "🦃",
    };

     function nextAlphabet(current: string): string {
         const index = alphabetOrder.indexOf(current);
         return alphabetOrder[(index + 1) % alphabetOrder.length];
     }

     function nextYear(current: string): string {
         const index = yearOrder.indexOf(current);
         return yearOrder[(index + 1) % yearOrder.length];
     }

    return (
        <div>
            <div>Holiday: {emojis[holiday]}</div>

            <Button onClick={() => { setHoliday(nextAlphabet(holiday)); }}>
                Advance by Alphabet
            </Button>

            <Button onClick={() => { setHoliday(nextYear(holiday)); }}>
                Advance by Year
            </Button>
        </div>
    );
}
