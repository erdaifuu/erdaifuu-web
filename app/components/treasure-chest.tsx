{/* cuz my buddies are the true treasure or smn */}
{/* Lowkey stole this code from jaysa.net lol x3 */}
import Link from 'next/link'

export function FriendBadge({ name, image, url }) {
  return (
    <Link href={url} className="block hover:scale-105 transition-transform">
      <img
        src={image}
        alt={name}
        className="shadow-lg hover:shadow-xl transition-shadow"
        width={88}
        height={31}
      />
    </Link>
  )
}

export function TreasureChest() {
  return (
    <div
      className="relative p-6 bg-cover bg-center bg-no-repeat min-h-[200px] flex items-center justify-center"
      style={{ backgroundImage: "url('/images/general/treasure.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 flex flex-wrap gap-3 justify-center">
        <FriendBadge 
          name="me!!!"
          image="/88x31/carl.png"
          url="https://erdaifuu.com/"
        />
        <FriendBadge 
          name="ocf"
          image="/88x31/ocf.png"
          url="https://www.ocf.berkeley.edu/"
        />
        <FriendBadge 
          name="ocf decal"
          image="/88x31/ocfdecal.png"
          url="https://ocf.io/decal"
        />
        <FriendBadge 
          name="jaysa"
          image="/88x31/jaysa.png"
          url="https://jaysa.net/"
        />
        <FriendBadge 
          name="joe"
          image="/88x31/storce.png"
          url="https://joewang.me/"
        />
        <FriendBadge 
          name="leo"
          image="/88x31/leo.gif"
          url="https://6c656f.io"
        />
        <FriendBadge 
          name="sawansri"
          image="/88x31/sawansri.png"
          url="https://sawansri.com"
        />
        <FriendBadge 
          name="cli"
          image="/88x31/cli.png"
          url="https://chenghao.li"
        />
        <FriendBadge 
          name="oliverni"
          image="/88x31/oliver.png"
          url="https://oliver.ni/"
        />
      </div>
    </div>
  )
}

