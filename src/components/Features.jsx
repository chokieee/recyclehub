import React from 'react';

const featuresData = [
  { icon: '📍', text: 'Easy Location Tracking' },
  { icon: '📊', text: 'Waste Data Analytics' },
  { icon: '✅', text: 'Effective Waste Management' },
  { icon: '💲', text: 'Reward System' },
  { icon: '🔄', text: 'Real-time Schedules' },
];

const Features = () => {
  return (
    <section className="features-section">
      {featuresData.map((feature, index) => (
        <div key={index} className="feature-item">
          <div className="feature-icon">{feature.icon}</div>
          <p className="feature-text">{feature.text}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;
