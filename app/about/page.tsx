import { BlogPosts } from 'app/components/posts'
import { Popup } from 'app/components/popup'

export default function Page() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-3/5">
        <section className="max-w-2xl mx-auto px-1 py-0 text-gray-800 leading-relaxed">
          <h1 className="font-semibold text-2xl mb-4 tracking-tighter">Hi, I'm Carl!</h1>
          <p className="mb-4">
            Erdaifu (with a single 'u') is my legal name.
            I like both names equally as much, so call me whatever you'd prefer. I grew up in China and Malaysia, before moving to Southern California for high school.

          </p>

          <p className="mb-4">
            I'm currently a Sophomore at UC Berkeley, studying Applied Math and Computer Science.
            Here, I'm involved with the {" "}
            <a
              href="https://www.ocf.berkeley.edu/"
              className="underline font-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Computing Facility
            </a>,
            where I'm currently the Head Instructor for the {" "}
            <a
              href="https://decal.ocf.berkeley.edu/"
              className="underline font-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linux SysAdmin DeCal.
            </a>{" "}
                    Last year I interned at Amazon, working on integrating APIs with agentic AI tools.           </p>

          <p className="mb-4">
            In my free time, I am a tea enthusiast and hobbyist, mostly concerning Chinese tea and culture.
            More specifically, I focus on{" "}
            <a
              href="https://www.babelcarp.org/babelcarp/babelcarp.cgi?phrase=dancong&define=1"
              // className="text-yellow-500 font-bold underline hover:text-yellow-600"
              // className="font-bold underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              dancong oolong
            </a>{" "}
            and {" "}
            <a
              href="https://www.babelcarp.org/babelcarp/babelcarp.cgi?phrase=shengpuercha"
              // className="text-orange-600 font-bold underline hover:text-orange-700"
              // className="font-bold underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              sheng pu'er
            </a>.
            I have a quaint little blog at{" "}
            <a
              href="https://erdaifuu.substack.com"
              className="font-bold underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              erdaifuu.substack.com
            </a>.
            I'd love to host you for tea if you're in the Berkeley area. Ask me about my pumidor!
          </p>
        </section>
      </div>
      <div className="w-full md:w-2/5 relative">
        <Popup
          title=" "
          initialPosition={{ top: -125, left: 15 }}
          width="15rem"
          initialZIndex={10}
        >
          <img 
            src="/images/general/tea-pourin.jpg" 
            alt="Brewing tea"
            className="w-full h-auto"
          />
        </Popup>

        <Popup
          title=" "
          initialPosition={{ top: 197, left: 133 }}
          width="15rem"
          initialZIndex={11}
        >
          <img 
            src="/images/general/waiterwaiter.jpg" 
            alt="Waiting for my yummers jambalaya!"
            className="w-full h-auto"
          />
        </Popup>
      </div>
    </div>
  )
}

