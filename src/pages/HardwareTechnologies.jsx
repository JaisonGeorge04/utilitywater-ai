import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import DocxImage from '../components/DocxImage';

export default function HardwareTechnologies() {
  useEffect(() => {
    document.title = "AI and IoT Hardware for Water Treatment Operations | RFID, BLE, GPS & Utility Tracking Technologies | UtilityWater AI";
  }, []);

  return (
    <div className="page-wrapper">
      {/* 1. HERO SECTION - CLEAN CENTERED HERO HEADER */}
      <section className="section section-navy-deep text-center" style={{ paddingTop: '4rem', paddingBottom: '4.5rem' }}>
        <div className="container">
          <p className="hero-tagline" style={{ textAlign: 'center', marginBottom: '0.85rem', fontWeight: 600, color: 'var(--color-primary)' }}>
            Identification Hardware for Water Utility Personnel, Assets, Facilities, and Operations
          </p>
          <h1 style={{ color: 'var(--color-text-main)', marginBottom: '1.25rem', fontSize: 'clamp(2.1rem, 4vw, 3rem)', maxWidth: '820px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center', lineHeight: '1.2' }}>
            AI and IoT Hardware Technologies for Water Treatment Operations
          </h1>
          <h2 style={{ fontSize: '1.2rem', fontWeight: '600', color: 'var(--color-text-main)', marginBottom: '1.25rem', lineHeight: '1.45', maxWidth: '860px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
            AI and IoT Hardware Technologies Enabling Identification and Location Solutions Across Water Treatment Facilities
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: '1.65', margin: '0 auto 2rem auto', maxWidth: '860px', textAlign: 'center' }}>
            UtilityWater AI combines RFID, BLE, GPS, LoRaWAN, and cellular hardware technologies with AI and IoT software to help water utilities identify personnel, secure facilities, locate critical assets, manage fleet operations, and maintain operational traceability.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Contact Us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW OF AI AND IOT HARDWARE FOR WATER TREATMENT OPERATIONS */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Overview of AI and IoT Hardware for Water Treatment Operations</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)' }}>
            <p>
              Water treatment and distribution organizations operate complex infrastructure that requires accurate identification and location information. Hardware technologies provide the physical connection between operational resources and AI and IoT software systems.
            </p>
            <p>
              Unlike traditional monitoring approaches focused on environmental measurements, UtilityWater AI emphasizes identification and location hardware designed to answer operational questions:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.75rem', listStyle: 'none', padding: 0, margin: '0 0 1.25rem 0' }}>
              {[
                "Where are personnel working?",
                "Who has entered a controlled facility?",
                "Where are pumps, valves, meters, and maintenance tools located?",
                "Which vehicles are available for field response?",
                "Where are critical inventory items stored?"
              ].map((q, idx) => (
                <li key={idx} className="card" style={{ padding: '0.85rem 1.15rem', flexDirection: 'row', gap: '0.75rem', alignItems: 'center' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)', fontWeight: 600 }}>{q}</span>
                </li>
              ))}
            </ul>
            <p>
              AI and IoT hardware technologies combine identification devices, communication technologies, and software connectivity to support operational workflows.
            </p>
            <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
              Common hardware components include:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem', listStyle: 'none', padding: 0, margin: '0 0 1.25rem 0' }}>
              {[
                "RFID asset tags", "BLE personnel badges", "GPS fleet trackers",
                "Access control readers", "RFID identification devices", "BLE location devices",
                "LoRaWAN communication devices", "Cellular tracking devices"
              ].map((item, idx) => (
                <li key={idx} className="card" style={{ padding: '0.75rem 1rem', flexDirection: 'row', gap: '0.65rem', alignItems: 'center' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)' }}>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              These technologies can be deployed across treatment plants, pump stations, warehouses, maintenance facilities, and distribution networks.
            </p>
          </div>

          {/* DOCX Image 7 */}
          <DocxImage 
            src="/assets/docx-images/image7.jpeg"
            title="AI and IoT Hardware Technologies for Water Utility Operations"
            description="This hardware technology overview illustration showcases the key AI and IoT devices used across water treatment and distribution operations, including RFID asset tags, BLE personnel badges, GPS fleet trackers, RFID access readers, LoRaWAN gateways, and cellular-connected field devices. The diagram demonstrates how these technologies connect people, assets, facilities, and vehicles to a centralized AI and IoT platform, enabling real-time visibility, operational efficiency, regulatory compliance, and improved asset management throughout the utility network."
            alt="Water utility illustration featuring RFID tags, BLE badges, GPS trackers, LoRaWAN gateways, access readers, and AI software integration."
          />
        </div>
      </section>

      {/* 3. PHYSICAL IDENTIFICATION DEVICES FOR WATER UTILITIES */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>Physical Identification Devices for Water Utilities</h2>
          </div>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)', marginBottom: '2rem' }}>
            Physical identification devices provide the foundation for AI and IoT identification solutions. These devices allow utilities to assign digital identities to people, equipment, vehicles, and materials.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* RFID Asset Tags */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-text-main)', marginBottom: '0.85rem' }}>RFID Asset Tags</h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '1rem' }}>
                RFID asset tags provide a practical method for identifying water utility equipment and inventory. Common applications include:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Pump identification", "Valve identification", "Meter tracking",
                  "Maintenance equipment management", "Spare parts identification", "Warehouse inventory control"
                ].map((app, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                RFID tags can be attached to:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Mechanical equipment", "Electrical components", "Portable tools",
                  "Repair materials", "Storage containers"
                ].map((att, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{att}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                Benefits include:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Faster asset identification", "Reduced manual data entry", "Improved asset records",
                  "Better maintenance documentation", "Easier inventory verification"
                ].map((ben, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{ben}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0 }}>
                For large water utilities managing thousands of assets, RFID provides a scalable method for maintaining consistent identification records.
              </p>
            </div>

            {/* BLE Personnel Badges */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-text-main)', marginBottom: '0.85rem' }}>BLE Personnel Badges</h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '1rem' }}>
                BLE personnel badges support workforce identification and location management within treatment facilities and operational buildings.
              </p>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                Applications include:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Operator identification", "Contractor management", "Restricted area tracking",
                  "Emergency accountability", "Workforce location support"
                ].map((app, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '1rem' }}>
                BLE badges communicate with compatible location systems to provide information about personnel presence in defined areas. Typical applications include:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Treatment plant buildings", "Pump facilities", "Maintenance areas",
                  "Chemical handling locations", "Control rooms"
                ].map((loc, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{loc}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0 }}>
                BLE personnel identification helps utilities improve operational awareness while supporting workforce safety procedures.
              </p>
            </div>

            {/* GPS Fleet Trackers */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-text-main)', marginBottom: '0.85rem' }}>GPS Fleet Trackers</h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '1rem' }}>
                GPS fleet trackers support outdoor location management for utility vehicles and mobile equipment. Applications include:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Service vehicles", "Maintenance trucks", "Emergency response vehicles",
                  "Inspection vehicles", "Mobile equipment"
                ].map((app, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                GPS hardware provides:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Vehicle location information", "Route history", "Fleet utilization data",
                  "Dispatch support", "Operational coordination"
                ].map((pro, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0 }}>
                For utilities managing large geographic service territories, GPS fleet tracking improves communication between field teams and operations centers.
              </p>
            </div>

            {/* Access Control Readers */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-text-main)', marginBottom: '0.85rem' }}>Access Control Readers</h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.65', marginBottom: '1rem' }}>
                Access control readers support secure facility entry management. Common locations include:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "Treatment plant entrances", "Chemical storage buildings", "Pump stations",
                  "Control rooms", "Maintenance facilities"
                ].map((loc, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{loc}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                Access readers can support:
              </p>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, marginBottom: '1.15rem' }}>
                {[
                  "RFID credentials", "BLE credentials", "Digital identification", "Entry record generation"
                ].map((sup, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--color-text-main)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{sup}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0 }}>
                These devices help utilities maintain accurate access histories and improve control over critical infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SELECTING THE RIGHT AI AND IOT HARDWARE TECHNOLOGY */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Selecting the Right AI and IoT Hardware Technology</h2>
          </div>
          <div style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)', marginBottom: '2rem' }}>
            <p style={{ marginBottom: '1.25rem' }}>
              Water treatment and distribution organizations must select hardware based on operational requirements, facility characteristics, and existing infrastructure. Key considerations include:
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div className="card" style={{ padding: '1.75rem' }}>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--color-text-main)', marginBottom: '0.75rem' }}>Operating Environment</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '0.85rem' }}>
                Different utility environments require different hardware approaches. Examples:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[
                  "Indoor treatment buildings may use BLE identification",
                  "Equipment yards may use RFID or GPS solutions",
                  "Mobile vehicles may use GPS and cellular connectivity",
                  "Remote facilities may require LoRaWAN or cellular communication"
                ].map((ex, i) => (
                  <li key={i} style={{ fontSize: '0.9rem', color: 'var(--color-text-main)', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--color-primary)', marginTop: '8px', flexShrink: 0 }} />
                    <span>{ex}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card" style={{ padding: '1.75rem' }}>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--color-text-main)', marginBottom: '0.75rem' }}>Identification Range Requirements</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '0.85rem' }}>
                The required operating distance influences technology selection. Examples:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[
                  "RFID supports close-range identification",
                  "BLE supports facility-level personnel location",
                  "GPS supports outdoor geographic tracking",
                  "LoRaWAN supports long-range remote communication",
                  "Cellular supports wide-area connectivity"
                ].map((ex, i) => (
                  <li key={i} style={{ fontSize: '0.9rem', color: 'var(--color-text-main)', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--color-primary)', marginTop: '8px', flexShrink: 0 }} />
                    <span>{ex}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card" style={{ padding: '1.75rem' }}>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--color-text-main)', marginBottom: '0.75rem' }}>Asset Type and Mobility</h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '0.5rem' }}>
                Utilities should evaluate whether resources are:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 0.85rem 0', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                {[
                  "Fixed infrastructure", "Portable equipment", "Mobile vehicles", "Personnel", "Inventory materials"
                ].map((res, i) => (
                  <li key={i} style={{ fontSize: '0.875rem', color: 'var(--color-text-main)' }}>• {res}</li>
                ))}
              </ul>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '0.5rem', fontWeight: 600 }}>Examples:</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[
                  "Pumps and valves may require RFID identification",
                  "Field vehicles may require GPS tracking",
                  "Operators may use BLE badges",
                  "Remote assets may use LoRaWAN connectivity"
                ].map((ex, i) => (
                  <li key={i} style={{ fontSize: '0.9rem', color: 'var(--color-text-main)', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--color-primary)', marginTop: '8px', flexShrink: 0 }} />
                    <span>{ex}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* DOCX Image 8 */}
          <DocxImage 
            src="/assets/docx-images/image8.png"
            title="AI and IoT Hardware Selection Guide for Water Utility Operations"
            description="This technical decision tree illustrates how water utility managers select appropriate identification and location hardware—including RFID asset tags, BLE badges, GPS fleet trackers, LoRaWAN gateways, and cellular devices—based on facility environment, range requirements, mobility, and integration goals."
            alt="Engineering decision tree diagram guiding hardware selection across BLE, RFID, GPS, LoRaWAN, and Cellular technologies for water utilities."
          />
        </div>
      </section>

      {/* 5. AI AND IOT HARDWARE DEPLOYMENT EXAMPLES */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>AI and IoT Hardware Deployment Examples in Water Treatment &amp; Distribution</h2>
          </div>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)', marginBottom: '2rem' }}>
            AI and IoT hardware technologies can be applied across multiple operational areas.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            <div className="card" style={{ padding: '1.75rem' }}>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--color-text-main)', marginBottom: '0.75rem' }}>Water Treatment Plants</h3>
              <p style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.5rem' }}>Applications include:</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1rem 0', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {[
                  "Operator identification", "Restricted area access control", "Equipment identification",
                  "Maintenance tool tracking", "Inventory management"
                ].map((app, i) => (
                  <li key={i} style={{ fontSize: '0.875rem', color: 'var(--color-text-main)' }}>• {app}</li>
                ))}
              </ul>
              <p style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.5rem' }}>Technologies commonly used:</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {[
                  "BLE personnel badges", "RFID asset tags", "RFID access readers", "Indoor location systems"
                ].map((tech, i) => (
                  <li key={i} style={{ fontSize: '0.875rem', color: 'var(--color-primary)', fontWeight: 600 }}>- {tech}</li>
                ))}
              </ul>
            </div>

            <div className="card" style={{ padding: '1.75rem' }}>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--color-text-main)', marginBottom: '0.75rem' }}>Pump Stations and Remote Facilities</h3>
              <p style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.5rem' }}>Applications include:</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1rem 0', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {[
                  "Remote equipment identification", "Vehicle arrival tracking",
                  "Maintenance activity documentation", "Facility access records"
                ].map((app, i) => (
                  <li key={i} style={{ fontSize: '0.875rem', color: 'var(--color-text-main)' }}>• {app}</li>
                ))}
              </ul>
              <p style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.5rem' }}>Technologies commonly used:</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {[
                  "GPS tracking devices", "Cellular connectivity", "LoRaWAN devices", "RFID identification"
                ].map((tech, i) => (
                  <li key={i} style={{ fontSize: '0.875rem', color: 'var(--color-primary)', fontWeight: 600 }}>- {tech}</li>
                ))}
              </ul>
            </div>

            <div className="card" style={{ padding: '1.75rem' }}>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--color-text-main)', marginBottom: '0.75rem' }}>Distribution Network Field Operations</h3>
              <p style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.5rem' }}>Applications include:</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1rem 0', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {[
                  "Service vehicle tracking", "Field team coordination",
                  "Equipment location management", "Work activity documentation"
                ].map((app, i) => (
                  <li key={i} style={{ fontSize: '0.875rem', color: 'var(--color-text-main)' }}>• {app}</li>
                ))}
              </ul>
              <p style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.5rem' }}>Technologies commonly used:</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {[
                  "GPS fleet trackers", "BLE personnel badges", "RFID equipment tags", "Cellular-connected devices"
                ].map((tech, i) => (
                  <li key={i} style={{ fontSize: '0.875rem', color: 'var(--color-primary)', fontWeight: 600 }}>- {tech}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. HARDWARE TECHNOLOGY BENEFITS FOR WATER UTILITIES */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Hardware Technology Benefits for Water Utilities</h2>
          </div>
          <div style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)' }}>
            <p style={{ marginBottom: '1.25rem' }}>
              AI and IoT hardware solutions help utilities improve operational visibility through reliable identification and location capabilities.
            </p>
            <p style={{ fontWeight: 600, marginBottom: '1rem' }}>
              Key benefits include:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.85rem', listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0' }}>
              {[
                "Faster asset identification", "Improved personnel visibility", "Better facility access records",
                "More accurate inventory information", "Improved fleet coordination", "Stronger operational documentation",
                "Better support for maintenance activities", "Improved remote infrastructure visibility"
              ].map((ben, idx) => (
                <li key={idx} className="card" style={{ padding: '0.85rem 1.15rem', flexDirection: 'row', gap: '0.75rem', alignItems: 'center' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)' }}>{ben}</span>
                </li>
              ))}
            </ul>
            <p>
              By selecting appropriate hardware technologies and connecting them with AI and IoT software, water utilities can create practical identification solutions that support daily operations.
            </p>
          </div>
        </div>
      </section>

      {/* 7. UTILITYWATER AI HARDWARE TECHNOLOGY APPROACH */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>UtilityWater AI Hardware Technology Approach</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-main)' }}>
            <p>
              UtilityWater AI provides AI and IoT hardware solutions designed around real operational requirements in water treatment and distribution environments.
            </p>
            <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
              The company combines:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, margin: '0 0 1rem 0' }}>
              {[
                "RFID identification technologies",
                "BLE location technologies",
                "GPS tracking technologies",
                "LoRaWAN communication solutions",
                "Cellular connectivity solutions"
              ].map((item, idx) => (
                <li key={idx} className="card" style={{ padding: '0.75rem 1rem', flexDirection: 'row', gap: '0.65rem', alignItems: 'center' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)' }}>{item}</span>
                </li>
              ))}
            </ul>
            <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
              with software systems for:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.65rem', listStyle: 'none', padding: 0, margin: '0 0 1rem 0' }}>
              {[
                "Personnel management",
                "Access control",
                "Asset tracking",
                "Inventory management",
                "Traceability documentation"
              ].map((item, idx) => (
                <li key={idx} className="card" style={{ padding: '0.75rem 1rem', flexDirection: 'row', gap: '0.65rem', alignItems: 'center' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--color-text-main)' }}>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              UtilityWater AI is created within Aperture Venture Studio, with support from GAO. Building on two decades of IoT experience, GAO has supported thousands of IoT customers and executed thousands of IoT projects. UtilityWater AI incorporates this experience with investments in research and development, quality assurance processes, and technical support provided remotely or onsite.
            </p>
            <p>
              The team includes Ph.D. professionals from leading universities and has supported Fortune 500 companies, research organizations, universities, and government agencies.
            </p>
          </div>
        </div>
      </section>

      {/* 7. FINAL DARK CTA SECTION */}
      <section className="final-cta-section">
        <div className="container">
          <h2 style={{ color: '#ffffff', marginBottom: '1.5rem', fontSize: '2rem', textAlign: 'left' }}>
            Request an AI and IoT Hardware Assessment
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem', fontSize: '1.05rem', lineHeight: '1.65', color: '#94a3b8', marginBottom: '2.5rem', textAlign: 'left' }}>
            <p>
              UtilityWater AI helps water treatment and distribution organizations evaluate hardware technologies based on:
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.75rem', listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', textAlign: 'left' }}>
              {[
                "Facility requirements",
                "Asset categories",
                "Location requirements",
                "Connectivity conditions",
                "Software integration needs"
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: '#ffffff', fontSize: '0.95rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p style={{ color: '#ffffff', fontWeight: 600 }}>
              Contact UtilityWater AI to discuss identification and location solutions for treatment plants, pump stations, distribution networks, warehouses, and field operations.
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
