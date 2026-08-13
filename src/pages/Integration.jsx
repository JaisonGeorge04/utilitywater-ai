import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import DocxImage from '../components/DocxImage';

export default function Integration() {
  useEffect(() => {
    document.title = "AI and IoT Integration for Water Treatment & Distribution | SCADA, CMMS & ERP Connectivity | UtilityWater AI";
  }, []);

  return (
    <div className="page-wrapper">
      {/* 1. HERO SECTION - CLEAN CENTERED HERO HEADER */}
      <section className="section section-navy-deep text-center" style={{ paddingTop: '4rem', paddingBottom: '4.5rem' }}>
        <div className="container">
          <p className="hero-tagline" style={{ textAlign: 'center', marginBottom: '0.85rem', fontWeight: 600, color: 'var(--color-primary)' }}>
            Connecting Identification, Location, and Operational Data with Existing Utility Systems
          </p>
          <h1 style={{ color: 'var(--color-text-main)', marginBottom: '1.25rem', fontSize: 'clamp(2.1rem, 4vw, 3rem)', maxWidth: '820px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center', lineHeight: '1.2' }}>
            AI and IoT Integration for Water Treatment &amp; Distribution
          </h1>
          <h2 style={{ fontSize: '1.2rem', fontWeight: '600', color: 'var(--color-text-main)', marginBottom: '1.25rem', lineHeight: '1.45', maxWidth: '860px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
            AI and IoT Integration Solutions Connecting Water Utility Operations, Enterprise Software, and Field Infrastructure
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: '1.65', margin: '0 auto 2rem auto', maxWidth: '860px', textAlign: 'center' }}>
            UtilityWater AI provides integration software that connects personnel tracking, access control, asset identification, inventory management, and traceability solutions with SCADA, CMMS, ERP, GIS, and other utility systems.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Contact Us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW OF AI AND IOT INTEGRATION FOR WATER UTILITIES */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Overview of AI and IoT Integration for Water Utilities</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)' }}>
            <p>
              Water treatment and distribution organizations operate complex combinations of industrial control systems, maintenance applications, enterprise software, and field operations tools.
            </p>
            <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
              Common utility systems include:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.75rem', listStyle: 'none', padding: 0, margin: '0 0 1.25rem 0' }}>
              {[
                "SCADA systems for operational control",
                "CMMS systems for maintenance management",
                "ERP systems for resource planning",
                "GIS systems for infrastructure mapping",
                "Workforce management systems",
                "Inventory management systems",
                "Utility billing systems"
              ].map((sys, idx) => (
                <li key={idx} className="card" style={{ padding: '0.85rem 1.15rem', flexDirection: 'row', gap: '0.75rem', alignItems: 'center' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)' }}>{sys}</span>
                </li>
              ))}
            </ul>
            <p>
              AI and IoT integration connects identification and location solutions with these existing systems.
            </p>
            <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
              The purpose of integration is not to replace established utility software. Instead, integration adds operational visibility by connecting information about:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem', listStyle: 'none', padding: 0, margin: '0 0 1.25rem 0' }}>
              {[
                "Personnel location", "Facility access", "Asset identification",
                "Equipment movement", "Inventory activity", "Field service operations"
              ].map((info, idx) => (
                <li key={idx} className="card" style={{ padding: '0.75rem 1rem', flexDirection: 'row', gap: '0.65rem', alignItems: 'center' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)' }}>{info}</span>
                </li>
              ))}
            </ul>
            <p>
              UtilityWater AI focuses on practical integration solutions that allow water utilities to use AI and IoT data within existing operational workflows.
            </p>
          </div>

          {/* DOCX Image 9 */}
          <DocxImage 
            src="/assets/docx-images/image9.png"
            title="AI and IoT Integration System for Water Utility Operations"
            description="This integration system diagram illustrates how AI and IoT identification technologies—including RFID asset tags, BLE personnel badges, GPS fleet trackers, access readers, LoRaWAN devices, and cellular-connected assets—connect through a centralized integration platform to enterprise water utility systems. The system demonstrates seamless data flow between treatment plants, pump stations, warehouses, field operations, SCADA, CMMS, ERP, GIS, inventory management, and reporting applications, enabling unified operational visibility, compliance, maintenance coordination, and data-driven decision-making across the utility network."
            alt="Integration system diagram showing RFID, BLE, GPS, LoRaWAN, and cellular devices connected to SCADA, CMMS, ERP, GIS, inventory, and reporting systems."
          />
        </div>
      </section>

      {/* 3. MIDDLEWARE & INTEROPERABILITY */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>Middleware &amp; Interoperability</h2>
          </div>
          <div style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)', marginBottom: '2rem' }}>
            <p style={{ marginBottom: '1.25rem' }}>
              Middleware provides the connection layer between AI and IoT solutions and existing utility applications.
            </p>
            <p style={{ marginBottom: '1.25rem' }}>
              Water utilities often operate systems from multiple vendors. Integration software helps exchange information between these systems while maintaining operational consistency.
            </p>
            <p style={{ fontWeight: 600, marginBottom: '0.85rem' }}>
              Middleware solutions support:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem', listStyle: 'none', padding: 0, margin: '0 0 2rem 0' }}>
              {[
                "Data exchange", "System communication", "Information transformation",
                "Workflow coordination", "Application connectivity"
              ].map((sup, idx) => (
                <li key={idx} className="card" style={{ padding: '0.75rem 1rem', flexDirection: 'row', gap: '0.65rem', alignItems: 'center' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)' }}>{sup}</span>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Data Synchronization Software */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-text-main)', marginBottom: '0.85rem' }}>Data Synchronization Software</h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '1rem' }}>
                Data synchronization software helps maintain consistency between AI and IoT solutions and existing utility databases.
              </p>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                Applications include:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Asset information synchronization", "Personnel record updates", "Inventory information exchange",
                  "Location data sharing", "Maintenance record updates"
                ].map((app, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                Examples:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "A newly identified pump asset can be synchronized with an asset management system.",
                  "A technician's completed work activity can be associated with an existing maintenance record.",
                  "Inventory movement can be shared with warehouse management systems."
                ].map((ex, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', marginTop: '8px', flexShrink: 0 }} />
                    <span>{ex}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                Benefits include:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '0.5rem' }}>
                {[
                  "Reduced duplicate data entry", "Improved record consistency",
                  "Faster information availability", "Better coordination between departments"
                ].map((ben, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{ben}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* System Interoperability Layer */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-text-main)', marginBottom: '0.85rem' }}>System Interoperability Layer</h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '1rem' }}>
                System interoperability software enables communication between different utility applications. Water utilities may need to connect:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "AI and IoT software", "SCADA systems", "CMMS applications",
                  "ERP software", "GIS systems", "Access control systems"
                ].map((sys, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{sys}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                The interoperability layer supports:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Data format conversion", "Application communication", "Workflow integration", "Secure information exchange"
                ].map((sup, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{sup}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0 }}>
                This allows utilities to maintain existing technology investments while adding new identification and location capabilities.
              </p>
            </div>

            {/* Edge Processing Software */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-text-main)', marginBottom: '0.85rem' }}>Edge Processing Software</h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '1rem' }}>
                Edge processing software supports local processing of AI and IoT information near operational locations. Applications include:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Treatment facilities", "Pump stations", "Remote infrastructure", "Industrial facilities"
                ].map((app, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                Edge processing can support:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Local data processing", "Faster operational response", "Reduced communication requirements",
                  "Improved reliability during connectivity interruptions"
                ].map((sup, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{sup}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                Examples include:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Processing access events at a treatment facility",
                  "Managing local equipment identification records",
                  "Supporting remote location workflows"
                ].map((ex, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', marginTop: '8px', flexShrink: 0 }} />
                    <span>{ex}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0 }}>
                Edge processing is especially useful where immediate operational decisions are required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DEPLOYMENT MODELS FOR AI AND IOT UTILITY INTEGRATION */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Deployment Models for AI and IoT Utility Integration</h2>
          </div>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)', marginBottom: '2rem' }}>
            Water utilities have different requirements based on operational policies, security requirements, and existing IT environments. UtilityWater AI supports multiple deployment approaches.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
            {/* Cloud SaaS Deployment */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-text-main)', marginBottom: '0.85rem' }}>Cloud SaaS Deployment</h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '1rem' }}>
                Cloud software deployment allows utilities to access AI and IoT integration services through centralized infrastructure.
              </p>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                Applications include:
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Multi-site utility operations", "Distributed treatment facilities",
                  "Fleet management", "Enterprise reporting"
                ].map((app, i) => (
                  <li key={i} style={{ fontSize: '0.9rem', color: 'var(--color-text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--color-primary)' }} />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                Benefits include:
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Centralized software management", "Remote access",
                  "Easier expansion across locations", "Simplified software maintenance"
                ].map((ben, i) => (
                  <li key={i} style={{ fontSize: '0.9rem', color: 'var(--color-text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--color-primary)' }} />
                    <span>{ben}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0 }}>
                Cloud deployment is suitable for utilities requiring visibility across multiple facilities and service regions.
              </p>
            </div>

            {/* Server Software Deployment */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-text-main)', marginBottom: '0.85rem' }}>Server Software Deployment</h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '1rem' }}>
                Server-based deployment allows organizations to operate AI and IoT software within their own IT environments.
              </p>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                Applications include:
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Utilities with internal data policies", "Organizations requiring local hosting",
                  "Facilities with controlled network environments"
                ].map((app, i) => (
                  <li key={i} style={{ fontSize: '0.9rem', color: 'var(--color-text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--color-primary)' }} />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                Benefits include:
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Internal infrastructure management", "Organization-controlled data handling",
                  "Integration with existing enterprise systems", "Local operational management"
                ].map((ben, i) => (
                  <li key={i} style={{ fontSize: '0.9rem', color: 'var(--color-text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--color-primary)' }} />
                    <span>{ben}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0 }}>
                Server deployment provides flexibility for utilities with specific information technology requirements.
              </p>
            </div>
          </div>

          {/* DOCX Image 10 */}
          <DocxImage 
            src="/assets/docx-images/image10.png"
            title="Cloud vs Server Deployment for AI and IoT Water Utility Solutions"
            description="This deployment comparison table helps water utility decision makers evaluate cloud-based and on-premises server deployments for AI and IoT solutions. It compares hosting location, accessibility, maintenance responsibilities, scalability, integration flexibility, security considerations, cost structure, and ideal utility scenarios. The key takeaway is that cloud deployments offer greater scalability and operational flexibility, while server deployments provide enhanced control and data sovereignty, with many utilities benefiting from a hybrid deployment approach."
            alt="Comparison table evaluating cloud and server deployment models for AI and IoT water utility platforms across hosting, security, scalability, integration, and operational requirements."
          />
        </div>
      </section>

      {/* 5. ENTERPRISE SYSTEM CONNECTIVITY */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>Enterprise System Connectivity</h2>
          </div>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)', marginBottom: '2rem' }}>
            AI and IoT integration becomes more valuable when connected with the systems already used by utility organizations.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* SCADA Integration Software */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-text-main)', marginBottom: '0.85rem' }}>SCADA Integration Software</h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '1rem' }}>
                SCADA systems provide operational control and supervisory functions for water treatment processes. AI and IoT integration can enhance SCADA environments by providing additional identification information.
              </p>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                Applications include:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Associating equipment records with physical assets",
                  "Linking maintenance activities with locations",
                  "Supporting operational documentation",
                  "Improving asset visibility"
                ].map((app, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0 }}>
                Integration allows operational teams to access identification information alongside existing process information.
              </p>
            </div>

            {/* ERP & CMMS Connectivity */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-text-main)', marginBottom: '0.85rem' }}>ERP &amp; CMMS Connectivity</h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '1rem' }}>
                ERP and CMMS systems manage critical business and maintenance operations. AI and IoT integration can support:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Asset record updates", "Maintenance workflow improvements", "Inventory coordination",
                  "Equipment history tracking", "Work order association"
                ].map((sup, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{sup}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                Examples:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "A technician scans an RFID-tagged pump component.",
                  "The system identifies the asset and connects the activity with the CMMS work order.",
                  "Inventory records are updated after replacement materials are used."
                ].map((ex, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', marginTop: '8px', flexShrink: 0 }} />
                    <span>{ex}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0 }}>
                This improves consistency between field operations and enterprise records.
              </p>
            </div>

            {/* Utility Billing Integration */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-text-main)', marginBottom: '0.85rem' }}>Utility Billing Integration</h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '1rem' }}>
                Utility billing systems primarily support customer service and revenue management. Although billing systems operate separately from identification solutions, integration can support broader utility information management.
              </p>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                Potential applications include:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Linking service areas with infrastructure information",
                  "Supporting field service coordination",
                  "Improving information consistency between departments"
                ].map((app, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0 }}>
                Integration helps utilities maintain better alignment between customer operations and infrastructure management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. AI AND IOT INTEGRATION BENEFITS FOR WATER UTILITIES */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>AI and IoT Integration Benefits for Water Utilities</h2>
          </div>
          <div style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)' }}>
            <p style={{ marginBottom: '1.25rem' }}>
              Integration enables utilities to connect operational information across departments and systems.
            </p>
            <p style={{ fontWeight: 600, marginBottom: '1rem' }}>
              Key benefits include:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.85rem', listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0' }}>
              {[
                "Improved information consistency", "Reduced manual data entry", "Better asset visibility",
                "Faster maintenance coordination", "Improved inventory management", "Stronger operational records",
                "Better reporting capability", "Easier system expansion"
              ].map((ben, idx) => (
                <li key={idx} className="card" style={{ padding: '0.85rem 1.15rem', flexDirection: 'row', gap: '0.75rem', alignItems: 'center' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)' }}>{ben}</span>
                </li>
              ))}
            </ul>
            <p>
              AI and IoT integration helps utilities gain more value from existing software investments while adding identification and location capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* 7. UTILITYWATER AI INTEGRATION APPROACH */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>UtilityWater AI Integration Approach</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)' }}>
            <p>
              UtilityWater AI provides integration solutions designed for water treatment and distribution environments.
            </p>
            <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
              The integration approach focuses on:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, margin: '0 0 1rem 0' }}>
              {[
                "Connecting AI and IoT identification solutions",
                "Supporting existing utility software",
                "Improving operational workflows",
                "Maintaining flexible deployment options",
                "Enabling secure data exchange"
              ].map((item, idx) => (
                <li key={idx} className="card" style={{ padding: '0.75rem 1rem', flexDirection: 'row', gap: '0.65rem', alignItems: 'center' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)' }}>{item}</span>
                </li>
              ))}
            </ul>
            <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
              Supported integration areas include:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, margin: '0 0 1rem 0' }}>
              {[
                "Personnel identification systems", "Access management systems", "Asset tracking systems",
                "Inventory software", "Fleet management systems", "SCADA environments",
                "CMMS systems", "ERP applications"
              ].map((item, idx) => (
                <li key={idx} className="card" style={{ padding: '0.75rem 1rem', flexDirection: 'row', gap: '0.65rem', alignItems: 'center' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)' }}>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              UtilityWater AI is developed within Aperture Venture Studio, with support from GAO. Based on two decades of IoT experience, GAO has served thousands of IoT customers and delivered thousands of IoT projects. UtilityWater AI incorporates this experience through research and development investments, quality assurance processes, and technical support delivered remotely or onsite.
            </p>
            <p>
              The company's technical teams include Ph.D. professionals from leading universities and have supported Fortune 500 organizations, research institutions, universities, and government agencies.
            </p>
          </div>
        </div>
      </section>

      {/* 8. FINAL DARK CTA SECTION */}
      <section className="final-cta-section">
        <div className="container">
          <h2 style={{ color: '#ffffff', marginBottom: '1.5rem', fontSize: '2rem', textAlign: 'left' }}>
            Request an Integration Consultation
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem', fontSize: '1.05rem', lineHeight: '1.65', color: '#94a3b8', marginBottom: '2.5rem', textAlign: 'left' }}>
            <p>
              UtilityWater AI helps water treatment and distribution organizations evaluate integration requirements including:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.75rem', listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', textAlign: 'left' }}>
              {[
                "Existing software systems",
                "Facility operations",
                "Identification technologies",
                "Connectivity requirements",
                "Deployment preferences"
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: '#ffffff', fontSize: '0.95rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p style={{ color: '#ffffff', fontWeight: 600 }}>
              Contact UtilityWater AI to explore integration solutions connecting personnel, assets, inventory, and operational records across water utility environments.
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
