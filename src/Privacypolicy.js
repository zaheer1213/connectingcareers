import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Privacypolicy.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Section from "./Section";

const Privacypolicy = () => {
  return (
    <>
      <Navbar />
      <Container fluid className="">
        <Row>
          <div className="section-heading">
            <h2>Privacy Policy</h2>
          </div>
        </Row>
        <Container>
          <Row>
            <div className="section-text">
              <h5>Effective Date: 26-09-2024</h5>
              <p>
                At Connecting Careers, we are committed to protecting and
                respecting your privacy. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                visit our website, use our services, or interact with us in any
                way.
              </p>
              <h5 className="mt-5"> 1. Information We Collect </h5>
              <strong>
                We may collect the following types of information:
              </strong>
              <p>
                Personal Identification Information: Name, email address, phone
                number, postal address, job title, and other information you
                provide when signing up, applying for jobs, or using our
                services
              </p>
              <strong>Non-Personal Information:</strong>
              <p>
                Browser type, operating system, IP address, browsing behavior,
                and information about your interaction with our website.
              </p>
              <strong>Cookies and Tracking Technologies:</strong>
              <p>
                {" "}
                We use cookies, web beacons, and similar technologies to track
                your use of our website and services.
              </p>
              <h5 className="mt-5">2. How We Use Your Information</h5>
              <strong className="mb-3">
                We may use the information we collect for purposes such as:
              </strong>
              <p>
                {" "}
                . To provide, operate, and maintain our website and services.
              </p>
              <p>
                . To process job applications and communicate with you about job
                opportunities.
              </p>
              <p>
                . To send you relevant updates, promotions, or information
                related to your career or job search.
              </p>
              <p>. To improve our website and user experience.</p>
              <p>
                . To comply with legal obligations and enforce our policies.
              </p>

              <h5 className="mt-5">3. Sharing Your Information</h5>
              <strong>We may share your information with:</strong>
              <p>
                Service Providers: Third-party companies that help us provide
                and improve our services (e.g., web hosting, analytics, customer
                support).
              </p>
              <p>
                Employers and Recruiters: If you are applying for jobs or
                submitting your resume through our platform, we may share your
                information with prospective employers.
              </p>
              <p>
                Legal Authorities: We may disclose your information to law
                enforcement or other governmental authorities if required by law
                or to protect our rights.
              </p>
              <h5 className="mt-5">4. Data Security</h5>
              <p>
                We take reasonable precautions to protect your information.
                However, no data transmission over the internet
              </p>
              <h5>Definitions</h5>
              <p>For this Privacy Policy:</p>
              <ul>
                <li>
                  Account means a unique account created for You to access our
                  Service or parts of our Service
                </li>
                <li>
                  Affiliate means an entity that controls, is controlled by or
                  is under common control with a party, where "control" means
                  ownership of 50% or more of the shares, equity interest or
                  other securities entitled to vote for election of directors or
                  other managing authority.
                </li>
                <li>
                  Company (referred to as either "the Company", "We", "Us" or
                  "Our" in this Agreement) refers to Connecting Careers.
                </li>
                <li>
                  Cookies are small files that are placed on Your computer,
                  mobile device or any other device by a website, containing the
                  details of Your browsing history on that website among its
                  many uses.
                </li>
                <li>Country refers to: Pune, India</li>
                <li>
                  Device means any device that can access the Service such as a
                  computer, a cellphone or a digital tablet.
                </li>
                <li>
                  Personal Data is any information that relates to an identified
                  or identifiable individual. Service refers to the Website.
                </li>
                <li>Service refers to the Website.</li>
                <li>
                  Service Provider means any natural or legal person who
                  processes the data on behalf of the Company. It refers to
                  third-party companies or individuals employed by the Company
                  to facilitate the Service, to provide the Service on behalf of
                  the Company, to perform services related to the Service or to
                  assist the Company in analyzing how the Service is used.
                </li>
                <li>
                  Usage Data refers to data collected automatically, either
                  generated by the use of the Service or from the Service
                  infrastructure itself (for example, the duration of a page
                  visit). Website refers to Connecting Careers, accessible from
                  https://connectingcareers.in/
                </li>
                <li>
                  You means the individual accessing or using the Service, or
                  the company, or other legal entity on behalf of which such
                  individual is accessing or using the Service, as applicable.
                </li>
              </ul>
              <h5>5. Tracking Technologies and Cookies</h5>
              <p>
                We use Cookies and similar tracking technologies to track the
                activity on Our Service and store certain information. Tracking
                technologies used are beacons, tags, and scripts to collect and
                track information and to improve and analyze Our Service. The
                technologies We use may include
              </p>
              <strong>Cookies or Browser Cookies</strong>
              <p>
                A cookie is a small file placed on Your Device. You can instruct
                Your browser to refuse all Cookies or to indicate when a Cookie
                is being sent. However, if You do not accept Cookies, You may
                not be able to use some parts of our Service. Unless you have
                adjusted Your browser setting so that it will refuse Cookies,
                our Service may use Cookies.
              </p>
              <strong> Web Beacons</strong>
              <p>
                Certain sections of our Service and our emails may contain small
                electronic files known as web beacons (also referred to as clear
                gifs, pixel tags, and single-pixel gifs) that permit the
                Company, for example, to count users who have visited those
                pages or opened an email and for other related website
                statistics (for example, recording the popularity of a certain
                section and verifying system and server integrity).
              </p>
              <p>
                Cookies can be "Persistent" or "Session" Cookies. Persistent
                Cookies remain on Your personal computer or mobile device when
                You go offline, while Session Cookies are deleted as soon as You
                close Your web browser. Learn more about cookies on the Free
                Privacy Policy website article.
              </p>
              <p>
                We will let You know via email and/or a prominent notice on Our
                Service, prior to the change becoming effective and update the
                "Last updated" date at the top of this Privacy Policy. You are
                advised to review this Privacy Policy periodically for any
                changes. Changes to this Privacy Policy are effective when they
                are posted on this page. Contact Us If you have any questions
                about this Privacy Policy, You can contact us: · By email:
                hello@connectingdotsbs.com
              </p>
            </div>
          </Row>
        </Container>
      </Container>
      <Section />
      <Footer />
    </>
  );
};

export default Privacypolicy;
