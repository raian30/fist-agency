import GridBackground from "@/components/custom/GridBackground";
import {ChevronRight} from "lucide-react";
import Link from "next/link";
import InfiniteScroll from "@/components/custom/InfiniteScroll";

export default function Home() {
  return (
      <div className={'min-h-screen'}>
          <section className={'flex flex-col gap-14 h-screen justify-center px-24'}>
              <div className={'flex gap-12 items-center'}>
                  <div className={'bg-blue h-0.5 w-16'}/>
                  <div className={'overflow-hidden relative animation-wrapper'}>
                      <p className={'text-xl text-transparent select-none leading-[1.6rem] pointer-events-none font-medium'}>Total commitment</p>
                      <p className={'text-xl font-medium absolute top-0 left-0 animation-item-1'}>Total commitment</p>
                      <p className={'text-xl font-medium absolute top-0 left-0 translate-y-full animation-item-2'}>100% dedication</p>
                      <p className={'text-xl font-medium absolute top-0 left-0 translate-y-full animation-item-3'}>No bull$hit</p>
                  </div>
              </div>
              <h1 className={'text-8xl leading-[1.4] font-medium '}>We Don&apos;t Build Pretty Sites,<br/> We Build Winners.
              </h1>
              <Link href={'/#contact'} className={'flex relative overflow-hidden group justify-center items-center gap-5 w-fit px-7 py-3.5 border border-white rounded-full'}>
                  <p className={'text-lg  group-hover:text-background transition-all'}>Let&apos;s begin</p>
                  <ChevronRight size={30} className={'p-1.5 rounded-full bg-white text-black'}/>
                  <div className={'absolute size-7 p-1.5 bg-transparent right-5 [z-index:-1] rounded-full group-hover:right-0 group-hover:bg-white group-hover:size-52 transition-all duration-300'}/>
              </Link>
          </section>
          <GridBackground/>
          <InfiniteScroll/>
          <section className={'flex justify-between px-24 relative min-h-screen'}>
              <div className={'sticky top-52 h-fit max-w-[50%] flex flex-col gap-12'}>
                  <div className={'flex gap-12 items-center'}>
                      <div className={'bg-blue h-0.5 w-16'}/>
                      <p className={'text-lg font-medium uppercase opacity-40'}>Web Development Process</p>
                  </div>
                  <h1 className={'text-5xl'}>From an idea to launch</h1>
              </div>
              <div className={'flex flex-col gap-28 max-w-[50%]'}>
                  <div className={'flex flex-col gap-20'}>
                      <div className={'flex gap-5 items-center'}>
                          <p className={'text-lg opacity-40'}>01</p>
                          <p className={'text-lg uppercase text-blue'}>Consultating</p>
                      </div>
                      <div className={'flex flex-col gap-10'}>
                          <h1 className={'text-6xl leading-normal'}>Clearing your mind with fresh ideas</h1>
                          <p className={'text-lg opacity-40'}>Personalized expert advice on web design, development and
                              strategies to optimize online presence, tailored to meet your clients' business goals.</p>
                          <div className={'h-0.5 w-full bg-white opacity-20'}/>
                      </div>
                  </div>
                  <div className={'flex flex-col gap-20'}>
                      <div className={'flex gap-5 items-center'}>
                          <p className={'text-lg opacity-40'}>02</p>
                          <p className={'text-lg uppercase text-blue'}>Web design</p>
                      </div>
                      <div className={'flex flex-col gap-10'}>
                          <h1 className={'text-6xl leading-normal'}>Bringing Your Vision to Life</h1>
                          <p className={'text-lg opacity-40'}>Our web design service turns your ideas into beautifully
                              crafted, responsive websites that perfectly reflect your brand while ensuring a seamless
                              and engaging user experience.</p>
                          <div className={'h-0.5 w-full bg-white opacity-20'}/>
                      </div>
                  </div>
                  <div className={'flex flex-col gap-20'}>
                      <div className={'flex gap-5 items-center'}>
                          <p className={'text-lg opacity-40'}>03</p>
                          <p className={'text-lg uppercase text-blue'}>Web development</p>
                      </div>
                      <div className={'flex flex-col gap-10'}>
                          <h1 className={'text-6xl leading-normal'}>Turning Concepts into Code</h1>
                          <p className={'text-lg opacity-40'}>Our web development service takes your beautifully
                              designed website and builds it into a high-performance, functional platform, ensuring
                              seamless interactions and robust functionality to elevate your brand online.</p>
                          <div className={'h-0.5 w-full bg-white opacity-20'}/>
                      </div>
                  </div>
                  <div className={'flex flex-col gap-20'}>
                      <div className={'flex gap-5 items-center'}>
                          <p className={'text-lg opacity-40'}>04</p>
                          <p className={'text-lg uppercase text-blue'}>SEO</p>
                      </div>
                      <div className={'flex flex-col gap-10'}>
                          <h1 className={'text-6xl leading-normal'}>Enhancing Your Visibility Online</h1>
                          <p className={'text-lg opacity-40'}>Our SEO services optimize your website to improve search
                              engine rankings, driving organic traffic and increasing visibility, ensuring your brand
                              reaches the right audience effectively.</p>
                          <div className={'h-0.5 w-full bg-white opacity-20'}/>
                      </div>
                  </div>
                  <div className={'flex flex-col gap-20'}>
                      <div className={'flex gap-5 items-center'}>
                          <p className={'text-lg opacity-40'}>05</p>
                          <p className={'text-lg uppercase text-blue'}>Deploying</p>
                      </div>
                      <div className={'flex flex-col gap-10'}>
                          <h1 className={'text-6xl leading-normal'}>Launching Your Vision to the World</h1>
                          <p className={'text-lg opacity-40'}>Our deployment service ensures a smooth transition from development to live status, meticulously managing the launch process to guarantee your website is fully operational, secure, and optimized for performance.</p>
                          <div className={'h-0.5 w-full bg-white opacity-20'}/>
                      </div>
                  </div>
              </div>
          </section>
      </div>
  );
}
