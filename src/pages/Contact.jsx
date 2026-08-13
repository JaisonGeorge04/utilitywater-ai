import React, { useEffect, useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Contact UtilityWater AI | AI and IoT Water Treatment & Distribution Solutions";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page-wrapper">
      {/* 1. HERO SECTION - CLEAN CENTERED HERO HEADER */}
      <section className="section section-navy-deep text-center" style={{ paddingTop: '4rem', paddingBottom: '4.5rem' }}>
        <div className="container">
          <p className="hero-tagline" style={{ textAlign: 'center', marginBottom: '0.85rem', fontWeight: 600, color: 'var(--color-primary)' }}>
            Discuss AI and IoT Identification and Location Solutions for Water Utilities
          </p>
          <h1 style={{ color: 'var(--color-text-main)', marginBottom: '1.25rem', fontSize: 'clamp(2.1rem, 4vw, 3rem)', maxWidth: '820px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center', lineHeight: '1.2' }}>
            Contact UtilityWater AI
          </h1>
          <h2 style={{ fontSize: '1.2rem', fontWeight: '600', color: 'var(--color-text-main)', marginBottom: '1.25rem', lineHeight: '1.45', maxWidth: '860px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
            Connect With UtilityWater AI for Water Treatment and Distribution AI and IoT Solutions
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: '1.65', margin: '0 auto 0 auto', maxWidth: '860px', textAlign: 'center' }}>
            Work with UtilityWater AI to evaluate personnel tracking, access control, asset identification, inventory management, fleet tracking, and enterprise integration solutions for water utility operations.
          </p>
        </div>
      </section>

      {/* 2. FORM SECTION - MEDIUM-WIDTH CENTERED MINIMAL DESIGN */}
      <section className="section" style={{ backgroundColor: '#ffffff', paddingTop: '3.5rem', paddingBottom: '4rem' }}>
        <div className="container" style={{ maxWidth: '760px', marginLeft: 'auto', marginRight: 'auto' }}>
          <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '2.5rem 2.5rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 16px rgba(0,0,0,0.04)' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--color-text-main)', marginBottom: '1.75rem', textAlign: 'center' }}>
              Request an AI and IoT Water Utility Consultation
            </h2>

            {submitted ? (
              <div style={{ padding: '2.5rem 1.5rem', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '8px', color: '#166534', textAlign: 'center' }}>
                <CheckCircle2 size={52} style={{ margin: '0 auto 1.25rem auto', color: '#22c55e' }} />
                <h3 style={{ fontSize: '1.35rem', color: '#166534', marginBottom: '0.75rem', fontWeight: 700 }}>Request Consultation</h3>
                <p style={{ fontSize: '1.025rem', color: '#166534', margin: 0, lineHeight: '1.6' }}>
                  Improve visibility across water treatment and distribution operations with AI and IoT identification and location solutions.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.35rem' }}>
                  <div>
                    <label htmlFor="name" style={{ display: 'block', fontWeight: 600, fontSize: '0.925rem', marginBottom: '0.45rem', color: '#1e293b' }}>
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="Name"
                      style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.975rem', outline: 'none', backgroundColor: '#ffffff', color: '#0f172a' }}
                    />
                  </div>
                  <div>
                    <label htmlFor="organization" style={{ display: 'block', fontWeight: 600, fontSize: '0.925rem', marginBottom: '0.45rem', color: '#1e293b' }}>
                      Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      required
                      placeholder="Organization"
                      style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.975rem', outline: 'none', backgroundColor: '#ffffff', color: '#0f172a' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.35rem' }}>
                  <div>
                    <label htmlFor="businessEmail" style={{ display: 'block', fontWeight: 600, fontSize: '0.925rem', marginBottom: '0.45rem', color: '#1e293b' }}>
                      Business Email
                    </label>
                    <input
                      type="email"
                      id="businessEmail"
                      required
                      placeholder="Business Email"
                      style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.975rem', outline: 'none', backgroundColor: '#ffffff', color: '#0f172a' }}
                    />
                  </div>
                  <div>
                    <label htmlFor="phoneNumber" style={{ display: 'block', fontWeight: 600, fontSize: '0.925rem', marginBottom: '0.45rem', color: '#1e293b' }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      placeholder="Phone Number"
                      style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.975rem', outline: 'none', backgroundColor: '#ffffff', color: '#0f172a' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.35rem' }}>
                  <div>
                    <label htmlFor="organizationType" style={{ display: 'block', fontWeight: 600, fontSize: '0.925rem', marginBottom: '0.45rem', color: '#1e293b' }}>
                      Organization Type
                    </label>
                    <select
                      id="organizationType"
                      style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.975rem', outline: 'none', backgroundColor: '#ffffff', color: '#0f172a' }}
                    >
                      <option value="">Organization Type</option>
                      <option value="Municipal water utilities">Municipal water utilities</option>
                      <option value="Regional water authorities">Regional water authorities</option>
                      <option value="Industrial water operations">Industrial water operations</option>
                      <option value="Treatment facilities">Treatment facilities</option>
                      <option value="Distribution network operators">Distribution network operators</option>
                      <option value="Infrastructure management organizations">Infrastructure management organizations</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="primaryInterest" style={{ display: 'block', fontWeight: 600, fontSize: '0.925rem', marginBottom: '0.45rem', color: '#1e293b' }}>
                      Primary Application Interest
                    </label>
                    <select
                      id="primaryInterest"
                      required
                      style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.975rem', outline: 'none', backgroundColor: '#ffffff', color: '#0f172a' }}
                    >
                      <option value="">Primary Application Interest</option>
                      <option value="Personnel Tracking">Personnel Tracking</option>
                      <option value="Facility Access Control">Facility Access Control</option>
                      <option value="Asset Tracking">Asset Tracking</option>
                      <option value="Inventory Management">Inventory Management</option>
                      <option value="Fleet Tracking">Fleet Tracking</option>
                      <option value="Software Integration">Software Integration</option>
                      <option value="General AI and IoT Consultation">General AI and IoT Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="additionalInfo" style={{ display: 'block', fontWeight: 600, fontSize: '0.925rem', marginBottom: '0.45rem', color: '#1e293b' }}>
                    Describe your operational requirements
                  </label>
                  <textarea
                    id="additionalInfo"
                    rows={4}
                    placeholder="Describe your operational requirements"
                    style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.975rem', outline: 'none', resize: 'vertical', backgroundColor: '#ffffff', color: '#0f172a' }}
                  ></textarea>
                </div>

                <div style={{ marginTop: '0.5rem', textAlign: 'center' }}>
                  <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', padding: '0.95rem 2rem', fontSize: '1.05rem', fontWeight: 600, justifyContent: 'center' }}>
                    Request Consultation <Send size={18} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 3. SOLUTION DISCUSSION CONTENT */}
      <section className="section section-alt" style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem' }}>
        <div className="container" style={{ maxWidth: '1080px' }}>
          {/* START YOUR AI AND IOT SOLUTION DISCUSSION */}
          <div className="section-header">
            <h2>Start Your AI and IoT Solution Discussion</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)', marginBottom: '3.5rem' }}>
            <p>
              Water treatment and distribution organizations operate complex infrastructure that requires reliable identification, location, and operational information.
            </p>
            <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
              UtilityWater AI helps organizations evaluate AI and IoT solutions based on:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.75rem', listStyle: 'none', padding: 0, margin: '0 0 1.25rem 0' }}>
              {[
                "Facility requirements", "Operational workflows", "Existing software systems",
                "Asset management needs", "Workforce coordination requirements", "Integration objectives"
              ].map((item, idx) => (
                <li key={idx} className="card" style={{ padding: '0.75rem 1rem', flexDirection: 'row', gap: '0.65rem', alignItems: 'center' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)' }}>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              Whether evaluating a new deployment or expanding an existing system, UtilityWater AI provides technical guidance for identifying suitable AI and IoT approaches.
            </p>
          </div>

          {/* CONTACT UTILITYWATER AI FOR TECHNICAL CONSULTATION */}
          <div className="section-header">
            <h2>Contact UtilityWater AI for Technical Consultation</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)', marginBottom: '3.5rem' }}>
            <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
              Organizations can contact UtilityWater AI to discuss applications including:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.75rem', listStyle: 'none', padding: 0, margin: '0 0 1.25rem 0' }}>
              {[
                "Water treatment plant personnel tracking", "Facility access control", "Pump station asset tracking",
                "Distribution network field operations", "RFID asset identification", "BLE personnel location solutions",
                "GPS fleet tracking", "Inventory management", "SCADA, CMMS, and ERP integration"
              ].map((app, idx) => (
                <li key={idx} className="card" style={{ padding: '0.85rem 1.15rem', flexDirection: 'row', gap: '0.75rem', alignItems: 'center' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)' }}>{app}</span>
                </li>
              ))}
            </ul>
            <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
              Technical discussions can help determine:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem', listStyle: 'none', padding: 0, margin: '0 0 1.25rem 0' }}>
              {[
                "Appropriate identification technologies", "Required software capabilities",
                "Deployment approaches", "Integration requirements", "Operational considerations"
              ].map((item, idx) => (
                <li key={idx} className="card" style={{ padding: '0.75rem 1rem', flexDirection: 'row', gap: '0.65rem', alignItems: 'center' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* SOLUTION AREAS SUPPORTED BY UTILITYWATER AI */}
          <div className="section-header">
            <h2>Solution Areas Supported by UtilityWater AI</h2>
          </div>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)', marginBottom: '2rem' }}>
            UtilityWater AI provides AI and IoT solutions focused on identification and location applications across water utility operations.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '3.5rem' }}>
            <div className="card" style={{ padding: '1.75rem' }}>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--color-text-main)', marginBottom: '0.75rem' }}>Personnel Location and Workforce Solutions</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '0.5rem', fontWeight: 600 }}>Contact UtilityWater AI for solutions supporting:</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 0.85rem 0', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {[
                  "Operator location management", "Field technician coordination",
                  "Confined space personnel tracking", "Lone worker safety workflows", "Shift activity documentation"
                ].map((item, i) => (
                  <li key={i} style={{ fontSize: '0.875rem', color: 'var(--color-text-main)' }}>• {item}</li>
                ))}
              </ul>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: 0 }}>
                AI and IoT personnel solutions help utilities improve workforce visibility while supporting operational safety procedures.
              </p>
            </div>

            <div className="card" style={{ padding: '1.75rem' }}>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--color-text-main)', marginBottom: '0.75rem' }}>Facility Access Control Solutions</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '0.5rem', fontWeight: 600 }}>UtilityWater AI supports access management applications including:</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 0.85rem 0', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {[
                  "Treatment plant entry management", "Restricted area access control",
                  "Credential verification", "Visitor access records"
                ].map((item, i) => (
                  <li key={i} style={{ fontSize: '0.875rem', color: 'var(--color-text-main)' }}>• {item}</li>
                ))}
              </ul>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: 0 }}>
                These solutions help utilities maintain better records of facility activity.
              </p>
            </div>

            <div className="card" style={{ padding: '1.75rem' }}>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--color-text-main)', marginBottom: '0.75rem' }}>Asset Tracking and Identification Solutions</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '0.5rem', fontWeight: 600 }}>Organizations can discuss AI and IoT asset management applications including:</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 0.85rem 0', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {[
                  "Pump tracking", "Valve identification", "Meter identification",
                  "Maintenance equipment tracking", "Mobile asset management"
                ].map((item, i) => (
                  <li key={i} style={{ fontSize: '0.875rem', color: 'var(--color-text-main)' }}>• {item}</li>
                ))}
              </ul>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: 0 }}>
                Technologies such as RFID, BLE, GPS, and cellular connectivity can support different operational environments.
              </p>
            </div>

            <div className="card" style={{ padding: '1.75rem' }}>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--color-text-main)', marginBottom: '0.75rem' }}>Inventory and Parts Management Solutions</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '0.5rem', fontWeight: 600 }}>UtilityWater AI helps utilities evaluate inventory applications including:</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 0.85rem 0', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {[
                  "Chemical inventory identification", "Spare parts tracking",
                  "Warehouse stock management", "Material movement records"
                ].map((item, i) => (
                  <li key={i} style={{ fontSize: '0.875rem', color: 'var(--color-text-main)' }}>• {item}</li>
                ))}
              </ul>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: 0 }}>
                These solutions support improved inventory visibility across treatment and maintenance operations.
              </p>
            </div>

            <div className="card" style={{ padding: '1.75rem' }}>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--color-text-main)', marginBottom: '0.75rem' }}>Integration and Enterprise Connectivity</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '0.5rem', fontWeight: 600 }}>Organizations can discuss integration requirements involving:</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 0.85rem 0', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {[
                  "SCADA systems", "CMMS software", "ERP systems",
                  "GIS applications", "Utility management software"
                ].map((item, i) => (
                  <li key={i} style={{ fontSize: '0.875rem', color: 'var(--color-text-main)' }}>• {item}</li>
                ))}
              </ul>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: 0 }}>
                UtilityWater AI supports integration planning to connect AI and IoT solutions with existing operational systems.
              </p>
            </div>
          </div>

          {/* INFORMATION NEEDED FOR AN INITIAL DISCUSSION */}
          <div className="section-header">
            <h2>Information Needed for an Initial Discussion</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)', marginBottom: '3.5rem' }}>
            <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
              To understand operational requirements, organizations may provide information such as:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.75rem', listStyle: 'none', padding: 0, margin: '0 0 1.25rem 0' }}>
              {[
                "Facility type", "Number of operational locations", "Existing software systems",
                "Asset categories requiring identification", "Personnel tracking requirements",
                "Access control requirements", "Fleet tracking requirements", "Deployment objectives"
              ].map((info, idx) => (
                <li key={idx} className="card" style={{ padding: '0.75rem 1rem', flexDirection: 'row', gap: '0.65rem', alignItems: 'center' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)' }}>{info}</span>
                </li>
              ))}
            </ul>
            <p>
              This information helps define appropriate AI and IoT solution options.
            </p>
          </div>

          {/* INDUSTRIES AND ORGANIZATIONS SUPPORTED */}
          <div className="section-header">
            <h2>Industries and Organizations Supported</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)', marginBottom: '3.5rem' }}>
            <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
              UtilityWater AI focuses on AI and IoT solutions for water treatment and distribution environments, including:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.75rem', listStyle: 'none', padding: 0, margin: '0 0 1.25rem 0' }}>
              {[
                "Municipal water utilities", "Regional water authorities", "Industrial water operations",
                "Treatment facilities", "Distribution network operators", "Infrastructure management organizations"
              ].map((org, idx) => (
                <li key={idx} className="card" style={{ padding: '0.85rem 1.15rem', flexDirection: 'row', gap: '0.75rem', alignItems: 'center' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)' }}>{org}</span>
                </li>
              ))}
            </ul>
            <p>
              The solutions are designed for organizations requiring reliable identification, location, and operational information.
            </p>
          </div>

          {/* WHY WORK WITH UTILITYWATER AI */}
          <div className="section-header">
            <h2>Why Work With UtilityWater AI</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)', marginBottom: '3.5rem' }}>
            <p>
              UtilityWater AI combines AI and IoT technical expertise with practical industrial deployment experience.
            </p>
            <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
              The company is supported by:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.75rem', listStyle: 'none', padding: 0, margin: '0 0 1.25rem 0' }}>
              {[
                "Two decades of IoT experience through GAO", "Thousands of IoT customers served",
                "Thousands of completed IoT projects", "Research and development investment",
                "Quality assurance processes", "Remote and onsite technical support"
              ].map((sup, idx) => (
                <li key={idx} className="card" style={{ padding: '0.75rem 1rem', flexDirection: 'row', gap: '0.65rem', alignItems: 'center' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)' }}>{sup}</span>
                </li>
              ))}
            </ul>
            <p>
              UtilityWater AI is created within Aperture Venture Studio, with support from GAO, and benefits from experience supporting Fortune 500 companies, leading research organizations, universities, and government agencies.
            </p>
          </div>

          {/* REQUEST MORE INFORMATION */}
          <div className="section-header">
            <h2>Request More Information</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)', marginBottom: '1rem' }}>
            <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
              Organizations interested in AI and IoT solutions for water treatment and distribution can contact UtilityWater AI for:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem', listStyle: 'none', padding: 0, margin: '0 0 1.25rem 0' }}>
              {[
                "Technical discussions", "Application evaluation", "Deployment planning",
                "Integration assessment", "Solution recommendations"
              ].map((req, idx) => (
                <li key={idx} className="card" style={{ padding: '0.75rem 1rem', flexDirection: 'row', gap: '0.65rem', alignItems: 'center' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)' }}>{req}</span>
                </li>
              ))}
            </ul>
            <p>
              UtilityWater AI works with organizations to identify practical approaches for improving personnel visibility, asset management, access control, inventory accuracy, and operational documentation.
            </p>
          </div>
        </div>
      </section>

      {/* 4. FINAL DARK SECTION */}
      <section className="final-cta-section">
        <div className="container">
          <h2 style={{ color: '#ffffff', marginBottom: '1.5rem', fontSize: '2rem', textAlign: 'left' }}>
            Improve visibility across water treatment and distribution operations with AI and IoT identification and location solutions.
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem', fontSize: '1.05rem', lineHeight: '1.65', color: '#94a3b8', textAlign: 'left' }}>
            <p style={{ color: '#ffffff', fontWeight: 600 }}>
              Contact UtilityWater AI to discuss solutions for:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem', listStyle: 'none', padding: 0, margin: '0', textAlign: 'left' }}>
              {[
                "Personnel tracking",
                "Access management",
                "Asset identification",
                "Inventory control",
                "Fleet operations",
                "Enterprise integration"
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: '#ffffff', fontSize: '0.95rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
