import React from 'react';
import { 
  Building2, Radio, UserCheck, Shield, Truck, Database, 
  Cpu, Server, Activity, ArrowRight, Layers, KeyRound, 
  Workflow, FileCheck, MapPin, Gauge
} from 'lucide-react';

/**
 * Enterprise Hero Visual Component — Light Theme
 */
export function HeroVisual() {
  return (
    <div className="visual-card-frame" aria-label="UtilityWater AI Operational Visual Representation">
      <div className="diagram-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span className="badge-pulse-dot"></span>
          <span className="diagram-title">AIoT Operational Telemetry Node</span>
        </div>
        <span className="badge badge-primary" style={{ margin: 0 }}>
          <Activity size={12} /> LIVE SCADA / AI SYNC
        </span>
      </div>

      <div className="diagram-nodes-grid">
        <div className="diagram-node">
          <Building2 size={24} className="diagram-node-icon" />
          <div className="diagram-node-label">Treatment Facility</div>
          <div className="diagram-node-tech">RFID Tagged Assets</div>
        </div>

        <div className="diagram-node">
          <Gauge size={24} className="diagram-node-icon" />
          <div className="diagram-node-label">Pump Stations</div>
          <div className="diagram-node-tech">LoRaWAN Sensors</div>
        </div>

        <div className="diagram-node">
          <UserCheck size={24} className="diagram-node-icon" />
          <div className="diagram-node-label">Field Workforce</div>
          <div className="diagram-node-tech">BLE Badges</div>
        </div>

        <div className="diagram-node">
          <Truck size={24} className="diagram-node-icon" />
          <div className="diagram-node-label">Utility Fleet</div>
          <div className="diagram-node-tech">GPS Telematics</div>
        </div>

        <div className="diagram-node">
          <Database size={24} className="diagram-node-icon" />
          <div className="diagram-node-label">Chemical Storage</div>
          <div className="diagram-node-tech">Inventory Scan</div>
        </div>

        <div className="diagram-node" style={{ borderColor: 'var(--color-primary)', background: '#e0f2fe' }}>
          <Cpu size={24} className="diagram-node-icon" style={{ color: 'var(--color-primary)' }} />
          <div className="diagram-node-label" style={{ color: 'var(--color-primary)' }}>Cloud AI Analytics</div>
          <div className="diagram-node-tech" style={{ color: '#0369a1' }}>Central Engine</div>
        </div>
      </div>

      <div style={{ 
        marginTop: '1.25rem', 
        padding: '0.85rem', 
        background: '#f8fafc', 
        borderRadius: 'var(--radius-md)', 
        border: '1px solid var(--color-border-light)',
        fontSize: '0.785rem',
        color: 'var(--color-text-muted)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <span><strong style={{ color: 'var(--color-text-main)' }}>Sub-Industry Focus:</strong> Water Treatment &amp; Distribution Operations</span>
        <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Active Telemetry Grid</span>
      </div>
    </div>
  );
}

/**
 * Unified Operations Visual Section — Light Theme
 */
export function UnifiedOperationsVisual() {
  const nodes = [
    { title: 'Water Treatment Plants', icon: Building2, tech: 'Process Control & RFID' },
    { title: 'Reservoirs & Booster Stations', icon: Gauge, tech: 'LoRaWAN Level Sensors' },
    { title: 'Pump Stations & Networks', icon: Activity, tech: 'Vibration & Flow Telemetry' },
    { title: 'Workforce Identification', icon: UserCheck, tech: 'BLE Active Badging' },
    { title: 'RFID Asset Management', icon: Radio, tech: 'Fixed & Handheld Scanners' },
    { title: 'Secure Facility Access', icon: Shield, tech: 'Encrypted Access Control' },
    { title: 'Fleet Tracking & Telematics', icon: Truck, tech: 'GPS Cellular Nodes' },
    { title: 'Chemical Inventory Visibility', icon: Database, tech: 'Automated Traceability' },
    { title: 'SCADA Operations Integration', icon: Server, tech: 'Real-time Controller Sync' },
    { title: 'Cloud AI Operational Dashboard', icon: Cpu, tech: 'Central AI Engine' },
  ];

  return (
    <div className="visual-card-frame" style={{ padding: '2rem' }}>
      <div className="diagram-header">
        <div>
          <h3 style={{ color: 'var(--color-text-main)', fontSize: '1.25rem', marginBottom: '0.25rem' }}>
            Unified Municipal Water Utility AIoT Architecture
          </h3>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', margin: 0 }}>
            Full end-to-end integration across physical infrastructure and digital AI analytics.
          </p>
        </div>
        <span className="badge badge-cyan" style={{ margin: 0 }}>
          <Layers size={14} /> Enterprise Operations Map
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.25rem', marginTop: '1.5rem' }}>
        {nodes.map((n, idx) => {
          const IconComp = n.icon;
          return (
            <div key={idx} className="diagram-node" style={{ padding: '1.25rem 1rem', textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <div style={{ padding: '0.4rem', borderRadius: '6px', background: '#e0f2fe', color: 'var(--color-primary)' }}>
                  <IconComp size={20} />
                </div>
                <span className="diagram-node-label" style={{ fontSize: '0.875rem' }}>{n.title}</span>
              </div>
              <div className="diagram-node-tech">{n.tech}</div>
            </div>
          );
        })}
      </div>

      <div style={{
        marginTop: '1.5rem',
        padding: '1rem',
        background: '#f8fafc',
        border: '1px solid var(--color-border-light)',
        borderRadius: 'var(--radius-md)',
        fontSize: '0.85rem',
        color: 'var(--color-text-muted)',
        lineHeight: 1.5
      }}>
        <strong>Operational Alt Representation:</strong> Photorealistic illustration of a municipal water treatment facility connected to reservoirs, pump stations, distribution networks, RFID-tagged water assets, BLE-enabled personnel, GPS-tracked fleet vehicles, chemical inventory warehouses, secure access control points, SCADA control rooms, and cloud-based AI operational dashboards.
      </div>
    </div>
  );
}

/**
 * Workflow Diagram Component — Light Theme
 */
export function WorkflowDiagram() {
  const steps = [
    { num: '01', title: 'Identification', desc: 'BLE Badges, RFID tags & GPS hardware on personnel, assets & fleet.', icon: Radio },
    { num: '02', title: 'Connectivity', desc: 'LoRaWAN, Cellular & Gateway telemetry transmission.', icon: Radio },
    { num: '03', title: 'Central AI/IoT Platform', desc: 'Secure cloud infrastructure ingesting raw operational data streams.', icon: Server },
    { num: '04', title: 'AI Analytics', desc: 'Machine learning rules engine analyzing location, utilization & access.', icon: Cpu },
    { num: '05', title: 'Operational Actions', desc: 'Automated dispatch, threshold alerts & access permissions.', icon: Workflow },
    { num: '06', title: 'Reporting & Decisions', desc: 'Compliance audit documentation & executive decision support.', icon: FileCheck },
  ];

  return (
    <div style={{ marginTop: '2rem' }}>
      <div className="workflow-pipeline">
        {steps.map((step) => {
          const StepIcon = step.icon;
          return (
            <div key={step.num} className="workflow-step-card">
              <div className="workflow-step-num">{step.num}</div>
              <StepIcon size={22} style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }} />
              <div className="workflow-step-title">{step.title}</div>
              <div className="workflow-step-desc">{step.desc}</div>
            </div>
          );
        })}
      </div>
      <div style={{
        marginTop: '1.5rem',
        padding: '0.85rem 1.25rem',
        background: '#f8fafc',
        border: '1px solid var(--color-border-light)',
        borderRadius: 'var(--radius-md)',
        fontSize: '0.8125rem',
        color: 'var(--color-text-muted)',
        textAlign: 'center'
      }}>
        <strong>Alt Text Summary:</strong> Workflow diagram illustrating a water treatment plant, pump stations, distribution pipelines, maintenance warehouses, fleet vehicles, and remote facilities connected through BLE badges, RFID tags, GPS tracking, LoRaWAN networks, cellular communications, secure cloud infrastructure, and AI-powered operational software.
      </div>
    </div>
  );
}

/**
 * System Integration Diagram Component
 */
export function SystemsIntegrationVisual() {
  const systems = [
    'SCADA (Supervisory Control & Data Acquisition)',
    'CMMS (Computerized Maintenance Management System)',
    'ERP (Enterprise Resource Planning)',
    'GIS (Geographic Information System)',
    'LIMS (Laboratory Information Management System)',
    'Workforce Management Software',
    'Utility Billing Applications'
  ];

  return (
    <div style={{ marginTop: '2rem' }}>
      <div className="system-tags-grid">
        {systems.map((sys, idx) => (
          <div key={idx} className="system-tag">
            <Layers size={18} style={{ color: 'var(--color-primary)' }} />
            <span>{sys}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
