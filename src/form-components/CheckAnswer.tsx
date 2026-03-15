import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {

    const [answer, setAnswer] = useState<string>("");

    function changeAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="checkAnswerForm">
                <Form.Label>What is the answer?</Form.Label>
                <Form.Control
                    type="text"
                    value={answer}
                    onChange={changeAnswer}/>
            </Form.Group>
            <div>
                {answer === expectedAnswer
                    ? "✔️"
                    : "❌"}
            </div>

        
        </div>
    );
}
