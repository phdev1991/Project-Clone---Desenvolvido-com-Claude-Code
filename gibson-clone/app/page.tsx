"use client";

import { useState } from "react";

const promos = [
  { eyebrow: "GIBSON ACOUSTIC", title: "Your Guitar’s Voice, in Higher Definition", cta: "Shop Acoustic", tone: "hero-guitar" },
  { eyebrow: "GIBSON BEST SELLERS", title: "The Sound of a Legend", cta: "Shop Best Sellers", tone: "hero-red" },
  { eyebrow: "GIBSON GARAGE", title: "Gibson Garage Miami", cta: "Explore Gibson Garage", tone: "hero-garage" },
];
const products = [
  ["Les Paul Standard 50s", "The original. Reimagined.", "$2,499", "#cbb89a"],
  ["Les Paul Custom", "A timeless icon of tone.", "$4,999", "#151515"],
  ["SG Standard", "Power and precision.", "$1,799", "#b42b25"],
  ["J-45 Standard", "The workhorse acoustic.", "$2,699", "#d09c62"],
];

export default function Home() {
  const [slide, setSlide] = useState(0);
  return <main className="site">
    <div className="announcement"><span><b>Gibson</b>　|　 Epiphone　|　 Kramer　|　 Mesa/Boogie　|　 KRK</span><span>Free shipping on orders over $50　　United States / EN</span></div>
    <header className="header">
      <button className="mobile-menu">☰</button><a className="logo" href="#">GIBSON<span>™</span></a>
      <nav><a href="#shop">Shop</a><a href="#guitars">Guitars</a><a href="#gear">Gear</a><a href="#stories">Stories</a><a href="#garage">Gibson Garage</a><a href="#app">Gibson App</a></nav>
      <div className="tools"><button aria-label="Search">⌕</button><a href="#account">♙</a><button aria-label="Cart">Bag (0)</button></div>
    </header>
    <section className={`hero ${promos[slide].tone}`}>
      <div className="hero-copy"><p>{promos[slide].eyebrow}</p><h1>{promos[slide].title}</h1><a className="light-btn" href="#shop">{promos[slide].cta} <span>→</span></a></div>
      <div className="hero-art"><div className="guitar-shape"/><div className="hero-glow"/></div>
      <button className="pause">Ⅱ</button><div className="dots">{promos.map((p,i)=><button key={p.title} className={i===slide?"active":""} onClick={()=>setSlide(i)} aria-label={`Load slide ${i+1}`}/>)}</div>
    </section>
    <section className="feature-grid"><Promo title="New Gibson Band Single and DES Series" text="Discover the latest from Gibson" cta="Learn More" cls="feature-band"/><Promo title="Save 25% on Gibson Strings" text="Stock up and save" cta="Shop Now" cls="feature-strings"/><Promo title="Epiphone Joan Jett Olympic Special" text="Make some noise" cta="Shop Now" cls="feature-epiphone"/></section>
    <section className="shop" id="shop"><div className="section-head"><div><p className="kicker">THE GIBSON COLLECTION</p><h2>Find Your Sound</h2></div><a href="#guitars">Shop all guitars →</a></div><div className="product-grid">{products.map(([name,desc,price,color])=><article className="product" key={name}><div className="product-image" style={{background: `linear-gradient(135deg, ${color}, #f1eee9)`}}><div className="mini-guitar"/></div><p className="product-type">GIBSON GUITARS</p><h3>{name}</h3><p>{desc}</p><strong>{price}</strong></article>)}</div></section>
    <section className="editorial" id="stories"><div className="editorial-photo"><div className="silhouette"/></div><div className="editorial-copy"><p className="kicker">BACKSTAGE HEROES · EPISODE 2</p><h2>Meet the people who bring thousands of Gibson guitars to life.</h2><p>From the hands of master craftsmen to the stage, every Gibson has a story. Go behind the scenes with the people who make the sound of a legend.</p><a className="dark-btn" href="#stories">Watch the story →</a></div></section>
    <section className="split-promos"><Promo title="Tobias Sale: 20% Off" text="Limited time only" cta="Shop Now" cls="promo-tobias"/><Promo title="Gibson Exclusives" text="One-of-a-kind instruments" cta="Explore" cls="promo-exclusive"/></section>
    <section className="app-banner" id="app"><div><p className="kicker">THE GIBSON APP</p><h2>Learn Guitar Now</h2><p>Get three months of the Gibson App free with guitar and amp purchases on Gibson.com</p><a className="light-btn" href="#app">Learn more →</a></div><div className="phone">GIBSON<br/><small>Learn. Play. Repeat.</small></div></section>
    <footer><div className="footer-top"><div><a className="logo footer-logo" href="#">GIBSON<span>™</span></a><p>Play authentic. Play Gibson.</p></div><FooterCol title="Company" items={["About Us","Careers","Artists","Gibson TV"]}/><FooterCol title="Resources" items={["Gibson Gazette","Find a Dealer","Gibson App","Gibson Gives"]}/><FooterCol title="Support" items={["Contact Us","Shipping & Returns","Warranty","FAQ"]}/><div><h4>Stay in the loop</h4><p>Sign up for Gibson news and exclusive offers.</p><div className="email">Email address <span>→</span></div></div></div><div className="footer-bottom"><span>© 2026 Gibson Brands, Inc. All rights reserved.</span><span>Privacy　 Terms　 Accessibility</span></div></footer>
  </main>
}
function Promo({title,text,cta,cls}:{title:string;text:string;cta:string;cls:string}){return <a className={`promo ${cls}`} href="#shop"><div><p>{text}</p><h3>{title}</h3><span>{cta}　→</span></div></a>}
function FooterCol({title,items}:{title:string;items:string[]}){return <div><h4>{title}</h4>{items.map(i=><a href="#" key={i}>{i}</a>)}</div>}
