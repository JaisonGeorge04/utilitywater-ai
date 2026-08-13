import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import DocxImage from '../components/DocxImage';

export default function IoTSoftware() {
  useEffect(() => {
    document.title = "IoT Software for Water Treatment & Distribution | AIoT Tracking & Utility Management Software | UtilityWater AI";
  }, []);

  return (
    <div className="page-wrapper">
      {/* 1. HERO SECTION - CLEAN CENTERED HERO HEADER */}
      <section className="section section-navy-deep text-center" style={{ paddingTop: '4rem', paddingBottom: '4.5rem' }}>
        <div className="container">
          <p className="hero-tagline" style={{ textAlign: 'center', marginBottom: '0.85rem', fontWeight: 600, color: 'var(--color-primary)' }}>
            Operational Software for Identification, Location, and Traceability Across Water Utility Networks
          </p>
          <h1 style={{ color: 'var(--color-text-main)', marginBottom: '1.25rem', fontSize: 'clamp(2.1rem, 4vw, 3rem)', maxWidth: '820px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center', lineHeight: '1.2' }}>
            IoT Software for AIoT-Enabled Water Treatment &amp; Distribution
          </h1>
          <h2 style={{ fontSize: '1.2rem', fontWeight: '600', color: 'var(--color-text-main)', marginBottom: '1.25rem', lineHeight: '1.45', maxWidth: '860px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
            IoT Software Connecting Personnel, Assets, Inventory, and Operational Records Across Water Treatment Facilities
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: '1.65', margin: '0 auto 2rem auto', maxWidth: '860px', textAlign: 'center' }}>
            UtilityWater AI provides IoT software solutions that integrate RFID, BLE, GPS, LoRaWAN, and cellular identification technologies to support workforce management, facility access, asset tracking, inventory operations, and traceability throughout water treatment and distribution environments.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Contact Us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW OF IOT SOFTWARE FOR WATER TREATMENT & DISTRIBUTION */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Overview of IoT Software for Water Treatment &amp; Distribution</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)' }}>
            <p>
              Water utilities depend on reliable information to manage complex infrastructure, mobile workforces, and distributed operational assets. Treatment plants, pump stations, reservoirs, maintenance facilities, and distribution networks require accurate identification and location information to support daily operations.
            </p>
            <p>
              IoT software provides the digital foundation for collecting, organizing, analyzing, and sharing identification data generated from connected devices and industrial systems.
            </p>
            <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
              For water treatment and distribution organizations, IoT software supports:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.75rem', listStyle: 'none', padding: 0, margin: '0 0 1.25rem 0' }}>
              {[
                "Personnel location management", "Facility access records", "Asset identification and tracking",
                "Fleet location management", "Inventory visibility", "Maintenance documentation",
                "Operational traceability", "Compliance reporting"
              ].map((item, idx) => (
                <li key={idx} className="card" style={{ padding: '0.85rem 1.15rem', flexDirection: 'row', gap: '0.75rem', alignItems: 'center' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)' }}>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              UtilityWater AI focuses on software designed specifically for identification and location workflows rather than general-purpose industrial applications. The software helps utilities connect operational information with existing systems such as SCADA, CMMS, ERP, GIS, and workforce management applications.
            </p>
            <p>
              By combining AI and IoT software with RFID, BLE, GPS, LoRaWAN, and cellular technologies, utilities can improve operational visibility while reducing manual processes.
            </p>
          </div>

          {/* DOCX Image 5 */}
          <DocxImage 
            src="/assets/docx-images/image5.png"
            title="IoT Software System Overview for Water Utility Operations"
            description="This software system overview diagram illustrates how a centralized IoT platform connects water treatment plants, pump stations, distribution networks, warehouses, fleet vehicles, and maintenance teams through RFID, BLE, GPS, LoRaWAN, and cellular technologies. The platform integrates personnel tracking, access management, asset tracking, inventory management, traceability, SCADA, CMMS, and enterprise reporting to deliver real-time visibility, operational efficiency, compliance, and data-driven decision-making across water utility operations."
            alt="Software system diagram showing water utility operations connected to personnel, asset, inventory, SCADA, CMMS, and reporting modules."
          />
        </div>
      </section>

      {/* 3. PERSONNEL & ACCESS SOFTWARE */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>Personnel &amp; Access Software</h2>
          </div>
          <div style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)', marginBottom: '2rem' }}>
            <p style={{ marginBottom: '1.25rem' }}>
              Personnel and access management are critical for water utilities because operators, contractors, and maintenance teams frequently move between multiple facilities and operational zones.
            </p>
            <p style={{ fontWeight: 600, marginBottom: '0.85rem' }}>
              IoT software enables utilities to maintain accurate digital records of:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem', listStyle: 'none', padding: 0, margin: '0 0 2rem 0' }}>
              {[
                "Worker presence", "Facility access", "Location activity",
                "Contractor visits", "Emergency response participation", "Restricted area entry"
              ].map((item, idx) => (
                <li key={idx} className="card" style={{ padding: '0.75rem 1rem', flexDirection: 'row', gap: '0.65rem', alignItems: 'center' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Wearable Tracking Software */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-text-main)', marginBottom: '0.85rem' }}>Wearable Tracking Software</h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '1rem' }}>
                Wearable tracking software supports identification and location management for operators, technicians, contractors, and emergency response personnel.
              </p>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                Applications include:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Treatment plant workforce tracking", "Maintenance team coordination", "Confined space worker accountability",
                  "Lone worker support", "Emergency response assistance", "Shift activity records"
                ].map((app, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '1rem' }}>
                BLE personnel badges and wearable identification devices communicate with IoT software to provide location information within operational areas.
              </p>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                The software can support:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Personnel registration", "Badge assignment", "Location zone configuration",
                  "Activity history", "Workforce reports", "Emergency notifications"
                ].map((sup, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{sup}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0 }}>
                For example, a utility can identify which operators are present inside a treatment facility and determine whether assigned personnel are available during scheduled operating periods.
              </p>
            </div>

            {/* Access Credential Management Software */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-text-main)', marginBottom: '0.85rem' }}>Access Credential Management Software</h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '1rem' }}>
                Access credential management software helps utilities control entry into sensitive operational locations. Supported areas include:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Chemical storage rooms", "Control centers", "Pump stations",
                  "Electrical rooms", "Laboratories", "Maintenance facilities"
                ].map((area, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                The software manages:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Employee credentials", "Contractor credentials", "Visitor access permissions",
                  "Credential expiration", "Access history", "Authorization rules"
                ].map((man, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{man}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '0.975rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                RFID credentials, BLE badges, and digital access identifiers can be managed through centralized software records.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0 }}>
                This improves security while simplifying administration across multiple facilities.
              </p>
            </div>

            {/* Geofencing Configuration Software */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-text-main)', marginBottom: '0.85rem' }}>Geofencing Configuration Software</h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '1rem' }}>
                Water utilities operate across large geographic areas that include treatment plants, pump stations, reservoirs, and field service locations. Geofencing configuration software allows organizations to define digital operational zones.
              </p>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                Applications include:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Treatment facility boundaries", "Restricted operational areas", "Maintenance zones",
                  "Vehicle service territories", "Remote infrastructure locations"
                ].map((app, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                The software can support:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Zone creation", "Location rule configuration", "Entry and exit records",
                  "Notification settings", "Operational reports"
                ].map((sup, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{sup}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0 }}>
                GPS and BLE location technologies can be combined with geofencing rules to improve awareness of personnel and vehicle activity.
              </p>
            </div>

            {/* Safety Alert Dispatch Software */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-text-main)', marginBottom: '0.85rem' }}>Safety Alert Dispatch Software</h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '1rem' }}>
                Safety alert dispatch software supports communication between workers, supervisors, and response teams.
              </p>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                Applications include:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Lone worker alerts", "Emergency notifications", "Worker assistance requests",
                  "Facility incident response", "Evacuation coordination"
                ].map((app, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                The software can manage:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Alert generation", "Response workflows", "Personnel location information",
                  "Notification escalation", "Incident records"
                ].map((man, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{man}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0 }}>
                For water utilities managing remote infrastructure, faster access to worker location information can improve emergency coordination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ASSET & INVENTORY SOFTWARE */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Asset &amp; Inventory Software</h2>
          </div>
          <div style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)', marginBottom: '2rem' }}>
            <p style={{ marginBottom: '1.25rem' }}>
              Water utilities maintain extensive inventories of operational assets and materials.
            </p>
            <p style={{ fontWeight: 600, marginBottom: '0.85rem' }}>
              IoT asset and inventory software supports:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem', listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0' }}>
              {[
                "Asset identification", "Equipment location", "Inventory management",
                "Maintenance coordination", "Fleet tracking", "Material availability"
              ].map((item, idx) => (
                <li key={idx} className="card" style={{ padding: '0.75rem 1rem', flexDirection: 'row', gap: '0.65rem', alignItems: 'center' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)' }}>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              These software solutions help utilities maintain better records for both fixed infrastructure and mobile equipment.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Asset Tag Management Software */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-text-main)', marginBottom: '0.85rem' }}>Asset Tag Management Software</h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '1rem' }}>
                Asset tag management software helps utilities organize equipment identification throughout the asset lifecycle. Supported assets include:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Pumps", "Motors", "Valves", "Water meters",
                  "Portable generators", "Maintenance equipment", "Repair tools"
                ].map((asset, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{asset}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                The software manages:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Asset registration", "RFID tag assignment", "Asset history",
                  "Location records", "Maintenance association", "Equipment status"
                ].map((man, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{man}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0 }}>
                This provides utilities with a consistent method for managing large numbers of distributed assets.
              </p>
            </div>

            {/* Fleet Telemetry Software */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-text-main)', marginBottom: '0.85rem' }}>Fleet Telemetry Software</h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '1rem' }}>
                Fleet telemetry software supports location and operational management of utility vehicles. Applications include:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Service trucks", "Maintenance vehicles", "Emergency response vehicles",
                  "Inspection vehicles", "Heavy equipment"
                ].map((veh, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{veh}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                The software provides:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Vehicle location records", "Route history", "Fleet utilization reports",
                  "Dispatch support", "Maintenance scheduling information"
                ].map((pro, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0 }}>
                GPS connectivity enables utilities to improve coordination between field teams and operational centers.
              </p>
            </div>

            {/* Inventory Tracking Software */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-text-main)', marginBottom: '0.85rem' }}>Inventory Tracking Software</h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '1rem' }}>
                Inventory tracking software improves visibility into materials stored across:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Treatment plants", "Warehouses", "Maintenance yards", "Chemical storage areas"
                ].map((loc, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{loc}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                Capabilities include:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Inventory identification", "Location records", "Stock movement tracking",
                  "Equipment checkout", "Inventory reporting"
                ].map((cap, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0 }}>
                RFID-based identification can reduce manual inventory processes and improve accuracy.
              </p>
            </div>

            {/* Chemical Stock Monitoring Software */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-text-main)', marginBottom: '0.85rem' }}>Chemical Stock Monitoring Software</h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '1rem' }}>
                Chemical stock monitoring software supports management of treatment materials. Applications include:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Chemical container identification", "Storage location records", "Inventory status",
                  "Usage history", "Replenishment planning"
                ].map((app, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0 }}>
                The software helps utilities maintain organized chemical inventory documentation while supporting operational planning.
              </p>
            </div>
          </div>

          {/* DOCX Image 6 */}
          <DocxImage 
            src="/assets/docx-images/image6.png"
            title="IoT Software Modules for Water Utility Operations"
            description="This software module diagram illustrates how core IoT applications—including personnel management, access credentials, asset tracking, fleet telemetry, inventory control, chemical stock management, traceability, compliance reporting, SCADA integration, and CMMS connectivity—work together within a unified water utility platform. The key takeaway is that interconnected software modules create a single operational environment that improves visibility, regulatory compliance, maintenance coordination, resource management, and enterprise-wide decision-making."
            alt="Enterprise software module diagram showing personnel, assets, inventory, fleet, compliance, SCADA, and CMMS systems integrated through an IoT platform."
          />
        </div>
      </section>

      {/* 5. PROCESS TRACEABILITY SOFTWARE */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>Process Traceability Software</h2>
          </div>
          <div style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)', marginBottom: '2rem' }}>
            <p style={{ marginBottom: '1.25rem' }}>
              Water treatment and distribution organizations require accurate operational records to support maintenance activities, regulatory requirements, asset management, and internal procedures.
            </p>
            <p style={{ marginBottom: '1.25rem' }}>
              Process traceability software connects identification information from personnel, assets, inventory, and operational workflows to create structured digital records.
            </p>
            <p style={{ marginBottom: '1.25rem' }}>
              Unlike manual documentation methods that depend on paper forms or disconnected databases, AI and IoT traceability software provides utilities with a more consistent way to associate:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.75rem', listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0' }}>
              {[
                "Personnel with completed activities",
                "Assets with maintenance history",
                "Materials with operational usage",
                "Locations with service activities",
                "Equipment with lifecycle records"
              ].map((item, idx) => (
                <li key={idx} className="card" style={{ padding: '0.85rem 1.15rem', flexDirection: 'row', gap: '0.75rem', alignItems: 'center' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)' }}>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              UtilityWater AI provides traceability software functions designed for treatment facilities, pump stations, distribution networks, maintenance operations, and utility field services.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Batch Tracking Software */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-text-main)', marginBottom: '0.85rem' }}>Batch Tracking Software</h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '1rem' }}>
                Although water utilities do not typically operate manufacturing-style production lines, batch-style tracking concepts can support specific operational workflows involving materials, maintenance activities, and treatment-related documentation.
              </p>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                Batch tracking software can support identification of:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Chemical deliveries", "Material usage records", "Maintenance activities",
                  "Equipment replacement events", "Operational work packages"
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                Applications include:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Linking chemical inventory records to storage locations",
                  "Recording material movement between facilities",
                  "Associating maintenance components with specific assets",
                  "Documenting completed operational activities"
                ].map((app, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', marginTop: '8px', flexShrink: 0 }} />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '0.975rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                AI and IoT identification technologies such as RFID can improve the accuracy of these records by reducing manual entry requirements.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0 }}>
                For example, when a maintenance team replaces a pump component, the software can associate the replacement part, technician identification, asset record, and service location into a single digital history.
              </p>
            </div>

            {/* Traceability Ledger Software */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-text-main)', marginBottom: '0.85rem' }}>Traceability Ledger Software</h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '1rem' }}>
                Traceability ledger software provides structured records of operational events across water utility activities.
              </p>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                The software can maintain records related to:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Asset movement", "Personnel activity", "Inventory transactions",
                  "Maintenance tasks", "Access events", "Workflow completion"
                ].map((rec, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                Key capabilities include:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Digital event history", "Time-based records", "Location association",
                  "Personnel association", "Searchable operational records", "Audit support"
                ].map((cap, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0 }}>
                This allows utility managers to quickly review operational history when investigating maintenance events, preparing reports, or reviewing compliance documentation.
              </p>
            </div>

            {/* Compliance Reporting Software */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-text-main)', marginBottom: '0.85rem' }}>Compliance Reporting Software</h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '1rem' }}>
                Water utilities must maintain accurate operational records for internal reviews, safety programs, inspections, and regulatory requirements. Compliance reporting software helps transform identification and operational data into structured reports.
              </p>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                Supported reports include:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Personnel access reports", "Asset history reports", "Inventory movement reports",
                  "Maintenance activity reports", "Facility activity reports", "Operational documentation reports"
                ].map((rep, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{rep}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                Benefits include:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Reduced manual report preparation", "Improved record consistency", "Faster audit preparation",
                  "Better operational visibility", "Easier information retrieval"
                ].map((ben, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{ben}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0 }}>
                AI-based analysis can assist with identifying incomplete records, unusual activity patterns, or missing documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. AI AND IOT SOFTWARE INTEGRATION FOR WATER UTILITIES */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>AI and IoT Software Integration for Water Utilities</h2>
          </div>
          <div style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)', marginBottom: '2rem' }}>
            <p style={{ marginBottom: '1.25rem' }}>
              Water utilities typically operate a combination of specialized software systems. AI and IoT software must work with existing operational environments to provide maximum value.
            </p>
            <p style={{ fontWeight: 600, marginBottom: '0.85rem' }}>
              UtilityWater AI software can support integration with:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.75rem', listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0' }}>
              {[
                "SCADA systems", "CMMS software", "ERP systems", "GIS applications",
                "Workforce management systems", "Utility billing systems", "Maintenance databases"
              ].map((sys, idx) => (
                <li key={idx} className="card" style={{ padding: '0.75rem 1rem', flexDirection: 'row', gap: '0.65rem', alignItems: 'center' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)' }}>{sys}</span>
                </li>
              ))}
            </ul>
            <p>
              Integration enables organizations to connect identification and location information with existing operational processes.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div className="card" style={{ padding: '1.75rem' }}>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--color-text-main)', marginBottom: '0.75rem' }}>SCADA Integration Software</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '0.85rem' }}>
                SCADA systems are widely used in water treatment operations for controlling and supervising industrial processes.
              </p>
              <p style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.5rem' }}>Supports:</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[
                  "Asset identification association", "Maintenance information sharing",
                  "Operational event documentation", "Facility activity records"
                ].map((item, i) => (
                  <li key={i} style={{ fontSize: '0.9rem', color: 'var(--color-text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--color-primary)' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card" style={{ padding: '1.75rem' }}>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--color-text-main)', marginBottom: '0.75rem' }}>CMMS Connectivity Software</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '0.85rem' }}>
                Computerized Maintenance Management Systems (CMMS) help utilities manage maintenance activities, work orders, spare parts, and asset history.
              </p>
              <p style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.5rem' }}>AI and IoT integration improves CMMS workflows by connecting:</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[
                  "Asset location information", "Equipment identification", "Maintenance records",
                  "Technician activity", "Inventory availability"
                ].map((item, i) => (
                  <li key={i} style={{ fontSize: '0.9rem', color: 'var(--color-text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--color-primary)' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card" style={{ padding: '1.75rem' }}>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--color-text-main)', marginBottom: '0.75rem' }}>ERP Connectivity Software</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '0.85rem' }}>
                ERP systems manage organizational resources including purchasing, inventory, finance, and procurement processes.
              </p>
              <p style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.5rem' }}>AI and IoT software can provide ERP systems with operational information related to:</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[
                  "Inventory movement", "Material availability", "Asset utilization", "Equipment records"
                ].map((item, i) => (
                  <li key={i} style={{ fontSize: '0.9rem', color: 'var(--color-text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--color-primary)' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. IOT SOFTWARE DEPLOYMENT MODELS */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>IoT Software Deployment Models</h2>
          </div>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)', marginBottom: '2rem' }}>
            Water utilities have different requirements based on infrastructure size, security policies, IT resources, and operational needs. UtilityWater AI supports flexible software deployment options.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
            {/* Cloud Software Deployment */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-text-main)', marginBottom: '0.85rem' }}>Cloud Software Deployment</h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '1rem' }}>
                Cloud-based IoT software deployment provides centralized access to operational information across multiple facilities.
              </p>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                Benefits include:
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Centralized data management", "Remote accessibility", "Easier software updates",
                  "Multi-site visibility", "Scalable user management"
                ].map((ben, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{ben}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0 }}>
                Cloud deployment can support utilities operating multiple treatment plants, pump stations, and service territories.
              </p>
            </div>

            {/* Server Software Deployment */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-text-main)', marginBottom: '0.85rem' }}>Server Software Deployment</h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '1rem' }}>
                Some utilities require software deployment within their own IT environments due to security requirements, operational policies, or infrastructure preferences.
              </p>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                Server-based deployment provides:
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Local data management", "Internal network operation", "Organization-controlled infrastructure",
                  "Integration with existing enterprise systems"
                ].map((pro, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0 }}>
                This option is suitable for organizations requiring greater control over software hosting environments.
              </p>
            </div>
          </div>

          {/* DOCX Image 17 */}
          <DocxImage 
            src="/assets/docx-images/image17.jpeg"
            title="IoT Software Deployment Model Comparison: Cloud vs. Server Deployment"
            description="This technical comparison matrix evaluates Cloud-based versus Server-based IoT software deployment models for water utilities across architecture, accessibility, data control, integration, maintenance, scalability, and security."
            alt="Technical deployment matrix comparing Cloud vs Server IoT software deployment options across key operational criteria."
          />
        </div>
      </section>

      {/* 8. BENEFITS OF IOT SOFTWARE FOR WATER TREATMENT & DISTRIBUTION */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Benefits of IoT Software for Water Treatment &amp; Distribution</h2>
          </div>
          <div style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)' }}>
            <p style={{ marginBottom: '1.25rem' }}>
              UtilityWater AI IoT software helps utilities improve operational performance through better identification, location management, and digital documentation.
            </p>
            <p style={{ fontWeight: 600, marginBottom: '1rem' }}>
              Key benefits include:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.85rem', listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0' }}>
              {[
                "Improved personnel visibility", "Better access control records", "Faster asset identification",
                "Improved equipment utilization", "More accurate inventory information", "Better maintenance coordination",
                "Simplified reporting", "Improved compliance preparation", "Stronger operational documentation",
                "Integration with existing utility systems"
              ].map((ben, idx) => (
                <li key={idx} className="card" style={{ padding: '0.85rem 1.15rem', flexDirection: 'row', gap: '0.75rem', alignItems: 'center' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)' }}>{ben}</span>
                </li>
              ))}
            </ul>
            <p>
              By combining AI software capabilities with identification technologies such as RFID, BLE, GPS, LoRaWAN, and cellular connectivity, utilities can build stronger operational visibility across treatment and distribution environments.
            </p>
          </div>
        </div>
      </section>

      {/* 9. FINAL DARK CTA SECTION */}
      <section className="final-cta-section">
        <div className="container">
          <h2 style={{ color: '#ffffff', marginBottom: '1.5rem', fontSize: '2rem', textAlign: 'left' }}>
            Request an AI and IoT Software Evaluation
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem', fontSize: '1.05rem', lineHeight: '1.65', color: '#94a3b8', marginBottom: '2.5rem', textAlign: 'left' }}>
            <p>
              UtilityWater AI helps water treatment and distribution organizations evaluate how IoT software can improve personnel management, asset visibility, inventory control, and operational traceability.
            </p>
            <p style={{ color: '#ffffff', fontWeight: 600 }}>
              Organizations can assess:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.75rem', listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', textAlign: 'left' }}>
              {[
                "Current operational workflows",
                "Existing software systems",
                "Identification technology requirements",
                "Integration opportunities",
                "Deployment preferences"
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: '#ffffff', fontSize: '0.95rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p style={{ color: '#ffffff', fontWeight: 600 }}>
              Contact UtilityWater AI to discuss AI and IoT software solutions designed for water treatment facilities, distribution networks, pump stations, and utility field operations.
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
