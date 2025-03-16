import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const Contact = () => {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <div className="row">
          {/* Contact Form */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <h2 className="fw-bold mb-4">Contact Us</h2>
                <form>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Your Phone"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Information and Map */}
          <div className="col-lg-6">
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <h2 className="fw-bold mb-4">Our Location</h2>
                <div className="mb-4">
                  <iframe
                    title="Google Maps"
                    src="https://maps.google.com/maps?q=Boulder%2C%20Colorado&amp;t=m&amp;z=11&amp;output=embed&amp;iwloc=near"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="mb-4">
                  <h5 className="fw-bold">Address</h5>
                  <p className="text-muted">
                    123 Main Street, Boulder, CO 80301, USA
                  </p>
                </div>
                <div className="mb-4">
                  <h5 className="fw-bold">Email</h5>
                  <p className="text-muted">support@brandcycle.com</p>
                </div>
                <div className="mb-4">
                  <h5 className="fw-bold">Phone</h5>
                  <p className="text-muted">+1 (123) 456-7890</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;