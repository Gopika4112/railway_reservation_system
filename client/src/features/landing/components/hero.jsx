export default function Hero() {
  return (
    <section className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* Hero Image / Illustration */}
        <img
          src="/logo.png" // replace with your image/illustration asset
          alt="Railway Reservation Illustration"
          className="max-w-sm rounded-lg shadow-2xl"
        />

        {/* Hero Text */}
        <div className="text-center lg:text-left max-w-lg">
          <h1 className="text-5xl font-bold leading-tight">
            Welcome to <span className="text-primary">SideTrack</span>
          </h1>
          <p className="py-6 text-lg opacity-80">
            Seamless railway reservations made simple. Discover train schedules,
            book tickets, and manage your journeys—all in one intuitive
            platform.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="btn btn-primary btn-lg">Get Started</button>
            <button className="btn btn-outline btn-lg">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
}
