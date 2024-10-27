import InformationCard from './components/InformationCard';
import Wizard from './components/wizard/Wizard';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white p-4 flex flex-col items-center justify-center">
      <Wizard />
      <InformationCard />
    </div>
  );
}
