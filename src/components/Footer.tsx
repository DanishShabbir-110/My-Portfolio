export default function Footer() {
  return (
    <footer className="py-8 border-t border-slate-800/50 mt-20">
      <div className="max-w-6xl mx-auto px-6 text-center flex flex-col items-center justify-center">
        <p className="text-slate-400 text-sm mb-2">
          © {new Date().getFullYear()} Danish Shabbir. All rights reserved.
        </p>
        <p className="text-slate-500 text-xs">
          Android Application Developer
        </p>
      </div>
    </footer>
  );
}
