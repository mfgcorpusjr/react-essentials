import { type CoreConcept } from "@/types";

type CoreConceptItemProps = {
  coreConcept: CoreConcept;
};

export default function CoreConceptItem({ coreConcept }: CoreConceptItemProps) {
  return (
    <div className="text-center">
      <img
        src={coreConcept.image}
        alt={coreConcept.title}
        className="w-24 mx-auto"
      />
      <h3 className="mb-4 text-white font-bold">{coreConcept.title}</h3>
      <p className="text-gray-400">{coreConcept.description}</p>
    </div>
  );
}
