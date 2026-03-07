import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attemps, setAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    return <div>
        <Button onClick={() => {
            setInProgress(true);
            setAttempts(attemps - 1);
        }} disabled={inProgress || attemps === 0}>Start Quiz</Button>
        <Button onClick={() => {
            setAttempts(attemps + 1);
        }} disabled={inProgress}> Mulligan</Button>
        <Button onClick={() => {
            setInProgress(false);
        }} disabled={!inProgress}>Stop Quiz</Button>
        <p>Attempts remaining: {attemps}</p>
        
        </div>;
}
