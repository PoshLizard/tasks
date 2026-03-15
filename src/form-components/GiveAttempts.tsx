import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {

    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsRequested, setAttemptsRequested] = useState<string>("");
    
    function addAttemptsLeft() {
        const requestedAttempts = parseInt(attemptsRequested);
        if (isNaN(attemptsLeft)) {
            setAttemptsLeft(requestedAttempts);
        } else {
            setAttemptsLeft(attemptsLeft + requestedAttempts);
        }
    }

    function subtractAttempts() {
        if (attemptsLeft > 0) {
            setAttemptsLeft(attemptsLeft - 1);
        }
    }

    function setAttemptsRequestedFromInput(event: React.ChangeEvent<HTMLInputElement>) {
        setAttemptsRequested(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="giveAttemptsForm">
                <Form.Label>How many attempts do you want?</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsRequested}
                    onChange={setAttemptsRequestedFromInput}
                />
                <p>{attemptsLeft}</p>
                <Button
                    onClick={addAttemptsLeft}
                    disabled={isNaN(parseInt(attemptsRequested))}
                >
                    Gain
                </Button>
                <Button
                    onClick={subtractAttempts}
                    disabled={attemptsLeft === 0}
                >
                    Use
                </Button>
            </Form.Group>
        </div>
    );
}
