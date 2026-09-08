import { useEffect } from "react";

const config = {
  pageName: "PANKAJ BHARDWAJ OFFICIAL™",
  telegramLink: "https://telegram.me/+PK-5WqCVyx1mMmZl",
  imageSrc: "/Pankaj.jpg"
};

const features = [
  { icon: "📞", text: "Daily Free Nifty, Banknifty, Stock Calls! 📈🔔", tone: "blue" },
  { icon: "💰", text: "Become a skilled trader without prior experience! 🎓🚀", tone: "green" },
  { icon: "🤝", text: "Endorsed by over 50K+ traders for reliable outcomes. 💯", tone: "orange" },
  { icon: "📈", text: "Learn Stock Market Strategies from Experts", tone: "purple" }
];

function App() {
  useEffect(() => {
    const preventCopy = (event) => event.preventDefault();
    const preventShortcut = (event) => {
      const key = event.key.toLowerCase();
      if ((event.ctrlKey || event.metaKey) && ["u", "s", "c", "x"].includes(key)) {
        event.preventDefault();
      }
      if (event.key === "F12" || (event.ctrlKey && event.shiftKey && ["i", "j", "c"].includes(key))) {
        event.preventDefault();
      }
    };

    document.addEventListener("contextmenu", preventCopy);
    document.addEventListener("dragstart", preventCopy);
    document.addEventListener("keydown", preventShortcut);

    return () => {
      document.removeEventListener("contextmenu", preventCopy);
      document.removeEventListener("dragstart", preventCopy);
      document.removeEventListener("keydown", preventShortcut);
    };
  }, []);

  const handleTelegramClick = () => {
    if (!localStorage.getItem("telegramTracked")) {
      localStorage.setItem("telegramTracked", "true");
      if (typeof window.fbq === "function") {
        window.fbq("track", "Subscribe", { eventID: `tg_${Date.now()}` });
      }
    }
  };

  return (
    <main className="page-shell">
      <section className="container">
        <div className="hero">
          <h1 className="gold">📚 {config.pageName} 📚</h1>
          <div className="hero-content">
            <p className="magenta">Explore Nifty &amp; BankNifty with free resources and tutorials</p>
            <div className="logo">
              <img src={config.imageSrc} alt="Educational Channel Logo" draggable="false" />
            </div>
            <a className="cta" href={config.telegramLink} onClick={handleTelegramClick}>
              Join Free Telegram
            </a>
            {features.map((feature) => (
              <div className={`feature-card ${feature.tone}`} key={feature.text}>
                <p><span className="emoji">{feature.icon}</span>{feature.text}</p>
              </div>
            ))}
            <p className="orange">
              Join our community to gain access to free tutorials, proven strategies, and comprehensive educational content designed for learning the stock market.
            </p>
            <p className="info-link-text">
              📢 Advertise by <a href="https://t.me/+2brlAMzDH7EyNDVl" target="_blank" rel="noreferrer">EVOLUTION DIGITAL MARKETING™</a>
            </p>
            <p className="disclaimer"><strong>Disclaimer:</strong> This platform does not provide investment advice, recommendations, or guarantees. Trading and investing involve significant risks, including the potential loss of capital. Past performance does not predict future results. By using this platform, you acknowledge and accept all associated risks.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
