import { BlogPosts } from 'app/components/posts'
import { LatestBlogFeature } from 'app/components/posts'
import { Popup } from 'app/components/popup'
import { PopupCanvas } from 'app/components/popup-canvas'
import { TreasureChest } from 'app/components/treasure-chest'
import { Contacts } from 'app/components/contacts'
import Link from 'next/link'

export default function Page() {
  return (
    <PopupCanvas>
      <Popup
        title=" "
        initialPosition={{ top: 246, left: -22 }}
        initialZIndex={9}
      >
        <Contacts />
      </Popup>

      {/* <Popup
        variant="text"
        initialPosition={{ top: -225, left: 0 }}
        initialZIndex={10}
        className="bg-transparent shadow-none"
      >
        <Link href="/" className="cursor-pointer hover:opacity-80 transition-opacity">
          <h1 className="text-2xl font-semibold tracking-tighter">
            Erdaifu (Carl) Luo
          </h1>
        </Link>
      </Popup> */}

      <Popup
        title=" "
        initialPosition={{ top: 48, left: 620 }}
        width="20rem"
        zIndex={10}
      >
        <LatestBlogFeature />
      </Popup>

      <Popup
        title=" "
        initialPosition={{ top: -47, left: -18 }}
        width="20rem"
        zIndex={10}
      >
        <TreasureChest />
      </Popup>
    </PopupCanvas>
  )
}
