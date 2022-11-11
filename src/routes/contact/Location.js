
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
const position = [40.7384638, -73.9896068];

const Location = () => {
    return (
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
                        <a target="_blank" rel="noreferrer" href="https://www.google.com/maps/place/10+Spring+St,+Sydney+NSW+2000,+Australia/@-33.8648057,151.2048324,17z/data=!3m1!4b1!4m13!1m7!3m6!1s0x6b129838f39a743f:0x3017d681632a850!2sSydney+NSW,+Australia!3b1!8m2!3d-33.8688197!4d151.2092955!3m4!1s0x6b12ae41e8cf1321:0x72dc427b5db5abea!8m2!3d-33.8648102!4d151.2093171">View Map</a>
                    </section>
                    <section>
                        <h4>
                            New York
                        </h4>
                        <p>
                            123 Sample St, New York NY 10000 USA
                        </p>
                        <a target="_blank" rel="noreferrer" href="https://www.google.com/maps/place/Empire+State+Building/@40.7384638,-73.9896068,14.63z/data=!3m1!5s0x8b398fecd1aea119:0x76fa1e3ac5a94c70!4m13!1m7!3m6!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!2sNew+York,+NY,+USA!3b1!8m2!3d40.7127753!4d-74.0059728!3m4!1s0x89c259a9b3117469:0xd134e199a405a163!8m2!3d40.7484405!4d-73.9856644">View Map</a>
                    </section>
                    <section>
                        <h4>
                            London
                        </h4>
                        <p>
                            123 Sample St, London W1C 1DE, United Kingdom
                        </p>
                        <a target="_blank" rel="noreferrer" href="https://www.google.com/maps/place/The+Grouse+%26+Claret,+15+Little+Chester+St,+London+SW1X+7AP,+UK/@51.499108,-0.1535932,17z/data=!3m1!4b1!4m13!1m7!3m6!1s0x47d8a00baf21de75:0x52963a5addd52a99!2sLondon,+UK!3b1!8m2!3d51.5072178!4d-0.1275862!3m4!1s0x4876052381778f29:0xda564648cb628fa8!8m2!3d51.4991047!4d-0.1491085">View Map</a>
                    </section>
                </section>
                <section className="map">
                    <MapContainer
                        id="map"
                        center={position}
                        zoom={8}
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
    )
}

export default Location;