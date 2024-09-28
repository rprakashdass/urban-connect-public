import React, { useState } from "react";

const DynamicSolution = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: "Dynamic Login",
      description: "Departments, employees, and agencies can log in with role-specific access. This creates a seamless and secure platform for multiple stakeholders.",
      illustration: "/path/to/dynamic-login.png",
    },
    {
      title: "Prediction of Co-relating Departments",
      description: "AI predicts which departments need to collaborate, based on ongoing and upcoming projects. This improves coordination and reduces conflicts.",
      illustration: "/path/to/prediction.png",
    },
    {
      title: "Synchronized Task Scheduling",
      description: "Tasks are scheduled across departments, ensuring no resource overlap or conflicting schedules. This synchronization is driven by data analytics.",
      illustration: "/path/to/task-scheduling.png",
    },
    {
      title: "Unified Project Phasing",
      description: "Urban Connect allows departments to phase projects in alignment, optimizing resource usage and avoiding task duplication.",
      illustration: "/path/to/phasing.png",
    },
    {
      title: "AI-Driven Dashboard Generation",
      description: "Real-time dashboards provide a comprehensive view of ongoing projects, tasks, and resources. AI helps predict bottlenecks and suggest optimizations.",
      illustration: "/path/to/dashboard.png",
    },
    {
      title: "AI-Driven Report Generation",
      description: "AI-generated reports provide insights into project progress, resource allocation, and future predictions, helping stakeholders make informed decisions.",
      illustration: "/path/to/reports.png",
    },
    {
      title: "Dedicated Resources Database",
      description: "A centralized database stores all resource inventories, making them accessible to all departments in real-time.",
      illustration: "/path/to/resources-db.png",
    },
    {
      title: "Tracking of Projects and Resources",
      description: "Urban Connect tracks ongoing projects and resource usage, allowing stakeholders to monitor progress and make necessary adjustments.",
      illustration: "/path/to/tracking.png",
    },
    {
      title: "Seminars and Meetings Platform",
      description: "The platform enables the organization of seminars, meetings, and workshops to improve capacity-building across departments.",
      illustration: "/path/to/seminars.png",
    },
    {
      title: "Public Complaints Collection",
      description: "Citizens can submit complaints related to urban projects, and relevant departments are notified to address these issues.",
      illustration: "/path/to/complaints.png",
    },
    {
      title: "Discussion Forum",
      description: "Intra- and inter-departmental forums enable seamless discussions, while public forums allow for citizen feedback.",
      illustration: "/path/to/forums.png",
    },
  ];

  return (
    <div className="p-8">
      <h2 className="text-3xl font-semibold mb-8">Urban Connect Features</h2>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {features.map((feature, index) => (
          <button
            key={index}
            onClick={() => setActiveFeature(index)}
            className={`p-4 w-40 h-40 rounded-lg text-center shadow-md transition-transform transform ${
              index === activeFeature ? "scale-110 bg-blue-600 text-white" : "bg-gray-100"
            }`}
          >
            {feature.title}
          </button>
        ))}
      </div>

      {/* Active Feature Content */}
      <div className="text-center max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold mb-4">{features[activeFeature].title}</h3>
        <p className="mb-4">{features[activeFeature].description}</p>
        <img
          src={features[activeFeature].illustration}
          alt={features[activeFeature].title}
          className="max-w-lg mx-auto mb-4"
        />
      </div>
    </div>
  );
};

export default DynamicSolution;
