'use client'

import { useTranslate } from '@/hooks/useTranslate'
import Section from '@/components/ui/Section'
import { useState } from 'react'

// Icons
const MapPinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const UserIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
)

type LocationKey = 'head_office' | 'factory' | 'merter_branch' | 'branch';

export default function Contact() {
  const { t } = useTranslate()
  const [activeLocation, setActiveLocation] = useState<LocationKey>('head_office')

  // Map Queries for Google Maps Embed
  const locationMaps: Record<LocationKey, string> = {
    head_office: "Rumeli+Caddesi+No:94/A,+Osmanbey,+Istanbul",
    factory: "Feriköy+Mahallesi,+Bayır+Sokak+No:32,+Şişli,+Istanbul",
    merter_branch: "Mehmet+Nesih+Özmen+Mah.+Fatih+Cad.+Söğüt+Sok.+No:5,+Merter,+Istanbul",
    branch: "Gesr+Al+Suez,+Cairo,+Egypt" // Approximate for Suez branch based on name
  }

  const locations: { id: LocationKey; titleKey: string; addressKey: string; phoneKey: string }[] = [
    { id: 'head_office', titleKey: 'contact.locations.head_office.title', addressKey: 'contact.locations.head_office.address', phoneKey: 'contact.locations.head_office.phone' },
    { id: 'factory', titleKey: 'contact.locations.factory.title', addressKey: 'contact.locations.factory.address', phoneKey: 'contact.locations.factory.phone' },
    { id: 'merter_branch', titleKey: 'contact.locations.merter_branch.title', addressKey: 'contact.locations.merter_branch.address', phoneKey: 'contact.locations.merter_branch.phone' },
    { id: 'branch', titleKey: 'contact.locations.branch.title', addressKey: 'contact.locations.branch.address', phoneKey: 'contact.locations.branch.phone' },
  ]

  return (
    <Section id="contact" bg="muted">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
            {t('contact.title') || "İletişim Bilgileri"}
          </h2>
          <p className="text-lg text-slate-600">
            {t('contact.subtitle') || "Size en yakın noktamızdan hizmet alabilirsiniz."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left Column: Locations List */}
          <div className="lg:col-span-1 space-y-6">

            {/* Primary Contact Card (Static) */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 border-l-4 border-l-amber-600 mb-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-amber-50 rounded-lg text-amber-700">
                  <UserIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{t('contact.person') || "Ayşe Turan"}</h3>
                  <p className="text-sm text-slate-500 mb-2">Firma Yetkilisi</p>
                  <a href="tel:+905395945303" className="flex items-center text-slate-700 font-medium hover:text-amber-700 transition-colors">
                    <PhoneIcon className="w-4 h-4 mr-2" />
                    +90 (539) 594 53 03
                  </a>
                </div>
              </div>
            </div>

            {/* Interactive Locations Cards */}
            <div className="space-y-4">
              {locations.map((loc) => (
                <div
                  key={loc.id}
                  onClick={() => setActiveLocation(loc.id)}
                  className={`
                    p-6 rounded-xl cursor-pointer transition-all duration-300
                    ${activeLocation === loc.id
                      ? 'bg-slate-900 shadow-xl scale-[1.02] border-slate-900'
                      : 'bg-white shadow-sm border-slate-100 hover:shadow-md hover:border-slate-300'
                    }
                    border
                  `}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`
                      p-2 rounded-lg mt-1 transition-colors
                      ${activeLocation === loc.id ? 'bg-slate-800 text-amber-500' : 'bg-slate-50 text-slate-600'}
                    `}>
                      <MapPinIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className={`font-bold mb-1 transition-colors ${activeLocation === loc.id ? 'text-white' : 'text-slate-900'}`}>
                        {t(loc.titleKey)}
                      </h4>
                      <p className={`text-sm mb-2 leading-relaxed transition-colors ${activeLocation === loc.id ? 'text-slate-300' : 'text-slate-600'}`}>
                        {t(loc.addressKey)}
                      </p>
                      <span className={`text-sm font-medium transition-colors ${activeLocation === loc.id ? 'text-amber-500' : 'text-amber-700'}`}>
                        {t(loc.phoneKey)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Map */}
          <div className="lg:col-span-2 min-h-[500px] h-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200 relative bg-slate-100 sticky top-24">
            <iframe
              // Note: Standard iframe embed src for address search usually requires API key or uses maps.google.com/maps?q=...&output=embed
              // Using the robust embed format without API key for public addresses:
              // src={`https://maps.google.com/maps?q=${locationMaps[activeLocation]}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              key={activeLocation} // Force re-render on change
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '600px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-700 w-full h-full"
              // Actual working src for free embed
              src={`https://maps.google.com/maps?q=${locationMaps[activeLocation]}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
            ></iframe>

            {/* Map Overlay Info */}
            <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-lg max-w-sm border border-slate-100 animate-fade-in">
              <p className="text-xs text-amber-700 font-bold uppercase tracking-wider mb-2">
                {t(`contact.locations.${activeLocation}.title`)}
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t(`contact.locations.${activeLocation}.address`)}
              </p>
            </div>
          </div>

        </div>
      </div>
    </Section>
  )
}
