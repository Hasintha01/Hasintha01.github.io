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
    <section id="homelab" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Section title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-grotesk mb-8 sm:mb-10 md:mb-12 rotate-1 flex items-center gap-2 sm:gap-3 md:gap-4">
        <div className="border-3 sm:border-4 border-black bg-yellow-300 p-2 sm:p-3 shadow-[3px_3px_0px_0px_#000] sm:shadow-[4px_4px_0px_0px_#000]">
          <Server size={24} strokeWidth={3} className="sm:w-8 sm:h-8 md:w-9 md:h-9" />
        </div>
        <span className="leading-tight">HOMELAB SHOWCASE</span>
      </h2>

      <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
        {/* Architecture Card */}
        <div className="border-3 sm:border-4 border-black bg-linear-to-br from-purple-100 to-purple-200 p-5 sm:p-6 md:p-8 shadow-[6px_6px_0px_0px_#000] sm:shadow-[8px_8px_0px_0px_#000] lg:col-span-2">
          <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-5 md:mb-6">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-purple-400 border-3 sm:border-4 border-black flex items-center justify-center shrink-0">
              <Server size={24} strokeWidth={3} className="sm:w-7 sm:h-7 md:w-8 md:h-8" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-1 sm:mb-2">ARCHITECTURE</h3>
              <p className="text-xs sm:text-sm text-gray-700">
                Self-hosted infrastructure for learning and experimentation
              </p>
            </div>
          </div>
          <ul className="space-y-2 sm:space-y-2.5 md:space-y-3 text-xs sm:text-sm">
            <li className="flex items-start gap-2 sm:gap-3">
              <span className="text-lg sm:text-xl shrink-0">•</span>
              <span>
                <strong>Hardware:</strong> Dell PowerEdge R720 / Raspberry Pi Cluster
              </span>
            </li>
            <li className="flex items-start gap-2 sm:gap-3">
              <span className="text-lg sm:text-xl shrink-0">•</span>
              <span>
                <strong>Virtualization:</strong> Proxmox VE for VM/Container management
              </span>
            </li>
            <li className="flex items-start gap-2 sm:gap-3">
              <span className="text-lg sm:text-xl shrink-0">•</span>
              <span>
                <strong>Networking:</strong> pfSense firewall, VLANs, VPN access
              </span>
            </li>
            <li className="flex items-start gap-2 sm:gap-3">
              <span className="text-lg sm:text-xl shrink-0">•</span>
              <span>
                <strong>Storage:</strong> TrueNAS for centralized storage + automated backups
              </span>
            </li>
          </ul>
        </div>

        {/* Quick Stats Card */}
        <div className="border-3 sm:border-4 border-black bg-yellow-100 p-5 sm:p-6 md:p-8 shadow-[6px_6px_0px_0px_#000] sm:shadow-[8px_8px_0px_0px_#000]">
          <h3 className="text-xl sm:text-2xl font-black mb-4 sm:mb-5 md:mb-6">STATS</h3>
          <div className="space-y-3 sm:space-y-4">
            <div>
              <div className="text-3xl sm:text-4xl font-black">5+</div>
              <div className="text-xs sm:text-sm font-semibold">VMs Running</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black">12+</div>
              <div className="text-xs sm:text-sm font-semibold">Services Deployed</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black">99.9%</div>
              <div className="text-xs sm:text-sm font-semibold">Uptime Target</div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Running */}
      <div className="border-3 sm:border-4 border-black bg-white p-5 sm:p-6 md:p-8 shadow-[6px_6px_0px_0px_#000] sm:shadow-[8px_8px_0px_0px_#000]">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-4 sm:mb-5 md:mb-6 flex items-center gap-2 sm:gap-3">
          <div className="border-3 sm:border-4 border-black bg-yellow-400 p-1.5 sm:p-2">
            <Settings size={20} strokeWidth={3} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </div>
          <span className="leading-tight">SERVICES RUNNING</span>
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {services.map((service) => {
            const iconElement = homelabIconMap[service.id] || service.icon;
            return (
              <div 
                key={service.id} 
                className={`border-2 sm:border-3 border-black ${service.bgColor} p-3 sm:p-4 
                           hover:shadow-[3px_3px_0px_0px_#000] sm:hover:shadow-[4px_4px_0px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 
                           transition-all cursor-pointer group active:shadow-none active:translate-x-0 active:translate-y-0`}
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                  <div className="border-2 border-black bg-white p-1.5 sm:p-2 group-hover:bg-black group-hover:text-white transition-colors">
                    {React.isValidElement(iconElement)
                      ? React.cloneElement(iconElement, {
                          size: 24,
                          className: 'sm:w-7 sm:h-7 md:w-8 md:h-8'
                        } as any)
                      : iconElement}
                  </div>
                  <div className="font-black text-sm sm:text-base md:text-lg">{service.name}</div>
                </div>
                <p className="text-xs sm:text-sm text-gray-700">{service.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="mt-6 sm:mt-7 md:mt-8 text-center">
          <button className="border-3 sm:border-4 border-black bg-purple-400 shadow-[4px_4px_0px_0px_#000] sm:shadow-[6px_6px_0px_0px_#000] px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 text-sm sm:text-base md:text-lg font-black hover:shadow-[6px_6px_0px_0px_#000] sm:hover:shadow-[8px_8px_0px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all active:shadow-none active:translate-x-0 active:translate-y-0">
            <span className="hidden sm:inline">VIEW FULL HOMELAB DOCUMENTATION →</span>
            <span className="sm:hidden">VIEW DOCUMENTATION →</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Homelab;
