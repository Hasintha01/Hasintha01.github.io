/**
 * Homelab Section Component
 * Showcases self-hosted infrastructure, architecture, stats, and services
 * Multi-card layout with architecture details and running services
 */

import React from 'react';
import { Server, Cog, GitBranch, Globe, Database, Lock, HardDrive, Settings } from 'lucide-react';
import type { HomelabService } from '../types';

// Icon mapping for homelab services
const homelabIconMap: Record<string, React.ReactNode> = {
  'service-1': <Cog size={32} strokeWidth={3} />,           // Kubernetes
  'service-2': <Server size={32} strokeWidth={3} />,        // Prometheus/Grafana
  'service-3': <GitBranch size={32} strokeWidth={3} />,     // Jenkins/GitLab
  'service-4': <Globe size={32} strokeWidth={3} />,         // Nginx/Traefik
  'service-5': <Database size={32} strokeWidth={3} />,      // Database
  'service-6': <Lock size={32} strokeWidth={3} />,          // Security
  'service-7': <HardDrive size={32} strokeWidth={3} />,     // Storage
  'service-8': <Settings size={32} strokeWidth={3} />,      // Settings
};

interface HomelabProps {
  services: HomelabService[];
}

const Homelab: React.FC<HomelabProps> = ({ services }) => {
  return (
    <section id="homelab" className="py-20 px-6 max-w-7xl mx-auto">
      {/* Section title */}
      <h2 className="text-5xl font-black font-grotesk mb-12 rotate-1 flex items-center gap-4">
        <div className="border-4 border-black bg-yellow-300 p-3 shadow-[4px_4px_0px_0px_#000]">
          <Server size={36} strokeWidth={3} />
        </div>
        HOMELAB SHOWCASE
      </h2>

      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        {/* Architecture Card */}
        <div className="border-4 border-black bg-linear-to-br from-purple-100 to-purple-200 p-8 shadow-[8px_8px_0px_0px_#000] lg:col-span-2">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-16 h-16 bg-purple-400 border-4 border-black flex items-center justify-center shrink-0">
              <Server size={32} strokeWidth={3} />
            </div>
            <div>
              <h3 className="text-3xl font-black mb-2">ARCHITECTURE</h3>
              <p className="text-sm text-gray-700">
                Self-hosted infrastructure for learning and experimentation
              </p>
            </div>
          </div>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <span className="text-xl">•</span>
              <span>
                <strong>Hardware:</strong> Dell PowerEdge R720 / Raspberry Pi Cluster
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-xl">•</span>
              <span>
                <strong>Virtualization:</strong> Proxmox VE for VM/Container management
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-xl">•</span>
              <span>
                <strong>Networking:</strong> pfSense firewall, VLANs, VPN access
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-xl">•</span>
              <span>
                <strong>Storage:</strong> TrueNAS for centralized storage + automated backups
              </span>
            </li>
          </ul>
        </div>

        {/* Quick Stats Card */}
        <div className="border-4 border-black bg-yellow-100 p-8 shadow-[8px_8px_0px_0px_#000]">
          <h3 className="text-2xl font-black mb-6">STATS</h3>
          <div className="space-y-4">
            <div>
              <div className="text-4xl font-black">5+</div>
              <div className="text-sm font-semibold">VMs Running</div>
            </div>
            <div>
              <div className="text-4xl font-black">12+</div>
              <div className="text-sm font-semibold">Services Deployed</div>
            </div>
            <div>
              <div className="text-4xl font-black">99.9%</div>
              <div className="text-sm font-semibold">Uptime Target</div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Running */}
      <div className="border-4 border-black bg-white p-8 shadow-[8px_8px_0px_0px_#000]">
        <h3 className="text-3xl font-black mb-6 flex items-center gap-3">
          <div className="border-4 border-black bg-yellow-400 p-2">
            <Settings size={28} strokeWidth={3} />
          </div>
          SERVICES RUNNING
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div 
              key={service.id} 
              className={`border-3 border-black ${service.bgColor} p-4 
                         hover:shadow-[4px_4px_0px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 
                         transition-all cursor-pointer group`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="border-2 border-black bg-white p-2 group-hover:bg-black group-hover:text-white transition-colors">
                  {homelabIconMap[service.id] || service.icon}
                </div>
                <div className="font-black text-lg">{service.name}</div>
              </div>
              <p className="text-sm text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-8 text-center">
          <button className="border-4 border-black bg-purple-400 shadow-[6px_6px_0px_0px_#000] px-10 py-3 text-lg font-black hover:shadow-[8px_8px_0px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all">
            VIEW FULL HOMELAB DOCUMENTATION →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Homelab;
