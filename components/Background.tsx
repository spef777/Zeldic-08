import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-black">
      
      {/* iOS-like blurry violet blobs */}
      <div className="absolute top-[-10%] left-[-20%] w-[700px] h-[700px] bg-violet-900/30 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-[10000ms]"></div>
      
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[100px] mix-blend-screen"></div>
      
      <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-violet-950/20 rounded-full blur-[150px] mix-blend-screen animate-pulse duration-[15000ms]"></div>
      
      {/* Subtle Highlights */}
      <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-fuchsia-900/20 rounded-full blur-[80px] animate-bounce duration-[20000ms]"></div>
      
      <div className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] bg-purple-900/20 rounded-full blur-[90px] animate-pulse duration-[12000ms]"></div>
      
    </div>
  );
};

export default Background;