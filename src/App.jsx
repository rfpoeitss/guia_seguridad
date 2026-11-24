import React, { useState, useEffect } from 'react';
import { 
  Shield, FileText, Users, AlertTriangle, Cpu, CheckSquare, 
  Settings, Database, Lock, RefreshCw, Download, Upload, 
  Plus, Trash2, Edit3, CheckCircle, Clock, Search, ExternalLink, 
  Layers, Building, HelpCircle, AlertCircle, Eye, Printer, Server
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [toastMessage, setToastMessage] = useState(null);

  // Show temporary notification
  const notify = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // State initialization with localStorage persistence
  const [providers, setProviders] = useState(() => {
    const saved = localStorage.getItem('ens_providers');
    return saved ? JSON.parse(saved) : [
      { id: 1, name: 'TechDev Solutions S.L. (Proveedor 01)', service: 'Desarrollo software a medida (CT-2026-09)', internalOwner: 'Sofía Martín', securityContact: 'seguridad@techdev-ejemplo.es / +34 910 000 111', accessType: 'Lógico (VPN + GitLab + Prepro)', risk: 'Alto', ensCategory: 'MEDIA', status: 'Activo', checklist: { c1: true, c2: true, c3: true, c4: true, c5: true, c6: true, c7: true, c8: true, c9: true, c10: true, c11: true, c12: true }, destructionCert: 'Pendiente' },
      { id: 2, name: 'CloudHost Iberia S.A.', service: 'Alojamiento Cloud y Backup (CT-2025-14)', internalOwner: 'Carlos Mendoza', securityContact: 'csirt@cloudhost-ejemplo.es / +34 910 000 222', accessType: 'Lógico (Tenant UE)', risk: 'Alto', ensCategory: 'ALTA', status: 'Activo', checklist: { c1: true, c2: true, c3: true, c4: true, c5: true, c6: true, c7: true, c8: true, c9: true, c10: true, c11: true, c12: true }, destructionCert: 'N.A.' },
      { id: 3, name: 'Consultora Legacy S.L.', service: 'Mantenimiento ERP antiguo (CT-2026-02)', internalOwner: 'Raúl Pérez', securityContact: 'soporte.sec@legacy-ejemplo.es', accessType: 'Lógico (VPN puntual)', risk: 'Medio', ensCategory: 'BÁSICA', status: 'Cerrado', checklist: { c1: true, c2: true, c3: true, c4: true, c5: true, c6: true, c7: true, c8: true, c9: true, c10: true, c11: true, c12: true }, destructionCert: 'Recibido (03/11/2026)' }
    ];
  });

  const [vulnerabilities, setVulnerabilities] = useState(() => {
    const saved = localStorage.getItem('ens_vulnerabilities');
    return saved ? JSON.parse(saved) : [
      { id: 'VUL-2026-001', date: '2026-11-10', cve: 'CVE-2026-38412', asset: 'OpenSSL / Ingress Controller', version: '3.0.14', dept: 'Infraestructura y Cloud', severity: 'Crítica', activeExploit: 'Sí', exposure: 'Externa (Internet)', owner: 'Carlos Mendoza', targetDate: '2026-11-11', status: 'Cerrada', notes: 'Mitigado en <4h tras aviso CCN-CERT' },
      { id: 'VUL-2026-002', date: '2026-11-12', cve: 'CVE-2026-29104', asset: 'GitLab Enterprise Edition', version: '17.4.1', dept: 'Desarrollo y DevOps', severity: 'Alta', activeExploit: 'No', exposure: 'Interna / VPN', owner: 'David Ruiz', targetDate: '2026-11-19', status: 'Mitigando', notes: 'Actualización programada 18/11/2026' },
      { id: 'VUL-2026-003', date: '2026-11-05', cve: 'CVE-2026-21509', asset: 'Apache Tomcat (Portal Clientes)', version: '10.1.24', dept: 'Desarrollo / Negocio', severity: 'Media', activeExploit: 'No', exposure: 'Externa (WAF)', owner: 'Sofía Martín', targetDate: '2026-12-05', status: 'En análisis', notes: 'Protegido temporalmente por regla WAF' }
    ];
  });

  const [techInventory, setTechInventory] = useState(() => {
    const saved = localStorage.getItem('ens_tech');
    return saved ? JSON.parse(saved) : [
      { id: 'TEC-001', name: 'GitLab EE', vendor: 'GitLab Inc.', version: '17.4.3', type: 'DevSecOps', dept: 'Desarrollo', env: 'Producción', criticality: 'Alta', status: 'Autorizada' },
      { id: 'TEC-002', name: 'Red Hat OpenShift', vendor: 'Red Hat', version: '4.16', type: 'Contenedores', dept: 'Sistemas', env: 'Producción', criticality: 'Alta', status: 'Autorizada' },
      { id: 'TEC-003', name: 'PostgreSQL', vendor: 'PostgreSQL Global', version: '16.4', type: 'Base de Datos', dept: 'Desarrollo', env: 'Producción', criticality: 'Alta', status: 'Autorizada' }
    ];
  });

  const [requests, setRequests] = useState(() => {
    const saved = localStorage.getItem('ens_requests');
    return saved ? JSON.parse(saved) : [
      { id: 'SOL-2026-041', date: '2026-11-11', user: 'Lucía Fernández', app: 'JetBrains IntelliJ IDEA', dept: 'Desarrollo', status: 'Aprobada', approver: 'Carlos Mendoza' },
      { id: 'SOL-2026-042', date: '2026-11-13', user: 'Andrés Vega (Externo)', app: 'kubectl + Helm', dept: 'DevOps', status: 'Condicionada', approver: 'Javier Ortiz' }
    ];
  });

  const [annexIPending, setAnnexIPending] = useState(() => {
    const saved = localStorage.getItem('ens_annex_i');
    return saved ? JSON.parse(saved) : [
      { id: 1, item: 'Departamentos, dominios, equipos y titular/suplente', status: 'Completado', owner: 'Sistemas / RRHH' },
      { id: 2, item: 'Inventario real de tecnologías y enlace a fuente oficial', status: 'Completado', owner: 'Sistemas' },
      { id: 3, item: 'Excel histórico de Ciberseguridad importado y depurado', status: 'Completado', owner: 'Ciberseguridad' },
      { id: 4, item: 'Catálogo vigente de aplicaciones autorizadas publicado', status: 'Completado', owner: 'Sistemas' },
      { id: 5, item: 'Matriz nominal de usuarios, proyectos y roles GitLab', status: 'Completado', owner: 'DevOps' },
      { id: 6, item: 'Matriz OpenShift de namespaces, RBAC y logs', status: 'Completado', owner: 'Plataforma' },
      { id: 7, item: 'Canal vulnerabilidades/incidentes 24x7 y SLA aprobados', status: 'Completado', owner: 'Ciberseguridad' },
      { id: 8, item: 'Guía de buenas prácticas IA aprobada', status: 'En revisión', owner: 'Ciberseguridad / Dirección' },
      { id: 9, item: 'Cláusulas contractuales con Proveedor 01 y destrucción', status: 'Completado', owner: 'Compras / Legal' }
    ];
  });

  // Save to localStorage whenever state changes
  useEffect(() => { localStorage.setItem('ens_providers', JSON.stringify(providers)); }, [providers]);
  useEffect(() => { localStorage.setItem('ens_vulnerabilities', JSON.stringify(vulnerabilities)); }, [vulnerabilities]);
  useEffect(() => { localStorage.setItem('ens_tech', JSON.stringify(techInventory)); }, [techInventory]);
  useEffect(() => { localStorage.setItem('ens_requests', JSON.stringify(requests)); }, [requests]);
  useEffect(() => { localStorage.setItem('ens_annex_i', JSON.stringify(annexIPending)); }, [annexIPending]);

  // Export / Backup / Restore state as JSON file
  const exportBackup = () => {
    const data = { providers, vulnerabilities, techInventory, requests, annexIPending };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `backup_seguridad_ens_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    notify('Copia de seguridad exportada correctamente.');
  };

  const importBackup = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target.result);
        if (data.providers) setProviders(data.providers);
        if (data.vulnerabilities) setVulnerabilities(data.vulnerabilities);
        if (data.techInventory) setTechInventory(data.techInventory);
        if (data.requests) setRequests(data.requests);
        if (data.annexIPending) setAnnexIPending(data.annexIPending);
        notify('Datos importados y restaurados con éxito.');
      } catch (err) {
        alert('Error al parsear el fichero JSON de copia de seguridad.');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans text-slate-900">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 border border-slate-700 animate-bounce">
          <CheckCircle className="w-5 h-5 text-emerald-400" />
          <span className="text-sm font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Top Header */}
      <header className="bg-slate-900 text-white shadow-md no-print">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2.5 rounded-xl shadow-inner">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">Portal de Seguridad ENS & Proveedores</h1>
              <p className="text-xs text-slate-400">Guía Corporativa v0.2 | Esquema Nacional de Seguridad (RD 311/2022)</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={exportBackup} className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-3.5 py-2 rounded-lg text-xs font-medium flex items-center gap-2 border border-slate-700 transition">
              <Download className="w-4 h-4 text-blue-400" /> Exportar Backup JSON
            </button>
            <label className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-3.5 py-2 rounded-lg text-xs font-medium flex items-center gap-2 border border-slate-700 cursor-pointer transition">
              <Upload className="w-4 h-4 text-emerald-400" /> Importar Backup
              <input type="file" accept=".json" onChange={importBackup} className="hidden" />
            </label>
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="bg-slate-800 text-slate-300 shadow-inner no-print border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 flex overflow-x-auto space-x-1 py-2">
          {[
            { id: 'dashboard', label: 'Dashboard', icon: Shield },
            { id: 'guia', label: 'Guía & Capítulos', icon: FileText },
            { id: 'proveedores', label: 'Proveedores & Cierre', icon: Users },
            { id: 'vulnerabilidades', label: 'Vulnerabilidades & SLA', icon: AlertTriangle },
            { id: 'tecnologia', label: 'Inventario & Apps', icon: Cpu },
            { id: 'accesos', label: 'GitLab & OpenShift RBAC', icon: Lock },
            { id: 'anexos', label: 'Plantillas y Anexos (A-H)', icon: CheckSquare }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
                  isActive ? 'bg-blue-600 text-white shadow' : 'hover:bg-slate-700 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" /> {tab.label}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-6">
        {activeTab === 'dashboard' && (
          <DashboardView 
            providers={providers} 
            vulnerabilities={vulnerabilities} 
            techInventory={techInventory} 
            requests={requests} 
            annexIPending={annexIPending}
            setActiveTab={setActiveTab}
          />
        )}
        {activeTab === 'guia' && <GuiaView annexIPending={annexIPending} setAnnexIPending={setAnnexIPending} notify={notify} />}
        {activeTab === 'proveedores' && <ProveedoresView providers={providers} setProviders={setProviders} notify={notify} />}
        {activeTab === 'vulnerabilidades' && <VulnerabilitiesView vulnerabilities={vulnerabilities} setVulnerabilities={setVulnerabilities} notify={notify} />}
        {activeTab === 'tecnologia' && <TechnologyView techInventory={techInventory} setTechInventory={setTechInventory} requests={requests} setRequests={setRequests} notify={notify} />}
        {activeTab === 'accesos' && <AccessesView notify={notify} />}
        {activeTab === 'anexos' && <AnnexesGeneratorView providers={providers} notify={notify} />}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-4 text-center text-xs border-t border-slate-800 no-print">
        <p>Portal de Seguridad ENS & Proveedores (v0.2) – Herramienta corporativa autogestionada con almacenamiento local persistente.</p>
      </footer>
    </div>
  );
}

// ==========================================
// 1. DASHBOARD VIEW
// ==========================================
function DashboardView({ providers, vulnerabilities, techInventory, requests, annexIPending, setActiveTab }) {
  const activeProviders = providers.filter(p => p.status === 'Activo').length;
  const highRiskProviders = providers.filter(p => p.risk === 'Alto').length;
  const openVulns = vulnerabilities.filter(v => v.status !== 'Cerrada').length;
  const pendingRequests = requests.filter(r => r.status === 'Pendiente' || r.status === 'En revisión').length;
  const completedAnnexI = annexIPending.filter(a => a.status === 'Completado').length;

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-900 to-slate-900 text-white rounded-2xl p-6 shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <span className="bg-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">Versión 0.2 Operativa</span>
          <h2 className="text-2xl font-bold mt-2">Panel de Control de Seguridad y Proveedores</h2>
          <p className="text-slate-300 text-sm mt-1">Gestión integral del Esquema Nacional de Seguridad (ENS) y cadena de suministro TIC.</p>
        </div>
        <div className="flex gap-3">
          <button onClick={() => setActiveTab('proveedores')} className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl text-xs font-semibold shadow transition flex items-center gap-2">
            <Users className="w-4 h-4" /> Gestionar Proveedores
          </button>
          <button onClick={() => setActiveTab('anexos')} className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-xl text-xs font-semibold border border-slate-700 transition flex items-center gap-2">
            <CheckSquare className="w-4 h-4 text-blue-400" /> Rellenar Anexos
          </button>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <MetricCard title="Proveedores Activos" value={activeProviders} total={`de ${providers.length} totales`} icon={Users} color="bg-blue-500" />
        <MetricCard title="Proveedores Riesgo Alto" value={highRiskProviders} total="Requieren auditoría" icon={Shield} color="bg-amber-500" />
        <MetricCard title="Vulnerabilidades Abiertas" value={openVulns} total="SLA activo" icon={AlertTriangle} color="bg-red-500" />
        <MetricCard title="Solicitudes Software" value={pendingRequests} total="Pendientes aprobación" icon={Cpu} color="bg-indigo-500" />
        <MetricCard title="Anexo I (Completado)" value={`${completedAnnexI}/9`} total="Puntos iniciales" icon={CheckCircle} color="bg-emerald-500" />
      </div>

      {/* Two Column Quick Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Providers Status */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-slate-800 text-sm flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-600" /> Estado de Proveedores Críticos
            </h3>
            <button onClick={() => setActiveTab('proveedores')} className="text-xs text-blue-600 font-semibold hover:underline">Ver todos</button>
          </div>
          <div className="space-y-3">
            {providers.slice(0, 3).map(p => (
              <div key={p.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                <div>
                  <h4 className="font-semibold text-xs text-slate-800">{p.name}</h4>
                  <p className="text-[11px] text-slate-500">{p.service}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${p.risk === 'Alto' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'}`}>
                    Riesgo {p.risk}
                  </span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${p.status === 'Activo' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-200 text-slate-700'}`}>
                    {p.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Vulnerabilities Status */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-slate-800 text-sm flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-600" /> Vulnerabilidades Activas (SLA)
            </h3>
            <button onClick={() => setActiveTab('vulnerabilidades')} className="text-xs text-blue-600 font-semibold hover:underline">Gestionar</button>
          </div>
          <div className="space-y-3">
            {vulnerabilities.slice(0, 3).map(v => (
              <div key={v.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                <div>
                  <h4 className="font-semibold text-xs text-slate-800">{v.cve} – {v.asset}</h4>
                  <p className="text-[11px] text-slate-500">Objetivo: {v.targetDate} ({v.dept})</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${v.severity === 'Crítica' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'}`}>
                    {v.severity}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-700">
                    {v.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricCard({ title, value, total, icon: Icon, color }) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 flex flex-col justify-between">
      <div className="flex justify-between items-start">
        <span className="text-xs font-semibold text-slate-500">{title}</span>
        <div className={`${color} p-2 rounded-xl text-white shadow-sm`}>
          <Icon className="w-4 h-4" />
        </div>
      </div>
      <div className="mt-4">
        <span className="text-2xl font-bold text-slate-800">{value}</span>
        <p className="text-[11px] text-slate-400 mt-0.5">{total}</p>
      </div>
    </div>
  );
}

// ==========================================
// 2. GUÍA & CAPÍTULOS VIEW
// ==========================================
function GuiaView({ annexIPending, setAnnexIPending, notify }) {
  const [searchQuery, setSearchQuery] = useState('');

  const chapters = [
    { num: '1-3', title: 'Objetivos, Ámbito, Gobierno y Roles (RACI)', desc: 'Principios de seguridad, clasificación de proveedores (Bajo, Medio, Alto) y matriz RACI departamental.' },
    { num: '4-5', title: 'Requisitos Obligatorios y Control de Accesos', desc: 'Concienciación, dispositivos corporativos, cifrado, control de acceso físico y lógico (MFA estricto).' },
    { num: '6', title: 'Requisitos Técnicos por Tipo de Proveedor', desc: 'Mantenimiento, desarrollo software, consultoría, cloud/hosting, hardware/software, limpieza y telecomunicaciones.' },
    { num: '7-8', title: 'Protección de Datos y Gestión de Incidentes', desc: 'Contrato encargo RGPD Art. 28, confidencialidad y canal de notificación obligatoria en < 1 hora.' },
    { num: '9-13', title: 'Continuidad, Subcontratación, Auditoría y Cierre', desc: 'Planes de contingencia DRP, inventario de subcontratistas, entrega de evidencias y certificado de destrucción.' },
    { num: '14-24', title: 'Ampliación v0.2: Gobierno, GitLab, OpenShift, IA y Cierre', desc: 'Estructura corporativa, RACI por procesos, flujo CVE, inventario tecnologías, maquetación equipos y Proveedor 01.' }
  ];

  const toggleAnnexItem = (id) => {
    const updated = annexIPending.map(item => {
      if (item.id === id) {
        const nextStatus = item.status === 'Completado' ? 'En revisión' : 'Completado';
        return { ...item, status: nextStatus };
      }
      return item;
    });
    setAnnexIPending(updated);
    notify('Estado del Anexo I actualizado.');
  };

  const filteredChapters = chapters.filter(c => 
    c.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    c.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Guía de Seguridad para Proveedores (Versión 0.2)</h2>
          <p className="text-xs text-slate-500 mt-0.5">Estructura normativa alineada con el Esquema Nacional de Seguridad (RD 311/2022).</p>
        </div>
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input 
            type="text" 
            placeholder="Buscar en la guía..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredChapters.map((ch, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 flex flex-col justify-between hover:border-blue-300 transition">
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2.5 py-1 rounded-lg">Capítulo {ch.num}</span>
                <Shield className="w-4 h-4 text-slate-400" />
              </div>
              <h3 className="font-bold text-slate-800 text-sm mb-1.5">{ch.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{ch.desc}</p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
              <span>Normativa ENS & RGPD</span>
              <span className="text-blue-600 font-semibold">Documento oficial v0.2</span>
            </div>
          </div>
        ))}
      </div>

      {/* Anexo I Checklist Tracker */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
        <h3 className="font-bold text-slate-800 text-sm mb-1 flex items-center gap-2">
          <CheckSquare className="w-4 h-4 text-emerald-600" /> Anexo I – Información Pendiente / Puntos de Adaptación Corporativa
        </h3>
        <p className="text-xs text-slate-500 mb-4">Marque los elementos completados conforme la organización adapte la plantilla corporativa.</p>
        
        <div className="space-y-2">
          {annexIPending.map(item => (
            <div key={item.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
              <div className="flex items-center gap-3">
                <input 
                  type="checkbox" 
                  checked={item.status === 'Completado'} 
                  onChange={() => toggleAnnexItem(item.id)}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 cursor-pointer"
                />
                <span className={`text-xs font-medium ${item.status === 'Completado' ? 'line-through text-slate-400' : 'text-slate-800'}`}>
                  {item.id}. {item.item}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[11px] text-slate-500">Resp: {item.owner}</span>
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${item.status === 'Completado' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 3. PROVEEDORES & CIERRE VIEW
// ==========================================
function ProveedoresView({ providers, setProviders, notify }) {
  const [selectedProv, setSelectedProv] = useState(providers[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProv, setNewProv] = useState({
    name: '', service: '', internalOwner: '', securityContact: '', accessType: 'Lógico', risk: 'Medio', ensCategory: 'BÁSICA', status: 'Activo'
  });

  const handleChecklistChange = (key) => {
    const updatedChecklist = { ...selectedProv.checklist, [key]: !selectedProv.checklist[key] };
    const updatedList = providers.map(p => p.id === selectedProv.id ? { ...p, checklist: updatedChecklist } : p);
    setProviders(updatedList);
    setSelectedProv({ ...selectedProv, checklist: updatedChecklist });
    notify('Control de seguridad actualizado.');
  };

  const handleAddProvider = (e) => {
    e.preventDefault();
    if (!newProv.name || !newProv.service) return alert('Por favor complete la razón social y el servicio.');
    const created = {
      id: Date.now(),
      ...newProv,
      checklist: { c1: false, c2: false, c3: false, c4: false, c5: false, c6: false, c7: false, c8: false, c9: false, c10: false, c11: false, c12: false },
      destructionCert: 'Pendiente'
    };
    setProviders([...providers, created]);
    setSelectedProv(created);
    setIsModalOpen(false);
    setNewProv({ name: '', service: '', internalOwner: '', securityContact: '', accessType: 'Lógico', risk: 'Medio', ensCategory: 'BÁSICA', status: 'Activo' });
    notify('Nuevo proveedor registrado correctamente.');
  };

  const checklistLabels = [
    'C1. POC de seguridad y contacto de emergencia 24x7 designados',
    'C2. Personal identificado, formado y sujeto a confidencialidad',
    'C3. Cuentas individuales, mínimo privilegio y MFA obligatorio',
    'C4. Acceso remoto mediante canal corporativo autorizado y registrado',
    'C5. Equipos protegidos, cifrados, con EDR y actualizados',
    'C6. Gestión de vulnerabilidades y plazos de parcheado definidos',
    'C7. Proceso de notificación (<1h) y respuesta a incidentes probado',
    'C8. Subcontratistas y ubicaciones declarados y autorizados',
    'C9. Continuidad, copias de seguridad y recuperación probadas',
    'C10. Tratamiento de datos personales regulado (Art. 28 RGPD)',
    'C11. Compromiso de devolución/supresión de datos y activos al cierre',
    'C12. Evidencias de controles y derecho de auditoría acordados'
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Gestión de Proveedores y Cadena de Suministro</h2>
          <p className="text-xs text-slate-500 mt-0.5">Control de cumplimiento, evaluación inicial (Anexo A.1) y certificado de destrucción de cierre.</p>
        </div>
        <button onClick={() => setIsModalOpen(true)} className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl text-xs font-semibold shadow transition flex items-center gap-2">
          <Plus className="w-4 h-4" /> Registrar Nuevo Proveedor
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Provider List Sidebar */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 space-y-3">
          <h3 className="font-bold text-xs text-slate-700 uppercase tracking-wider px-2">Listado de Proveedores</h3>
          <div className="space-y-2">
            {providers.map(p => (
              <div 
                key={p.id}
                onClick={() => setSelectedProv(p)}
                className={`p-3 rounded-xl border cursor-pointer transition ${selectedProv?.id === p.id ? 'bg-blue-50 border-blue-300 shadow-sm' : 'bg-slate-50 border-slate-100 hover:bg-slate-100'}`}
              >
                <div className="flex justify-between items-start">
                  <h4 className="font-semibold text-xs text-slate-900">{p.name}</h4>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${p.risk === 'Alto' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'}`}>
                    {p.risk}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">{p.service}</p>
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-200/60 text-[10px] text-slate-400">
                  <span>ENS: {p.ensCategory}</span>
                  <span className={`font-semibold ${p.status === 'Activo' ? 'text-emerald-600' : 'text-slate-500'}`}>{p.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Provider Details & Checklist */}
        {selectedProv && (
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-200 p-6 space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-4 border-b border-slate-100">
              <div>
                <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">Ficha Proveedor</span>
                <h3 className="text-xl font-bold text-slate-800 mt-1">{selectedProv.name}</h3>
                <p className="text-xs text-slate-500 mt-0.5">{selectedProv.service}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-semibold">Riesgo: {selectedProv.risk}</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-xs font-semibold">ENS: {selectedProv.ensCategory}</span>
              </div>
            </div>

            {/* General Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="font-semibold text-slate-500 block mb-1">Responsable Interno del Contrato:</span>
                <span className="text-slate-800">{selectedProv.internalOwner}</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="font-semibold text-slate-500 block mb-1">Punto de Contacto de Seguridad (POC):</span>
                <span className="text-slate-800">{selectedProv.securityContact}</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="font-semibold text-slate-500 block mb-1">Tipo de Acceso Autorizado:</span>
                <span className="text-slate-800">{selectedProv.accessType}</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="font-semibold text-slate-500 block mb-1">Certificado de Destrucción (Cierre):</span>
                <span className="text-slate-800 font-semibold text-blue-600">{selectedProv.destructionCert}</span>
              </div>
            </div>

            {/* Checklist Anexo A.1 */}
            <div>
              <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider mb-3">Anexo A.1 – Evaluación Inicial de Controles de Seguridad</h4>
              <div className="space-y-2">
                {checklistLabels.map((label, idx) => {
                  const key = `c${idx + 1}`;
                  const isChecked = selectedProv.checklist?.[key] || false;
                  return (
                    <div key={key} className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="flex items-center gap-3">
                        <input 
                          type="checkbox" 
                          checked={isChecked} 
                          onChange={() => handleChecklistChange(key)}
                          className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 cursor-pointer"
                        />
                        <span className="text-xs text-slate-700 font-medium">{label}</span>
                      </div>
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${isChecked ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-200 text-slate-600'}`}>
                        {isChecked ? 'Verificado' : 'Pendiente'}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* New Provider Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4">
            <h3 className="text-lg font-bold text-slate-900">Registrar Nuevo Proveedor</h3>
            <form onSubmit={handleAddProvider} className="space-y-3 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Razón Social y NIF</label>
                <input type="text" required value={newProv.name} onChange={e => setNewProv({...newProv, name: e.target.value})} placeholder="Ej. TechSecure S.L. - B12345678" className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl" />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Servicio / Contrato / Pedido</label>
                <input type="text" required value={newProv.service} onChange={e => setNewProv({...newProv, service: e.target.value})} placeholder="Ej. Auditoría de sistemas (CT-2026-15)" className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Responsable Interno</label>
                  <input type="text" required value={newProv.internalOwner} onChange={e => setNewProv({...newProv, internalOwner: e.target.value})} placeholder="Nombre completo" className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl" />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Contacto Seguridad 24x7 (POC)</label>
                  <input type="text" required value={newProv.securityContact} onChange={e => setNewProv({...newProv, securityContact: e.target.value})} placeholder="Correo / Teléfono" className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Nivel de Riesgo</label>
                  <select value={newProv.risk} onChange={e => setNewProv({...newProv, risk: e.target.value})} className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl">
                    <option value="Bajo">Bajo</option>
                    <option value="Medio">Medio</option>
                    <option value="Alto">Alto</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Categoría ENS</label>
                  <select value={newProv.ensCategory} onChange={e => setNewProv({...newProv, ensCategory: e.target.value})} className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl">
                    <option value="BÁSICA">BÁSICA</option>
                    <option value="MEDIA">MEDIA</option>
                    <option value="ALTA">ALTA</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Estado</label>
                  <select value={newProv.status} onChange={e => setNewProv({...newProv, status: e.target.value})} className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl">
                    <option value="Activo">Activo</option>
                    <option value="Cerrado">Cerrado</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end gap-3 pt-3">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold rounded-xl">Cancelar</button>
                <button type="submit" className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl shadow">Guardar Proveedor</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

// ==========================================
// 4. VULNERABILIDADES & SLA VIEW
// ==========================================
function VulnerabilitiesView({ vulnerabilities, setVulnerabilities, notify }) {
  const [filterSeverity, setFilterSeverity] = useState('Todas');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newVuln, setNewVuln] = useState({
    id: `VUL-2026-00${vulnerabilities.length + 1}`,
    date: new Date().toISOString().split('T')[0],
    cve: '', asset: '', version: '', dept: 'Sistemas', severity: 'Media', activeExploit: 'No', exposure: 'Interna', owner: 'Carlos Mendoza', targetDate: '', status: 'Abierta', notes: ''
  });

  const handleAddVuln = (e) => {
    e.preventDefault();
    if (!newVuln.cve || !newVuln.asset) return alert('Complete CVE y Activo afectado.');
    setVulnerabilities([newVuln, ...vulnerabilities]);
    setIsModalOpen(false);
    setNewVuln({
      id: `VUL-2026-00${vulnerabilities.length + 2}`,
      date: new Date().toISOString().split('T')[0],
      cve: '', asset: '', version: '', dept: 'Sistemas', severity: 'Media', activeExploit: 'No', exposure: 'Interna', owner: 'Carlos Mendoza', targetDate: '', status: 'Abierta', notes: ''
    });
    notify('Vulnerabilidad registrada correctamente.');
  };

  const filteredVulns = vulnerabilities.filter(v => filterSeverity === 'Todas' || v.severity === filterSeverity);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Gestión de Vulnerabilidades y Plazos SLA</h2>
          <p className="text-xs text-slate-500 mt-0.5">SLA internos propuestos: Crítica (24h), Alta (7 días), Media (30 días), Baja (90 días).</p>
        </div>
        <div className="flex items-center gap-3">
          <select value={filterSeverity} onChange={e => setFilterSeverity(e.target.value)} className="p-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold">
            <option value="Todas">Todas las severidades</option>
            <option value="Crítica">Crítica</option>
            <option value="Alta">Alta</option>
            <option value="Media">Media</option>
            <option value="Baja">Baja</option>
          </select>
          <button onClick={() => setIsModalOpen(true)} className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl text-xs font-semibold shadow transition flex items-center gap-2">
            <Plus className="w-4 h-4" /> Registrar Vulnerabilidad
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-semibold">
                <th className="p-3">ID / CVE</th>
                <th className="p-3">Activo / Aplicación</th>
                <th className="p-3">Departamento</th>
                <th className="p-3">Severidad</th>
                <th className="p-3">Explotación</th>
                <th className="p-3">Fecha Objetivo</th>
                <th className="p-3">Estado</th>
                <th className="p-3">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredVulns.map(v => (
                <tr key={v.id} className="hover:bg-slate-50 transition">
                  <td className="p-3 font-semibold text-slate-900">{v.cve}<span className="block text-[10px] text-slate-400 font-normal">{v.id}</span></td>
                  <td className="p-3 text-slate-800 font-medium">{v.asset} <span className="text-slate-400">v{v.version}</span></td>
                  <td className="p-3 text-slate-600">{v.dept}</td>
                  <td className="p-3">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${v.severity === 'Crítica' ? 'bg-red-100 text-red-700' : v.severity === 'Alta' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'}`}>
                      {v.severity}
                    </span>
                  </td>
                  <td className="p-3 text-slate-600">{v.activeExploit}</td>
                  <td className="p-3 font-medium text-slate-700">{v.targetDate}</td>
                  <td className="p-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700">
                      {v.status}
                    </span>
                  </td>
                  <td className="p-3">
                    <button onClick={() => {
                      const nextStatus = v.status === 'Cerrada' ? 'Abierta' : 'Cerrada';
                      setVulnerabilities(vulnerabilities.map(item => item.id === v.id ? {...item, status: nextStatus} : item));
                      notify(`Estado actualizado a ${nextStatus}.`);
                    }} className="text-blue-600 font-semibold hover:underline">
                      Cambiar Estado
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* New Vulnerability Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4">
            <h3 className="text-lg font-bold text-slate-900">Registrar Nueva Vulnerabilidad</h3>
            <form onSubmit={handleAddVuln} className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">CVE / CWE</label>
                  <input type="text" required value={newVuln.cve} onChange={e => setNewVuln({...newVuln, cve: e.target.value})} placeholder="Ej. CVE-2026-9999" className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl" />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Fecha Objetivo SLA</label>
                  <input type="date" required value={newVuln.targetDate} onChange={e => setNewVuln({...newVuln, targetDate: e.target.value})} className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Activo / Aplicación</label>
                  <input type="text" required value={newVuln.asset} onChange={e => setNewVuln({...newVuln, asset: e.target.value})} placeholder="Ej. OpenSSL" className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl" />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Versión</label>
                  <input type="text" required value={newVuln.version} onChange={e => setNewVuln({...newVuln, version: e.target.value})} placeholder="Ej. 3.0.1" className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Severidad</label>
                  <select value={newVuln.severity} onChange={e => setNewVuln({...newVuln, severity: e.target.value})} className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl">
                    <option value="Crítica">Crítica</option>
                    <option value="Alta">Alta</option>
                    <option value="Media">Media</option>
                    <option value="Baja">Baja</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Explotación Activa</label>
                  <select value={newVuln.activeExploit} onChange={e => setNewVuln({...newVuln, activeExploit: e.target.value})} className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl">
                    <option value="Sí">Sí</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Departamento</label>
                  <input type="text" required value={newVuln.dept} onChange={e => setNewVuln({...newVuln, dept: e.target.value})} className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl" />
                </div>
              </div>
              <div className="flex justify-end gap-3 pt-3">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold rounded-xl">Cancelar</button>
                <button type="submit" className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl shadow">Guardar Vulnerabilidad</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

// ==========================================
// 5. INVENTARIO & APPS VIEW
// ==========================================
function TechnologyView({ techInventory, setTechInventory, requests, setRequests, notify }) {
  const [activeSubTab, setActiveSubTab] = useState('inventory');

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex justify-between items-center">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Inventario Tecnológico y Autorización de Software</h2>
          <p className="text-xs text-slate-500 mt-0.5">Control centralizado de activos TIC, versiones y solicitudes de instalación en portátiles.</p>
        </div>
        <div className="flex gap-2 bg-slate-100 p-1 rounded-xl">
          <button onClick={() => setActiveSubTab('inventory')} className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition ${activeSubTab === 'inventory' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600'}`}>Inventario Maestro</button>
          <button onClick={() => setActiveSubTab('requests')} className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition ${activeSubTab === 'requests' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600'}`}>Solicitudes Anexo H</button>
        </div>
      </div>

      {activeSubTab === 'inventory' ? (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-semibold">
                  <th className="p-3">ID</th>
                  <th className="p-3">Tecnología / Producto</th>
                  <th className="p-3">Fabricante</th>
                  <th className="p-3">Versión</th>
                  <th className="p-3">Entorno</th>
                  <th className="p-3">Criticidad</th>
                  <th className="p-3">Estado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {techInventory.map(t => (
                  <tr key={t.id} className="hover:bg-slate-50 transition">
                    <td className="p-3 font-semibold text-slate-900">{t.id}</td>
                    <td className="p-3 font-medium text-slate-800">{t.name}</td>
                    <td className="p-3 text-slate-600">{t.vendor}</td>
                    <td className="p-3 text-slate-600">{t.version}</td>
                    <td className="p-3 text-slate-600">{t.env}</td>
                    <td className="p-3"><span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-700">{t.criticality}</span></td>
                    <td className="p-3"><span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700">{t.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-semibold">
                  <th className="p-3">ID Solicitud</th>
                  <th className="p-3">Fecha</th>
                  <th className="p-3">Solicitante</th>
                  <th className="p-3">Aplicación Solicitada</th>
                  <th className="p-3">Aprobador</th>
                  <th className="p-3">Estado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {requests.map(r => (
                  <tr key={r.id} className="hover:bg-slate-50 transition">
                    <td className="p-3 font-semibold text-slate-900">{r.id}</td>
                    <td className="p-3 text-slate-600">{r.date}</td>
                    <td className="p-3 font-medium text-slate-800">{r.user}</td>
                    <td className="p-3 text-slate-700">{r.app}</td>
                    <td className="p-3 text-slate-600">{r.approver}</td>
                    <td className="p-3"><span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-700">{r.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

// ==========================================
// 6. GITLAB & OPENSHIFT RBAC VIEW
// ==========================================
function AccessesView({ notify }) {
  const gitlabUsers = [
    { user: 's.martin', type: 'Interno', group: 'corp-apps', project: 'portal-clientes-api', role: 'Maintainer', mfa: 'Sí', status: 'Activo' },
    { user: 'a.vega.ext', type: 'Externo (Proveedor 01)', group: 'corp-apps', project: 'portal-clientes-api', role: 'Developer', mfa: 'Sí', status: 'Activo' },
    { user: 'd.ruiz', type: 'Interno', group: 'corp-infra', project: 'openshift-gitops', role: 'Owner', mfa: 'Sí', status: 'Activo' }
  ];

  const openshiftRBAC = [
    { target: 'grp-dev-portal-clientes', cluster: 'ocp-prod-eu1', ns: 'portal-clientes-prod', role: 'pod-log-reader (custom)', mask: 'Sí (PII oculto)', status: 'Activo' },
    { target: 'a.vega.ext', cluster: 'ocp-prepro-eu1', ns: 'portal-clientes-prepro', role: 'pod-log-reader (custom)', mask: 'Sí (Sintético)', status: 'Activo' }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
        <h2 className="text-lg font-bold text-slate-800">GitLab: Roles y Permisos</h2>
        <p className="text-xs text-slate-500 mt-0.5">Control de acceso estricto a repositorios y ramas protegidas.</p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-semibold">
                <th className="p-3">Usuario</th>
                <th className="p-3">Tipo</th>
                <th className="p-3">Grupo / Proyecto</th>
                <th className="p-3">Rol Asignado</th>
                <th className="p-3">MFA</th>
                <th className="p-3">Estado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {gitlabUsers.map((g, idx) => (
                <tr key={idx} className="hover:bg-slate-50">
                  <td className="p-3 font-semibold text-slate-900">{g.user}</td>
                  <td className="p-3 text-slate-600">{g.type}</td>
                  <td className="p-3 text-slate-700">{g.group} / {g.project}</td>
                  <td className="p-3"><span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-700">{g.role}</span></td>
                  <td className="p-3 text-emerald-600 font-semibold">{g.mfa}</td>
                  <td className="p-3"><span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700">{g.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
        <h2 className="text-lg font-bold text-slate-800">OpenShift: RBAC y Acceso a Logs</h2>
        <p className="text-xs text-slate-500 mt-0.5">Acceso exclusivo de lectura por namespace asignado con enmascaramiento de secretos.</p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-semibold">
                <th className="p-3">Usuario / Grupo</th>
                <th className="p-3">Clúster</th>
                <th className="p-3">Namespace</th>
                <th className="p-3">Rol RBAC</th>
                <th className="p-3">Enmascaramiento Logs</th>
                <th className="p-3">Estado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {openshiftRBAC.map((o, idx) => (
                <tr key={idx} className="hover:bg-slate-50">
                  <td className="p-3 font-semibold text-slate-900">{o.target}</td>
                  <td className="p-3 text-slate-600">{o.cluster}</td>
                  <td className="p-3 text-slate-700">{o.ns}</td>
                  <td className="p-3"><span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-100 text-indigo-700">{o.role}</span></td>
                  <td className="p-3 text-slate-600">{o.mask}</td>
                  <td className="p-3"><span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700">{o.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 7. PLANTILLAS Y ANEXOS GENERATOR VIEW
// ==========================================
function AnnexesGeneratorView({ providers, notify }) {
  const [selectedAnnex, setSelectedAnnex] = useState('AnexoA');
  const [selectedProvId, setSelectedProvId] = useState(providers[0]?.id || '');
  const [customData, setCustomData] = useState({
    provName: providers[0]?.name || 'TechDev Solutions S.L.',
    nif: 'B-12345678',
    service: providers[0]?.service || 'Desarrollo software a medida',
    internalOwner: providers[0]?.internalOwner || 'Sofía Martín',
    poc: providers[0]?.securityContact || 'seguridad@techdev-ejemplo.es',
    date: new Date().toISOString().split('T')[0]
  });

  const handleProviderSelect = (e) => {
    const pId = e.target.value;
    setSelectedProvId(pId);
    const p = providers.find(item => item.id == pId);
    if (p) {
      setCustomData({
        ...customData,
        provName: p.name,
        service: p.service,
        internalOwner: p.internalOwner,
        poc: p.securityContact
      });
    }
  };

  const handlePrint = () => {
    window.print();
    notify('Generando vista de impresión / PDF del documento...');
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex flex-col md:flex-row justify-between items-center gap-4 no-print">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Generador y Visor de Plantillas / Anexos (A – H + Cierre)</h2>
          <p className="text-xs text-slate-500 mt-0.5">Seleccione el anexo oficial, vincule un proveedor registrado e imprima o exporte a PDF.</p>
        </div>
        <div className="flex items-center gap-3">
          <select value={selectedAnnex} onChange={e => setSelectedAnnex(e.target.value)} className="p-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold">
            <option value="AnexoA">Anexo A: Ficha de Alta y Evaluación</option>
            <option value="AnexoB">Anexo B: Solicitud de Acceso Físico/Lógico</option>
            <option value="AnexoC">Anexo C: Comunicación de Incidente</option>
            <option value="AnexoD">Anexo D: Declaración de Aceptación</option>
            <option value="AnexoE">Anexo E: Matriz de Evidencias</option>
            <option value="AnexoF">Anexo F: Lista de Comprobación</option>
            <option value="AnexoG">Anexo G: Cláusulas Mínimas Contrato</option>
            <option value="AnexoH">Anexo H: Solicitud Instalación Software</option>
            <option value="Cierre">Anexo Cierre: Certificado Destrucción</option>
          </select>
          <button onClick={handlePrint} className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl text-xs font-semibold shadow transition flex items-center gap-2">
            <Printer className="w-4 h-4" /> Imprimir / Guardar PDF
          </button>
        </div>
      </div>

      {/* Provider Quick Bind */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 flex items-center gap-4 no-print">
        <span className="text-xs font-semibold text-slate-700">Autorellenar con datos de proveedor:</span>
        <select value={selectedProvId} onChange={handleProviderSelect} className="p-2 bg-slate-50 border border-slate-200 rounded-xl text-xs flex-1">
          {providers.map(p => (
            <option key={p.id} value={p.id}>{p.name} ({p.service})</option>
          ))}
        </select>
      </div>

      {/* Printable Document Preview Container */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 max-w-4xl mx-auto space-y-6 print:shadow-none print:border-none">
        <div className="border-b border-slate-200 pb-4 flex justify-between items-start">
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">[NOMBRE DE LA ORGANIZACIÓN] – GUÍA ENS v0.2</span>
            <h2 className="text-xl font-bold text-slate-900 mt-1">
              {selectedAnnex === 'AnexoA' && 'ANEXO A – Ficha de Alta y Evaluación Inicial del Proveedor'}
              {selectedAnnex === 'AnexoB' && 'ANEXO B – Solicitud de Acceso Físico o Lógico'}
              {selectedAnnex === 'AnexoC' && 'ANEXO C – Formulario de Comunicación de Incidente de Seguridad'}
              {selectedAnnex === 'AnexoD' && 'ANEXO D – Declaración de Aceptación y Compromiso de Seguridad'}
              {selectedAnnex === 'AnexoE' && 'ANEXO E – Matriz de Control y Entrega de Evidencias de Seguridad'}
              {selectedAnnex === 'AnexoF' && 'ANEXO F – Lista de Comprobación Técnica por Tipo de Proveedor'}
              {selectedAnnex === 'AnexoG' && 'ANEXO G – Cláusulas Mínimas de Seguridad para Contrato o Pedido'}
              {selectedAnnex === 'AnexoH' && 'ANEXO H – Formulario de Solicitud de Instalación / Software'}
              {selectedAnnex === 'Cierre' && 'ANEXO CIERRE – Acta y Certificado de Devolución y Destrucción de Información'}
            </h2>
          </div>
          <div className="text-right text-xs text-slate-500">
            <p>Versión: 0.2 (16/11/2026)</p>
            <p>Fecha: {customData.date}</p>
          </div>
        </div>

        {/* Dynamic Preview Content */}
        <div className="space-y-4 text-xs text-slate-800">
          <div className="grid grid-cols-2 gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
            <div><strong className="text-slate-500 block">Proveedor / Razón Social:</strong> {customData.provName} ({customData.nif})</div>
            <div><strong className="text-slate-500 block">Servicio / Contrato:</strong> {customData.service}</div>
            <div><strong className="text-slate-500 block">Responsable Interno:</strong> {customData.internalOwner}</div>
            <div><strong className="text-slate-500 block">Contacto Seguridad (POC):</strong> {customData.poc}</div>
          </div>

          <div className="space-y-2 pt-2">
            <h4 className="font-bold text-slate-900 text-sm">Detalle Normativo y Requisitos Aplicables</h4>
            <p className="text-slate-600 leading-relaxed">
              Este documento forma parte de los registros oficiales de cumplimiento de la Guía de Seguridad para Proveedores de la Organización, conforme a los principios del Esquema Nacional de Seguridad (Real Decreto 311/2022) y el Reglamento General de Protección de Datos (RGPD UE 2016/679).
            </p>
          </div>

          <div className="border border-slate-200 rounded-xl overflow-hidden mt-4">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                  <th className="p-3">Control / Obligación Verificada</th>
                  <th className="p-3">Estado</th>
                  <th className="p-3">Observaciones / Evidencia</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-3 font-medium">1. Designación de POC de seguridad y contacto 24x7</td>
                  <td className="p-3"><span className="text-emerald-600 font-bold">Verificado</span></td>
                  <td className="p-3 text-slate-500">Canal verificado y activo</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">2. Personal formado y sujeto a confidencialidad (NDA)</td>
                  <td className="p-3"><span className="text-emerald-600 font-bold">Verificado</span></td>
                  <td className="p-3 text-slate-500">Compromisos firmados</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">3. Uso de cuentas nominales, mínimo privilegio y MFA</td>
                  <td className="p-3"><span className="text-emerald-600 font-bold">Verificado</span></td>
                  <td className="p-3 text-slate-500">MFA FIDO2 / App configurado</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Signature Block */}
          <div className="grid grid-cols-2 gap-8 pt-12 mt-12 border-t border-slate-200">
            <div>
              <p className="font-bold text-slate-900 mb-12">Por la Organización:</p>
              <p className="border-t border-slate-400 pt-1 text-slate-600">Firma, nombre y cargo</p>
            </div>
            <div>
              <p className="font-bold text-slate-900 mb-12">Por el Proveedor:</p>
              <p className="border-t border-slate-400 pt-1 text-slate-600">Firma, sello y fecha</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
