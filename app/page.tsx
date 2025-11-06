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
        title=<img 
            src="/images/general/contact-text.png" 
            alt="Contacts"
            className="object-contain h-full"
            width="120"
          />
        initialPosition={{ top: '32.5vh', left: '-1.15vw' }}
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
        title=<img 
            // change this to "Newest blog post"
            src="/images/general/blog-text.png" 
            alt="Blog"
            className="object-contain h-full"
            width="70"
          />
        initialPosition={{ top: '4.4vh', left: '38.3vw' }}
        width="20rem"
        initialZIndex={10}
      >
        <LatestBlogFeature />
      </Popup>

      <Popup
        title=<img 
            // Change this to All my friends!
            src="/images/general/treasure-text.png" 
            alt="Contacts"
            className="object-contain h-full"
            width="130"
          />
        initialPosition={{ top: '-0.65vh', left: '-0.94vw' }}
        width="20rem"
        initialZIndex={10}
      >
        <TreasureChest />
      </Popup>
    </PopupCanvas>
  )
}
