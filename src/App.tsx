import Header from "@/components/Header";
import CoreConcepts from "@/components/CoreConcepts";
import Examples from "@/components/Examples";

export default function App() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <Header />
      <CoreConcepts />
      <Examples />
    </div>
  );
}
