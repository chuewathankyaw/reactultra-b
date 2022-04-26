// import { GoogleApiWrapper, Map } from "google-maps-react";
import { Component } from "react";
import "./contact.css";

class Contactbody extends Component {
  render() {
    return (
      <>
        <section id="contact-detail" className="container">
          <div className="section-p1">
            <h2>YANGON</h2>
            <h3>San Yrik Nyein (6)st,Kamaryouk,yangon.</h3>
            <a className="lily" href="Email:ultra-b@gmail.com">
              ultra-b@gmail.com
            </a>
            <h5>09-345328887,09-982452532</h5>
          </div>

          <div className="section-p2">
            <h2>MANDALAY</h2>
            <h3>San Yrik Nyein (6)st,Kamaryouk,MANDALAY.</h3>
            <a className="lily-1" href="Email:ultra-b@gmail.com">
              ultra-b@gmail.com
            </a>
            <h5>09-345328887,09-982452532</h5>
          </div>
        </section>

        <section id="form-details" className="container">
          <form className="contectform">
            <h2>ASK US ANYTHING</h2>
            <p>
              At vero eos et accusanus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque
            </p>
            <input type="text" placeholder="E-mail*" />
            <textarea
              name=""
              id=""
              colse="30"
              rows="10"
              placeholder="Your Comment"
            ></textarea>
            <button>Submit</button>
          </form>

          {/* <div className="map">
            <Map
              google={this.props.google}
              zoom={14}
              // style={{ position: absoli width: "30%", height: "50%" }}
              initialCenter={{
                lat: 16.86607,
                lng: 96.195129,
              }}
            />
          </div> */}
          <div className="map">
            <iframe
              key="imageGoogle"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15275.631849412832!2d96.12209588501248!3d16.830921415535474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c194c83da2329f%3A0x6c847def2d82a317!2zNiDhgIXhgLbhgJvhgK3hgJXhgLrhgIThgLzhgK3hgJnhgLog4YGFIOGAnOGAmeGAuuGAuCwg4YCb4YCU4YC64YCA4YCv4YCU4YC6!5e0!3m2!1smy!2smm!4v1648795970311!5m2!1smy!2smm"
              width="600"
              height="450"
            ></iframe>
          </div>
        </section>
      </>
    );
  }
}
// export default GoogleApiWrapper({
//   apiKey: "",
// })(Contactbody);

export default Contactbody;
