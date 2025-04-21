import TerminalBox from './TerminalBox';

export default function Hero() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
        <span className="text-[#00FFAA]">[</span> Building in the{' '}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00FFAA] to-[#2563EB] animate-gradient-x">
          digital frontier
        </span>{' '}
        <span className="text-[#00FFAA]">]</span>
      </h2>
      <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8">
        Decentralizing the future. One block at a time.{' '}
        <span className="inline-block ml-1 opacity-60">// Not financial advice</span>
      </p>
      
      <TerminalBox />
    </section>
  );
}
