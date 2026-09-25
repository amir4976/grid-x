
import React, { useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
import "./Marquee.css";

const InfiniteMarquee = () => {
  const marqueeRef = useRef(null);
  const cloneRef = useRef(null);

  const emojiAnimation = useSpring({
    transform: "scale(1.5)",
    loop: { reverse: true },
    config: { friction: 10, tension: 200 },
  });

  useEffect(() => {
    if (!marqueeRef.current || !cloneRef.current) return;

    const marquee = marqueeRef.current;
    const clone = cloneRef.current;

    let position = 0;
    const speed = 2;

    function animate() {
      position -= speed;

      if (position <= -marquee.clientWidth) {
        position = 0;
      }

      marquee.style.transform = `translateX(${position}px)`;
      clone.style.transform = `translateX(
        ${position + marquee.clientWidth}px
      )`;

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  const marqueeItems = [
    "🚀 تبدیل ایده‌ها به تجربه‌های واقعی وب",
    "⚡ ساخت وب‌سایت‌های سریع و بهینه",
    "💻 کدنویسی تمیز، قابل توسعه و مقیاس‌پذیر",
    "🎨 طراحی رابط کاربری با تمرکز روی تجربه کاربر",
    "⚛️ توسعه رابط‌های تعاملی با React",
    "🔐 ساخت سیستم‌های امن و قابل اعتماد",
    "🧩 معماری درست، کامپوننت‌های قابل استفاده مجدد",
    "🌐 از ایده تا محصول؛ همه‌چیز با کد شروع می‌شود",
  ];

  return (
    <div className="marquee-container">
      {[marqueeRef, cloneRef].map((ref, index) => (
        <div className="marquee-content" ref={ref} key={index}>
          {marqueeItems.map((item, index) => (
            <React.Fragment key={index}>
              <animated.div style={emojiAnimation}>✦</animated.div>

              <div className="text-black whitespace-nowrap">
                {item}
              </div>
            </React.Fragment>
          ))}
        </div>
      ))}
    </div>
  );
};

export default InfiniteMarquee;
