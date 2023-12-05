import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowForward } from "react-icons/md";
import { vanguard } from "@/app/fonts";

const WhitePaperContainer = () => {
  return (
    <section
      aria-labelledby="white-paper-section"
      className="relative z-10 grid w-full grid-cols-1 py-20 xl:grid-cols-2"
    >
      <div className="4xl:px-[20%] 4xl:pt-56 relative mb-20 px-[8%] pt-28 xl:mb-0">
        <Image
          className="-z-10 min-h-[100vh] object-cover brightness-50 filter"
          src="/images/whitepaper-bg.png"
          fill
          alt="dystopi city"
        />
        <h2
          className={`${vanguard.className} 4xl:text-[12rem] mb-56 text-7xl lg:mb-96 lg:text-9xl`}
          id="white-paper-section"
        >
          WHITEPAPER
        </h2>
        <p className="4xl:max-w-2xl 4xl:text-3xl mb-8 max-w-md text-sm md:text-base">
          The vision of Dystopi&apos;s creators is to create a new level of
          innovation in the gaming industry through the integration of
          blockchain technology and NFTs. The mission is to offer players the
          opportunity to play, earn and collect unique digital assets, while
          engaging in a battle against alien invaders.
        </p>
        <Link
          target="_blank"
          className="4xl:text-3xl font-semibold"
          href="https://dystopi.gitbook.io/dystopi-whitepaper-1/"
          prefetch={false}
        >
          / CHECK WHITEPAPER /
        </Link>
      </div>

      <div className="flex min-h-[100vh] w-full items-center bg-dystopi-sand px-8 pt-28 text-dystopi-black md:px-20">
        <article className="mx-auto flex flex-col items-start justify-start">
          <div className="4xl:min-w-[40vw] mb-4 flex w-full flex-wrap items-end justify-start gap-4 border-b-2 pb-4">
            <h3
              className={`${vanguard.className} 4xl:text-8xl text-3xl font-semibold text-dystopi-black md:text-5xl`}
            >
              WHAT IS DYSTOPI
            </h3>
            <p className="4xl:text-3xl rounded-full border px-4 py-0.5 text-sm md:text-base">
              #plot
            </p>
            <Link
              target="_blank"
              href="https://dystopi.gitbook.io/dystopi-whitepaper-1/what-is-dystopi"
              className="4xl:transform 4xl:scale-[240%] ml-auto mr-0"
              prefetch={false}
            >
              <MdOutlineArrowForward
                size={24}
                className="rotate-45 transform"
              />
            </Link>
          </div>
          <div className="4xl:min-w-[40vw] mb-4 flex w-full flex-wrap items-end justify-start gap-4 border-b-2 pb-4">
            <h3
              className={`${vanguard.className} 4xl:text-8xl text-3xl font-semibold text-dystopi-black md:text-5xl`}
            >
              GAME PILLARS
            </h3>
            <p className="4xl:text-3xl rounded-full border px-4 py-0.5 text-sm md:text-base">
              #blockchain
            </p>
            <p className="4xl:text-3xl rounded-full border px-4 py-0.5 text-sm md:text-base">
              #nft
            </p>
            <p className="4xl:text-3xl rounded-full border px-4 py-0.5 text-sm md:text-base">
              #game_mechanics
            </p>
            <Link
              target="_blank"
              href="https://dystopi.gitbook.io/dystopi-whitepaper-1/game-pillars"
              className="4xl:transform 4xl:scale-[240%] ml-auto mr-0"
              prefetch={false}
            >
              <MdOutlineArrowForward
                size={24}
                className="rotate-45 transform"
              />
            </Link>
          </div>
          <div className="4xl:min-w-[40vw] mb-4 flex w-full flex-wrap items-end justify-start gap-4 border-b-2 pb-4">
            <h3
              className={`${vanguard.className} 4xl:text-8xl text-3xl font-semibold text-dystopi-black md:text-5xl`}
            >
              TOKENOMICS
            </h3>
            <p className="4xl:text-3xl rounded-full border px-4 py-0.5 text-sm md:text-base">
              #dyseum
            </p>
            <Link
              target="_blank"
              href="https://dystopi.gitbook.io/dystopi-whitepaper-1/tokenomics"
              className="4xl:transform 4xl:scale-[240%] ml-auto mr-0"
              prefetch={false}
            >
              <MdOutlineArrowForward
                size={24}
                className="rotate-45 transform"
              />
            </Link>
          </div>
          <div className="4xl:min-w-[40vw] mb-4 flex w-full flex-wrap items-end justify-start gap-4 border-b-2 pb-4">
            <h3
              className={`${vanguard.className} 4xl:text-8xl max-w-fit text-3xl font-semibold text-dystopi-black md:text-5xl`}
            >
              MARKET RESEARCH
            </h3>
            <p className="4xl:text-3xl rounded-full border px-4 py-0.5 text-sm md:text-base">
              #esport
            </p>
            <p className="4xl:text-3xl rounded-full border px-4 py-0.5 text-sm md:text-base">
              #blockchain_games
            </p>
            <p className="4xl:text-3xl rounded-full border px-4 py-0.5 text-sm md:text-base">
              #target
            </p>
            <Link
              target="_blank"
              href="https://dystopi.gitbook.io/dystopi-whitepaper-1/market-research"
              className="4xl:transform 4xl:scale-[240%] ml-auto mr-0"
              prefetch={false}
            >
              <MdOutlineArrowForward
                size={24}
                className="rotate-45 transform"
              />
            </Link>
          </div>
          <div className="4xl:min-w-[40vw] mb-4 flex w-full flex-wrap items-end justify-start gap-4 border-b-2 pb-4">
            <h3
              className={`${vanguard.className} 4xl:text-8xl text-3xl font-semibold text-dystopi-black md:text-5xl`}
            >
              ROADMAP
            </h3>
            <p className="4xl:text-3xl rounded-full border px-4 py-0.5 text-sm md:text-base">
              #phases
            </p>
            <Link
              target="_blank"
              href="https://dystopi.gitbook.io/dystopi-whitepaper-1/roadmap"
              className="4xl:transform 4xl:scale-[240%] ml-auto mr-0"
              prefetch={false}
            >
              <MdOutlineArrowForward
                size={24}
                className="rotate-45 transform"
              />
            </Link>
          </div>
          <div className="4xl:min-w-[40vw] mb-4 flex w-full flex-wrap items-end justify-start gap-4 border-b-2 pb-4">
            <h3
              className={`${vanguard.className} 4xl:text-8xl text-3xl font-semibold text-dystopi-black md:text-5xl`}
            >
              TEAM
            </h3>
            <p className="4xl:text-3xl rounded-full border px-4 py-0.5 text-sm md:text-base">
              #members
            </p>
            <p className="4xl:text-3xl rounded-full border px-4 py-0.5 text-sm md:text-base">
              #partners
            </p>
            <Link
              target="_blank"
              href="https://dystopi.gitbook.io/dystopi-whitepaper-1/team"
              className="4xl:transform 4xl:scale-[240%] ml-auto mr-0"
              prefetch={false}
            >
              <MdOutlineArrowForward
                size={24}
                className="rotate-45 transform"
              />
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
};

export default WhitePaperContainer;
