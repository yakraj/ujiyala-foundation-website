import FoundersList from "./FoundersList";
import { FOUNDERS } from "../data/founders";

const FoundersSection = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">
            Our Leadership
          </span>
          <h2 className="text-4xl font-black text-secondary mt-4 mb-6">
            The Visionaries Behind <span className="ujiyala-font">Ujiyala</span>
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>

        <FoundersList founders={FOUNDERS} />
      </div>
    </section>
  );
};

export default FoundersSection;
