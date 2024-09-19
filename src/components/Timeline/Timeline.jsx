import React from "react";
import "./Timeline.css";

function Timeline() {
  return (
    <div className="tl-body">
      <h1 className="h1-design">My Experience</h1>
      <div className="tl-timeline-container">
        <ul>
          <li style={{ "--accent-color": "#1D3763" }}>
            <div className="tl-date">2000</div>
            <div className="tl-title">Mobile Networks at SIEMENS and Nokia Siemens Networks.    </div>
            <div className="tl-descr">Sales Manager for ePlus Germany + Iridium LLC USA <br />NPO Network
                Design Expert <br />NPO Network Design Consultant <br />NPO PL Manager for Tuning Services EU + Scandinavian Acceptance/ Provide Measurement + Analysis Workshops <br />
                Technical Product Consultant (Performance and KPI commitments)
            </div>
          </li>
          <li style={{ "--accent-color": "#0887DB" }}>
            <div className="tl-date">2008</div>
            <div className="tl-title">Global Services at NSN</div>
            <div className="tl-descr">NPO Solution Architect (SME) <br />NPO Service Product Manager (SPM)<br />NPO Solution Consultant (SC e2e)<br />Engagement Manager (Lead ME)<br />Customer first point of contact
        </div>
          </li>
          <li style={{ "--accent-color": "#6DA5CE" }}>
            <div className="tl-date">2016</div>
            <div className="tl-title">Software Selling at NOKIA</div>
            <div className="tl-descr">Account manager e2e Portfolio <br />Domain Account Manager for NM + SON<br />Cognitive Networking NM and SON moved to MN Sales/ Pre-Sales</div>
          </li>
          <li style={{ "--accent-color": "#1B5F8C" }}>
            <div className="tl-date">2024</div>
            <div className="tl-title">Sales Account Manager at Soti</div>
            <div className="tl-descr">Sales Account Manager for DACH region (Germany, Austria, and Switzerland).</div>
          </li>
        </ul>
        
      </div>
    </div>
  );
}

export default Timeline;