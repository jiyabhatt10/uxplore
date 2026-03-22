export function FloatingOrbs() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
      {/* Blue orb - top left */}
      <div
        className="absolute rounded-full"
        style={{
          width: "600px",
          height: "600px",
          top: "10%",
          left: "10%",
          background: "radial-gradient(circle, rgba(31,162,255,0.25) 0%, transparent 70%)",
          filter: "blur(40px)",
          animation: "orb1 20s ease-in-out infinite",
        }}
      />
      {/* Magenta orb - bottom right */}
      <div
        className="absolute rounded-full"
        style={{
          width: "500px",
          height: "500px",
          bottom: "10%",
          right: "10%",
          background: "radial-gradient(circle, rgba(225,0,255,0.22) 0%, transparent 70%)",
          filter: "blur(40px)",
          animation: "orb2 25s ease-in-out infinite",
        }}
      />
      {/* Purple middle blend orb */}
      <div
        className="absolute rounded-full"
        style={{
          width: "400px",
          height: "400px",
          top: "40%",
          left: "40%",
          background: "radial-gradient(circle, rgba(147,51,234,0.15) 0%, transparent 70%)",
          filter: "blur(50px)",
          animation: "orb3 30s ease-in-out infinite",
        }}
      />
      {/* Small blue top-right */}
      <div
        className="absolute rounded-full"
        style={{
          width: "200px",
          height: "200px",
          top: "5%",
          right: "20%",
          background: "radial-gradient(circle, rgba(31,162,255,0.2) 0%, transparent 70%)",
          filter: "blur(30px)",
          animation: "orb4 15s ease-in-out infinite",
        }}
      />
      <style>{`
        @keyframes orb1 { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(80px,-40px) scale(1.1)} 66%{transform:translate(-40px,60px) scale(0.95)} }
        @keyframes orb2 { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(-80px,50px) scale(1.15)} 66%{transform:translate(60px,-30px) scale(0.9)} }
        @keyframes orb3 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(-60px,-40px) scale(1.2)} }
        @keyframes orb4 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(40px,30px)} }
      `}</style>
    </div>
  );
}
