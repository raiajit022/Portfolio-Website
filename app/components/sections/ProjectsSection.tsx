import React from 'react'
import { ProjectCard } from '../cards/ProjectCard'

export function ProjectsSection() {
  return (
    <div className="space-y-6">
      <ProjectCard
        title="Coffee Business Intelligence Dashboard"
        description="Designed an interactive Excel dashboard to analyze coffee shop sales, providing insights into revenue trends, customer footfall, and top-performing products."
        achievements={[
          "Developed a dynamic Coffee Shop Sales Dashboard in Excel, uncovering key insights from $698K+ in revenue and 149K+ customer footfall using Pivot Tables, Power Query, and advanced data visualization.",
          "Optimized business decision-making by analyzing peak sales hours, top-performing products, and store-wise footfall trends, leading to data-driven sales strategies.",
          "Automated data cleaning and transformation processes, reducing manual effort and significantly improving efficiency in analyzing large-scale transaction datasets."
        ]}
        githubLink="https://github.com/raiajit022/Coffee-Shop-Sales"
      />

      <ProjectCard
        title="Sales & Profit Analysis Dashboard"
        description="Built an interactive Excel dashboard to analyze sales performance, profit margins, and customer trends, enabling data-driven business decisions."
        achievements={[
          "Developed an interactive Excel dashboard to visualize sales trends, profit margins, and customer insights, enhancing data-driven decision-making.",
          "Leveraged advanced Excel techniques (Pivot Tables, Data Validation, and Conditional Formatting) to automate reporting and improve data accuracy.",
          "Identified key sales drivers and market trends by analyzing product performance, customer segments, and regional profitability."
        ]}
        githubLink="https://github.com/raiajit022/Sales-Profit-Analysis-Dashboard"
      />

      <ProjectCard
        title="Loan Risk & Approval Analysis"
        description="Created an interactive Excel dashboard to analyze loan application trends, risk factors, and borrower behavior, improving decision-making in loan approvals."
        achievements={[
          "Developed an interactive Bank Loan Application Dashboard in Excel, analyzing 14.4K+ loan applications using Pivot Tables, Power Query, and advanced data visualization techniques.",
          "Identified key insights on loan approval trends, risk factors, and borrower behavior, enabling data-driven decision-making for optimizing funding strategies.",
          "Automated data cleaning and transformation, improving efficiency and accuracy in analyzing large datasets, reducing manual effort.",
          "Designed state-wise and term-based loan analysis, using charts, maps, and trend lines to highlight high-risk segments and loan performance metrics."
        ]}
        githubLink="https://github.com/raiajit022/Loan-Risk-Approval-Analysis"
      />
    </div>
  )
}
