import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");

    return <div>
        <Button onClick={() => {
            if (type === "multiple_choice_question") {
                setType("short_answer_question");
            } else {
                setType("multiple_choice_question");
            }
        }}>Change Type</Button>
        <p>The current type is {type === "short_answer_question" ? "Short Answer": "Multiple Choice"}</p>


    </div>;
}
