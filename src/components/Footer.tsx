const Footer = () => (
  <footer className="py-6 text-center text-sm text-green-400 border-t border-green-900/30 bg-gray-950 relative overflow-hidden">
    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[5rem] text-green-900 opacity-10 select-none">{'{'}</span>
    &copy; {new Date().getFullYear()} Mansi Singh. All rights reserved.
    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[5rem] text-green-900 opacity-10 select-none">{'/>'}</span>
  </footer>
);

export default Footer; 