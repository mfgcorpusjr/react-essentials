import Card from "@/components/Card";
import CoreConceptItem from "@/components/CoreConceptItem";
import { CORE_CONCEPTS } from "@/data";

export default function CoreConcepts() {
  return (
    <Card className="space-y-4">
      <h2 className="text-2xl text-center text-purple-300 font-bold">
        Core Concepts
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {CORE_CONCEPTS.map((coreConcept) => (
          <CoreConceptItem key={coreConcept.title} coreConcept={coreConcept} />
        ))}
      </div>
    </Card>
  );
}
