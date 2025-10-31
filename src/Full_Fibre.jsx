import React, { useEffect, useRef, useState } from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaStarHalfStroke } from "react-icons/fa6";
import { MdVerifiedUser } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { RiTimerFlashFill } from "react-icons/ri";
import { FaUpload } from "react-icons/fa6";
const OFFERS = [
  {
    name: "Ultrafibre 2500",
    speed: "2500Mbps",
    price: "£55.99",
    originalPrice: null,
    promo: "Premium Speed • Professional Grade",
    downloadSpeed: "2500Mbps",
    uploadSpeed: "2500Mbps",
    minSpeed: "2000Mbps",
    features: [
      "Symmetrical speeds",
      "10+ devices simultaneously",
      "8K streaming capable",
      "Perfect for professionals",
      "24-month contract",
    ],
    link: "https://www.poptelecom.co.uk/broadband/ultrafibre-2500-with-pop-telecom/FullFibre",
    badge: "FASTEST",
    featured: true,
    popular: false,
  },
  {
    name: "Ultrafibre 1000",
    speed: "1000Mbps",
    price: "£38.99",
    originalPrice: null,
    promo: "Most Popular Choice",
    downloadSpeed: "1000Mbps",
    uploadSpeed: "1000Mbps",
    minSpeed: "800Mbps",
    features: [
      "Gigabit speeds",
      "5-8 devices",
      "Multiple 4K streams",
      "Online gaming",
      "18-month contract",
    ],
    link: "https://www.poptelecom.co.uk/broadband/ultrafibre-1000-with-pop-telecom/FullFibre",
    badge: "MOST POPULAR",
    featured: true,
    popular: true,
  },
  {
    name: "Ultrafibre 150",
    speed: "150Mbps",
    price: "£26.99",
    originalPrice: null,
    promo: null,
    downloadSpeed: "150Mbps",
    uploadSpeed: "150Mbps",
    minSpeed: "100Mbps",
    features: [
      "Superfast speeds",
      "3-5 devices",
      "4K streaming",
      "Video calls",
      "12-month contract",
    ],
    link: "https://www.poptelecom.co.uk/broadband/ultrafibre-150-with-pop-telecom/FullFibre",
    badge: null,
    featured: false,
    popular: false,
  },
  {
    name: "Ultrafibre 115",
    speed: "115Mbps",
    price: "£24.99",
    originalPrice: null,
    promo: null,
    downloadSpeed: "115Mbps",
    uploadSpeed: "115Mbps",
    minSpeed: "80Mbps",
    features: [
      "Fast speeds",
      "2-4 devices",
      "HD streaming",
      "Work from home",
      "12-month contract",
    ],
    link: "https://www.poptelecom.co.uk/broadband/ultrafibre-115-with-pop-telecom/FullFibre",
    badge: null,
    featured: false,
    popular: false,
  },
  {
    name: "Ultrafibre 80",
    speed: "80Mbps",
    price: "£22.99",
    originalPrice: null,
    promo: "Best Value for Basics",
    downloadSpeed: "80Mbps",
    uploadSpeed: "80Mbps",
    minSpeed: "60Mbps",
    features: [
      "Essential speeds",
      "1-3 devices",
      "HD streaming",
      "Email & browsing",
      "12-month contract",
    ],
    link: "https://www.poptelecom.co.uk/broadband/ultrafibre-80-with-pop-telecom/FullFibre",
    badge: "BEST VALUE",
    featured: false,
    popular: false,
  },
  {
    name: "Ultrafibre 500",
    speed: "500Mbps",
    price: "£32.99",
    originalPrice: null,
    promo: null,
    downloadSpeed: "500Mbps",
    uploadSpeed: "500Mbps",
    minSpeed: "400Mbps",
    features: [
      "Ultrafast speeds",
      "4-6 devices",
      "Multiple streams",
      "Smart home ready",
      "18-month contract",
    ],
    link: "https://www.poptelecom.co.uk/broadband/ultrafibre-500-with-pop-telecom/FullFibre",
    badge: null,
    featured: false,
    popular: false,
  },
];

function computeFillPercent(mbpsString) {
  const numeric = parseInt((mbpsString || "").replace(/\D/g, ""), 10) || 0;
  const percent = Math.min(100, Math.round(numeric / 25));
  return percent;
}

const Header = () => (
  <header>
    <div className="header-container">
      <div className="logo">POP Telecom</div>
      <nav className="nav-links">
        <a href="#/">Broadband</a>
        <a href="#/">Mobile</a>
        <a href="#/">Business</a>
        <a href="#/">Support</a>
      </nav>
      <a href="#/" className="header-cta">
        Get Started
      </a>
    </div>
  </header>
);

const Footer = () => (
  <footer>
    <div className="container">
      <div className="footer-grid">
        <div className="footer-column">
          <h3>POP Telecom</h3>
          <p>
            Bringing lightning-fast broadband to homes across the UK with
            transparent pricing and award-winning service.
          </p>
        </div>

        <div className="footer-column">
          <h3>Products</h3>
          <ul className="footer-links">
            <li>
              <a href="#/">Broadband</a>
            </li>
            <li>
              <a href="#/">Mobile</a>
            </li>
            <li>
              <a href="#/">TV Packages</a>
            </li>
            <li>
              <a href="#/">Bundles</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Support</h3>
          <ul className="footer-links">
            <li>
              <a href="#/">Help Centre</a>
            </li>
            <li>
              <a href="#/">Service Status</a>
            </li>
            <li>
              <a href="#/">Contact Us</a>
            </li>
            <li>
              <a href="#/">Community</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Company</h3>
          <ul className="footer-links">
            <li>
              <a href="#/">About Us</a>
            </li>
            <li>
              <a href="#/">Careers</a>
            </li>
            <li>
              <a href="#/">Press</a>
            </li>
            <li>
              <a href="#/">Sustainability</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 POP Telecom Ltd. All rights reserved.</p>
        <p>
          <a href="#/">Privacy Policy</a> | <a href="#/">Terms of Service</a> |
          <a href="#/"> Cookie Policy</a>
        </p>
      </div>
    </div>
  </footer>
);

const OfferCard = ({ offer, index, inView }) => {
  const downloadPercent = computeFillPercent(offer.downloadSpeed);
  const uploadPercent = computeFillPercent(offer.uploadSpeed);

  return (
    <div
      className={`offer-card ${offer.popular ? "popular" : ""} ${
        inView ? "in-view" : ""
      }`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {offer.badge ? <div className="offer-badge">{offer.badge}</div> : null}
      <div className="offer-name">{offer.name}</div>
      <div className="offer-speed">Average {offer.speed}</div>
      <div className="offer-price">
        {offer.price} <small>/month</small>
      </div>

      <div className="speed-bars">
        <div className="speed-item">
          <div className="speed-label">
            <span>Download:</span>
            <span className="speed-value">{offer.downloadSpeed}</span>
          </div>
          <div className="speed-bar">
            <div
              className="speed-fill"
              style={{ "--fill-width": `${downloadPercent}%` }}
              aria-hidden
            />
          </div>
        </div>
        <div className="speed-item">
          <div className="speed-label">
            <span>Upload:</span>
            <span className="speed-value">{offer.uploadSpeed}</span>
          </div>
          <div className="speed-bar">
            <div
              className="speed-fill"
              style={{ "--fill-width": `${uploadPercent}%` }}
              aria-hidden
            />
          </div>
        </div>
      </div>

      <ul className="offer-features">
        {offer.features.map((f, i) => (
          <li key={i}>
            <i className="features_icon">
              <MdVerifiedUser />
            </i>
            {f}
          </li>
        ))}
      </ul>

      <a className="offer-cta" href={offer.link}>
        Buy Now
      </a>
    </div>
  );
};

const HeroOfferCard = ({ offer, featured = false }) => {
  return (
    <div className={`hero-offer-card ${featured ? "featured" : ""}`}>
      {featured && offer.badge ? (
        <div className="featured-badge">{offer.badge}</div>
      ) : null}
      <div className="hero-offer-header">
        <div className="hero-offer-name">{offer.name}</div>
        <div className="hero-offer-speed">Average {offer.speed}</div>
        <div className="hero-offer-price">
          {offer.price} <small>/month</small>
        </div>
        {offer.promo ? (
          <div className="hero-offer-promo">
            <i className="features_icon">
              <FaStarHalfStroke />
            </i>{" "}
            {offer.promo}
          </div>
        ) : null}
      </div>

      <ul className="hero-offer-highlights">
        <li>
          <i className="features_icon">
            <AiFillThunderbolt />
          </i>{" "}
          Download: {offer.downloadSpeed}
        </li>
        <li>
          <i className="features_icon">
            <FaUpload />
          </i>{" "}
          Upload: {offer.uploadSpeed}
        </li>
        <li>
          <i className="features_icon">
            <RiTimerFlashFill />
          </i>{" "}
          Min guaranteed: {offer.minSpeed}
        </li>
        <li>
          <i className="features_icon">
            <FaWifi />
          </i>{" "}
          {offer.features[1]}
        </li>
      </ul>

      <a className="hero-cta" href={offer.link}>
        View Full Details <i className="fas fa-arrow-right" />
      </a>
    </div>
  );
};

export default function Full_Fibre() {
  const heroPairs = [
    [OFFERS[0], OFFERS[1]],
    [OFFERS[1], OFFERS[5]],
    [OFFERS[2], OFFERS[4]],
  ];

  const [currentPairIndex, setCurrentPairIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentPairIndex((p) => (p + 1) % heroPairs.length);
    }, 6000);
    return () => clearInterval(id);
  }, [heroPairs.length]);

  const cardRefs = useRef([]);
  const [inViewStates, setInViewStates] = useState(OFFERS.map(() => false));

  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, OFFERS.length);

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          setInViewStates((prev) => {
            const next = [...prev];
            entries.forEach((entry) => {
              const index = Number(entry.target.dataset.index);
              if (!Number.isNaN(index)) {
                if (entry.isIntersecting) next[index] = true;
              }
            });
            return next;
          });
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.15,
        }
      );

      cardRefs.current.forEach((el) => {
        if (el) observer.observe(el);
      });

      // cleanup
      return () => observer.disconnect();
    } else {
      setInViewStates(OFFERS.map(() => true));
    }
  }, []);

  const handleIndicatorClick = (index) => setCurrentPairIndex(index);

  return (
    <>
      <Header />

      <section className="hero-section">
        <div className="container">
          <div className="hero-intro">
            <div className="hero-badge">
              Freedom Fibre • Powered by POP Telecom
            </div>
            {/* <h1>Lightning-Fast Full Fibre Broadband</h1> */}
            <h1>All Freedom Fibre Plans</h1>
            {/* <p>
              Experience the UK's fastest and most reliable broadband
              technology. Choose from speeds up to 2500Mbps with no price hikes
              mid-contract.
            </p> */}

            <p>
              {" "}
              Compare all our ultrafast broadband packages and find the perfect
              fit for your home
            </p>
          </div>
          <div className="offers-grid" id="offersGrid">
            {OFFERS.map((offer, idx) => (
              <div
                key={offer.name}
                ref={(el) => (cardRefs.current[idx] = el)}
                data-index={idx}
              >
                <OfferCard
                  offer={offer}
                  index={idx}
                  inView={inViewStates[idx]}
                />
              </div>
            ))}
          </div>
          {/* 
          <div className="hero-offers-container">
            <div className="hero-offers" aria-live="polite">
              {heroPairs[currentPairIndex].map((offer, i) => (
                <HeroOfferCard
                  key={offer.name + i}
                  offer={offer}
                  featured={offer.featured && i === 0}
                />
              ))}
            </div>

            <div
              className="rotation-indicators"
              role="tablist"
              aria-label="hero rotation indicators"
            >
              {heroPairs.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`rotation-dot ${
                    i === currentPairIndex ? "active" : ""
                  }`}
                  aria-pressed={i === currentPairIndex}
                  onClick={() => handleIndicatorClick(i)}
                />
              ))}
            </div>
          </div> */}
        </div>
      </section>

      {/* <section className="all-offers-section">
        <div className="container">
          <div className="section-header">
            <h2>All Freedom Fibre Plans</h2>
            <p>
              Compare all our ultrafast broadband packages and find the perfect
              fit for your home
            </p>
          </div>

          <div className="offers-grid" id="offersGrid">
            {OFFERS.map((offer, idx) => (
              <div
                key={offer.name}
                ref={(el) => (cardRefs.current[idx] = el)}
                data-index={idx}
              >
                <OfferCard
                  offer={offer}
                  index={idx}
                  inView={inViewStates[idx]}
                />
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <Footer />
    </>
  );
}
