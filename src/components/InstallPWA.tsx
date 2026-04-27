"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, X, Share } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const DISMISSED_KEY = "vikkmore-pwa-dismissed";

export function InstallPWA() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstall, setShowInstall] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Don't show if already dismissed or already installed
    if (localStorage.getItem(DISMISSED_KEY)) return;
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    if (isStandalone) return;

    const ios = /iphone|ipad|ipod/i.test(navigator.userAgent) && !(window as any).MSStream;
    const isSafari = /safari/i.test(navigator.userAgent) && !/chrome/i.test(navigator.userAgent);

    if (ios && isSafari) {
      setIsIOS(true);
      setShowInstall(true);
      return;
    }

    // Android / Chrome / Edge
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowInstall(true);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleDismiss = () => {
    localStorage.setItem(DISMISSED_KEY, "1");
    setShowInstall(false);
  };

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setDeferredPrompt(null);
      setShowInstall(false);
    }
  };

  if (!showInstall) return null;

  return (
    <div className="fixed bottom-20 left-4 right-4 md:left-auto md:right-4 md:bottom-6 md:w-96 bg-gradient-to-br from-background to-background/90 border border-primary/20 rounded-xl shadow-2xl p-5 z-50 backdrop-blur-xl">
      <button
        onClick={handleDismiss}
        className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors p-1 rounded-full hover:bg-white/10"
      >
        <X className="h-5 w-5" />
      </button>

      <div className="flex items-start gap-4">
        <div className="p-3 rounded-full bg-primary/10 shrink-0">
          {isIOS ? <Share className="h-6 w-6 text-primary" /> : <Download className="h-6 w-6 text-primary" />}
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-1">Install Vikkmore</h3>
          {isIOS ? (
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Tap the <strong>Share</strong> button <Share className="inline w-3.5 h-3.5 mx-0.5" /> in Safari, then tap <strong>"Add to Home Screen"</strong>
            </p>
          ) : (
            <>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Install this app to your home screen for quick access and an app-like experience
              </p>
              <div className="flex gap-2">
                <Button
                  onClick={handleInstall}
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Install Now
                </Button>
                <Button onClick={handleDismiss} variant="outline" className="border-primary/30">
                  Later
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
