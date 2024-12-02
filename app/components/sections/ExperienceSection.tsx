import { ExperienceCard } from '@/components/cards/ExperienceCard';

export function ExperienceSection() {
  return (
    <div className="space-y-6">
      <ExperienceCard
        title="UPSC Preparation"
        location="Bengaluru, India"
        period="Feb 2022 - Oct 2024"
        achievements={[
          "Dedicated period of intensive study and preparation for Civil Services Examination",
          "Developed comprehensive understanding of Indian polity, economy, and current affairs",
          "Enhanced analytical and critical thinking abilities through rigorous preparation",
          "Maintained disciplined approach to learning and self-development"
        ]}
      />
      
      <ExperienceCard
        title="Analyst"
        company="GlobalLogic Technologies Pvt Ltd"
        location="Gurugram, India"
        period="Oct 2020 - Feb 2022"
        achievements={[
          "Provided support and maintenance to existing management information systems (MIS)",
          "Performed data analysis of resource database and identified gaps",
          "Updated/Validated/Maintained data resources for database on periodic basis",
          "Generated both periodic and ad hoc reports as needed"
        ]}
      />

      <ExperienceCard
        title="Associate Analyst"
        company="GlobalLogic Technologies Pvt Ltd"
        location="Gurugram, India"
        period="May 2019 - Oct 2020"
        achievements={[
          "Analyzed Google E-commerce content to prevent piracy on shopping platform",
          "Employed methodology for detecting outliers to trace fraudulent entities",
          "Achieved quality metrics of 95% and above in analytical output",
          "Prepared reports and dashboards with actionable insights for fraud management"
        ]}
      />

      <ExperienceCard
        title="Customer Support"
        company="Amazon Development Center India Pvt Ltd"
        location="Noida, India"
        period="Jun 2018 - Feb 2019"
        achievements={[
          "Worked on all major modes of live communication to support customers and business",
          "Delivered exceptional level of service to each customer",
          "Analyzed sellers data and contributed to detection of Fraudulent/Fake sellers",
          "Managed documentation and addressed discrepancies in timely manner"
        ]}
      />
    </div>
  );
} 