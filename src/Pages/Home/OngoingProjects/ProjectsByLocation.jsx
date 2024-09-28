import React, { useState, useEffect } from "react";

const ProjectsByLocation = () => {
  const [location, setLocation] = useState(null);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (location) {
      // Fetch projects based on location from an API
      fetchProjectsByLocation(location).then((data) => setProjects(data));
    }
  }, [location]);

  const handleLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        lat: position.coords.latitude,
        long: position.coords.longitude,
      });
    });
  };

  return (
    <div className="p-8">
      <h3 className="text-2xl mb-4">Projects in Your Area</h3>
      <button
        onClick={handleLocation}
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Share My Location
      </button>
      <div className="mt-4">
        {projects.length > 0 ? (
          <ul>
            {projects.map((project) => (
              <li key={project.id} className="mb-2">
                {project.name} - {project.status}
              </li>
            ))}
          </ul>
        ) : (
          <p>No ongoing projects in your area.</p>
        )}
      </div>
    </div>
  );
};

export default ProjectsByLocation;
