import { useState } from 'react'
import { Info, X, Zap, ArrowRight, Pencil, Headphones, Clock, MessageCircle, Server, Shield, BarChart3, Search, Gauge, Lock, HandHeart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

const features = [
  { label: 'Monthly edits', starter: '1 ora', growth: '2 ore', icon: Pencil },
  { label: 'Support hours', starter: '10:00 - 18:00', growth: '24/7', icon: Headphones },
  { label: 'Response time', starter: 'Max 24h', growth: 'Priority', icon: Clock },
  { label: 'WhatsApp & direct calls', starter: false, growth: true, icon: MessageCircle },
  { label: 'High-speed premium hosting', starter: true, growth: true, icon: Server },
  { label: '24/7 security monitoring', starter: true, growth: true, icon: Shield },
  { label: 'Monthly performance report', starter: true, growth: true, icon: BarChart3 },
  { label: 'SEO scan & health check', starter: true, growth: true, icon: Search },
  { label: 'Loading speed optimization', starter: true, growth: true, icon: Gauge },
  { label: 'SSL certificate included', starter: true, growth: true, icon: Lock },
]

function FeatureRow({ icon: Icon, label, value, included }) {
  const active = included !== false && value !== false
  return (
    <div className="flex items-center gap-3">
      <Icon className={cn("w-5 h-5 flex-shrink-0", active ? "text-blue-400" : "text-zinc-600")} />
      <span className={cn("text-base", active ? "text-zinc-200" : "text-zinc-500 line-through")}>
        {typeof value === 'string' ? value : label}
      </span>
    </div>
  )
}

export default function DemoBanner() {
  const [modalOpen, setModalOpen] = useState(false)
  const [welcomeOpen, setWelcomeOpen] = useState(true)

  return (
    <div className="dark">
      {welcomeOpen && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4" onClick={() => setWelcomeOpen(false)}>
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in" />
          <Card
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 w-full max-w-lg rounded-2xl border-blue-500/20 bg-zinc-950/90 backdrop-blur-2xl shadow-2xl animate-welcome-in overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-48 h-48 bg-blue-500/15 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-56 h-56 bg-blue-600/10 rounded-full blur-[90px] pointer-events-none" />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setWelcomeOpen(false)}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10"
            >
              <X className="w-4 h-4" />
            </Button>
            <CardContent className="relative z-10 p-6 sm:p-8">
              <HandHeart className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Hello!</h3>
              <p className="text-base text-zinc-300 leading-relaxed mb-3">
                We found your business on Google Maps and noticed you don't have a website yet. That's why we prepared this personalized proposal to show you what your online presence could look like.
              </p>
              <p className="text-base text-zinc-400 leading-relaxed mb-5">
                If you already have a website, we apologize for the inconvenience and wish you continued success!
              </p>
              <Button
                onClick={() => setWelcomeOpen(false)}
                className="w-full bg-blue-500 text-white hover:bg-blue-400"
              >
                Thanks, I want to see the site
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      <div className="fixed left-1/2 -translate-x-1/2 overflow-hidden border-r-2 border-blue-600 bottom-2 p-3 px-3 z-[99] bg-black/50 backdrop-blur-sm text-white/50 rounded-full flex items-center gap-2">
        <div className="absolute right-0 top-0 h-full w-40 rounded-l-full pointer-events-none" style={{ background: 'linear-gradient(to left, rgba(59,130,246,0.3), rgba(59,130,246,0))' }} />
        <Info className="w-4 h-4 flex-shrink-0" />
        <span className="whitespace-nowrap">This is a demo. To work with us, check our offer</span>
        <Button
          onClick={() => setModalOpen(true)}
          className="bg-blue-400 ml-2 rounded-full text-black font-semibold transition-all ease-in-out hover:px-6 whitespace-nowrap relative z-10 hover:bg-blue-300"
        >
          See offer
        </Button>
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          onClick={() => setModalOpen(false)}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-md animate-fade-in" />
          <Card
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border-white/10 bg-zinc-950/80 backdrop-blur-2xl shadow-2xl animate-modal-in"
          >
            <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setModalOpen(false)}
              className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </Button>
            <CardContent className="relative z-10 p-6 sm:p-10">
              <div className="mb-8">
                <Badge variant="outline" className="bg-blue-500/10 border-blue-500/20 text-blue-400 uppercase tracking-widest mb-4">
                  <Zap className="w-3.5 h-3.5 mr-2" />
                  Exclusive Offer
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
                  Premium Website at an
                  <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"> Unbeatable Price</span>
                </h2>
                <p className="text-lg text-zinc-400">
                  Everything you need for a professional online presence, at a fraction of the cost of a traditional agency.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-5 mb-8">
                <Card className="rounded-2xl border-white/10 bg-white/[0.02]">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Starter</div>
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="text-4xl font-black text-white">89&euro;</span>
                      <span className="text-zinc-500">/ month</span>
                    </div>
                    <div className="text-base text-zinc-500 mb-5">199&euro; setup</div>
                    <div className="space-y-3 mb-6">
                      {features.map((f) => (
                        <FeatureRow key={f.label} icon={f.icon} label={f.label} value={f.starter} included={f.starter} />
                      ))}
                    </div>
                    <Button variant="outline" asChild className="w-full rounded-full border-white/10 text-white hover:bg-white/5 mt-auto">
                      <a href="https://wa.me/40746294445?text=Hi!%20I'm%20interested%20in%20the%20Starter%20plan." target="_blank" rel="noopener noreferrer">
                        Choose Starter
                      </a>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="rounded-2xl border-blue-500/30 bg-blue-500/5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-blue-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-xl">
                    Best seller
                  </div>
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">Growth</div>
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="text-4xl font-black text-white">119&euro;</span>
                      <span className="text-zinc-500">/ month</span>
                    </div>
                    <div className="text-base text-zinc-500 mb-5">199&euro; setup</div>
                    <div className="space-y-3 mb-6">
                      {features.map((f) => (
                        <FeatureRow key={f.label} icon={f.icon} label={f.label} value={f.growth} included={f.growth} />
                      ))}
                    </div>
                    <Button asChild className="w-full rounded-full bg-blue-500 text-white hover:bg-blue-400 mt-auto">
                      <a href="https://wa.me/40746294445?text=Hi!%20I'm%20interested%20in%20the%20Growth%20plan." target="_blank" rel="noopener noreferrer">
                        Choose Growth
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
              <Card className="rounded-2xl border-white/10 bg-white/[0.02] mb-8">
                <CardContent className="p-5">
                  <table className="w-full text-base">
                    <thead>
                      <tr>
                        <th className="text-left font-medium pb-3 text-zinc-500"></th>
                        <th className="text-right font-medium pb-3 text-red-400/80">Agency</th>
                        <th className="text-right font-medium pb-3 text-blue-400">With Us</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-white/5">
                        <td className="text-zinc-400 py-3">Setup</td>
                        <td className="text-right py-3 text-zinc-400 line-through decoration-red-400/60">800&euro;</td>
                        <td className="text-right py-3 text-white font-semibold">199&euro;</td>
                      </tr>
                      <tr className="border-t border-white/5">
                        <td className="text-zinc-400 py-3">Maintenance / month</td>
                        <td className="text-right py-3 text-zinc-400 line-through decoration-red-400/60">150&euro;</td>
                        <td className="text-right py-3 text-white font-semibold">from 89&euro;</td>
                      </tr>
                    </tbody>
                  </table>
                  <Separator className="my-3 bg-white/5" />
                  <div className="text-base text-emerald-400 font-medium text-right">You save 1,300&euro;+ per year</div>
                </CardContent>
              </Card>
              <div className="text-center">
                <p className="text-zinc-500 text-base">
                  Questions? Call us directly at{' '}
                  <Button variant="link" asChild className="text-blue-400 hover:text-blue-300 p-0 h-auto font-medium">
                    <a href="tel:0746294445">0746 294 445</a>
                  </Button>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <style>{`
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes modal-in { from { opacity: 0; transform: scale(0.95) translateY(10px); } to { opacity: 1; transform: scale(1) translateY(0); } }
        @keyframes welcome-in { from { opacity: 0; transform: scale(0.9) translateY(20px); } to { opacity: 1; transform: scale(1) translateY(0); } }
        .animate-fade-in { animation: fade-in 0.2s ease-out; }
        .animate-modal-in { animation: modal-in 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
        .animate-welcome-in { animation: welcome-in 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
      `}</style>
    </div>
  )
}
