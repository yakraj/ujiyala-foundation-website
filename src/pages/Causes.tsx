import CausesSection from '../components/CausesSection';

const Causes = () => (
  <div className="min-h-screen bg-gray-50 pb-16">
    <div className="max-w-7xl mx-auto px-4 pt-12">
      {/* <h1 className="text-4xl font-extrabold text-primary mb-8 text-center">Our Causes</h1> */}
      <CausesSection />
      <div className="mt-12 text-center">
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Each of our causes is driven by a passion to make a real difference. Whether it’s feeding the hungry, supporting slum dwellers, or providing medical and educational aid, your support helps us spread hope and change lives.
        </p>
      </div>
    </div>
  </div>
);

export default Causes;
