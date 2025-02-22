import React from 'react'
import { ExperienceCard } from '../cards/ExperienceCard'

export function ExperienceSection() {
  return (
    <div className="space-y-6">
      <ExperienceCard
        title="UPSC Civil Services Examination (CSE) Preparation"
        location="New Delhi, India"
        period="March 2022 - December 2024"
        achievements={[
          "Successfully undertook rigorous analytical training, developing strong problem-solving, research, and data interpretation skills through an in-depth study of economics, governance, and policy frameworks.",
          "Refined critical thinking and structured communication, mastering the ability to distil complex information, formulate logical arguments, and present insights effectively.",
          "Cultivated resilience, adaptability, and time management, efficiently handling vast volumes of information under high-stakes conditions.",
          "Gained deep insights into human psychology, behaviour, and personality by engaging with aspirants from diverse backgrounds, enhancing interpersonal skills and emotional intelligence."
        ]}
      />
      
      <ExperienceCard
        title="Analyst"
        company="GlobalLogic India Pvt Ltd (Hitachi Technologies)"
        location="Gurugram, India"
        period="October 2020 - February 2022"
        achievements={[
          "Provided ongoing support and maintenance for management information systems, ensuring data accuracy and efficiency.",
          "Conducted data analysis on resource databases to identify gaps and optimize processes.",
          "Generated custom reports and insights, both periodic and ad hoc, to support management decisions.",
          "Trained a batch of 15 new entry-level Associates, improving team efficiency and process adherence."
        ]}
      />

      <ExperienceCard
        title="Associate Analyst"
        company="GlobalLogic India Pvt Ltd (Hitachi Technologies)"
        location="Gurugram, India"
        period="May 2019 - October 2020"
        achievements={[
          "Analyzed Google e-commerce content, identifying and reporting potentially unlicensed listings to prevent piracy and policy violations.",
          "Utilized outlier detection techniques to trace fraudulent activities and ensure compliance.",
          "Translated complex data into actionable insights, achieving a quality score of 95%+, and prepared reports and dashboards to enhance fraud detection strategies.",
        ]}
      />

      <ExperienceCard
        title="Customer Support"
        company="Amazon Development Center India Pvt Ltd"
        location="Noida, India"
        period="June 2018 - February 2019"
        achievements={[
          "Managed customer interactions across all major live communication channels to provide seamless support to both customers and businesses.",
          "Delivered high-quality service, ensuring customer satisfaction and issue resolution.",
          "Analyzed seller data to identify and report fraudulent or fake sellers, contributing to marketplace integrity.",
          "Accurately completed documentation, promptly identifying and resolving discrepancies to maintain compliance and efficiency."
        ]}
      />
    </div>
  )
} 