import TerminalBox from './TerminalBox';
import actionFigureImage from "@assets/DS af 2.png";

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
      
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="flex-1 h-full">
          <TerminalBox />
        </div>
        <div className="w-full sm:w-auto flex justify-center items-start">
          <img 
            src={actionFigureImage} 
            alt="David Stancel Action Figure" 
            className="rounded-lg h-[460px] object-contain shadow-[0_0_10px_rgba(0,255,170,0.2)]" 
          />
        </div>
      </div>
    </section>
  );
}
