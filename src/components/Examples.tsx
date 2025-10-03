import Tabs from "@/components/Tabs";
import ExampleContent from "@/components/ExampleContent";

import { EXAMPLES } from "@/data";

export default function Examples() {
  const tabs = [];
  for (const key in EXAMPLES) {
    tabs.push({
      label: key.toUpperCase(),
      content: <ExampleContent example={EXAMPLES[key]} />,
    });
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl text-purple-300 font-bold">Examples</h2>
      <Tabs tabs={tabs} />
    </div>
  );
}
