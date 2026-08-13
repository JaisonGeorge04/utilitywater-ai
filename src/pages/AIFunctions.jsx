import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import DocxImage from '../components/DocxImage';

export default function AIFunctions() {
  useEffect(() => {
    document.title = "AI Functions for Water Treatment & Distribution | AIoT Personnel, Access & Asset Solutions | UtilityWater AI";
  }, []);

  return (
    <div className="page-wrapper">
      {/* 1. HERO SECTION - CLEAN CENTERED HERO HEADER */}
      <section className="section section-navy-deep text-center" style={{ paddingTop: '4rem', paddingBottom: '4.5rem' }}>
        <div className="container">
          <p className="hero-tagline" style={{ textAlign: 'center', marginBottom: '0.85rem', fontWeight: 600, color: 'var(--color-primary)' }}>
            AI-Powered Identification and Location Functions for Water Utility Operations
          </p>
          <h1 style={{ color: 'var(--color-text-main)', marginBottom: '1.25rem', fontSize: 'clamp(2.1rem, 4vw, 3rem)', maxWidth: '820px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center', lineHeight: '1.2' }}>
            AI Functions for AIoT-Enabled Water Treatment &amp; Distribution
          </h1>
          <h2 style={{ fontSize: '1.2rem', fontWeight: '600', color: 'var(--color-text-main)', marginBottom: '1.25rem', lineHeight: '1.45', maxWidth: '860px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
            AI and IoT Functions for Personnel, Access, Asset, Inventory, and Traceability Management Across Water Treatment Facilities
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: '1.65', margin: '0 auto 2rem auto', maxWidth: '860px', textAlign: 'center' }}>
            UtilityWater AI applies AI and IoT identification and location technologies to help water utilities improve workforce visibility, secure facility access, locate critical assets, manage operational resources, and maintain digital records across treatment plants, pump stations, distribution networks, and field operations.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Contact Us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW OF AI FUNCTIONS FOR WATER TREATMENT & DISTRIBUTION */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Overview of AI Functions for Water Treatment &amp; Distribution</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)' }}>
            <p>
              Water treatment and distribution organizations manage complex operational environments where personnel, infrastructure, equipment, vehicles, inventory, and regulated materials must be coordinated across multiple locations.
            </p>
            <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
              A typical utility may operate:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.75rem', listStyle: 'none', padding: 0, margin: '0 0 1.25rem 0' }}>
              {[
                "Drinking water treatment plants", "Pump stations", "Reservoir facilities",
                "Booster stations", "Transmission pipelines", "Distribution networks",
                "Maintenance yards", "Chemical storage buildings", "Warehouses",
                "Laboratory facilities", "Emergency response locations"
              ].map((fac, idx) => (
                <li key={idx} className="card" style={{ padding: '0.75rem 1rem', flexDirection: 'row', gap: '0.65rem', alignItems: 'center' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)' }}>{fac}</span>
                </li>
              ))}
            </ul>
            <p>
              Maintaining accurate information about where people, equipment, and materials are located is essential for safe operations, maintenance efficiency, emergency response, and regulatory documentation.
            </p>
            <p>
              AI and IoT functions combine artificial intelligence software with connected identification technologies, including RFID, Bluetooth Low Energy (BLE), GPS, LoRaWAN, and cellular communication. These technologies enable utilities to automatically identify operational resources, analyze movement patterns, support workflow decisions, and improve visibility across distributed infrastructure.
            </p>
            <p>
              UtilityWater AI focuses on identification and location solutions rather than environmental measurement systems. The primary objective is helping water utilities answer critical operational questions:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.75rem', listStyle: 'none', padding: 0, margin: '0 0 1.25rem 0' }}>
              {[
                "Where are authorized personnel working?",
                "Who has entered restricted operational areas?",
                "Where are critical pumps, valves, meters, and maintenance tools located?",
                "Are required chemicals and spare parts available?",
                "Can operational activities be verified through digital records?"
              ].map((q, idx) => (
                <li key={idx} className="card" style={{ padding: '0.85rem 1.15rem', flexDirection: 'row', gap: '0.75rem', alignItems: 'center' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)', fontWeight: 600 }}>{q}</span>
                </li>
              ))}
            </ul>
            <p>
              By applying AI and IoT functions to these challenges, utilities can improve accountability, reduce manual processes, and strengthen operational reliability.
            </p>
          </div>

          {/* DOCX Image 3 */}
          <DocxImage 
            src="/assets/docx-images/image3.jpeg"
            title="AI Functions Overview for Water Treatment & Distribution Operations"
            description="This enterprise illustration presents AI-enabled software capabilities for municipal water utilities. It highlights personnel location tracking, secure facility access verification, asset tracking, inventory control, and operational traceability across water treatment plants, pumping stations, distribution networks, chemical storage facilities, laboratories, and fleet operations. The diagram emphasizes how AI software processes data from connected identification devices to provide operational intelligence, safety monitoring, maintenance support, compliance documentation, and enterprise system integration."
            alt="Water utility illustration linking personnel, assets, inventory, fleet, facilities, and AI operations dashboard."
          />
        </div>
      </section>

      {/* 3. CORE AI AND IOT FUNCTIONS */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>Core AI and IoT Functions for Water Treatment &amp; Distribution</h2>
            <p className="section-subtitle">
              UtilityWater AI organizes AI-enabled functions around five operational priorities:
            </p>
          </div>
          <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0' }}>
            {[
              "Workforce location management",
              "Secure facility access",
              "Asset location and utilization",
              "Chemical and parts inventory management",
              "Process and operational traceability"
            ].map((prio, idx) => (
              <li key={idx} className="card" style={{ padding: '1rem 1.25rem', fontWeight: 600, color: 'var(--color-primary)', fontSize: '0.95rem' }}>
                {idx + 1}. {prio}
              </li>
            ))}
          </ul>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)' }}>
            The highest-value applications focus on personnel, access, assets, and inventory because these areas directly affect daily utility operations. Traceability functions provide additional support for compliance reporting, maintenance documentation, and operational history.
          </p>
        </div>
      </section>

      {/* 4. WORKFORCE LOCATION MANAGEMENT */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Workforce Location Management</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Operator Location Management */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-text-main)', marginBottom: '0.85rem' }}>Operator Location Management</h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '1.15rem' }}>
                Water treatment operators, maintenance technicians, contractors, and emergency response teams frequently move between operational areas. Traditional sign-in sheets, radio communication, and manual tracking processes can make it difficult to maintain accurate awareness of personnel locations.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '1.15rem' }}>
                AI and IoT workforce location management provides utilities with improved visibility into personnel movement across treatment facilities and operational sites.
              </p>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                BLE personnel badges, RFID identification, and location software can support:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Operator identification", "Facility presence tracking", "Work area verification",
                  "Contractor accountability", "Emergency response coordination", "Workforce activity records"
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '0.975rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                For example, a treatment plant operator entering a filtration building, chemical handling area, or pump room can be automatically identified through authorized location systems. This creates a digital record of personnel presence without requiring manual logging.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0 }}>
                AI software can analyze operational patterns to help supervisors understand workforce utilization, improve shift planning, and identify opportunities for workflow improvements.
              </p>
            </div>

            {/* Confined Space Worker Tracking */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-text-main)', marginBottom: '0.85rem' }}>Confined Space Worker Tracking</h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '1rem' }}>
                Water utilities frequently operate infrastructure that includes confined spaces such as:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Storage tanks", "Wet wells", "Pump chambers",
                  "Valve vaults", "Underground utility structures", "Treatment process areas"
                ].map((space, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{space}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '1.15rem' }}>
                Confined space activities require strict worker accountability and emergency preparedness. AI and IoT identification solutions help utilities maintain awareness of workers entering and exiting controlled areas.
              </p>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                Capabilities include:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Worker entry verification", "Personnel identification", "Location confirmation",
                  "Time-based activity records", "Emergency personnel accountability", "Contractor tracking"
                ].map((cap, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '0.975rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                BLE badges and RFID credentials can provide digital records that support confined space procedures while helping supervisors verify worker status during critical activities.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0 }}>
                These systems complement existing safety procedures by improving information availability during routine maintenance and emergency situations.
              </p>
            </div>

            {/* Lone Worker Protection */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-text-main)', marginBottom: '0.85rem' }}>Lone Worker Protection</h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '1rem' }}>
                Water distribution networks often require technicians to work independently at remote locations, including:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Remote pump stations", "Reservoir sites", "Pipeline inspection locations",
                  "Valve maintenance areas", "Rural service territories"
                ].map((loc, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{loc}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '1.15rem' }}>
                AI and IoT lone worker solutions improve accountability by combining personnel identification, location information, and automated alerts.
              </p>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                Applications include:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Worker location confirmation", "Scheduled check-in management", "Unexpected inactivity detection",
                  "Emergency notification workflows", "Response coordination"
                ].map((app, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '0.975rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                When a worker requires assistance, location information can help supervisors and response teams determine where support is needed.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0 }}>
                This capability is particularly valuable for utilities managing geographically distributed infrastructure where response time and location accuracy are important.
              </p>
            </div>

            {/* Shift Compliance Analytics */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-text-main)', marginBottom: '0.85rem' }}>Shift Compliance Analytics</h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '1.15rem' }}>
                Water utilities operate continuous processes that require reliable staffing coverage. Treatment operations, maintenance activities, and emergency response functions often depend on scheduled personnel availability.
              </p>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                AI and IoT workforce systems help organizations analyze:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Shift attendance", "Facility presence", "Work area assignments",
                  "Personnel movement history", "Contractor activity", "Operational coverage"
                ].map((an, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{an}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '1.15rem' }}>
                AI-based analysis can identify patterns that support workforce planning and operational improvements.
              </p>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                Examples include:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Confirming that required personnel are present during operating periods",
                  "Verifying contractor activity during maintenance projects",
                  "Reviewing workforce coverage during emergency events",
                  "Supporting operational documentation requirements"
                ].map((ex, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', marginTop: '8px', flexShrink: 0 }} />
                    <span>{ex}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0 }}>
                Digital shift records reduce dependence on manual reporting while improving visibility into daily utility activities.
              </p>
            </div>
          </div>

          {/* DOCX Image 4 */}
          <DocxImage 
            src="/assets/docx-images/image4.png"
            title="AI and IoT Workforce Identification Workflow for Water Treatment Facilities"
            description="This workflow diagram illustrates how water treatment personnel are identified through BLE badges and RFID credentials as they enter and move throughout operational zones, including control rooms, pump areas, chemical rooms, and maintenance facilities. The AI and IoT platform processes location and access data to provide workforce visibility, safety monitoring, emergency alerts, compliance reporting, and operational insights. The key takeaway is that digital workforce identification improves safety, accountability, regulatory compliance, and operational efficiency across water utility operations."
            alt="Workflow diagram showing BLE badge workforce identification, location tracking, AI analysis, alerts, and reporting across water treatment plant zones."
          />
        </div>
      </section>

      {/* 5. SECURE FACILITY ACCESS FOR WATER TREATMENT OPERATIONS */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>Secure Facility Access for Water Treatment Operations</h2>
          </div>
          <div style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)', marginBottom: '2rem' }}>
            <p style={{ marginBottom: '1.25rem' }}>
              Water treatment and distribution facilities contain critical infrastructure that requires controlled access, operational accountability, and reliable identification of authorized personnel. Treatment plants, pump stations, chemical storage buildings, laboratories, electrical rooms, and control areas often have different access requirements based on operational responsibilities and safety procedures.
            </p>
            <p style={{ marginBottom: '1.25rem' }}>
              Traditional access management methods may rely on physical keys, manual visitor logs, or standalone access systems. These approaches can create challenges when utilities need to verify who entered a specific area, when access occurred, and whether personnel had appropriate authorization.
            </p>
            <p style={{ marginBottom: '1.25rem' }}>
              AI and IoT secure facility access solutions combine digital credentials, RFID identification, BLE personnel badges, access readers, and AI-based software analysis to improve access control across water utility environments.
            </p>
            <p style={{ fontWeight: 600, marginBottom: '0.85rem' }}>
              UtilityWater AI supports utilities by enabling:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.85rem', listStyle: 'none', padding: 0, margin: '0 0 2rem 0' }}>
              {[
                "Digital identification of employees and contractors",
                "Automated access event recording",
                "Restricted area verification",
                "Visitor activity documentation",
                "Facility entry analytics",
                "Operational compliance reporting"
              ].map((item, idx) => (
                <li key={idx} className="card" style={{ padding: '0.85rem 1.15rem', flexDirection: 'row', gap: '0.75rem', alignItems: 'center' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)' }}>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              These capabilities help utilities strengthen security while maintaining efficient access for authorized personnel.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Treatment Plant Access Analytics */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-text-main)', marginBottom: '0.85rem' }}>Treatment Plant Access Analytics</h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '1rem' }}>
                Water treatment plants contain multiple operational zones with different levels of access requirements. Examples include:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Raw water intake areas", "Chemical handling facilities", "Filtration buildings",
                  "Disinfection areas", "Pump rooms", "Electrical facilities",
                  "SCADA control rooms", "Laboratory spaces", "Maintenance workshops"
                ].map((zone, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{zone}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '1.15rem' }}>
                AI and IoT access solutions provide utilities with digital records of facility entry activity. Access analytics can help organizations understand:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Who accessed a specific area", "When access occurred", "Whether access matched assigned responsibilities",
                  "Frequency of facility visits", "Contractor activity history", "Operational area utilization"
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '0.975rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                AI software can analyze access records to identify unusual patterns, such as unexpected entry times, repeated unauthorized attempts, or access events outside normal operating schedules.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0 }}>
                These insights help utilities improve security procedures while supporting operational investigations and compliance documentation.
              </p>
            </div>

            {/* Restricted Zone Access Verification */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-text-main)', marginBottom: '0.85rem' }}>Restricted Zone Access Verification</h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '1rem' }}>
                Certain water treatment areas require additional controls because of operational, safety, or security requirements. Restricted areas may include:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Chemical storage rooms", "Chlorination facilities", "Electrical substations",
                  "Control centers", "Laboratory areas", "Pump control rooms", "Critical infrastructure locations"
                ].map((area, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '1.15rem' }}>
                AI and IoT access verification combines identity information with location-based rules to confirm that only authorized personnel enter specific areas.
              </p>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                Supported functions include:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Credential verification", "Authorized personnel recognition", "Entry event logging",
                  "Restricted area alerts", "Access history reporting"
                ].map((func, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{func}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '0.975rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                For example, a maintenance technician may be authorized to enter a pump room but not a chemical storage facility. AI and IoT software can verify credentials against assigned permissions before recording access activity.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0 }}>
                This approach improves operational security while reducing dependence on manual verification processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. AI FUNCTIONS SUMMARY */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>AI Functions Summary for Water Treatment &amp; Distribution</h2>
          </div>
          <div style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)' }}>
            <p style={{ marginBottom: '1.25rem' }}>
              UtilityWater AI provides AI and IoT functions designed around the operational requirements of water treatment and distribution organizations.
            </p>
            <p style={{ fontWeight: 600, marginBottom: '1rem' }}>
              The primary capabilities include:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '0.85rem', listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0' }}>
              {[
                "Workforce location management for operators, contractors, and field teams",
                "Secure facility access management for treatment plants and restricted areas",
                "Asset location solutions for pumps, valves, meters, vehicles, and maintenance equipment",
                "Inventory management for chemicals, spare parts, and warehouse materials",
                "Traceability solutions for operational documentation and compliance reporting"
              ].map((cap, idx) => (
                <li key={idx} className="card" style={{ padding: '0.85rem 1.15rem', flexDirection: 'row', gap: '0.75rem', alignItems: 'center' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)' }}>{cap}</span>
                </li>
              ))}
            </ul>
            <p>
              By combining AI software with RFID, BLE, GPS, LoRaWAN, and cellular identification technologies, utilities can improve visibility across distributed infrastructure while maintaining compatibility with existing operational processes.
            </p>
          </div>
        </div>
      </section>

      {/* 7. FINAL DARK CTA SECTION */}
      <section className="final-cta-section">
        <div className="container">
          <h2 style={{ color: '#ffffff', marginBottom: '1.5rem', fontSize: '2rem', textAlign: 'left' }}>
            AI and IoT Functions Designed for Utility Operations
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem', fontSize: '1.05rem', lineHeight: '1.65', color: '#94a3b8', marginBottom: '2.5rem', textAlign: 'left' }}>
            <p>
              Water treatment and distribution requires reliable information about people, equipment, materials, and operational activities.
            </p>
            <p style={{ color: '#ffffff', fontWeight: 600 }}>
              UtilityWater AI helps organizations address these challenges through practical AI and IoT solutions focused on:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.75rem', listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', textAlign: 'left' }}>
              {[
                "Improving workforce accountability",
                "Strengthening facility security",
                "Increasing asset visibility",
                "Optimizing inventory processes",
                "Supporting maintenance coordination",
                "Improving operational documentation",
                "Enhancing regulatory readiness"
              ].map((f, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: '#ffffff', fontSize: '0.95rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <p>
              These functions provide a foundation for modern utility operations where accurate identification and location information supports safer, more efficient, and more reliable water services.
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
