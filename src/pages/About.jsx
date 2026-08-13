import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import DocxImage from '../components/DocxImage';

export default function About() {
  useEffect(() => {
    document.title = "About UtilityWater AI | AI and IoT Solutions for Water Treatment & Distribution";
  }, []);

  return (
    <div className="page-wrapper">
      {/* 1. HERO SECTION - CLEAN CENTERED HERO HEADER */}
      <section className="section section-navy-deep text-center" style={{ paddingTop: '4rem', paddingBottom: '4.5rem' }}>
        <div className="container">
          <p className="hero-tagline" style={{ textAlign: 'center', marginBottom: '0.85rem', fontWeight: 600, color: 'var(--color-primary)' }}>
            AI and IoT Identification and Location Solutions for Modern Water Utility Operations
          </p>
          <h1 style={{ color: 'var(--color-text-main)', marginBottom: '1.25rem', fontSize: 'clamp(2.1rem, 4vw, 3rem)', maxWidth: '820px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center', lineHeight: '1.2' }}>
            About UtilityWater AI
          </h1>
          <h2 style={{ fontSize: '1.2rem', fontWeight: '600', color: 'var(--color-text-main)', marginBottom: '1.25rem', lineHeight: '1.45', maxWidth: '860px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
            Delivering AI and IoT Solutions for Water Treatment and Distribution Infrastructure
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: '1.65', margin: '0 auto 2rem auto', maxWidth: '860px', textAlign: 'center' }}>
            UtilityWater AI develops identification, location, and operational software solutions that help water utilities improve visibility of personnel, facilities, assets, inventory, and field operations.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Contact Us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. UTILITYWATER AI OVERVIEW */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>UtilityWater AI Overview</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)' }}>
            <p>
              UtilityWater AI focuses on applying AI and IoT technologies to address operational challenges across water treatment and distribution environments.
            </p>
            <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
              Water utilities manage critical infrastructure that requires reliable coordination between:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem', listStyle: 'none', padding: 0, margin: '0 0 1.25rem 0' }}>
              {[
                "Field personnel", "Treatment facilities", "Pump stations",
                "Distribution assets", "Maintenance equipment", "Inventory resources", "Enterprise software systems"
              ].map((item, idx) => (
                <li key={idx} className="card" style={{ padding: '0.75rem 1rem', flexDirection: 'row', gap: '0.65rem', alignItems: 'center' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)' }}>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              UtilityWater AI provides AI and IoT solutions designed to connect physical resources with digital operational records.
            </p>
            <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
              The solutions support applications including:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.75rem', listStyle: 'none', padding: 0, margin: '0 0 1.25rem 0' }}>
              {[
                "Personnel location management", "Facility access control", "Asset tracking",
                "Inventory management", "Fleet tracking", "Operational traceability"
              ].map((app, idx) => (
                <li key={idx} className="card" style={{ padding: '0.85rem 1.15rem', flexDirection: 'row', gap: '0.75rem', alignItems: 'center' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)' }}>{app}</span>
                </li>
              ))}
            </ul>
            <p>
              By combining AI capabilities with IoT identification technologies, UtilityWater AI helps organizations improve operational visibility and make better use of existing utility information systems.
            </p>
          </div>

          {/* DOCX Image 15 */}
          <DocxImage 
            src="/assets/docx-images/image15.png"
            title="UtilityWater AI Capabilities for Water Treatment and Distribution Operations"
            description="This company capability overview illustration presents how UtilityWater AI combines AI and IoT software, RFID asset identification, BLE workforce management, GPS fleet tracking, access control systems, and enterprise integrations to support water treatment and distribution operations. The visual highlights UtilityWater AI's role in connecting treatment plants, pump stations, field teams, inventory resources, and business systems through a unified operational platform. The key takeaway is that UtilityWater AI delivers end-to-end visibility, operational intelligence, compliance support, and scalable digital transformation across the entire water utility ecosystem."
            alt="Enterprise illustration showing UtilityWater AI software, RFID assets, BLE workforce tracking, GPS fleet management, access control, and water utility operations."
          />
        </div>
      </section>

      {/* 3. BUILT ON DECADES OF IOT EXPERIENCE */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>Built on Decades of IoT Experience</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)' }}>
            <p>
              UtilityWater AI is created within Aperture Venture Studio, with support from GAO.
            </p>
            <p>
              The company builds on two decades of IoT experience serving organizations across industrial and commercial environments.
            </p>
            <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
              Through GAO's experience, the technology foundation behind UtilityWater AI reflects:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.75rem', listStyle: 'none', padding: 0, margin: '0 0 1.25rem 0' }}>
              {[
                "Thousands of IoT customers served",
                "Thousands of IoT projects successfully executed",
                "Practical knowledge from real-world deployments",
                "Experience with industrial identification and connectivity requirements"
              ].map((pt, idx) => (
                <li key={idx} className="card" style={{ padding: '0.85rem 1.15rem', flexDirection: 'row', gap: '0.75rem', alignItems: 'center' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)' }}>{pt}</span>
                </li>
              ))}
            </ul>
            <p>
              This background supports the development of AI and IoT solutions designed for operational environments where reliability, integration, and long-term usability are essential.
            </p>
          </div>
        </div>
      </section>

      {/* 4. TECHNICAL EXPERTISE IN AI AND IOT WATER UTILITY SOLUTIONS */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Technical Expertise in AI and IoT Water Utility Solutions</h2>
          </div>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)', marginBottom: '2rem' }}>
            Water treatment and distribution operations require solutions that combine software, hardware, connectivity, and operational understanding. UtilityWater AI applies expertise across several technical areas.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Identification and Location Technologies */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-text-main)', marginBottom: '0.85rem' }}>Identification and Location Technologies</h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '0.75rem', fontWeight: 600 }}>
                UtilityWater AI develops solutions using technologies including:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "RFID identification systems", "BLE personnel tracking solutions",
                  "GPS tracking systems", "Access control technologies",
                  "LoRaWAN connectivity solutions", "Cellular communication technologies"
                ].map((tech, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                These technologies support applications such as:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '0.5rem' }}>
                {[
                  "Equipment identification", "Personnel location", "Fleet visibility",
                  "Facility access management", "Inventory tracking"
                ].map((app, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* AI and Data Processing Capabilities */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-text-main)', marginBottom: '0.85rem' }}>AI and Data Processing Capabilities</h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '0.75rem' }}>
                AI and IoT solutions combine connected devices with software analysis capabilities. UtilityWater AI solutions may use:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Industrial AI", "Edge AI", "Machine learning", "Data analytics", "Computer vision where appropriate"
                ].map((cap, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                Applications include:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Operational pattern analysis", "Workflow improvement",
                  "Resource utilization analysis", "Automated information processing"
                ].map((app, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0 }}>
                The goal is to help utilities transform physical operational information into useful digital records.
              </p>
            </div>

            {/* Industrial Software Development */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-text-main)', marginBottom: '0.85rem' }}>Industrial Software Development</h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '0.75rem' }}>
                UtilityWater AI develops software solutions supporting:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Personnel management", "Asset identification", "Inventory workflows",
                  "Access control", "Fleet tracking", "Enterprise integration"
                ].map((soft, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{soft}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0 }}>
                Software functions are designed around practical utility workflows rather than isolated technology demonstrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. RESEARCH AND DEVELOPMENT COMMITMENT */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>Research and Development Commitment</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)' }}>
            <p>
              UtilityWater AI invests heavily in research and development to improve AI and IoT solutions for industrial environments.
            </p>
            <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
              Development activities focus on:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem', listStyle: 'none', padding: 0, margin: '0 0 1.25rem 0' }}>
              {[
                "Technology evaluation", "Software improvement", "Hardware compatibility",
                "Integration capability", "Deployment reliability"
              ].map((item, idx) => (
                <li key={idx} className="card" style={{ padding: '0.75rem 1rem', flexDirection: 'row', gap: '0.65rem', alignItems: 'center' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)' }}>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              The company applies structured quality assurance processes throughout solution development.
            </p>
            <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
              These processes help support:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.75rem', listStyle: 'none', padding: 0, margin: '0 0 1.25rem 0' }}>
              {[
                "Reliable system operation", "Consistent software performance",
                "Improved deployment outcomes", "Long-term solution maintainability"
              ].map((item, idx) => (
                <li key={idx} className="card" style={{ padding: '0.85rem 1.15rem', flexDirection: 'row', gap: '0.75rem', alignItems: 'center' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 6. QUALITY ASSURANCE AND TECHNICAL SUPPORT */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Quality Assurance and Technical Support</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)' }}>
            <p>
              Reliable operation is essential for water utility applications.
            </p>
            <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
              UtilityWater AI supports customers through:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem', listStyle: 'none', padding: 0, margin: '0 0 1.25rem 0' }}>
              {[
                "Technical consultation", "Deployment guidance", "Software assistance",
                "Integration support", "Remote technical support", "Onsite technical assistance when required"
              ].map((item, idx) => (
                <li key={idx} className="card" style={{ padding: '0.75rem 1rem', flexDirection: 'row', gap: '0.65rem', alignItems: 'center' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)' }}>{item}</span>
                </li>
              ))}
            </ul>
            <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
              Support activities help organizations:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.75rem', listStyle: 'none', padding: 0, margin: '0 0 1.25rem 0' }}>
              {[
                "Evaluate deployment requirements", "Configure systems correctly",
                "Connect with existing software", "Maintain operational effectiveness"
              ].map((item, idx) => (
                <li key={idx} className="card" style={{ padding: '0.85rem 1.15rem', flexDirection: 'row', gap: '0.75rem', alignItems: 'center' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 7. EXPERIENCE SUPPORTING ENTERPRISE AND RESEARCH ORGANIZATIONS */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>Experience Supporting Enterprise and Research Organizations</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)' }}>
            <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
              Over the years, UtilityWater AI and its supporting organizations have worked with:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.75rem', listStyle: 'none', padding: 0, margin: '0 0 1.25rem 0' }}>
              {[
                "Fortune 500 companies",
                "Leading research and development organizations",
                "Prestigious universities",
                "U.S. and Canadian government agencies"
              ].map((org, idx) => (
                <li key={idx} className="card" style={{ padding: '0.85rem 1.15rem', flexDirection: 'row', gap: '0.75rem', alignItems: 'center' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)' }}>{org}</span>
                </li>
              ))}
            </ul>
            <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
              These experiences provide insight into the requirements of organizations that need:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem', listStyle: 'none', padding: 0, margin: '0 0 1.25rem 0' }}>
              {[
                "Reliable technology solutions", "Enterprise integration",
                "Technical documentation", "Professional support processes"
              ].map((req, idx) => (
                <li key={idx} className="card" style={{ padding: '0.75rem 1rem', flexDirection: 'row', gap: '0.65rem', alignItems: 'center' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)' }}>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 8. SUPPORTING WATER UTILITY DIGITAL TRANSFORMATION */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Supporting Water Utility Digital Transformation</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)' }}>
            <p>
              Water treatment and distribution organizations are increasingly adopting digital technologies to improve operational efficiency and infrastructure management.
            </p>
            <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
              UtilityWater AI supports this transition through solutions that help connect:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem', listStyle: 'none', padding: 0, margin: '0 0 1.25rem 0' }}>
              {[
                "Personnel information", "Facility access records", "Asset identification",
                "Inventory information", "Fleet operations", "Maintenance activities"
              ].map((conn, idx) => (
                <li key={idx} className="card" style={{ padding: '0.75rem 1rem', flexDirection: 'row', gap: '0.65rem', alignItems: 'center' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)' }}>{conn}</span>
                </li>
              ))}
            </ul>
            <p>
              AI and IoT solutions provide utilities with additional visibility while allowing existing operational systems to remain central to daily activities.
            </p>
          </div>

          {/* DOCX Image 16 */}
          <DocxImage 
            src="/assets/docx-images/image16.png"
            title="UtilityWater AI Technology Stack for Water Utility Operations"
            description="This technology stack diagram illustrates how UtilityWater AI combines physical identification devices, connectivity technologies, AI and IoT software services, enterprise integrations, and operational applications into a unified platform for water utilities. The system demonstrates how RFID tags, BLE badges, GPS trackers, access readers, LoRaWAN networks, and cellular connectivity feed data into AI-powered software that integrates with SCADA, CMMS, ERP, and GIS systems. The key takeaway is that UtilityWater AI provides a scalable digital foundation that connects people, assets, facilities, and operational workflows across water treatment plants, pump stations, distribution networks, and field service operations."
            alt="Layered technology stack diagram showing RFID, BLE, GPS, LoRaWAN, AI software, SCADA, CMMS, ERP, GIS, and water utility applications."
          />
        </div>
      </section>

      {/* 9. UTILITYWATER AI APPROACH TO CUSTOMER SOLUTIONS */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>UtilityWater AI Approach to Customer Solutions</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)' }}>
            <p>
              UtilityWater AI works with organizations to identify practical applications for AI and IoT technologies.
            </p>
            <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
              The solution approach includes:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.75rem', listStyle: 'none', padding: 0, margin: '0 0 1.25rem 0' }}>
              {[
                "Understanding operational requirements",
                "Selecting appropriate identification technologies",
                "Designing software workflows",
                "Connecting with existing systems",
                "Supporting deployment and operation"
              ].map((step, idx) => (
                <li key={idx} className="card" style={{ padding: '0.75rem 1rem', flexDirection: 'row', gap: '0.65rem', alignItems: 'center' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)' }}>{step}</span>
                </li>
              ))}
            </ul>
            <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
              Each implementation considers:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem', listStyle: 'none', padding: 0, margin: '0 0 1.25rem 0' }}>
              {[
                "Facility environments", "Workforce requirements", "Asset categories",
                "Connectivity conditions", "Existing IT systems"
              ].map((con, idx) => (
                <li key={idx} className="card" style={{ padding: '0.75rem 1rem', flexDirection: 'row', gap: '0.65rem', alignItems: 'center' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)' }}>{con}</span>
                </li>
              ))}
            </ul>
            <p>
              This approach helps organizations adopt AI and IoT solutions based on operational needs.
            </p>
          </div>
        </div>
      </section>

      {/* 10. COMMITMENT TO RELIABLE WATER INFRASTRUCTURE SOLUTIONS */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Commitment to Reliable Water Infrastructure Solutions</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)' }}>
            <p>
              Water treatment and distribution systems support communities, industries, and essential services.
            </p>
            <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
              UtilityWater AI is committed to developing AI and IoT identification and location solutions that help organizations improve:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.75rem', listStyle: 'none', padding: 0, margin: '0 0 1.25rem 0' }}>
              {[
                "Operational visibility", "Asset management", "Workforce coordination",
                "Facility security", "Documentation accuracy"
              ].map((imp, idx) => (
                <li key={idx} className="card" style={{ padding: '0.85rem 1.15rem', flexDirection: 'row', gap: '0.75rem', alignItems: 'center' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)' }}>{imp}</span>
                </li>
              ))}
            </ul>
            <p>
              The company continues to advance solutions that connect physical infrastructure with digital operational information.
            </p>
          </div>
        </div>
      </section>

      {/* 7. FINAL DARK CTA SECTION */}
      <section className="final-cta-section">
        <div className="container">
          <h2 style={{ color: '#ffffff', marginBottom: '1.5rem', fontSize: '2rem', textAlign: 'left' }}>
            Contact UtilityWater AI
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem', fontSize: '1.05rem', lineHeight: '1.65', color: '#94a3b8', marginBottom: '2.5rem', textAlign: 'left' }}>
            <p>
              Organizations evaluating AI and IoT solutions for water treatment and distribution operations can work with UtilityWater AI to explore:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.75rem', listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', textAlign: 'left' }}>
              {[
                "Personnel tracking solutions",
                "Access control systems",
                "Asset identification solutions",
                "Inventory management solutions",
                "Fleet tracking systems",
                "Integration requirements"
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: '#ffffff', fontSize: '0.95rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p style={{ color: '#ffffff', fontWeight: 600 }}>
              Contact UtilityWater AI to discuss AI and IoT identification and location solutions designed for modern water utility operations.
            </p>
          </div>
          <div className="final-cta-btn-wrapper">
            <Link to="/contact" className="btn btn-primary btn-lg" style={{ padding: '1rem 2.25rem', fontSize: '1.05rem' }}>
              Contact Us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
