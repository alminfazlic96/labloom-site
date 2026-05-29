export default function LaBloomCaffeTemplate() {
  return (
    <div className="min-h-screen bg-black text-white font-[Poppins] antialiased relative overflow-hidden">
  {/* ambient background effects */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute -top-40 left-1/2 w-[600px] h-[600px] bg-yellow-400/10 blur-[120px] " />
    <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-amber-500/10 blur-[140px] " />
    <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_center,_white,_transparent_60%)] " />
  </div>
      {/* HERO */}
      <section
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/labloom-hero.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="absolute top-6 left-6 z-20 bg-yellow-400 text-black px-4 py-2 rounded-full font-bold shadow-xl">
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
              LaBloom Caffe je moderno mesto za izlazak, opuštanje i uživanje u vrhunskim pićima i premium nargilama. Prostrana terasa, prijatna atmosfera i dobra muzika čine LaBloom jednim od omiljenih mesta za izlazak u Novom Pazaru.
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

        <div  className="grid md:grid-cols-1 gap-10">>
          {/* LEFT */}
          <div className="bg-zinc-900 p-10 rounded-3xl shadow-xl">
            <h3 className="text-3xl font-bold mb-8 text-yellow-400">
☕ Topli Napici
</h3>

<div className="space-y-4 text-lg text-gray-300 mb-10">

{[
['Espresso','150','/brands/espresso.png'],
['Nescafe','200','/brands/nescafe.png'],
['Cappuccino','220','/brands/cappuccino.png'],
['Topla čokolada','240','/brands/cokolada.png'],
['Čaj (nana/kamilica/voćni)','150','/brands/caj.png']
].map(([name,price,image]) => (

<div
key={name}
className="flex justify-between items-center"
>

<div className="flex items-center gap-3">

<img
src={image}
alt={name}
className="w-10 h-10 object-contain"
/>

<span>{name}</span>

</div>

<span>{price}</span>

</div>

))}

</div>
<h3 className="text-3xl font-bold mb-8 text-yellow-400">
💨 Nargile
</h3>

            <div className="space-y-4 text-lg text-gray-300 mb-10">

{[
['Klasik','600','/brands/nargila.png'],
['Premium ukus','800','/brands/premium.png']
].map(([name,price,image])=>(

<div
key={name}
className="flex justify-between items-center"
>

<div className="flex items-center gap-3">

<img
src={image}
alt={name}
className="w-10 h-10 object-contain"
/>

<span>{name}</span>

</div>

<span>{price}</span>

</div>

))}

</div>

            <h3 className="text-3xl font-bold mb-8 text-yellow-400">Sokovi</h3>
            <div className="space-y-4 text-lg text-gray-300">

{[
 ['Coca-Cola','220','/brands/cocacola.png'],
['Coca-Cola Zero','220','/brands/cocacola.png'],
['Fanta (Orange/ Exotic)','220','/brands/fanta.png'],
['Sprite','220','/brands/sprite.png'],
['Schweppes (Bitter / Tangerine)','220','/brands/schweps.png'],
['Sola (Multivitamin / Ice Tea)','250','/brands/sola.png'],
['Cube (jagoda / breskva /  borovnica / jabuka)','220','/brands/cube.png'],
['Ultra','220','/brands/ultra.png'],
['Guarana','220','/brands/guarana.png'],
['Cockta','220','/brands/cockta.png'],
['Red Bull','350','/brands/redbull.png'],
['28 Black','300','/brands/28black.png'],
['Moloko','300','/brands/moloko.png'],
['Somersby (Jagoda / Zova)','300','/brands/somersby.png'],
['Rosa','150','/brands/rosa.png'],
['Kisela','150','/brands/kisela.png'],
].map(([name,price,image]) => (

<div
 key={name}
 className="flex justify-between items-center px-4 py-3 rounded-2xl hover:bg-zinc-800/70"
>

<div className="flex items-center gap-4">

<img
 src={image}
 alt={name}
 className="w-10 h-10 object-contain"
/>

<span>{name}</span>

</div>

<span className="text-yellow-400 font-bold">
 {price}
</span>

</div>

))}

</div>

            <h3 className="text-3xl font-bold mt-10 mb-4 text-yellow-400">🍊 Ceđeni Sokovi</h3>

            <div className="space-y-4 text-lg text-gray-300">
  {[
 ['Malinada', '220', '/brands/malinada.png'],
 ['Ceđena narandža', '300', '/brands/narandza.png'],
 ['Ceđeni mix', '330', '/brands/mix.png']
].map(([name, price, image]) => (
    <div
      key={name}
      className="flex justify-between items-center hover:bg-zinc-800/70 px-4 py-3 rounded-2xl transition duration-300 hover:scale-[1.02] group"
    >
      <div className="flex items-center gap-3">
        <img
  src={image}
  alt={name}
  className="w-10 h-10 object-contain"
/>
        <span>{name}</span>
      </div>

      <span className="text-yellow-400 font-bold">
        {price}
      </span>
    </div>
  ))}
</div>
            <h3 className="text-3xl font-bold mt-10 mb-4 text-yellow-400">Sladoledi</h3>
            <p className="text-gray-400 mb-6">USKORO</p>

            <h3 className="text-3xl font-bold mt-12 mb-8 text-yellow-400">
  Kupovi
</h3>

<div className="space-y-4 text-lg text-gray-300">

{[
 ['Jagoda','300','/brands/kup.png'],
 ['Lotus','300','/brands/kup.png'],
 ['Bueno','300','/brands/kup.png'],
 ['Triple Chocolate','300','/brands/kup.png']
].map(([name,price,image]) => (

<div
 key={name}
 className="flex justify-between items-center hover:bg-zinc-800/70 px-4 py-3 rounded-2xl transition duration-300 hover:scale-[1.02]"
>

<div className="flex items-center gap-4">

<img
 src={image}
 alt={name}
 className="w-10 h-10 object-contain"
/>

<span>{name}</span>

</div>

<span className="text-yellow-400 font-bold">
 {price}
</span>

</div>

))}

</div>
          </div>

          {/* RIGHT */}
          <div className="bg-zinc-900 p-10 rounded-3xl shadow-xl">
            {/* Add right column menu items here if needed */}
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
<section id="rezervacije" className="py-24 px-6 md:px-20 bg-black">
  <div className="max-w-3xl mx-auto bg-zinc-900 rounded-3xl p-10 shadow-2xl text-center">
    
    <h2 className="text-5xl font-bold text-yellow-400 mb-6">
      Rezervacije
    </h2>

    <p className="text-gray-400 text-lg mb-10">
      Rezervišite svoje mesto brzo i jednostavno preko Instagrama.
    </p>

    <button
      onClick={() => window.open('https://instagram.com/la_bloom2026', '_blank')}
      className="bg-yellow-400 text-black px-10 py-4 rounded-2xl font-bold text-lg hover:scale-[1.02] transition"
    >
      Rezerviši
    </button>

  </div>
</section>

      {/* WHY US */}
      <section className="py-24 px-6 md:px-20 bg-zinc-950">
        <h2 className="text-5xl font-bold text-center text-yellow-400 mb-16">
          Zašto La Bloom?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-black border border-zinc-800 rounded-3xl p-8 text-center shadow-xl hover:scale-105 transition">
            <h3 className="text-2xl font-bold text-yellow-400 mb-3">Terasa</h3>
            <p className="text-gray-400">Prostrana i moderna terasa za dnevni i noćni provod.</p>
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
              La Bloom
            </h3>

            <p className="text-gray-400 leading-7">
              Premium lounge bar sa vrhunskim pićem, muzikom i nargilama.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Kontakt</h4>

            <div className="space-y-3 text-gray-400">
              <p>Novi Pazar</p>
              <p>@la_bloom2026</p>

          
              
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
