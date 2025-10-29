import React from 'react';
import CategoryPanel from '../components/CategoryPanel';
import CircleCarousel from '../components/CircleCarousel';
import HeroBanner from '../components/HeroBanner';
import SectionGrid from '../components/SectionGrid';
import products from '../data/products';
import ProductGrid from '../components/ProductGrid';

const sections = ['best-sellers','mobiles','electronics','fashion','home','appliances','toys-baby','grocery'];

export default function Home(){
  return (
    <div>
      <HeroBanner />

      <div style={{background:'#fff', padding:'12px 0'}}>
        <div className="container">
          <SectionGrid />
        </div>
      </div>

      <div style={{background:'#fff', padding:'12px 0', marginTop:12}}>
        <div className="container">
          <div style={{display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:12}}>
            <CategoryPanel title="Up to 80% off | Amazon brands & more" />
            <CategoryPanel title="Up to 70% Off | Women-led festive picks" />
            <CategoryPanel title="Up to 70% off | Top rated finds from stores near you" />
            <CategoryPanel title="Up to 75% off | Collections from Small businesses" />
          </div>
        </div>
      </div>

      <div style={{marginTop:18}} className="container">
        <h3>Best Deals on flagship smartphones</h3>
        <CircleCarousel items={products} />
      </div>

      <div style={{marginTop:32}} className="container">
        {sections.map(sec=> (
          <section key={sec} style={{marginBottom:28}}>
            <h3 style={{textTransform:'capitalize'}}>{sec.replace(/-/g,' ')}</h3>
            <ProductGrid items={products.filter(p=> p.category === sec).slice(0,8)} />
          </section>
        ))}
      </div>
    </div>
  );
}

