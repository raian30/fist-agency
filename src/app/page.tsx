import GridBackground from "@/components/custom/GridBackground";

export default function Home() {
  return (
      <div className={'min-h-screen overflow-hidden'}>
          <div className={'flex flex-col gap-14 h-screen justify-center px-24'}>
              <div className={'flex gap-10 items-center'}>
                  <div className={'bg-blue h-0.5 w-16'}/>
                  <p className={'text-xl font-medium'}>Total commitment</p>
              </div>
              <h1 className={'text-8xl leading-[1.4] font-medium '}>We Don’t Build Pretty Sites,<br/> We Build Winners.</h1>
          </div>
          <GridBackground/>
          <div></div>
      </div>
  );
}
