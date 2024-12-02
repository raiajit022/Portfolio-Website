import { Card } from '../../components/ui/card';

export function AwardsSection() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">Awards and Achievements</h3>
        <ul className="list-disc list-inside space-y-2">
          <li className="text-gray-700">Elected Vice-Captain of Cricket Team</li>
          <li className="text-gray-700">Elected Captain of Tagore House</li>
        </ul>
      </Card>
    </div>
  );
} 