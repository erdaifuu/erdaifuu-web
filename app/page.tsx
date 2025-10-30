import { BlogPosts } from 'app/components/posts'
import { LatestBlogFeature } from 'app/components/posts'
import { Popup } from 'app/components/popup'
import { PopupCanvas } from 'app/components/popup-canvas'

export default function Page() {
  return (
    <PopupCanvas>
      <Popup
        title="About"
        initialPosition={{ top: 160, left: 32 }}
        width="24rem"
        initialZIndex={9}
      >
        <p className="text-sm p-4">
          I'm a Vim enthusiast and tab advocate...
        </p>
      </Popup>

      <Popup
        variant="text"
        initialPosition={{ top: 0, left: 0 }}
        initialZIndex={10}
        className="bg-transparent shadow-none"
      >
        <div className="bg-transparent p-0">
          <h1 className="text-2xl font-semibold tracking-tighter">
            Erdaifu (Carl) Luo
          </h1>
        </div>
      </Popup>


      <Popup
        initialPosition={{ top: 0, left: 0 }}
        className="bg-transparent shadow-none border-none"
        initialZIndex={30}
      >
        <h1 className="text-2xl font-semibold tracking-tighter">
          Erdaifu (Carl) Luo
        </h1>
      </Popup>

      <Popup
        title="Newest blog post :)"
        initialPosition={{ top: 48, right: 20 }}
        width="20rem"
        zIndex={10}
      >
        <LatestBlogFeature />
      </Popup>
    </PopupCanvas>
  )
}
