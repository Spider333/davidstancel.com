export default function TerminalBox() {
  return (
    <div className="border border-[#272727] rounded-lg p-4 text-sm text-white/70">
      <div className="flex items-center">
        <div className="w-3 h-3 rounded-full bg-[#FF3E00] mr-2"></div>
        <div className="w-3 h-3 rounded-full bg-[#00FFAA] mr-2"></div>
        <div className="w-3 h-3 rounded-full bg-[#2563EB] mr-2"></div>
        <div className="flex-1 pl-2 font-mono">Terminal</div>
      </div>
      <div className="mt-3 font-mono">
        <div>$ cat welcome.txt</div>
        <div className="pl-4 mt-2">Welcome to my personal space in the digital universe.</div>
        <div className="pl-4">Explore the keywords below to learn more about me and my work.</div>
        <div className="mt-2">$ _</div>
      </div>
    </div>
  );
}
