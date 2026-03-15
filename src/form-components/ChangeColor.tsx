import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS: string[] = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "pink",
    "brown",
    "teal",
    "coral",
];

export function ChangeColor(): React.JSX.Element {
    const [selectedColor, setSelectedColor] = useState<string>(COLORS[0]);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setSelectedColor(event.target.value);
    }

    return (
        <div>
            <Form>
                {COLORS.map((color: string) => (
                    <Form.Check
                        inline
                        type="radio"
                        id={`color-${color}`}
                        key={color}
                        label={color}
                        value={color}
                        checked={selectedColor === color}
                        onChange={updateColor}
                        name="color-radio-group"
                    />
                ))}
            </Form>
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: selectedColor,
                    padding: "1rem",
                    marginTop: "1rem",
                    display: "inline-block",
                    borderRadius: "4px",
                    fontWeight: "bold",
                }}
            >
                {selectedColor}
            </div>
        </div>
    );
}
