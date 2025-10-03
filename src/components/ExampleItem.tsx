import { type Example } from "@/types";

type ExampleItemProps = {
  example: Example;
};

export default function ExampleItem({ example }: ExampleItemProps) {
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
