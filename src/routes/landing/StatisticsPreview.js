import StatsPreview from '../../assets/images/landing/stats-preview.jpg'
const StatisticsPreview = () => {
    return (
        <article className="statisctics-preview">
            <section className="statisctics-preview-content">
                <p className='tagline'>Stats</p>
                <h2>Millions of satisfied users</h2>
                <p>Dozens of actual stories about Expenseless’
                    role in finance that changed people’s lives. Whatever reasons you got, we are here to back you up and support you on the way</p>
                <img src={StatsPreview} alt="Statistics" />
            </section>
            <section className="timeline">
                <div className="timeline-outer">
                    <section className="card">
                        <h3 className="title">2022</h3>
                        <p>The birth date of Expenseless</p>

                    </section>
                    <section className="card">
                        <h3 className="title">6500 000+</h3>
                        <p>Daily users all over the world</p>

                    </section>
                    <section className="card">
                        <h3 className="title">24/7 support</h3>
                        <p>Free support any time</p>
                    </section>
                </div>
            </section>
        </article>
    )
}

export default StatisticsPreview;