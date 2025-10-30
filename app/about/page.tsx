import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-0 text-gray-800 leading-relaxed">
      <h1 className="text-4xl font-bold mb-4">Hi, I'm Carl!</h1>

      <p className="mb-4">
        Erdaifu is my legal name, the extra u on the website is for extra cuteness.
        I like both names equally as much, so call me whatever you'd prefer.
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
                Before that, I was the Math Team President at Diamond Bar High School, and I grew up in Henan, China and Penang, Malaysia.
      </p>

      <p className="mb-4">
        In my free time, I am a tea enthusiast and hobbyist, mostly concerning Chinese tea and culture.
        More specifically, I focus on{" "}
        <a
          href="https://www.babelcarp.org/babelcarp/babelcarp.cgi?phrase=dancong&define=1"
          className="text-yellow-500 font-bold underline hover:text-yellow-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          dancong oolong
        </a>{" "}
        and dabble with{" "}
        <a
          href="https://www.babelcarp.org/babelcarp/babelcarp.cgi?phrase=shengpuercha"
          className="text-orange-600 font-bold underline hover:text-orange-700"
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
  )
}
