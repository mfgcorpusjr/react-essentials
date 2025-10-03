import { useState, type ReactNode } from "react";

import Card from "@/components/Card";
import TabButton from "@/components/TabButton";

type TabsProps = {
  defaultIndex?: number;
  tabs: { label: string; content: ReactNode }[];
};

export default function Tabs({ defaultIndex = 0, tabs }: TabsProps) {
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex);

  return (
    <div className="space-y-4">
      <div className="space-x-4">
        {tabs.map((tab, index) => (
          <TabButton
            key={tab.label}
            isActive={index === selectedIndex}
            onClick={() => setSelectedIndex(index)}
          >
            {tab.label}
          </TabButton>
        ))}
      </div>

      <Card>{tabs[selectedIndex].content}</Card>
    </div>
  );
}
