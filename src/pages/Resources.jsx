import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import DocxImage from '../components/DocxImage';

export default function Resources() {
  useEffect(() => {
    document.title = "AI and IoT Water Treatment Resources | Deployment Guides, Documentation & Utility References | UtilityWater AI";
  }, []);

  return (
    <div className="page-wrapper">
      {/* 1. HERO SECTION - CLEAN CENTERED HERO HEADER */}
      <section className="section section-navy-deep text-center" style={{ paddingTop: '4rem', paddingBottom: '4.5rem' }}>
        <div className="container">
          <p className="hero-tagline" style={{ textAlign: 'center', marginBottom: '0.85rem', fontWeight: 600, color: 'var(--color-primary)' }}>
            Technical Guidance for Identification, Location, Integration, and Deployment
          </p>
          <h1 style={{ color: 'var(--color-text-main)', marginBottom: '1.25rem', fontSize: 'clamp(2.1rem, 4vw, 3rem)', maxWidth: '820px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center', lineHeight: '1.2' }}>
            Resources for AI and IoT Water Treatment &amp; Distribution Solutions
          </h1>
          <h2 style={{ fontSize: '1.2rem', fontWeight: '600', color: 'var(--color-text-main)', marginBottom: '1.25rem', lineHeight: '1.45', maxWidth: '860px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
            Resources Supporting AI and IoT Implementation Across Water Treatment and Distribution Operations
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: '1.65', margin: '0 auto 2rem auto', maxWidth: '860px', textAlign: 'center' }}>
            UtilityWater AI provides technical resources to help water utilities understand, evaluate, deploy, and manage AI and IoT identification and location solutions for personnel, assets, inventory, access control, and operational traceability.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Contact Us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW OF UTILITYWATER AI RESOURCES */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Overview of UtilityWater AI Resources</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)' }}>
            <p>
              Water treatment and distribution organizations require reliable technical information when evaluating AI and IoT solutions for critical infrastructure.
            </p>
            <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
              Successful deployments depend on understanding:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem', listStyle: 'none', padding: 0, margin: '0 0 1.25rem 0' }}>
              {[
                "Operational requirements", "Identification technologies", "Wireless connectivity options",
                "Software integration methods", "Deployment models", "Security considerations",
                "Maintenance processes"
              ].map((item, idx) => (
                <li key={idx} className="card" style={{ padding: '0.75rem 1rem', flexDirection: 'row', gap: '0.65rem', alignItems: 'center' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)' }}>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              UtilityWater AI resources provide practical information for engineering teams, operations managers, IT professionals, and utility decision makers.
            </p>
            <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
              Resource areas include:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.75rem', listStyle: 'none', padding: 0, margin: '0 0 1.25rem 0' }}>
              {[
                "Technical documentation", "Frequently asked questions", "Deployment guidance",
                "Integration references", "Compliance considerations", "Technology selection information"
              ].map((area, idx) => (
                <li key={idx} className="card" style={{ padding: '0.85rem 1.15rem', flexDirection: 'row', gap: '0.75rem', alignItems: 'center' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)' }}>{area}</span>
                </li>
              ))}
            </ul>
            <p>
              These resources support organizations planning AI and IoT solutions across treatment facilities, pump stations, distribution networks, warehouses, and field operations.
            </p>
          </div>

          {/* DOCX Image 13 */}
          <DocxImage 
            src="/assets/docx-images/image13.png"
            title="AI and IoT Resource Framework for Water Utility Solutions"
            description="This resource navigation diagram organizes the key knowledge areas that support AI and IoT adoption in water treatment and distribution operations, including technical documentation, deployment guidance, integration references, hardware selection resources, compliance standards, FAQs, and operational best practices. The framework demonstrates how these resources serve utility engineers, IT teams, maintenance managers, and operations personnel through a centralized knowledge portal, helping accelerate implementation, improve operational performance, strengthen compliance, and support long-term technology success."
            alt="Resource framework diagram connecting technical documentation, deployment guides, integration references, compliance resources, and best practices to water utility teams."
          />
        </div>
      </section>

      {/* 3. TECHNICAL DOCUMENTATION */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>Technical Documentation</h2>
          </div>
          <div style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)', marginBottom: '2rem' }}>
            <p style={{ marginBottom: '1.25rem' }}>
              Technical documentation provides detailed information about UtilityWater AI solutions, hardware technologies, software functions, and system integration methods.
            </p>
            <p style={{ fontWeight: 600, marginBottom: '0.85rem' }}>
              Documentation topics include:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.75rem', listStyle: 'none', padding: 0, margin: '0 0 2rem 0' }}>
              {[
                "AI and IoT solution specifications", "RFID identification technologies",
                "BLE personnel location solutions", "GPS fleet tracking solutions",
                "LoRaWAN connectivity options", "Cellular connectivity solutions",
                "Software integration methods", "Deployment configurations"
              ].map((top, idx) => (
                <li key={idx} className="card" style={{ padding: '0.75rem 1rem', flexDirection: 'row', gap: '0.65rem', alignItems: 'center' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)' }}>{top}</span>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* AI and IoT Solution Documentation */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-text-main)', marginBottom: '0.85rem' }}>AI and IoT Solution Documentation</h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '1rem' }}>
                AI and IoT solution documentation helps organizations understand how identification and location technologies support water utility operations.
              </p>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                Topics include:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Personnel identification workflows", "Access control processes",
                  "Asset tracking methods", "Inventory management workflows", "Traceability documentation"
                ].map((top, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{top}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0 }}>
                These materials explain how AI and IoT software connects physical resources with digital operational records.
              </p>
            </div>

            {/* Hardware Technology Documentation */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-text-main)', marginBottom: '0.85rem' }}>Hardware Technology Documentation</h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '1rem' }}>
                Hardware documentation provides technical information about devices used in water utility applications. Covered technologies include:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "RFID asset tags", "RFID readers", "BLE personnel badges",
                  "GPS fleet trackers", "Access control readers", "LoRaWAN communication devices",
                  "Cellular-connected tracking devices"
                ].map((tech, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                Documentation helps engineering teams evaluate:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '0.5rem' }}>
                {[
                  "Installation requirements", "Communication methods", "Operating environments",
                  "Integration requirements", "Maintenance considerations"
                ].map((ev, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{ev}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Software Documentation */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-text-main)', marginBottom: '0.85rem' }}>Software Documentation</h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '1rem' }}>
                Software documentation explains the functions available for managing AI and IoT identification and location systems. Topics include:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "User management", "Asset registration", "Personnel management",
                  "Access control configuration", "Inventory workflows", "Reporting functions", "Integration options"
                ].map((top, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{top}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0 }}>
                These materials support administrators and technical teams responsible for system operation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FREQUENTLY ASKED QUESTIONS */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="card" style={{ padding: '1.75rem' }}>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--color-text-main)', marginBottom: '0.75rem' }}>What is AIoT for water treatment and distribution?</h3>
              <p style={{ fontSize: '0.975rem', lineHeight: '1.65', marginBottom: '0.85rem' }}>
                AIoT combines AI capabilities with IoT devices and connected industrial systems to improve identification, location, and operational management. For water utilities, AI and IoT solutions can support:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.5rem', listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  "Personnel tracking", "Access control", "Asset identification",
                  "Inventory management", "Fleet tracking", "Operational traceability"
                ].map((item, i) => (
                  <li key={i} style={{ fontSize: '0.9rem', color: 'var(--color-text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--color-primary)' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card" style={{ padding: '1.75rem' }}>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--color-text-main)', marginBottom: '0.75rem' }}>How does AI and IoT improve water utility operations?</h3>
              <p style={{ fontSize: '0.975rem', lineHeight: '1.65', marginBottom: '0.85rem' }}>
                AI and IoT solutions improve operational visibility by connecting physical resources with digital software systems. Applications include:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.5rem', listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  "Identifying equipment locations", "Managing personnel access",
                  "Tracking mobile assets", "Improving inventory records", "Supporting maintenance documentation"
                ].map((app, i) => (
                  <li key={i} style={{ fontSize: '0.9rem', color: 'var(--color-text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--color-primary)' }} />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card" style={{ padding: '1.75rem' }}>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--color-text-main)', marginBottom: '0.75rem' }}>What identification technologies are used in water utility AI and IoT solutions?</h3>
              <p style={{ fontSize: '0.975rem', lineHeight: '1.65', marginBottom: '0.85rem' }}>
                Common technologies include:
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  "RFID for asset and inventory identification",
                  "BLE for personnel location applications",
                  "GPS for fleet and outdoor tracking",
                  "LoRaWAN for selected remote connectivity applications",
                  "Cellular connectivity for wide-area tracking"
                ].map((tech, i) => (
                  <li key={i} style={{ fontSize: '0.9rem', color: 'var(--color-text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--color-primary)' }} />
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card" style={{ padding: '1.75rem' }}>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--color-text-main)', marginBottom: '0.75rem' }}>Can AI and IoT solutions integrate with existing utility systems?</h3>
              <p style={{ fontSize: '0.975rem', lineHeight: '1.65', marginBottom: '0.5rem' }}>
                Yes. AI and IoT solutions can be integrated with existing systems such as:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.4rem', listStyle: 'none', padding: 0, margin: '0 0 0.75rem 0' }}>
                {[
                  "SCADA", "CMMS", "ERP", "GIS", "Workforce management systems", "Inventory systems"
                ].map((sys, i) => (
                  <li key={i} style={{ fontSize: '0.9rem', color: 'var(--color-text-main)' }}>• {sys}</li>
                ))}
              </ul>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0 }}>
                Integration allows utilities to add identification and location capabilities without replacing existing operational software.
              </p>
            </div>

            <div className="card" style={{ padding: '1.75rem' }}>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--color-text-main)', marginBottom: '0.75rem' }}>Are AI and IoT solutions suitable for remote pump stations?</h3>
              <p style={{ fontSize: '0.975rem', lineHeight: '1.65', marginBottom: '0.5rem' }}>
                Yes. Remote facilities can use technologies such as:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.4rem', listStyle: 'none', padding: 0, margin: '0 0 0.75rem 0' }}>
                {[
                  "GPS tracking", "Cellular connectivity", "LoRaWAN communication", "Remote access identification"
                ].map((tech, i) => (
                  <li key={i} style={{ fontSize: '0.9rem', color: 'var(--color-text-main)' }}>• {tech}</li>
                ))}
              </ul>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0 }}>
                These solutions help utilities maintain visibility across distributed infrastructure.
              </p>
            </div>

            <div className="card" style={{ padding: '1.75rem' }}>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--color-text-main)', marginBottom: '0.75rem' }}>How can RFID support water utility asset management?</h3>
              <p style={{ fontSize: '0.975rem', lineHeight: '1.65', marginBottom: '0.5rem' }}>
                RFID helps utilities identify and manage:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.4rem', listStyle: 'none', padding: 0, margin: '0 0 0.75rem 0' }}>
                {[
                  "Pumps", "Valves", "Tools", "Maintenance equipment", "Spare parts", "Inventory materials"
                ].map((item, i) => (
                  <li key={i} style={{ fontSize: '0.9rem', color: 'var(--color-text-main)' }}>• {item}</li>
                ))}
              </ul>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0 }}>
                RFID improves asset record accuracy and reduces manual identification processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. AI AND IOT DEPLOYMENT GUIDES */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>AI and IoT Deployment Guides</h2>
          </div>
          <div style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)', marginBottom: '2rem' }}>
            <p style={{ marginBottom: '1.25rem' }}>
              Deployment guides help utilities plan and implement identification and location solutions.
            </p>
            <p style={{ fontWeight: 600, marginBottom: '0.85rem' }}>
              A successful deployment typically includes:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem', listStyle: 'none', padding: 0, margin: '0 0 2rem 0' }}>
              {[
                "Operational assessment", "Technology selection", "Hardware installation",
                "Software configuration", "System integration", "User training", "Performance evaluation"
              ].map((step, idx) => (
                <li key={idx} className="card" style={{ padding: '0.75rem 1rem', flexDirection: 'row', gap: '0.65rem', alignItems: 'center' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)' }}>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div className="card" style={{ padding: '1.75rem' }}>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--color-text-main)', marginBottom: '0.75rem' }}>Facility Deployment Guide</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '0.5rem' }}>
                Treatment facilities require careful planning because they contain multiple operational zones.
              </p>
              <p style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.4rem' }}>Deployment considerations include:</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 0.75rem 0', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                {[
                  "Facility layout", "Personnel movement patterns", "Access requirements",
                  "Asset categories", "Existing software systems"
                ].map((con, i) => (
                  <li key={i} style={{ fontSize: '0.875rem', color: 'var(--color-text-main)' }}>• {con}</li>
                ))}
              </ul>
              <p style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.4rem' }}>Applications include:</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                {[
                  "Operator location solutions", "Restricted area access control",
                  "Equipment identification", "Maintenance support"
                ].map((app, i) => (
                  <li key={i} style={{ fontSize: '0.875rem', color: 'var(--color-primary)', fontWeight: 600 }}>- {app}</li>
                ))}
              </ul>
            </div>

            <div className="card" style={{ padding: '1.75rem' }}>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--color-text-main)', marginBottom: '0.75rem' }}>Asset Tracking Deployment Guide</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '0.5rem' }}>
                Asset tracking deployments begin with identifying operational priorities.
              </p>
              <p style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.4rem' }}>Planning considerations include:</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 0.75rem 0', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                {[
                  "Asset categories", "Required tracking range", "Asset mobility",
                  "Maintenance workflows", "Software integration needs"
                ].map((plan, i) => (
                  <li key={i} style={{ fontSize: '0.875rem', color: 'var(--color-text-main)' }}>• {plan}</li>
                ))}
              </ul>
              <p style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.4rem' }}>Examples:</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                {[
                  "RFID for equipment identification", "GPS for mobile vehicles", "BLE for indoor location applications"
                ].map((ex, i) => (
                  <li key={i} style={{ fontSize: '0.875rem', color: 'var(--color-primary)', fontWeight: 600 }}>- {ex}</li>
                ))}
              </ul>
            </div>

            <div className="card" style={{ padding: '1.75rem' }}>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--color-text-main)', marginBottom: '0.75rem' }}>Fleet Tracking Deployment Guide</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '0.5rem' }}>
                Fleet tracking projects typically evaluate:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 0.75rem 0', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                {[
                  "Vehicle types", "Service territories", "Dispatch processes", "Reporting requirements"
                ].map((ev, i) => (
                  <li key={i} style={{ fontSize: '0.875rem', color: 'var(--color-text-main)' }}>• {ev}</li>
                ))}
              </ul>
              <p style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.4rem' }}>GPS fleet tracking solutions can support:</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                {[
                  "Vehicle location records", "Route history", "Field coordination", "Emergency response"
                ].map((sup, i) => (
                  <li key={i} style={{ fontSize: '0.875rem', color: 'var(--color-primary)', fontWeight: 600 }}>- {sup}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* DOCX Image 14 */}
          <DocxImage 
            src="/assets/docx-images/image14.jpeg"
            title="AI and IoT Deployment Roadmap for Water Utility Operations"
            description="This deployment roadmap timeline illustrates the typical implementation journey for AI and IoT solutions in water treatment and distribution environments. The framework guides utilities through operational assessment, technology selection, hardware installation, software configuration, system integration, user training, pilot validation, and enterprise expansion across treatment plants, pump stations, field teams, and critical assets. The key takeaway is that a phased deployment approach reduces implementation risk, accelerates user adoption, and enables scalable operational improvements while maintaining continuity of utility services."
            alt="Timeline roadmap showing assessment, technology selection, installation, integration, training, pilot deployment, and expansion phases for AI and IoT water utility solutions."
          />
        </div>
      </section>

      {/* 6. COMPLIANCE STANDARDS REFERENCE */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Compliance Standards Reference</h2>
          </div>
          <div style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)' }}>
            <p style={{ marginBottom: '1.25rem' }}>
              Water utilities operate under strict operational, safety, and infrastructure management requirements.
            </p>
            <p style={{ fontWeight: 600, marginBottom: '0.85rem' }}>
              AI and IoT deployments should consider:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem', listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0' }}>
              {[
                "Data security requirements", "Access control procedures",
                "Operational documentation requirements", "Industry-specific compliance practices",
                "Internal governance policies"
              ].map((item, idx) => (
                <li key={idx} className="card" style={{ padding: '0.75rem 1rem', flexDirection: 'row', gap: '0.65rem', alignItems: 'center' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)' }}>{item}</span>
                </li>
              ))}
            </ul>
            <p style={{ fontWeight: 600, marginBottom: '0.85rem' }}>
              UtilityWater AI solutions support documentation processes by maintaining records related to:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem', listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0' }}>
              {[
                "Personnel access", "Asset history", "Inventory activity", "Operational workflows"
              ].map((rec, idx) => (
                <li key={idx} className="card" style={{ padding: '0.75rem 1rem', flexDirection: 'row', gap: '0.65rem', alignItems: 'center' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)' }}>{rec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 7. UTILITYWATER AI TECHNICAL EXPERTISE */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>UtilityWater AI Technical Expertise</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)' }}>
            <p>
              UtilityWater AI resources are developed from practical IoT experience supporting industrial and utility applications.
            </p>
            <p>
              Created within Aperture Venture Studio, with support from GAO, UtilityWater AI builds on two decades of IoT experience, thousands of IoT customers, and thousands of completed IoT projects.
            </p>
            <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
              The company combines:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, margin: '0 0 1rem 0' }}>
              {[
                "Research and development investment", "Quality assurance processes",
                "Technical engineering support", "Industry-focused solution development"
              ].map((item, idx) => (
                <li key={idx} className="card" style={{ padding: '0.75rem 1rem', flexDirection: 'row', gap: '0.65rem', alignItems: 'center' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)' }}>{item}</span>
                </li>
              ))}
            </ul>
            <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
              UtilityWater AI teams include Ph.D. professionals from leading universities and have supported:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, margin: '0 0 1rem 0' }}>
              {[
                "Fortune 500 companies", "Research organizations", "Universities", "Government agencies"
              ].map((item, idx) => (
                <li key={idx} className="card" style={{ padding: '0.75rem 1rem', flexDirection: 'row', gap: '0.65rem', alignItems: 'center' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 7. FINAL DARK CTA SECTION */}
      <section className="final-cta-section">
        <div className="container">
          <h2 style={{ color: '#ffffff', marginBottom: '1.5rem', fontSize: '2rem', textAlign: 'left' }}>
            Access AI and IoT Water Utility Resources
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem', fontSize: '1.05rem', lineHeight: '1.65', color: '#94a3b8', marginBottom: '2.5rem', textAlign: 'left' }}>
            <p>
              UtilityWater AI provides technical resources for organizations evaluating:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.75rem', listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', textAlign: 'left' }}>
              {[
                "Personnel tracking solutions",
                "Facility access systems",
                "Asset identification solutions",
                "Inventory management systems",
                "Fleet tracking solutions",
                "Operational traceability systems"
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: '#ffffff', fontSize: '0.95rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p style={{ color: '#ffffff', fontWeight: 600 }}>
              Explore UtilityWater AI resources to support planning, deployment, and management of AI and IoT identification and location solutions for water treatment and distribution operations.
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
