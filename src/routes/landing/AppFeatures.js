import GooglePlay from '../../assets/images/app-icons/google-play-icon.jpg';
import AppStore from '../../assets/images/app-icons/app-store-icon.jpg';


const AppFeatures = () => {
    return (
        <article className='app-features'>
            <h2>Install Expenseless on all devices for free</h2>
            <section className="app-icons">
                <a href="https://play.google.com/store/games?hl=en&gl=US" target="_blank" rel="noreferrer">
                    <img src={GooglePlay} alt="Google Play icon" />
                </a>
                <a href="https://www.apple.com/" target="_blank" rel="noreferrer">
                    <img src={AppStore} alt="App Store icon" />
                </a>
            </section>
        </article>
    )
}

export default AppFeatures;