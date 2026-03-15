import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {

    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function updateIsStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }



    return (
        <div>
                <Form.Check
                    type="switch"
                    id="editModeSwitch"
                    label="Edit Mode"
                    checked={editMode}
                    onChange={updateEditMode}
                />

                {editMode ?
                    <Form>
                        <Form.Group controlId="name-input">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control
                                type="text"
                                value={name}
                                onChange={updateName}
                            />
                        </Form.Group>
                        <Form.Check
                            type="checkbox"
                            id="is-student-check"
                            label="Is a student?"
                            checked={isStudent}
                            onChange={updateIsStudent}
                        />
                    </Form>
                :   <div>
                        {name} is {isStudent ? "" : "not "}a student.
                    </div>
                }
        </div>
    );
}
