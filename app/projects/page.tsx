import { Card } from 'app/components/card'

export default function Page() {
  return (
    <div className="grid grid-cols-3 gap-4 items-center">
      <Card 
        title="My Homelab" 
        description={[
          <><a href="https://uptime.t.erdaifuu.com/status/homelab" className="font-bold underline">Status</a></>,
          <>Virtualized infrastructure using Proxmox, hoses multiple Debian VMs and containers that runs everything</>,
          <>Hosts this website, media services, notes, reverse proxy, authentik, and more</>
        ]} 
      />
      <Card 
        title="image-from-url"
        description={[
          <><a href="https://codeberg.org/func/image-from-url" className="font-bold underline">Source code</a></>,
          <>Built a TrueType font parser to decode glyphs from .ttf files, then process and render them into a bitmap.</>,
        ]} 
      />
      <Card 
        title="This website" 
        description={[
          <><a href="https://github.com/erdaifuu/erdaifuu.com" className="font-bold underline">Source code</a></>,
          <>Built with Next.js and Tailwind</>,
          <>Served from my homelab with docker and a reverse proxy</>,
          <>You can drag the little polaroid components around!</>
        ]} 
      />
    </div>
  )
}
 
