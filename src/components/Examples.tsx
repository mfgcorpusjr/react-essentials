import Tabs from "@/components/Tabs";
import ExampleItem from "@/components/ExampleItem";
import { EXAMPLES } from "@/data";

export default function Examples() {
  const tabs = EXAMPLES.map((example) => ({
    label: example.title,
    content: <ExampleItem example={example} />,
  }));

  return (
    <div className="space-y-4">
      <h2 className="text-2xl text-purple-300 font-bold">Examples</h2>
      <Tabs tabs={tabs} />
    </div>
  );
}
