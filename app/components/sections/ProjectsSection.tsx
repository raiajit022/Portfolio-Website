import { ProjectCard } from '../cards/ProjectCard'

export function ProjectsSection() {
  return (
    <div className="space-y-6">
      <ProjectCard
        title="Sales Forecasting Model"
        description="Developed a machine learning model to predict future sales based on historical data and market trends."
        technologies={["Python", "Pandas", "Scikit-learn", "Matplotlib"]}
        achievements={[
          "Improved sales prediction accuracy by 15%",
          "Implemented feature engineering to capture seasonal trends",
          "Created interactive visualizations for stakeholder presentations"
        ]}
      />
      <ProjectCard
        title="Customer Segmentation Analysis"
        description="Conducted a comprehensive analysis to segment customers based on their purchasing behavior and demographics."
        technologies={["R", "ggplot2", "cluster", "dplyr"]}
        achievements={[
          "Identified 5 distinct customer segments",
          "Developed targeted marketing strategies for each segment",
          "Increased customer retention rate by 10%"
        ]}
      />
      <ProjectCard
        title="Financial Dashboard"
        description="Created an interactive dashboard to visualize key financial metrics and KPIs for executive decision-making."
        technologies={["Tableau", "SQL", "Excel"]}
        achievements={[
          "Reduced report generation time by 70%",
          "Implemented drill-down functionality for detailed analysis",
          "Integrated real-time data updates from multiple sources"
        ]}
      />
    </div>
  )
} 