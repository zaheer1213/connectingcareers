import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className={`section1`}>
        <div className="container1">
          <div className="content3">
            <div className="footer-text">
              © 2024 Connecting Dots. All rights reserved.
            </div>
            <div className="social-icons">
              <a href="https://www.linkedin.com/feed/update/urn:li:activity:7229447412774260736/?actorCompanyId=104370310">
                <i
                  class="fa-brands fa-linkedin"
                  style={{ fontSize: "30px", color: "white" }}
                ></i>
              </a>
              <a href="https://www.facebook.com/permalink.php?story_fbid=pfbid025QdaEAPKZo5wWgDJbogKGeX8G79pT9M2w33p8xvWr5EDjBQzQB9mhe3c7SJ6owoHl&id=61564225852198">
                <i
                  class="fa-brands fa-facebook"
                  style={{ fontSize: "30px", color: "white" }}
                ></i>
              </a>
              <a href="https://www.instagram.com/p/C-pgbMLIFF9/?fbclid=IwY2xjawEpoUBleHRuA2FlbQIxMAABHT0XpbvQZgYldNPSnX_565dcZjBZnOTZtcwZj4mXt7jBq0_POVkC9Gd1-g_aem_LmqAG-93pG0EF7BlyEFwZw&img_index=4">
                <i
                  class="fa-brands fa-instagram"
                  style={{ fontSize: "30px", color: "white" }}
                ></i>
              </a>
              <a href="https://www.youtube.com/@ConnectingCareers">
                <i
                  class="fa-brands fa-youtube"
                  style={{ fontSize: "30px", color: "white" }}
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
