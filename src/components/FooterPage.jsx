import React from "react";

const FooterPage = () => {
  return (
    <footer className="border-t border-gray-800 text-neutral-200 py-16 px-4 mt-30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-8">
        <div className="flex items-start justify-center md:justify-start">
            <img
            src="https://logowik.com/content/uploads/images/linear-app1721071870.logowik.com.webp"
            alt="linear logo"
            height={20}
            width={40}
          />
        </div>

        <div>
          <h3 className="font-semibold mb-3">Features</h3>
          <ul className="space-y-2 text-neutral-400">
            <li>
              <a href="#">Plan</a>
            </li>
            <li>
              <a href="#">Build</a>
            </li>
            <li>
              <a href="#">Insights</a>
            </li>
            <li>
              <a href="#">Customer Requests</a>
            </li>
            <li>
              <a href="#">Linear Asks</a>
            </li>
            <li>
              <a href="#">Security</a>
            </li>
            <li>
              <a href="#">Mobile</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Product</h3>
          <ul className="space-y-2 text-neutral-400">
            <li>
              <a href="#" className="text-white font-semibold">
                Pricing
              </a>
            </li>
            <li>
              <a href="#">Method</a>
            </li>
            <li>
              <a href="#">Integrations</a>
            </li>
            <li>
              <a href="#">Changelog</a>
            </li>
            <li>
              <a href="#">Documentation</a>
            </li>
            <li>
              <a href="#">Download</a>
            </li>
            <li>
              <a href="#">Switch</a>
            </li>
          </ul>
        </div>
 
         <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-neutral-400">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Customers</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">README</a>
            </li>
            <li>
              <a href="#">Quality</a>
            </li>
            <li>
              <a href="#">Brand</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-neutral-400">
            <li>
              <a href="#">Developers</a>
            </li>
            <li>
              <a href="#">Status</a>
            </li>
            <li>
              <a href="#">Startups</a>
            </li>
            <li>
              <a href="#">Report vulnerability</a>
            </li>
            <li>
              <a href="#">DPA</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Connect</h3>
          <ul className="space-y-2 text-neutral-400">
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
            <li>
              <a href="#">X (Twitter)</a>
            </li>
            <li>
              <a href="#">GitHub</a>
            </li>
            <li>
              <a href="#">YouTube</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
