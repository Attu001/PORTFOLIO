import React from 'react';
import './Certifications.css';
import CertificationCard from './CertificationCard';
import snow from '../assets/snowpro.png';
import sqlbasic from '../assets/sql-basic.png';
import sqlintermediate from '../assets/sql-intermidiate.png';
import databasefordevelopers from '../assets/databasefordeveloper.png';
import pythondatascience from '../assets/pythondatascience.png';
import badg1 from '../assets/badg1.png';
import badg2 from '../assets/badg2.png';



const Certifications = () => {
  const certificationData = [
    {
      imgsrc: snow,
      title: "SnowPro Core Certification",
      issuer: "Snowflake Inc.",
      
      
    },
    {
      imgsrc: sqlbasic,
      title: "SQL Certification basic",
    },
    {
        imgsrc: sqlintermediate,
        title: "SQL Certification Intermediate",
       
      },
      {        
        imgsrc: databasefordevelopers,
        title: "Database for Developers By [ Oracle]"
      
      },
      {
        imgsrc: pythondatascience,
        title: "Python for Data Science By [IBM]",
       
      },
      {
        imgsrc:badg1,
        title: "Snowflake Badge 1",
        
      },
      {
        imgsrc:badg2,
        title: "Snowflake Badge 2",
        
      }
  ];

  return (
    <div className="certifications-container">
      {certificationData.map((cert, index) => (
        <CertificationCard key={index} {...cert} />
      ))}
    </div>
  );
};

export default Certifications;
