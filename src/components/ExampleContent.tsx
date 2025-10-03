import { type Example } from "@/types";

type ExampleContentProps = {
  example: Example;
};

export default function ExampleContent({ example }: ExampleContentProps) {
  return (
    <>
      <h3 className="mb-4 text-white text-lg font-bold">{example.title}</h3>
      <p className="text-gray-400">{example.description}</p>
      <pre className="text-white overflow-x-auto">
        <code>{example.code}</code>
      </pre>
    </>
  );
}
