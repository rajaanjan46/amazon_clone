import React from 'react';

export default function SectionGrid(){
  const sections = [
    {title: 'Up to 80% off | Amazon brands & more'},
    {title: 'Up to 70% Off | Women-led festive picks'},
    {title: 'Up to 70% off | Top rated finds from stores near you'},
    {title: 'Up to 75% off | Collections from Small businesses'}
  ];
  return (
    <div style={{display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:12}}>
      {sections.map((s,idx)=> (
        <div key={idx} style={{background:'#fff', padding:12, borderRadius:6}}>
          <h4 style={{fontSize:16}}>{s.title}</h4>
          <div style={{display:'flex', gap:8, marginTop:8}}>
            <div style={{flex:1}}>
              <img src={`https://picsum.photos/seed/sect${idx}/200/120`} alt="s" style={{width:'100%', borderRadius:4}} onError={(e)=>{e.currentTarget.src='https://via.placeholder.com/200x120?text=No+image'}} />
            </div>
            <div style={{flex:1}}>
              <img src={`https://picsum.photos/seed/sect${idx}b/200/120`} alt="s" style={{width:'100%', borderRadius:4}} onError={(e)=>{e.currentTarget.src='https://via.placeholder.com/200x120?text=No+image'}} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
