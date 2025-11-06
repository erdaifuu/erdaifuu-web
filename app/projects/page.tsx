import { Card } from 'app/components/card'

export default function Page() {
  return (
    <div className="grid grid-cols-3 gap-4 items-center">
      <Card 
        title="My Homelab" 
        description={[
          "Status",
          "Virtualized infrastructure using Proxmox, hoses multiple Debian VMs and containers that runs everything",
          "Hosts this website, movie streaming services, notes, reverse proxy, authentik, and more"
        ]} 
      />
      <Card 
        title="image-from-url"
        description={[
          "Source code",
          "Built a TrueType font parser to decode glyphs from .ttf files, then process and render them into a bitmap.",
        ]} 
      />
      <Card 
        title="This website" 
        description={[
          "Source code",
          "Built with Next.js and Tailwind",
          "You can drag the little polaroid components around!"
        ]} 
      />
    </div>
  )
}
 
