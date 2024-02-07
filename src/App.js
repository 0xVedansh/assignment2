import React, { useState, useEffect } from 'react';
import './styles.css';

const TabComponent = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [tabContent, setTabContent] = useState([]);

  useEffect(() => {
    // Simulating fetching tab content from an API
    const fetchTabContent = async () => {
      // Assuming tabContentData is fetched from an API
      const tabContentData = [
        { title: 'TOMMY', content: 'Full Stack Web Developer' },
        { title: 'BIGDROP', content: 'Front-End Engineer' },
        { title: 'CUKER', content: 'Engineering Intern' },
      ];
      setTabContent(tabContentData);
    };

    fetchTabContent();
  }, []);

  const handleTabClick = (index) => {
    setSelectedTab(index);
  };

  return (
    <div className="page-container">
      <div className="tabs-container">
        <h2 className="experience-title">Experience</h2>
        <ul className="tabs-list">
          {tabContent.map((tab, index) => (
            <li
              key={index}
              className={`tab-item ${selectedTab === index ? 'active' : ''}`}
              onClick={() => handleTabClick(index)}
            >
              {tab.title}
            </li>
          ))}
        </ul>
        <div className="tab-content">
          {tabContent.length > 0 && (
            <>
              <p>{tabContent[selectedTab].content}</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget magna nec lorem ullamcorper commodo eget eget quam. Integer non quam a eros fermentum vulputate. Donec euismod tellus at lacus congue, vel sodales nisi accumsan. Donec viverra mi a turpis facilisis lobortis. Integer non varius sapien, vel lobortis elit. Donec scelerisque ex eget nisi fermentum, id suscipit dui faucibus. Sed non dui eget lacus bibendum auctor. Proin vitae nisi at odio vehicula consectetur. Vivamus sed velit quis quam vehicula scelerisque eu eget dui. Nam non mi at eros elementum tristique a non ante. Vestibulum non metus vel nulla malesuada egestas. In laoreet hendrerit lectus, quis posuere mauris vehicula non. Ut fringilla, leo a consequat efficitur, lectus lectus consectetur eros, sed tincidunt leo nulla nec eros.</p>
              <div className="more-info-container">
                <button className="more-info-btn">More Info</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TabComponent;
