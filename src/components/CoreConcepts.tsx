import CoreConcept from "@/components/CoreConcept";

import { CORE_CONCEPTS } from "@/data";

export default function CoreConcepts() {
  return (
    <div className="bg-slate-950 p-8 rounded shadow space-y-4">
      <h2 className="text-2xl text-center text-purple-300 font-bold">
        Core Concepts
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {CORE_CONCEPTS.map((coreConcept) => (
          <CoreConcept key={coreConcept.title} coreConcept={coreConcept} />
        ))}
      </div>
    </div>
  );
}
