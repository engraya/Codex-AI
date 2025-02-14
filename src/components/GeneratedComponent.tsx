"use client";

import parse from "html-react-parser";

interface GeneratedComponentProps {
    code: string;
}

const GeneratedComponent: React.FC<GeneratedComponentProps> = ({ code }) => {
    return <div>{code ? parse(code) : <p>No content generated.</p>}</div>;
};

export default GeneratedComponent;
