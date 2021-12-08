import { useState } from "react";
import styled from "styled-components";
import { setConstantValue } from "typescript";

interface ContainerProps {
    bgColor: string;
    borderColor: string;
}

const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 200px;
    background-color: ${props => props.bgColor};
    border-radius: 100px;
    border: 1px solid ${props => props.borderColor};
`;

interface CircleProps {
    bgColor: string; // required props
    borderColor?: string; // optional props
    text?: string;
}

function Circle({bgColor, borderColor, text = "default text"}: CircleProps) {
    const [counter, setValue] = useState<number|string>(1); // 값이 변하는지 변하지 않는지 상태관리
    setValue(2);
    setValue("hello");
    return (
        <Container bgColor={bgColor} borderColor={borderColor ?? "yellow"}>
            {text}
        </Container>
    );
}

export default Circle;