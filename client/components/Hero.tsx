export default function Hero() {
  return (
    <div className="relative w-full overflow-hidden bg-[hsl(var(--background))] pt-20 sm:pt-24 pb-20 min-h-screen flex items-center justify-center" style={{ margin: "4px 0 0 -1px" }}>
      {/* Decorative gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Blob 1 - Top left white to purple gradient */}
        <div
          className="absolute rounded-full blur-[100px] opacity-40"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, rgba(168, 85, 247, 0.4) 50%, transparent 70%)",
            top: "-15%",
            left: "-10%",
            width: "500px",
            height: "500px",
          }}
        />
        {/* Blob 2 - Top right pink to purple gradient */}
        <div
          className="absolute rounded-full blur-[120px] opacity-35"
          style={{
            background:
              "radial-gradient(circle, rgba(236, 72, 153, 0.35) 0%, rgba(168, 85, 247, 0.25) 50%, transparent 70%)",
            top: "-10%",
            right: "-5%",
            width: "550px",
            height: "550px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          {/* Badge */}
          <div className="mb-8 sm:mb-12 lg:mb-16 flex items-center justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="text-white"
              >
                <path
                  d="M8 1L10.4 7.4L17 8L12 13L13.8 19.5L8 15.9L2.2 19.5L4 13L-1 8L5.6 7.4L8 1Z"
                  fill="currentColor"
                />
              </svg>
              <span className="text-xs sm:text-sm font-mono text-white/90 tracking-wide">
                Crafting digital experiences
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4 sm:mb-6 text-white">
              Hi 👋 My name is
            </h1>
            <div className="relative inline-block">
              <h2 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-[hsl(var(--purple-accent))] tracking-tight mb-2 sm:mb-4">
                <p>Abdellah</p>
                <p>Afraoua</p>
              </h2>
              {/* Underline accent */}
              <div
                className="h-1 sm:h-1.5 bg-[hsl(var(--purple-accent))] mt-2 sm:mt-4 rounded-full"
                style={{
                  width: "95%",
                }}
              />
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-6 sm:mt-8">
              Full-Stack Developer
            </h3>
          </div>

          {/* Subheading with code-like text */}
          <div className="text-center mb-8 sm:mb-10 lg:mb-16">
            <div className="flex items-center justify-center mb-4 sm:mb-5 gap-1">
              <span className="text-sm sm:text-base text-[hsl(var(--blue-accent))] font-mono">
                www.Afraoua.it
              </span>
              <span className="text-sm sm:text-base text-[hsl(var(--blue-accent))] font-mono">
                ]
              </span>
            </div>
            <p className="text-sm sm:text-base text-white/50 font-normal">
              <br />
            </p>
          </div>

          {/* Loading text */}
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <p className="text-xs sm:text-sm text-white/40 font-light">
              Loading my best work for you...
            </p>
            <div className="flex gap-1 sm:gap-1.5">
              <div className="h-1.5 w-1 sm:h-2 sm:w-1.5 rounded-full bg-white/30 animate-pulse" />
              <div
                className="h-1.5 w-1 sm:h-2 sm:w-1.5 rounded-full bg-white/40 animate-pulse"
                style={{ animationDelay: "0.2s" }}
              />
              <div
                className="h-1.5 w-1 sm:h-2 sm:w-1.5 rounded-full bg-white/50 animate-pulse"
                style={{ animationDelay: "0.4s" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
