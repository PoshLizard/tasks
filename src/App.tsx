import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import duck from "./images/duck.jpeg";


function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <div>
                <h1>Tony Yin Hello World APP</h1>
                <div>
                    <img src={duck} alt="duck" />
                    <ul>
                        <li>item 1</li>
                        <li>item 2</li>
                        <li>item 3</li>
                    </ul>
                    <Button
                        onClick={() => {
                            console.log("Hello World!");
                        }}
                    >
                        Log Hello World
                    </Button>
                </div>
                <div>
                    <Container>
                        <Row>
                            <Col style={{backgroundColor: "red",  width: "25px", height: "25px", margin:"10px"}}></Col>
                            <Col style={{backgroundColor: "red",  width: "25px", height: "25px", margin:"10px"}}></Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
}

export default App;
