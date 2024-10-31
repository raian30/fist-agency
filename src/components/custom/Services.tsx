export default function Services() {
    return (
        <>
            <section id={'services'} className={'px-5 md:px-10 lg:px-24 py-12 lg:py-24 flex flex-col gap-28'}>
                <div className={'flex gap-12 items-center'}>
                    <div className={'bg-blue h-0.5 w-16'}/>
                    <p className={'text-lg uppercase opacity-40 w-max'}>High-quality, effective, and reliable services</p>
                </div>
                <h1 className={'text-5xl'}>Our services</h1>
                <div className={'grid gap-x-10 gap-y-32 grid-cols-1 lg:grid-cols-3'}>
                    <div className={'flex flex-col gap-10'}>
                        <p className={'text-3xl'}>Strategy and Research</p>
                        <p className={'opacity-40 text-lg'}>Our approach ensures that every decision is backed by insights,
                            enabling you to connect with your audience in meaningful ways and dominate your market</p>
                    </div>
                    <div className={'flex flex-col gap-10'}>
                        <p className={'text-3xl'}>UI/UX design</p>
                        <p className={'opacity-40 text-lg'}>Delivering captivating, user-friendly designs that not only look
                            stunning but also prioritize the needs of your customers</p>
                    </div>
                    <div className={'flex flex-col gap-10'}>
                        <p className={'text-3xl'}>Web development</p>
                        <p className={'opacity-40 text-lg'}>Building your online presence with high-performance, secure
                            websites that are built to scale</p>
                    </div>
                    <div className={'flex flex-col gap-10'}>
                        <p className={'text-3xl'}>Search Engine Optimization (SEO)</p>
                        <p className={'opacity-40 text-lg'}>We don’t just optimize for search engines – we create lasting
                            results that improve your bottom line</p>
                    </div>
                    <div className={'flex flex-col gap-10'}>
                        <p className={'text-3xl'}>Conversion rate optimization (CRO)</p>
                        <p className={'opacity-40 text-lg'}>Transforming visitors into loyal customers with
                            conversion-focused strategies</p>
                    </div>
                    <div className={'flex flex-col gap-10'}>
                        <p className={'text-3xl'}>Consultations</p>
                        <p className={'opacity-40 text-lg'}>Get expert guidance on how to refine your digital presence</p>
                    </div>
                </div>
            </section>
        <div className={'w-full h-[80px] bg-background rounded-b-[50px] lg:rounded-b-[70px] xl:rounded-b-[80px] relative'}>
            <div className={'w-full h-[80px] bg-[#121212] absolute -z-10'}/>
        </div>
        </>
)
}