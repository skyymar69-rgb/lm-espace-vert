'use client'

import { Phone, Facebook, Instagram, Wrench } from 'lucide-react'

const items = [
  {
    label: 'Téléphone',
    href: 'tel:+33672587353',
    isPhone: true,
    icon: <Phone size={18} aria-hidden="true" />,
    color: '#0B3D2C',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/33672587353',
    isPhone: false,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    ),
    color: '#0B3D2C',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/people/LM-Paysage-et-jardin/61584572046303/',
    isPhone: false,
    icon: <Facebook size={18} aria-hidden="true" />,
    color: '#0B3D2C',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/lm_espacevert',
    isPhone: false,
    icon: <Instagram size={18} aria-hidden="true" />,
    color: '#0B3D2C',
  },
  {
    label: 'AlloVoisins',
    href: 'https://www.allovoisins.com/p/lmespacevert-1',
    isPhone: false,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <text x="2" y="16" fontSize="11" fontWeight="bold" fontFamily="sans-serif">AV</text>
      </svg>
    ),
    color: '#0B3D2C',
  },
  {
    label: 'Travaux.com',
    href: 'https://www.travaux.com/professionnel/lm-espace-vert',
    isPhone: false,
    icon: <Wrench size={18} aria-hidden="true" />,
    color: '#0B3D2C',
  },
]

export function FloatingSocialBar() {
  return (
    <>
      <style>{`
        .fsb-item {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          overflow: hidden;
          height: 44px;
          border-radius: 22px 0 0 22px;
          background-color: #0B3D2C;
          color: #ffffff;
          text-decoration: none;
          cursor: pointer;
          transition: background-color 0.22s ease, width 0.28s cubic-bezier(0.34, 1.2, 0.64, 1);
          width: 44px;
          box-shadow: 0 2px 12px rgba(11,61,44,0.28);
          border: none;
          outline: none;
          padding: 0;
        }
        .fsb-item:hover,
        .fsb-item:focus-visible {
          background-color: #80BC00;
          width: 148px;
        }
        .fsb-item:focus-visible {
          outline: 2px solid #80BC00;
          outline-offset: 2px;
        }
        .fsb-label {
          white-space: nowrap;
          font-size: 13px;
          font-weight: 600;
          opacity: 0;
          max-width: 0;
          overflow: hidden;
          transition: opacity 0.18s ease 0.05s, max-width 0.28s cubic-bezier(0.34, 1.2, 0.64, 1);
          padding-left: 0;
          font-family: var(--font-montserrat, sans-serif);
        }
        .fsb-item:hover .fsb-label,
        .fsb-item:focus-visible .fsb-label {
          opacity: 1;
          max-width: 100px;
          padding-left: 14px;
        }
        .fsb-icon {
          flex-shrink: 0;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        @media (max-width: 639px) {
          .fsb-item {
            height: 38px;
            width: 38px;
            border-radius: 19px 0 0 19px;
          }
          .fsb-icon {
            width: 38px;
            height: 38px;
          }
          .fsb-item:hover,
          .fsb-item:focus-visible {
            width: 38px;
          }
          .fsb-label {
            display: none;
          }
        }
      `}</style>
      <nav
        aria-label="Réseaux sociaux et contact"
        style={{
          position: 'fixed',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 40,
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
          alignItems: 'flex-end',
          /* Offset to avoid collision with WhatsApp button at bottom-right */
          marginTop: '-80px',
        }}
      >
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="fsb-item"
            aria-label={item.label}
            {...(!item.isPhone && {
              target: '_blank',
              rel: 'noopener noreferrer',
            })}
          >
            <span className="fsb-label">{item.label}</span>
            <span className="fsb-icon">{item.icon}</span>
          </a>
        ))}
      </nav>
    </>
  )
}
