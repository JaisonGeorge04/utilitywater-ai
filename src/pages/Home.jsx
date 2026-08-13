import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import DocxImage from '../components/DocxImage';

export default function Home() {
  useEffect(() => {
    document.title = "AI and IoT for Water Treatment & Distribution | Personnel, Asset & Access Tracking | UtilityWater AI";
  }, []);

  return (
    <div className="homepage-wrapper">
      {/* 1. HERO SECTION */}
      <section className="section section-navy-deep hero-section" style={{ paddingTop: '4rem', paddingBottom: '4.5rem' }}>
        <div className="container">
          <div className="hero-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div className="hero-content">
              <p className="hero-tagline" style={{ marginBottom: '0.75rem', fontWeight: 600, color: 'var(--color-primary)' }}>
                Identification and Location Solutions for Modern Water Utilities
              </p>
              <h1 style={{ color: 'var(--color-text-main)', maxWidth: '680px', lineHeight: '1.2', marginBottom: '1.25rem', fontSize: 'clamp(2.1rem, 4vw, 3rem)' }}>
                AI and IoT Identification and Location Solutions for Water Treatment &amp; Distribution
              </h1>
              <h2 className="hero-headline" style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-text-main)', marginBottom: '1.25rem', lineHeight: '1.45' }}>
                AI and IoT for Personnel, Asset, Access, Inventory, and Traceability Across Water Treatment &amp; Distribution
              </h2>
              <p className="hero-subheadline" style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', lineHeight: '1.65', marginBottom: '2rem' }}>
                Improve operational visibility across treatment plants, pumping stations, reservoirs, distribution pipelines, maintenance yards, laboratories, warehouses, and field operations through AI and IoT solutions designed for identification, tracking, access management, inventory optimization, and regulatory traceability.
              </p>
              <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-primary btn-lg">
                  Contact Us <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* DOCX Image 1 - Hero Enterprise Visual */}
            <div className="hero-visual-wrapper">
              <DocxImage 
                src="/assets/docx-images/image1.jpeg"
                title="AI and IoT Connected Water Treatment and Distribution Operations"
                description="This enterprise illustration presents a unified AI and IoT ecosystem for municipal water utilities. It depicts water treatment plants, reservoirs, pump stations, and distribution networks integrated with workforce identification, RFID-based asset management, secure facility access, fleet tracking, chemical inventory visibility, SCADA operations, and cloud-connected AI analytics. The visual highlights how connected operational intelligence improves efficiency, safety, compliance, and service reliability across water treatment and distribution infrastructure."
                alt="Photorealistic illustration of a municipal water treatment facility connected to reservoirs, pump stations, distribution networks, RFID-tagged water assets, BLE-enabled personnel, GPS-tracked fleet vehicles, chemical inventory warehouses, secure access control points, SCADA control rooms, and cloud-based AI operational dashboards."
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW OF AI AND IOT FOR WATER TREATMENT & DISTRIBUTION */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Overview of AI and IoT for Water Treatment &amp; Distribution</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)' }}>
            <p>
              Water treatment and distribution systems operate across large geographic areas that include treatment facilities, pumping stations, reservoirs, booster stations, maintenance depots, laboratories, chemical storage buildings, warehouses, and thousands of miles of transmission and distribution pipelines. Maintaining visibility of personnel, mobile equipment, critical infrastructure, chemicals, and operational assets is essential for delivering safe drinking water while complying with regulatory requirements.
            </p>
            <p>
              AI and IoT combines artificial intelligence with connected identification devices, industrial communication technologies, and enterprise software to improve operational awareness across these environments. Rather than focusing on environmental sensing, UtilityWater AI emphasizes identification and location solutions that enable utilities to know where authorized personnel, critical assets, vehicles, inventory, and work activities are located throughout daily operations.
            </p>
            <p>
              Using RFID, Bluetooth Low Energy (BLE), GPS, LoRaWAN, and cellular connectivity, utilities can automate identification workflows while reducing manual data entry and improving operational accuracy.
            </p>
            <p>
              These technologies support both municipal and private water utilities responsible for drinking water production, treated water storage, transmission pipelines, pressure management, maintenance operations, emergency repairs, and field service coordination.
            </p>
            <p>
              UtilityWater AI focuses on helping organizations strengthen operational visibility while supporting workforce safety, infrastructure reliability, maintenance efficiency, and regulatory documentation.
            </p>
          </div>
        </div>
      </section>

      {/* 3. WHY AI AND IOT MATTERS FOR WATER TREATMENT & DISTRIBUTION */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>Why AI and IoT Matters for Water Treatment &amp; Distribution</h2>
          </div>
          <div style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)', marginBottom: '1.5rem' }}>
            <p style={{ marginBottom: '1.25rem' }}>
              Water utilities manage geographically dispersed infrastructure where personnel, contractors, vehicles, and equipment continuously move between facilities. Traditional manual logging methods often create delays in locating resources, verifying facility access, documenting maintenance activities, and preparing compliance reports.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              AI and IoT enables utilities to automate many identification and location processes without interrupting existing operational workflows.
            </p>
            <p style={{ fontWeight: 600, marginBottom: '1rem', color: 'var(--color-text-main)' }}>
              Major operational benefits include:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1rem', listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0' }}>
              {[
                "Improved visibility of field personnel across treatment facilities and distribution systems.",
                "Faster identification of maintenance crews responding to emergency water main failures.",
                "Better control of access to chemical storage, control rooms, laboratories, and secure operational areas.",
                "Real-time location of mobile equipment, fleet vehicles, valves, pumps, generators, and specialized maintenance tools.",
                "Improved inventory accuracy for treatment chemicals, repair components, replacement meters, fittings, and maintenance supplies.",
                "Faster preparation of compliance documentation required for regulatory inspections.",
                "Reduced manual paperwork associated with asset movement and workforce accountability.",
                "Better coordination between field crews, operations centers, warehouses, and maintenance departments.",
                "Increased operational efficiency across water production, storage, and distribution activities."
              ].map((item, idx) => (
                <li key={idx} className="card" style={{ padding: '1rem 1.25rem', flexDirection: 'row', gap: '0.85rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={20} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.95rem', color: 'var(--color-text-main)', lineHeight: '1.5' }}>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              These improvements help utilities reduce operational delays while supporting service continuity, infrastructure reliability, and workforce accountability.
            </p>
          </div>
        </div>
      </section>

      {/* 4. CORE AI AND IOT CAPABILITIES */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Core AI and IoT Capabilities</h2>
            <p className="section-subtitle">
              UtilityWater AI organizes its solutions around the operational priorities most relevant to water treatment and distribution organizations.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {/* Workforce Location Management */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--color-text-main)', marginBottom: '1rem' }}>Workforce Location Management</h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '1.25rem' }}>
                Personnel frequently work across treatment plants, pumping stations, reservoirs, remote valve sites, distribution networks, and maintenance yards.
              </p>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.85rem' }}>
                AI and IoT supports workforce location management by enabling organizations to:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.75rem', listStyle: 'none', padding: 0, marginBottom: '1.25rem' }}>
                {[
                  "Identify personnel entering secured operational areas.",
                  "Improve accountability for contractors and visitors.",
                  "Support lone worker protection.",
                  "Verify shift attendance.",
                  "Assist emergency response teams.",
                  "Improve evacuation coordination.",
                  "Document workforce movement for operational reporting."
                ].map((bullet, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', marginTop: '8px', flexShrink: 0 }} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0 }}>
                BLE identification badges and secure credential technologies help maintain accurate workforce visibility throughout operational facilities.
              </p>
            </div>

            {/* Secure Facility Access */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--color-text-main)', marginBottom: '1rem' }}>Secure Facility Access</h3>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.85rem' }}>
                Water treatment facilities contain numerous controlled-access locations including:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem', listStyle: 'none', padding: 0, marginBottom: '1.25rem' }}>
                {[
                  "Chemical storage buildings",
                  "Chlorination rooms",
                  "Electrical switchgear rooms",
                  "SCADA control rooms",
                  "Laboratory facilities",
                  "Pump stations",
                  "Reservoir compounds",
                  "Maintenance workshops",
                  "Administrative offices"
                ].map((loc, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{loc}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '1rem' }}>
                AI and IoT enables authorized personnel verification using RFID credentials, BLE identification, and intelligent access software that records entry events and supports compliance documentation.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0 }}>
                Utilities can better protect critical infrastructure while maintaining complete access histories for operational audits.
              </p>
            </div>

            {/* Asset Location & Utilization */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--color-text-main)', marginBottom: '1rem' }}>Asset Location &amp; Utilization</h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '1.25rem' }}>
                Water utilities manage thousands of valuable operational assets distributed across large service territories.
              </p>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.85rem' }}>
                Examples include:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.75rem', listStyle: 'none', padding: 0, marginBottom: '1.25rem' }}>
                {[
                  "Pumps", "Motors", "Portable generators", "Water quality testing equipment",
                  "Maintenance vehicles", "Excavation equipment", "Mobile pumps",
                  "Pipe repair equipment", "Valve actuators", "Bulk flow meters",
                  "Portable communication equipment"
                ].map((asset, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{asset}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '1rem' }}>
                AI and IoT enables these assets to be digitally identified and tracked throughout their operational lifecycle.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0 }}>
                RFID asset identification combined with GPS fleet tracking improves utilization while reducing time spent locating equipment during planned maintenance and emergency response activities.
              </p>
            </div>

            {/* Chemical & Parts Inventory Management */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--color-text-main)', marginBottom: '1rem' }}>Chemical &amp; Parts Inventory Management</h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '1.25rem' }}>
                Water treatment and distribution operations rely on accurate inventory records to maintain continuous service and regulatory compliance. Treatment chemicals, replacement valves, pipe fittings, maintenance kits, repair clamps, actuators, personal protective equipment (PPE), laboratory supplies, and spare mechanical components must be available when needed. Delays in locating or replenishing these materials can affect scheduled maintenance, emergency repairs, and treatment processes.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '1.25rem' }}>
                UtilityWater AI uses AI and IoT identification technologies to automate inventory visibility across warehouses, treatment plants, maintenance depots, and chemical storage facilities. RFID identification, barcode integration where applicable, BLE asset identification, and intelligent inventory software reduce manual inventory counts while improving stock accuracy.
              </p>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.85rem' }}>
                Key capabilities include:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.75rem', listStyle: 'none', padding: 0, marginBottom: '1.25rem' }}>
                {[
                  "Chemical inventory tracking across multiple storage locations",
                  "Automated identification of incoming and outgoing inventory",
                  "Spare parts location management",
                  "Warehouse stock visibility",
                  "Inventory movement history",
                  "Automated reorder point notifications",
                  "Demand forecasting based on historical maintenance activities",
                  "Material availability reporting for planned maintenance",
                  "Inventory reconciliation support",
                  "Audit-ready inventory documentation"
                ].map((cap, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', marginTop: '8px', flexShrink: 0 }} />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0 }}>
                Utilities benefit from improved warehouse efficiency while reducing excess inventory and minimizing the risk of stock shortages during critical maintenance activities.
              </p>
            </div>

            {/* Treatment Process Traceability */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--color-text-main)', marginBottom: '1rem' }}>Treatment Process Traceability</h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '1.25rem' }}>
                Traceability plays a significant role throughout drinking water treatment and distribution. Maintenance records, chemical handling activities, equipment replacement, operational inspections, and regulatory documentation require accurate identification of personnel, assets, materials, and completed work.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '1.25rem' }}>
                UtilityWater AI supports process traceability through AI and IoT software that records identification events throughout operational workflows.
              </p>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.85rem' }}>
                Examples include:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.75rem', listStyle: 'none', padding: 0, marginBottom: '1.25rem' }}>
                {[
                  "Tracking maintenance activities by location",
                  "Recording equipment installation history",
                  "Verifying chain of custody for regulated materials",
                  "Tracking replacement components",
                  "Recording treatment workflow milestones",
                  "Supporting laboratory sample identification",
                  "Documenting maintenance completion",
                  "Preparing compliance reports"
                ].map((ben, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', marginTop: '8px', flexShrink: 0 }} />
                    <span>{ben}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                Maintaining digital operational records
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0 }}>
                Rather than relying solely on manual logs, utilities can create consistent digital records that simplify reporting for internal management and external regulatory inspections.
              </p>
            </div>

            {/* AI and IoT Technologies Used Section */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--color-text-main)', marginBottom: '1rem' }}>AI and IoT Technologies Used in Water Treatment &amp; Distribution</h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '1.5rem' }}>
                UtilityWater AI combines several proven wireless identification technologies to address different operational requirements across water utility environments.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
                <div>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>RFID Identification</h4>
                  <p style={{ fontSize: '0.925rem', lineHeight: '1.6', color: 'var(--color-text-main)' }}>
                    RFID supports rapid identification of assets, maintenance equipment, inventory, and access credentials without requiring direct line-of-sight scanning.
                  </p>
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Bluetooth Low Energy (BLE)</h4>
                  <p style={{ fontSize: '0.925rem', lineHeight: '1.6', color: 'var(--color-text-main)' }}>
                    BLE provides location awareness for personnel and mobile assets within treatment plants and operational facilities.
                  </p>
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>GPS Location Services</h4>
                  <p style={{ fontSize: '0.925rem', lineHeight: '1.6', color: 'var(--color-text-main)' }}>
                    GPS is well suited for outdoor operations where utility vehicles and field personnel travel across extensive distribution networks.
                  </p>
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>LoRaWAN Connectivity</h4>
                  <p style={{ fontSize: '0.925rem', lineHeight: '1.6', color: 'var(--color-text-main)' }}>
                    LoRaWAN supports long-range communication for identification and tracking applications where conventional networking options may be limited.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. COMPLIANCE, OPERATIONAL RELIABILITY, AND SECURE IDENTIFICATION */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>Compliance, Operational Reliability, and Secure Identification</h2>
          </div>
          <div style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)' }}>
            <p style={{ marginBottom: '1.25rem' }}>
              Water treatment and distribution organizations operate under stringent operational, safety, and regulatory requirements. Reliable identification and location information helps utilities demonstrate accountability while supporting daily operations across treatment facilities, distribution infrastructure, and field service activities.
            </p>
            <p style={{ marginBottom: '1.25rem' }}>
              UtilityWater AI develops AI and IoT solutions that prioritize secure identification, accurate location data, and dependable software operation. Rather than replacing existing operational systems, the solution complements established utility workflows by integrating identification and tracking information into existing business processes.
            </p>
            <p style={{ fontWeight: 600, marginBottom: '1rem' }}>
              Areas where AI and IoT supports compliance and operational reliability include:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.85rem', listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0' }}>
              {[
                "Personnel identification for controlled operational areas",
                "Digital records of facility access events",
                "Asset movement documentation",
                "Inventory transaction history",
                "Maintenance activity records",
                "Treatment workflow traceability",
                "Contractor accountability",
                "Fleet activity documentation",
                "Digital audit preparation",
                "Operational reporting"
              ].map((item, idx) => (
                <li key={idx} className="card" style={{ padding: '0.85rem 1.15rem', flexDirection: 'row', gap: '0.75rem', alignItems: 'center' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)' }}>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              These capabilities help utilities improve record accuracy while reducing the administrative effort associated with manual documentation.
            </p>
          </div>
        </div>
      </section>

      {/* 6. DESIGNED FOR INTEGRATION WITH EXISTING UTILITY SYSTEMS */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Designed for Integration with Existing Utility Systems</h2>
          </div>
          <div style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)' }}>
            <p style={{ marginBottom: '1.25rem' }}>
              Most water utilities already rely on operational software such as SCADA, CMMS, ERP, GIS, laboratory information management systems (LIMS), workforce management software, and utility billing applications. AI and IoT identification and location solutions deliver greater value when they complement these existing investments.
            </p>
            <p style={{ marginBottom: '1.25rem' }}>
              UtilityWater AI supports integration through secure software interfaces and data synchronization tools that enable identification events to be shared with enterprise applications.
            </p>
            <p style={{ fontWeight: 600, marginBottom: '1rem' }}>
              Examples include:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '0.85rem', listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0' }}>
              {[
                "Synchronizing personnel access records with workforce management software",
                "Updating asset location information within CMMS applications",
                "Linking inventory transactions with ERP systems",
                "Associating maintenance activities with GIS asset records",
                "Supporting work order completion records",
                "Sharing operational reports with business intelligence tools"
              ].map((ex, idx) => (
                <li key={idx} className="card" style={{ padding: '0.85rem 1.15rem', flexDirection: 'row', gap: '0.75rem', alignItems: 'center' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)' }}>{ex}</span>
                </li>
              ))}
            </ul>
            <p>
              This integration approach helps organizations maintain consistent operational data while minimizing duplicate data entry.
            </p>
          </div>
        </div>
      </section>

      {/* 7. EXPERIENCE BUILT ON REAL-WORLD IOT DEPLOYMENTS */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>Experience Built on Real-World IoT Deployments</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)' }}>
            <p>
              UtilityWater AI was created within Aperture Venture Studio with support from GAO. Drawing on two decades of IoT experience, the organization has supported thousands of customers and successfully delivered thousands of IoT projects across water treatment and distribution operations.
            </p>
            <p>
              Extensive investment in research and development, supported by comprehensive quality assurance processes, has shaped solutions that address practical operational challenges faced by utilities. Remote and onsite technical support is available to assist organizations throughout planning, deployment, integration, and ongoing operation.
            </p>
            <p>
              The company's engineering leadership includes Ph.D. professionals from leading universities, supported by experienced technical specialists, strategic partners, and industry experts. Over the years, GAO organizations have worked with Fortune 500 companies, prominent research institutions, universities, and government agencies throughout the United States and Canada. This experience contributes to the technical depth and operational focus reflected in UtilityWater AI solutions.
            </p>
          </div>
        </div>
      </section>

      {/* 8. BENEFITS FOR WATER TREATMENT & DISTRIBUTION ORGANIZATIONS */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Benefits for Water Treatment &amp; Distribution Organizations</h2>
            <p className="section-subtitle">
              UtilityWater AI emphasizes measurable operational improvements through identification and location technologies tailored to water utility environments.
            </p>
          </div>
          <div style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)' }}>
            <p style={{ fontWeight: 600, marginBottom: '1rem' }}>
              Key benefits include:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '0.85rem', listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0' }}>
              {[
                "Improved workforce accountability",
                "Faster identification of personnel during emergency response",
                "Better control of secure facility access",
                "More efficient asset utilization",
                "Reduced time locating maintenance equipment",
                "Improved fleet visibility",
                "Greater inventory accuracy",
                "Simplified spare parts management",
                "Better documentation of maintenance activities",
                "Enhanced treatment process traceability",
                "Reduced manual recordkeeping",
                "Improved audit readiness",
                "Better coordination between treatment plants and field operations",
                "Support for operational continuity across geographically dispersed infrastructure"
              ].map((ben, idx) => (
                <li key={idx} className="card" style={{ padding: '0.85rem 1.15rem', flexDirection: 'row', gap: '0.75rem', alignItems: 'center' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)' }}>{ben}</span>
                </li>
              ))}
            </ul>
            <p>
              These outcomes help utilities improve efficiency while maintaining high standards for safety, accountability, and service reliability.
            </p>
          </div>
        </div>
      </section>

      {/* 9. WHY CHOOSE UTILITYWATER AI */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose UtilityWater AI</h2>
          </div>
          <div style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)', marginBottom: '2rem' }}>
            <p style={{ marginBottom: '1.25rem' }}>
              UtilityWater AI focuses specifically on AI and IoT identification and location solutions for water treatment and distribution rather than generic industrial software.
            </p>
            <p style={{ fontWeight: 600, marginBottom: '1rem' }}>
              Key differentiators include:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '0.85rem', listStyle: 'none', padding: 0, margin: '0 0 2rem 0' }}>
              {[
                "Focus on personnel tracking and secure access management",
                "Specialized asset identification for pumps, valves, meters, vehicles, and maintenance equipment",
                "Inventory management designed for treatment chemicals and utility spare parts",
                "Traceability tools that support operational documentation and regulatory reporting",
                "Support for RFID, BLE, GPS, LoRaWAN, and cellular communication technologies",
                "Integration with existing utility software, including SCADA, ERP, CMMS, GIS, and workforce management systems",
                "Flexible deployment options for cloud-based or on-premises environments",
                "Technical support provided by experienced IoT professionals",
                "Solutions informed by extensive real-world deployment experience across industrial environments"
              ].map((diff, i) => (
                <li key={i} className="card" style={{ padding: '0.85rem 1.15rem', flexDirection: 'row', gap: '0.75rem', alignItems: 'center' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)' }}>{diff}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* DOCX Image 2 - Comparison Visual */}
          <DocxImage 
            src="/assets/docx-images/image2.png"
            title="Operational Comparison: Traditional vs. AI & IoT Identification & Location Solutions"
            description="This technical visual table compares traditional manual processes against AI and IoT-enabled identification and location management across personnel tracking, facility access control, asset management, fleet visibility, inventory control, maintenance documentation, regulatory reporting, and overall operational awareness in water utilities."
            alt="Technical comparison table illustrating traditional manual water utility operations versus AI and IoT-enabled identification and location solutions across personnel, access, asset, fleet, inventory, maintenance, compliance, and visibility workflows."
          />
        </div>
      </section>

      {/* 10. FREQUENTLY SUPPORTED WATER UTILITY ASSETS */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Supported Water Utility Assets</h2>
          </div>
          <div style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)' }}>
            <p style={{ marginBottom: '1.25rem' }}>
              UtilityWater AI solutions can be applied across a wide range of operational assets commonly found in water treatment and distribution environments.
            </p>
            <p style={{ fontWeight: 600, marginBottom: '1rem' }}>
              Examples include:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem', listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0' }}>
              {[
                "Water treatment pumps", "High-service pumps", "Booster pumps", "Electric motors",
                "Flow meters", "Water meters", "Isolation valves", "Control valves",
                "Pressure-reducing valves", "Chemical storage containers", "Chemical transfer equipment",
                "Laboratory equipment", "Portable generators", "Mobile pumps", "Excavators",
                "Pipe repair tools", "Leak detection equipment", "Service trucks", "Utility fleet vehicles",
                "Warehouse inventory", "Maintenance tools", "Personal protective equipment (PPE)",
                "Spare mechanical components", "Electrical equipment", "Pipe fittings and repair materials"
              ].map((asset, idx) => (
                <li key={idx} className="card" style={{ padding: '0.75rem 1rem', flexDirection: 'row', gap: '0.65rem', alignItems: 'center' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.9rem', color: 'var(--color-text-main)' }}>{asset}</span>
                </li>
              ))}
            </ul>
            <p>
              Managing these assets with AI and IoT identification technologies improves visibility throughout their operational lifecycle.
            </p>
          </div>
        </div>
      </section>

      {/* 11. CALL TO ACTION SECTION */}
      <section className="final-cta-section">
        <div className="container">
          <h2 style={{ color: '#ffffff', marginBottom: '1.5rem', fontSize: '2rem', textAlign: 'left' }}>
            Call to Action
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem', fontSize: '1.05rem', lineHeight: '1.65', color: '#94a3b8', marginBottom: '2.5rem', textAlign: 'left' }}>
            <p>
              Water treatment and distribution organizations require dependable identification and location solutions that support workforce accountability, secure access, asset management, inventory accuracy, and operational traceability.
            </p>
            <p>
              UtilityWater AI helps utilities implement AI and IoT technologies using RFID, BLE, GPS, LoRaWAN, and cellular connectivity to improve operational visibility across treatment plants, pump stations, warehouses, distribution networks, and field service operations.
            </p>
            <p>
              Whether your organization is modernizing workforce location management, strengthening facility access control, improving asset utilization, optimizing chemical and spare parts inventory, or simplifying compliance documentation, UtilityWater AI provides practical solutions designed for the operational realities of water utilities.
            </p>
            <p style={{ color: '#ffffff', fontWeight: 600 }}>
              Contact UtilityWater AI to discuss your operational requirements, evaluate existing workflows, and identify AI and IoT solutions that align with your water treatment and distribution objectives.
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
