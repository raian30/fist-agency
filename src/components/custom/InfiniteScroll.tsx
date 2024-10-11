export default function InfiniteScroll() {
    return (
        <section className="px-24 py-12">
            <div className="overflow-hidden">
                <div style={{animation: 'infinite-scroll 25s linear infinite'}}
                    className={'overflow-hidden opacity-25 flex justify-center items-center gap-32 text-[10rem] uppercase w-max'}>
                    <div className="flex gap-32 items-center justify-center w-max uppercase">
                        <p>Strategy and Research</p>
                        <p>UI/UX design</p>
                        <p>Web development</p>
                        <p>SEO</p>
                        <p>CRO</p>
                        <p>Consultations</p>
                    </div>
                    <div className="flex gap-32 items-center justify-center w-max uppercase">
                        <p>Strategy and Research</p>
                        <p>UI/UX design</p>
                        <p>Web development</p>
                        <p>SEO</p>
                        <p>CRO</p>
                        <p>Consultations</p>
                    </div>
                </div>
            </div>
        </section>
    )
}