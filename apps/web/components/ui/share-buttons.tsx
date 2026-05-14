'use client'

import { useState } from 'react'
import { Share2, Copy, Check, Facebook, MessageCircle } from 'lucide-react'

type Props = {
  title: string
  url?: string
  text?: string
}

export function ShareButtons({ title, url, text }: Props) {
  const [copied, setCopied] = useState(false)
  const shareUrl = url ?? (typeof window !== 'undefined' ? window.location.href : '')
  const shareText = text ?? title

  const nativeShare = () => {
    if (navigator.share) {
      navigator.share({ title, text: shareText, url: shareUrl }).catch(() => {})
    }
  }

  const copyLink = async () => {
    await navigator.clipboard.writeText(shareUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
  const waUrl = `https://wa.me/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-sm font-semibold text-[--color-fg-subtle] mr-1">Partager :</span>

      {typeof navigator !== 'undefined' && 'share' in navigator && (
        <button onClick={nativeShare} className="share-btn" aria-label="Partager">
          <Share2 size={14} aria-hidden="true" />
          Partager
        </button>
      )}

      <a
        href={fbUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="share-btn"
        aria-label="Partager sur Facebook"
      >
        <Facebook size={14} aria-hidden="true" />
        Facebook
      </a>

      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="share-btn"
        aria-label="Partager sur WhatsApp"
      >
        <MessageCircle size={14} aria-hidden="true" />
        WhatsApp
      </a>

      <button onClick={copyLink} className="share-btn" aria-label="Copier le lien">
        {copied ? (
          <><Check size={14} aria-hidden="true" /> Copié !</>
        ) : (
          <><Copy size={14} aria-hidden="true" /> Lien</>
        )}
      </button>
    </div>
  )
}
