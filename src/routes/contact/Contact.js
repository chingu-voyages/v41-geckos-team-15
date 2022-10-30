import { Link } from "react-router-dom";
import './contact.css';
import ContactCover from '../../assets/images/contact/contact-cover.jpg'
import Address from '../../assets/images/contact/address.png';
import Phone from '../../assets/images/contact/phone.png';
import Email from '../../assets/images/contact/email.png';
import './leaflet.css'

//Leaflet
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { MapContainer, TileLayer } from "react-leaflet";
import { Marker } from "react-leaflet";
import { Popup } from "react-leaflet";
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;
const position = [37.0902, -93.7129];



const Contact = () => {
    return (
        <main className="contact">
            <article className="contact-us-form">
                <h2>Contact us</h2>
                <p>We are here to support you throughout your journey 24/7</p>
                <section className="contact-us-form-section">
                    <form>
                        <label htmlFor="name">Name
                            <input type="text" />
                        </label>
                        <label htmlFor="email">Email
                            <input type="text" />
                        </label>
                        <label htmlFor="message">Message
                            <textarea rows="5" type="text" /></label>
                        <section className="terms-checkbox">
                            <input type="checkbox" />
                            <span>I accept the <Link to="terms">Terms</Link></span>
                        </section>
                        <button>Submit</button>
                    </form>
                    <img src={ContactCover} alt="Contact us" />
                </section>
            </article>
            <article className="contact-info">
                <section>
                    <img src={Email} alt="" />
                    <h3>Email</h3>
                    <p>Chat with our sales team</p>
                    <p className="contact-info-detail">hello@expenseless.mail</p>
                </section>
                <section>
                    <img src={Phone} alt="" />
                    <h3>Phone</h3>
                    <p>Call us directly at</p>
                    <p className="contact-info-detail">+1 (555) 000-0000</p>
                </section>
                <section>
                    <img src={Address} alt="" />
                    <h3>Office</h3>
                    <p>We are waiting for you at</p>
                    <p className="contact-info-detail">123 Sample St, Sydney NSW 2000 AU</p>
                </section>
            </article>
            <article className="location">
                <h3>Our <span className="highlight-title">locations</span></h3>
                <p>Where we are</p>
                <section className="location-content">
                    <section className="locations-list">
                        <section>
                            <h4>
                                Sydney
                            </h4>
                            <p>
                                123 Sample St, Sydney NSW 2000 AU
                            </p>
                            <a href="/">View Map</a>
                        </section>
                        <section>
                            <h4>
                                New York
                            </h4>
                            <p>
                                123 Sample St, New York NY 10000 USA
                            </p>
                            <a href="/">View Map</a>
                        </section>
                        <section>
                            <h4>
                                London
                            </h4>
                            <p>
                                123 Sample St, London W1C 1DE, United Kingdom
                            </p>
                            <a href="/">View Map</a>
                        </section>
                    </section>
                    <section className="map">
                        <MapContainer
                            id="map"
                            center={position}
                            zoom={9}
                            scrollWheelZoom={false}
                        >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={position}>
                                <Popup>
                                    A pretty CSS3 popup. <br /> Easily customizable.
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </section>
                </section>
            </article>
        </main>
    )
}

export default Contact;