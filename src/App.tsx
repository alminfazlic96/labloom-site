export default function LaBloomCaffeTemplate() {
  return (
    <div className="min-h-screen bg-black text-white font-[Poppins] antialiased relative overflow-hidden">
  {/* ambient background effects */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute -top-40 left-1/2 w-[600px] h-[600px] bg-yellow-400/10 blur-[120px] animate-pulse" />
    <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-amber-500/10 blur-[140px] animate-pulse" />
    <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_center,_white,_transparent_60%)] animate-pulse" />
  </div>
      {/* HERO */}
      <section
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/labloom-hero.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="absolute top-6 left-6 z-20 bg-yellow-400 text-black px-4 py-2 rounded-full font-bold shadow-xl animate-pulse">
          OPEN DAILY
        </div>

        <div className="absolute bottom-10 right-10 z-20 hidden md:block bg-black/60 backdrop-blur-md border border-yellow-400/30 px-6 py-4 rounded-3xl">
          <p className="text-yellow-400 font-semibold">★★★★★</p>
          <p className="text-sm text-gray-300 mt-1">Omiljena terasa u Novom Pazaru</p>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-6xl md:text-8xl font-bold tracking-widest text-yellow-400">
            La Bloom
          </h1>

          <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-2xl">
            Terasa • Piće • Nargile • Muzika
          </p>

          <div className="mt-10 flex gap-4 flex-wrap justify-center">
            <button
              onClick={() => document.getElementById('meni')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-yellow-400 text-black px-8 py-4 rounded-2xl text-lg font-semibold hover:scale-105 transition"
            >
              Pogledaj meni
            </button>

            <button
              onClick={() => document.getElementById('rezervacije')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-yellow-400 text-yellow-400 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-yellow-400 hover:text-black transition"
            >
              Rezerviši sto
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 px-6 md:px-20 bg-zinc-950">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold text-yellow-400 mb-6">
              O nama
            </h2>

            <p className="text-gray-300 text-lg leading-8">
              LaBloom Caffe je moderno mesto za izlazak, opuštanje i uživanje u vrhunskim pićima i premium nargilama. Prostrana bašta, prijatna atmosfera i dobra muzika čine LaBloom jednim od omiljenih mesta za izlazak u Novom Pazaru.
            </p>
          </div>

          <img src="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop" className="rounded-3xl shadow-2xl h-[420px] w-full object-cover" />
        </div>
      </section>

      {/* MENU */}
      

      <section id="meni" className="py-24 px-6 md:px-20 bg-black">
        <h2 className="text-5xl font-bold text-center text-yellow-400 mb-16">
          Meni
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* LEFT */}
          <div className="bg-zinc-900 p-10 rounded-3xl shadow-xl">
            <h3 className="text-3xl font-bold mb-8 text-yellow-400">Topli Napici</h3>

            <div className="space-y-4 text-lg text-gray-300 mb-10">
              <div className="flex justify-between"><span>Espresso</span><span>130</span></div>
              <div className="flex justify-between"><span>Nescafe</span><span>170</span></div>
              <div className="flex justify-between"><span>Turska kafa</span><span>120</span></div>
              <div className="flex justify-between"><span>Topla čokolada</span><span>200</span></div>
              <div className="flex justify-between"><span>Čaj nana/kamilica/voćni</span><span>150</span></div>
            </div>

            <h3 className="text-3xl font-bold mb-8 text-yellow-400">Nargile</h3>
            <div className="space-y-4 text-lg text-gray-300 mb-10">
              <div className="flex justify-between"><span>Klasik</span><span>500</span></div>
              <div className="flex justify-between"><span>Premium ukus</span><span>700</span></div>
            </div>

            <h3 className="text-3xl font-bold mb-8 text-yellow-400">Sokovi</h3>
            <div className="space-y-4 text-lg text-gray-300">
              <div className="flex justify-between items-center"><span className="flex items-center gap-3"><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="#ef4444"/><path d="M7 12h10" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg> Coca-Cola</span><span>200</span></div>

              <div className="flex justify-between items-center"><span className="flex items-center gap-3"><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="#e5e7eb"/><path d="M7 12h10" stroke="black" strokeWidth="2" strokeLinecap="round"/></svg> Coca-Cola Zero</span><span>200</span></div>

              <div className="flex justify-between items-center"><span className="flex items-center gap-3"><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="#f97316"/><circle cx="12" cy="12" r="4" fill="white"/></svg> Fanta</span><span>200</span></div>

              <div className="flex justify-between items-center"><span className="flex items-center gap-3"><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="#22c55e"/><path d="M8 14c2-5 6-5 8 0" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg> Sprite</span><span>200</span></div>

              <div className="flex justify-between items-center"><span className="flex items-center gap-3"><svg width="22" height="22" viewBox="0 0 24 24"><rect width="24" height="24" rx="12" fill="#facc15"/></svg> Schweppes Bitter/Tangerine</span><span>200</span></div>

              <div className="flex justify-between items-center"><span className="flex items-center gap-3"><svg width="22" height="22" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#fb923c"/><path d="M6 12h12" stroke="white" strokeWidth="2"/></svg> Sola Multivitamin</span><span>220</span></div>
              <div className="flex justify-between items-center"><span className="flex items-center gap-3"><svg width="22" height="22" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#38bdf8"/><path d="M8 8l8 8" stroke="white" strokeWidth="2"/></svg> Sola IceTea</span><span>220</span></div>
              <div className="flex justify-between items-center"><span className="flex items-center gap-3"><svg width="22" height="22" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#ec4899"/><circle cx="12" cy="12" r="3" fill="white"/></svg> Bravo Jagoda/Breskva/Narandža/Borovnica/Jabuka</span><span>200</span></div>
              <div className="flex justify-between items-center"><span className="flex items-center gap-3"><svg width="22" height="22" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#a855f7"/><path d="M12 6v12" stroke="white" strokeWidth="2"/></svg> Ultra</span><span>200</span></div>
              <div className="flex justify-between items-center"><span className="flex items-center gap-3"><svg width="22" height="22" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#dc2626"/><path d="M7 12h10" stroke="white" strokeWidth="2"/></svg> Guarana</span><span>200</span></div>
              <div className="flex justify-between items-center"><span className="flex items-center gap-3"><svg width="22" height="22" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#f97316"/><path d="M8 16l8-8" stroke="white" strokeWidth="2"/></svg> Cockta</span><span>200</span></div>

              <div className="flex justify-between items-center"><span className="flex items-center gap-3"><svg width="22" height="22" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#2563eb"/><path d="M7 16l5-8 5 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> Red Bull</span><span>350</span></div>

              <div className="flex justify-between items-center"><span className="flex items-center gap-3"><svg width="22" height="22" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#111827"/><path d="M6 6l12 12" stroke="white" strokeWidth="2"/></svg> 28 Black</span><span>280</span></div>
              <div className="flex justify-between items-center"><span className="flex items-center gap-3"><svg width="22" height="22" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#f8fafc"/><path d="M6 12h12" stroke="black" strokeWidth="2"/></svg> Moloko</span><span>280</span></div>
              <div className="flex justify-between items-center"><span className="flex items-center gap-3"><svg width="22" height="22" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#84cc16"/><path d="M8 10c2-2 6-2 8 0" stroke="white" strokeWidth="2"/></svg> Somersby</span><span>250</span></div>
              <div className="flex justify-between items-center"><span className="flex items-center gap-3"><svg width="22" height="22" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#38bdf8"/><path d="M12 6v12" stroke="white" strokeWidth="2"/></svg> Rosa</span><span>150</span></div>
              <div className="flex justify-between items-center"><span className="flex items-center gap-3"><svg width="22" height="22" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#94a3b8"/><circle cx="12" cy="12" r="4" fill="white"/></svg> Kisela voda</span><span>150</span></div>
            </div>

            <h3 className="text-3xl font-bold mt-10 mb-4 text-yellow-400">Sladoledi</h3>
            <p className="text-gray-400 mb-6">USKORO</p>

            <h3 className="text-3xl font-bold mb-4 text-yellow-400">Kolači</h3>
            <p className="text-gray-400">USKORO</p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-24 px-6 md:px-20 bg-zinc-950">
        <h2 className="text-5xl font-bold text-center text-yellow-400 mb-16">
          Galerija
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <img
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200&auto=format&fit=crop"
            className="rounded-3xl h-80 object-cover w-full"
          />

          <img
            src="https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?q=80&w=1200&auto=format&fit=crop"
            className="rounded-3xl h-80 object-cover w-full"
          />

          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop"
            className="rounded-3xl h-80 object-cover w-full"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="bg-black border border-zinc-800 rounded-3xl p-8 text-center shadow-xl">
            <h3 className="text-4xl font-bold text-yellow-400">50+</h3>
            <p className="text-gray-400 mt-2">Vrsta pića</p>
          </div>

          <div className="bg-black border border-zinc-800 rounded-3xl p-8 text-center">
            <h3 className="text-4xl font-bold text-yellow-400">Premium</h3>
            <p className="text-gray-400 mt-2">Nargila ukusi</p>
          </div>

          <div className="bg-black border border-zinc-800 rounded-3xl p-8 text-center">
            <h3 className="text-4xl font-bold text-yellow-400">Open</h3>
            <p className="text-gray-400 mt-2">Do kasno u noć</p>
          </div>
        </div>
      </section>

      {/* RESERVATION */}
      <

           <button
              onClick={() => window.open('https://instagram.com/labloomcaffe', '_blank')}
              className="bg-yellow-400 text-black p-4 rounded-2xl font-bold text-lg hover:scale-[1.02] transition"
            >
              Rezerviši
            </button>
          </div>
        </div>
      </section>

      

      {/* WHY US */}
      <section className="py-24 px-6 md:px-20 bg-zinc-950">
        <h2 className="text-5xl font-bold text-center text-yellow-400 mb-16">
          Zašto LaBloom?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-black border border-zinc-800 rounded-3xl p-8 text-center shadow-xl hover:scale-105 transition">
            <h3 className="text-2xl font-bold text-yellow-400 mb-3">Bašta</h3>
            <p className="text-gray-400">Prostrana i moderna bašta za dnevni i noćni provod.</p>
          </div>

          <div className="bg-black border border-zinc-800 rounded-3xl p-8 text-center shadow-xl hover:scale-105 transition">
            <h3 className="text-2xl font-bold text-yellow-400 mb-3">Nargile</h3>
            <p className="text-gray-400">Premium ukusi i kvalitetna priprema za maksimalan užitak.</p>
          </div>

          <div className="bg-black border border-zinc-800 rounded-3xl p-8 text-center shadow-xl hover:scale-105 transition">
            <h3 className="text-2xl font-bold text-yellow-400 mb-3">Atmosfera</h3>
            <p className="text-gray-400">Muzika i svetla koji privlače svako veče.</p>
          </div>
        </div>
      </section>

      <footer className="bg-zinc-950 py-16 px-6 md:px-20 border-t border-zinc-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#facc15,_transparent_70%)]" />
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">
              LaBloom
            </h3>

            <p className="text-gray-400 leading-7">
              Premium lounge bar sa vrhunskim pićem, muzikom i nargilama.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Kontakt</h4>

            <div className="space-y-3 text-gray-400">
              <p>Novi Pazar</p>
              <p>+381 xx xxx xxxx</p>
              <p>@labloomcaffe</p>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Radno vreme</h4>

            <div className="space-y-3 text-gray-400">
              <p>Pon - Čet: 07:00 - 00:00</p>
              <p>Pet - Sub: 07:00 - 00:00</p>
              <p>Nedelja: 07:00 - 00:00</p>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-600 mt-16 border-t border-zinc-800 pt-8">
          © 2026 LaBloom Caffe. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
