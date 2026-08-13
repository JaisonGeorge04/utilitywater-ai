import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import DocxImage from '../components/DocxImage';

export default function Applications() {
  useEffect(() => {
    document.title = "AIoT Applications for Water Treatment & Distribution | Utility Operations Tracking Solutions | UtilityWater AI";
  }, []);

  return (
    <div className="page-wrapper">
      {/* 1. HERO SECTION - CLEAN CENTERED HERO HEADER */}
      <section className="section section-navy-deep text-center" style={{ paddingTop: '4rem', paddingBottom: '4.5rem' }}>
        <div className="container">
          <p className="hero-tagline" style={{ textAlign: 'center', marginBottom: '0.85rem', fontWeight: 600, color: 'var(--color-primary)' }}>
            Identification and Location Solutions Supporting Critical Water Utility Operations
          </p>
          <h1 style={{ color: 'var(--color-text-main)', marginBottom: '1.25rem', fontSize: 'clamp(2.1rem, 4vw, 3rem)', maxWidth: '820px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center', lineHeight: '1.2' }}>
            AI and IoT Applications in Water Treatment &amp; Distribution
          </h1>
          <h2 style={{ fontSize: '1.2rem', fontWeight: '600', color: 'var(--color-text-main)', marginBottom: '1.25rem', lineHeight: '1.45', maxWidth: '860px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
            AIoT Applications Improving Visibility Across Water Treatment Plants, Distribution Networks, and Utility Field Operations
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: '1.65', margin: '0 auto 2rem auto', maxWidth: '860px', textAlign: 'center' }}>
            UtilityWater AI applies AI and IoT identification and location technologies to help water utilities manage personnel, control facility access, track assets, optimize inventory, coordinate field teams, and maintain operational records.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Contact Us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW OF AI AND IOT APPLICATIONS FOR WATER UTILITIES */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Overview of AI and IoT Applications for Water Utilities</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)' }}>
            <p>
              Water treatment and distribution organizations manage critical infrastructure that operates continuously to provide safe and reliable water services.
            </p>
            <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
              Operational environments include:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem', listStyle: 'none', padding: 0, margin: '0 0 1.25rem 0' }}>
              {[
                "Water treatment plants", "Pump stations", "Reservoir facilities",
                "Distribution networks", "Maintenance warehouses", "Chemical storage areas",
                "Utility service locations"
              ].map((env, idx) => (
                <li key={idx} className="card" style={{ padding: '0.75rem 1rem', flexDirection: 'row', gap: '0.65rem', alignItems: 'center' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)' }}>{env}</span>
                </li>
              ))}
            </ul>
            <p>
              These environments require accurate information about people, equipment, materials, and operational activities.
            </p>
            <p>
              AI and IoT identification and location solutions support utilities by connecting physical resources with digital records.
            </p>
            <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
              Key application areas include:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.75rem', listStyle: 'none', padding: 0, margin: '0 0 1.25rem 0' }}>
              {[
                "Workforce location management", "Facility access management", "Asset identification",
                "Inventory tracking", "Fleet coordination", "Maintenance support",
                "Operational traceability", "Compliance documentation"
              ].map((area, idx) => (
                <li key={idx} className="card" style={{ padding: '0.85rem 1.15rem', flexDirection: 'row', gap: '0.75rem', alignItems: 'center' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)' }}>{area}</span>
                </li>
              ))}
            </ul>
            <p>
              UtilityWater AI focuses on practical applications where identification and location information improves daily utility operations.
            </p>
          </div>

          {/* DOCX Image 11 */}
          <DocxImage 
            src="/assets/docx-images/image11.png"
            title="AI and IoT Application Map for Water Treatment and Distribution Operations"
            description="This application map illustrates how AI and IoT identification and tracking technologies are deployed throughout a water utility ecosystem, including treatment facilities, pump stations, distribution networks, chemical storage areas, maintenance warehouses, and field service operations. The visualization highlights workforce tracking, access control, RFID asset identification, inventory management, GPS fleet tracking, compliance documentation, and enterprise integrations, demonstrating how a unified AI and IoT platform delivers end-to-end operational visibility, efficiency, safety, and regulatory compliance."
            alt="Industrial map of water utility operations showing AI and IoT applications across treatment plants, pump stations, pipelines, warehouses, fleet vehicles, and compliance systems."
          />
        </div>
      </section>

      {/* 3. WATER TREATMENT PLANT OPERATIONS */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>Water Treatment Plant Operations</h2>
          </div>
          <div style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)', marginBottom: '2rem' }}>
            <p style={{ marginBottom: '1.25rem' }}>
              Water treatment plants contain complex facilities where operators, equipment, materials, and processes must be coordinated effectively.
            </p>
            <p style={{ fontWeight: 600, marginBottom: '0.85rem' }}>
              AI and IoT solutions support treatment plant operations through:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem', listStyle: 'none', padding: 0, margin: '0 0 2rem 0' }}>
              {[
                "Operator location management", "Facility access control", "Equipment identification",
                "Maintenance coordination", "Inventory visibility"
              ].map((sup, idx) => (
                <li key={idx} className="card" style={{ padding: '0.75rem 1rem', flexDirection: 'row', gap: '0.65rem', alignItems: 'center' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)' }}>{sup}</span>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Operator Location Management */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-text-main)', marginBottom: '0.85rem' }}>Operator Location Management</h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '1rem' }}>
                Treatment plant operators frequently move between:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Control rooms", "Treatment areas", "Mechanical rooms",
                  "Chemical handling areas", "Maintenance locations"
                ].map((loc, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{loc}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                AI and IoT personnel identification solutions help utilities understand:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Which operators are present", "Where personnel are assigned",
                  "Who is available for response activities", "Which areas have active personnel"
                ].map((und, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{und}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '0.975rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                BLE personnel badges and location software support workforce visibility within facilities.
              </p>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                Applications include:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '0.5rem' }}>
                {[
                  "Shift accountability", "Emergency response coordination",
                  "Contractor visibility", "Workforce activity records"
                ].map((app, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Treatment Facility Access Control */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-text-main)', marginBottom: '0.85rem' }}>Treatment Facility Access Control</h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '1rem' }}>
                Water treatment facilities require controlled access to protect critical infrastructure.
              </p>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                AI and IoT access solutions support:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Employee credential management", "Contractor access tracking",
                  "Visitor identification", "Restricted area management"
                ].map((sup, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{sup}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                Common controlled areas include:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Chemical storage rooms", "Electrical rooms", "Control centers",
                  "Laboratory areas", "Maintenance facilities"
                ].map((area, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0 }}>
                Access records provide utilities with improved documentation of facility activity.
              </p>
            </div>

            {/* Equipment Identification and Maintenance Support */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-text-main)', marginBottom: '0.85rem' }}>Equipment Identification and Maintenance Support</h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '1rem' }}>
                Treatment plants contain thousands of physical assets. Examples include:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Pumps", "Motors", "Valves", "Filters", "Control equipment", "Maintenance tools"
                ].map((asset, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{asset}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                RFID asset identification helps utilities:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Locate equipment records", "Confirm asset identity",
                  "Improve maintenance documentation", "Reduce manual asset searches"
                ].map((hp, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{hp}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0 }}>
                AI and IoT software can associate identified equipment with maintenance history and operational records.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DISTRIBUTION NETWORK FIELD TEAMS */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Distribution Network Field Teams</h2>
          </div>
          <div style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)', marginBottom: '2rem' }}>
            <p style={{ marginBottom: '1.25rem' }}>
              Water distribution networks often cover large geographic service areas requiring mobile workforce coordination.
            </p>
            <p style={{ fontWeight: 600, marginBottom: '0.85rem' }}>
              Field teams manage activities such as:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem', listStyle: 'none', padding: 0, margin: '0 0 2rem 0' }}>
              {[
                "Pipeline inspections", "Repair activities", "Meter service",
                "Emergency response", "Infrastructure maintenance"
              ].map((act, idx) => (
                <li key={idx} className="card" style={{ padding: '0.75rem 1rem', flexDirection: 'row', gap: '0.65rem', alignItems: 'center' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)' }}>{act}</span>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {/* Field Workforce Coordination */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-text-main)', marginBottom: '0.85rem' }}>Field Workforce Coordination</h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '1rem' }}>
                AI and IoT personnel and vehicle tracking solutions help utilities coordinate field operations.
              </p>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                Applications include:
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Technician location support", "Service vehicle tracking",
                  "Emergency dispatch coordination", "Work assignment verification"
                ].map((app, i) => (
                  <li key={i} style={{ fontSize: '0.9rem', color: 'var(--color-text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--color-primary)' }} />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                GPS fleet tracking helps supervisors understand:
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Vehicle availability", "Current locations", "Route history", "Service activity"
                ].map((und, i) => (
                  <li key={i} style={{ fontSize: '0.9rem', color: 'var(--color-text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--color-primary)' }} />
                    <span>{und}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0 }}>
                This improves coordination between field teams and operational centers.
              </p>
            </div>

            {/* Mobile Asset Tracking */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-text-main)', marginBottom: '0.85rem' }}>Mobile Asset Tracking</h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '1rem' }}>
                Field teams use many portable assets. Examples include:
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Repair equipment", "Inspection tools", "Testing equipment",
                  "Replacement components", "Portable machinery"
                ].map((ex, i) => (
                  <li key={i} style={{ fontSize: '0.9rem', color: 'var(--color-text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--color-primary)' }} />
                    <span>{ex}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '0.975rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                AI and IoT asset tracking solutions help utilities maintain visibility of mobile equipment.
              </p>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                Benefits include:
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', listStyle: 'none', padding: 0, marginBottom: '0.5rem' }}>
                {[
                  "Reduced equipment loss", "Faster asset retrieval",
                  "Improved inventory accuracy", "Better maintenance preparation"
                ].map((ben, i) => (
                  <li key={i} style={{ fontSize: '0.9rem', color: 'var(--color-text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--color-primary)' }} />
                    <span>{ben}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PUMP STATION SITE SECURITY */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>Pump Station Site Security</h2>
          </div>
          <div style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)', marginBottom: '2rem' }}>
            <p style={{ marginBottom: '1.25rem' }}>
              Pump stations are distributed throughout water networks and may operate with limited onsite personnel.
            </p>
            <p style={{ fontWeight: 600, marginBottom: '0.85rem' }}>
              AI and IoT solutions support pump station management through:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem', listStyle: 'none', padding: 0, margin: '0 0 2rem 0' }}>
              {[
                "Remote access records", "Vehicle arrival tracking",
                "Equipment identification", "Maintenance activity documentation"
              ].map((sup, idx) => (
                <li key={idx} className="card" style={{ padding: '0.75rem 1rem', flexDirection: 'row', gap: '0.65rem', alignItems: 'center' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)' }}>{sup}</span>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {/* Remote Facility Access Management */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-text-main)', marginBottom: '0.85rem' }}>Remote Facility Access Management</h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '1rem' }}>
                Pump stations often require secure access control because they support critical infrastructure.
              </p>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                Applications include:
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Authorized personnel verification", "Contractor access management",
                  "Entry history records", "Maintenance visit documentation"
                ].map((app, i) => (
                  <li key={i} style={{ fontSize: '0.9rem', color: 'var(--color-text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--color-primary)' }} />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0 }}>
                RFID and BLE credential systems provide digital access records for remote facilities.
              </p>
            </div>

            {/* Maintenance Visit Verification */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-text-main)', marginBottom: '0.85rem' }}>Maintenance Visit Verification</h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '1rem' }}>
                AI and IoT solutions can help utilities verify maintenance activities at remote locations. Examples:
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Confirming technician arrival", "Associating work with equipment",
                  "Recording service activities", "Updating maintenance history"
                ].map((ex, i) => (
                  <li key={i} style={{ fontSize: '0.9rem', color: 'var(--color-text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--color-primary)' }} />
                    <span>{ex}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0 }}>
                Integration with CMMS systems improves the connection between field activities and maintenance records.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CHEMICAL STORAGE FACILITIES */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Chemical Storage Facilities</h2>
          </div>
          <div style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)', marginBottom: '2rem' }}>
            <p style={{ marginBottom: '1.25rem' }}>
              Chemical storage areas require careful operational management because they contain materials essential to treatment processes.
            </p>
            <p style={{ fontWeight: 600, marginBottom: '0.85rem' }}>
              AI and IoT identification solutions support:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem', listStyle: 'none', padding: 0, margin: '0 0 2rem 0' }}>
              {[
                "Chemical inventory identification", "Personnel access management",
                "Material movement documentation", "Storage record accuracy"
              ].map((sup, idx) => (
                <li key={idx} className="card" style={{ padding: '0.75rem 1rem', flexDirection: 'row', gap: '0.65rem', alignItems: 'center' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)' }}>{sup}</span>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {/* Chemical Inventory Management */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-text-main)', marginBottom: '0.85rem' }}>Chemical Inventory Management</h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '1rem' }}>
                RFID identification and inventory software help utilities track:
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Chemical containers", "Storage locations", "Material movement", "Stock availability"
                ].map((tr, i) => (
                  <li key={i} style={{ fontSize: '0.9rem', color: 'var(--color-text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--color-primary)' }} />
                    <span>{tr}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                Benefits include:
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', listStyle: 'none', padding: 0, marginBottom: '0.5rem' }}>
                {[
                  "Improved inventory accuracy", "Better replenishment planning", "Reduced manual documentation"
                ].map((ben, i) => (
                  <li key={i} style={{ fontSize: '0.9rem', color: 'var(--color-text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--color-primary)' }} />
                    <span>{ben}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Restricted Area Control */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-text-main)', marginBottom: '0.85rem' }}>Restricted Area Control</h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '1rem' }}>
                AI and IoT access solutions help utilities manage entry into chemical storage areas.
              </p>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                Applications include:
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Authorized personnel verification", "Visitor tracking",
                  "Access history records", "Safety documentation"
                ].map((app, i) => (
                  <li key={i} style={{ fontSize: '0.9rem', color: 'var(--color-text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--color-primary)' }} />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0 }}>
                These records support operational accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FLEET AND FIELD SERVICE OPERATIONS */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>Fleet and Field Service Operations</h2>
          </div>
          <div style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)', marginBottom: '2rem' }}>
            <p style={{ marginBottom: '1.25rem' }}>
              Utility fleets support daily operations across treatment plants and distribution networks.
            </p>
            <p style={{ fontWeight: 600, marginBottom: '0.85rem' }}>
              Vehicles include:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem', listStyle: 'none', padding: 0, margin: '0 0 2rem 0' }}>
              {[
                "Service trucks", "Inspection vehicles", "Emergency response vehicles", "Maintenance vehicles"
              ].map((veh, idx) => (
                <li key={idx} className="card" style={{ padding: '0.75rem 1rem', flexDirection: 'row', gap: '0.65rem', alignItems: 'center' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)' }}>{veh}</span>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
            {/* GPS Fleet Tracking Applications */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-text-main)', marginBottom: '0.85rem' }}>GPS Fleet Tracking Applications</h3>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                GPS fleet tracking helps utilities improve:
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Vehicle visibility", "Dispatch coordination", "Route planning", "Emergency response"
                ].map((imp, i) => (
                  <li key={i} style={{ fontSize: '0.9rem', color: 'var(--color-text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--color-primary)' }} />
                    <span>{imp}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                AI analysis can support:
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', listStyle: 'none', padding: 0, marginBottom: '0.5rem' }}>
                {[
                  "Fleet utilization reviews", "Service planning", "Operational reporting"
                ].map((sup, i) => (
                  <li key={i} style={{ fontSize: '0.9rem', color: 'var(--color-text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--color-primary)' }} />
                    <span>{sup}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Field Service Documentation */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-text-main)', marginBottom: '0.85rem' }}>Field Service Documentation</h3>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                AI and IoT solutions help connect:
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Vehicles", "Personnel", "Assets", "Work locations", "Maintenance records"
                ].map((con, i) => (
                  <li key={i} style={{ fontSize: '0.9rem', color: 'var(--color-text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--color-primary)' }} />
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0 }}>
                This creates stronger operational documentation for field activities.
              </p>
            </div>
          </div>

          {/* DOCX Image 12 */}
          <DocxImage 
            src="/assets/docx-images/image12.png"
            title="AI and IoT Field Service Workflow for Water Utility Operations"
            description="This workflow diagram illustrates how water utility field service operations connect dispatch centers, GPS-tracked service vehicles, BLE-enabled technicians, RFID-tagged equipment, remote pump stations, CMMS software, and operational reporting systems. The visualization demonstrates how field activities are digitally captured, verified, synchronized, and transformed into maintenance records, compliance documentation, and performance insights, improving service efficiency, asset reliability, workforce accountability, and operational visibility."
            alt="Workflow diagram showing dispatch, GPS-tracked vehicles, BLE-identified technicians, RFID-tagged assets, CMMS integration, and operational reporting."
          />
        </div>
      </section>

      {/* 8. REGULATORY AUDIT READINESS */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Regulatory Audit Readiness</h2>
          </div>
          <div style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)' }}>
            <p style={{ marginBottom: '1.25rem' }}>
              Water utilities must maintain accurate operational documentation to support internal reviews and regulatory requirements.
            </p>
            <p style={{ fontWeight: 600, marginBottom: '0.85rem' }}>
              AI and IoT solutions help organize:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem', listStyle: 'none', padding: 0, margin: '0 0 1.25rem 0' }}>
              {[
                "Personnel access records", "Asset history", "Inventory records",
                "Maintenance documentation", "Operational activity records"
              ].map((item, idx) => (
                <li key={idx} className="card" style={{ padding: '0.75rem 1rem', flexDirection: 'row', gap: '0.65rem', alignItems: 'center' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)' }}>{item}</span>
                </li>
              ))}
            </ul>
            <p style={{ fontWeight: 600, marginBottom: '0.85rem' }}>
              Benefits include:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem', listStyle: 'none', padding: 0, margin: '0 0 1.25rem 0' }}>
              {[
                "Faster information retrieval", "Improved documentation accuracy",
                "Better audit preparation", "Reduced administrative effort"
              ].map((ben, idx) => (
                <li key={idx} className="card" style={{ padding: '0.75rem 1rem', flexDirection: 'row', gap: '0.65rem', alignItems: 'center' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)' }}>{ben}</span>
                </li>
              ))}
            </ul>
            <p>
              Digital identification records provide utilities with clearer operational histories.
            </p>
          </div>
        </div>
      </section>

      {/* 9. AI AND IOT APPLICATION BENEFITS FOR WATER UTILITIES */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>AI and IoT Application Benefits for Water Utilities</h2>
          </div>
          <div style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)' }}>
            <p style={{ marginBottom: '1.25rem' }}>
              AI and IoT identification and location solutions provide practical improvements across utility operations.
            </p>
            <p style={{ fontWeight: 600, marginBottom: '1rem' }}>
              Key benefits include:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.85rem', listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0' }}>
              {[
                "Improved personnel visibility", "Stronger facility security", "Better asset utilization",
                "Improved inventory control", "Faster field coordination", "Better maintenance documentation",
                "Enhanced operational transparency", "Improved compliance readiness"
              ].map((ben, idx) => (
                <li key={idx} className="card" style={{ padding: '0.85rem 1.15rem', flexDirection: 'row', gap: '0.75rem', alignItems: 'center' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)' }}>{ben}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 10. UTILITYWATER AI APPLICATION APPROACH */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>UtilityWater AI Application Approach</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)' }}>
            <p>
              UtilityWater AI develops AI and IoT solutions around the operational requirements of water treatment and distribution organizations.
            </p>
            <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
              The solutions focus on:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, margin: '0 0 1rem 0' }}>
              {[
                "Personnel identification and location",
                "Facility access management",
                "Asset tracking",
                "Inventory management",
                "Fleet tracking",
                "Traceability documentation"
              ].map((item, idx) => (
                <li key={idx} className="card" style={{ padding: '0.75rem 1rem', flexDirection: 'row', gap: '0.65rem', alignItems: 'center' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)' }}>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              Supported by two decades of IoT experience from GAO, UtilityWater AI incorporates practical knowledge from thousands of IoT customers and projects. The company applies research and development investment, quality assurance processes, and technical expertise to deliver identification and location solutions for industrial environments.
            </p>
            <p>
              UtilityWater AI teams include Ph.D. professionals from leading universities and have supported Fortune 500 companies, research organizations, universities, and government agencies.
            </p>
          </div>
        </div>
      </section>

      {/* 11. FINAL DARK CTA SECTION */}
      <section className="final-cta-section">
        <div className="container">
          <h2 style={{ color: '#ffffff', marginBottom: '1.5rem', fontSize: '2rem', textAlign: 'left' }}>
            Explore AI and IoT Applications for Water Operations
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem', fontSize: '1.05rem', lineHeight: '1.65', color: '#94a3b8', marginBottom: '2.5rem', textAlign: 'left' }}>
            <p>
              UtilityWater AI helps water treatment and distribution organizations evaluate applications including:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.75rem', listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', textAlign: 'left' }}>
              {[
                "Treatment plant workforce management",
                "Distribution field operations",
                "Pump station security",
                "Chemical inventory management",
                "Fleet coordination",
                "Operational traceability"
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: '#ffffff', fontSize: '0.95rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p style={{ color: '#ffffff', fontWeight: 600 }}>
              Contact UtilityWater AI to discuss AI and IoT solutions designed for modern water utility operations.
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
