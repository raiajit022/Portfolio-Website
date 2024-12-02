import { Card } from '../ui/Card';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

export function ProjectsSection() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-2">Sales Forecasting Model</h3>
        <p className="text-gray-600 mb-4">
          Developed a machine learning model to predict future sales based on historical data and market trends.
        </p>
        <div className="mb-4">
          <h4 className="font-medium mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {["Python", "Pandas", "Scikit-learn", "Matplotlib"].map((tech, index) => (
              <span key={index} className="px-2 py-1 bg-gray-100 rounded-md text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-2">Customer Segmentation Analysis</h3>
        <p className="text-gray-600 mb-4">
          Conducted a comprehensive analysis to segment customers based on their purchasing behavior and demographics.
        </p>
        <div className="mb-4">
          <h4 className="font-medium mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {["R", "ggplot2", "cluster", "dplyr"].map((tech, index) => (
              <span key={index} className="px-2 py-1 bg-gray-100 rounded-md text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-2">Financial Dashboard</h3>
        <p className="text-gray-600 mb-4">
          Created an interactive dashboard to visualize key financial metrics and KPIs for executive decision-making.
        </p>
        <div className="mb-4">
          <h4 className="font-medium mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {["Tableau", "SQL", "Excel"].map((tech, index) => (
              <span key={index} className="px-2 py-1 bg-gray-100 rounded-md text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
} 