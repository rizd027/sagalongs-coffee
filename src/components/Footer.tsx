export default function Footer() {
  return (
    <footer id="contact" className="bg-background text-foreground pt-24 md:pt-32 pb-12 px-6 md:px-12 lg:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-12 mb-24">
        <div className="md:col-span-2">
          <h2 className="text-2xl md:text-3xl font-light tracking-[0.3em] uppercase mb-8">
            Sagalong<span className="text-accent font-serif italic lowercase tracking-normal">s</span>
          </h2>
          <p className="text-foreground/30 max-w-sm font-light text-sm leading-relaxed">
            Architecting the future of the coffee ritual. Every bean tells a story of geological time and human precision.
          </p>
        </div>
        
        <div>
          <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent mb-8">Navigation</h3>
          <ul className="flex flex-col gap-4 text-foreground/40 text-xs md:text-sm font-light">
            <li><a href="#" className="hover:text-accent transition-colors duration-300">The Series</a></li>
            <li><a href="#" className="hover:text-accent transition-colors duration-300">Architecture</a></li>
            <li><a href="#" className="hover:text-accent transition-colors duration-300">Subscriptions</a></li>
            <li><a href="#" className="hover:text-accent transition-colors duration-300">Collective</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent mb-8">Legal & Press</h3>
          <ul className="flex flex-col gap-4 text-foreground/40 text-xs md:text-sm font-light">
            <li><a href="#" className="hover:text-accent transition-colors duration-300">Inquiries</a></li>
            <li><a href="#" className="hover:text-accent transition-colors duration-300">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-accent transition-colors duration-300">Terms of Service</a></li>
            <li><a href="#" className="hover:text-accent transition-colors duration-300">Journal</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] text-foreground/20 border-t border-white/5 pt-12">
        <div className="uppercase tracking-[0.2em]">&copy; {new Date().getFullYear()} Sagalong&apos;s Coffee. Built with architectural intent.</div>
        <div className="flex gap-8 mt-6 md:mt-0 uppercase tracking-[0.2em]">
          <a href="#" className="hover:text-accent transition-colors duration-300">Instagram</a>
          <a href="#" className="hover:text-accent transition-colors duration-300">Vimeo</a>
          <a href="#" className="hover:text-accent transition-colors duration-300">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
