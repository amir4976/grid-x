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
      clone.style.transform = `translateX(${position + marquee.clientWidth}px)`;
      requestAnimationFrame(animate);
    }
    animate();
  }, []);

  return (
    <div className="marquee-container">
      <div className="marquee-content" ref={marqueeRef}>
        <animated.div style={emojiAnimation}>✦</animated.div>
        <div className="text-black">
          🚀 ارسال رایگان برای خرید بالای ۵۰۰ هزار تومان
        </div>

        <animated.div style={emojiAnimation}>✦</animated.div>
        <div className="text-black">⚡ حراج ویژه تابستان — تا ۶۵٪ تخفیف</div>

        <animated.div style={emojiAnimation}>✦</animated.div>
        <div className="text-black">🛡️ گارانتی اصالت و سلامت کالا</div>

        <animated.div style={emojiAnimation}>✦</animated.div>
        <div className="text-black">💳 پرداخت اقساطی بدون بهره تا ۱۲ ماه</div>

        <animated.div style={emojiAnimation}>✦</animated.div>
        <div className="text-black">
          🎁 هدیه رایگان برای خریدهای بالای ۲ میلیون
        </div>

        <animated.div style={emojiAnimation}>✦</animated.div>
        <div className="text-black">📦 بسته‌بندی ضد ضربه و ایمن</div>

        <animated.div style={emojiAnimation}>✦</animated.div>
        <div className="text-black">🔄 ۷ روز ضمانت بازگشت وجه بدون سوال</div>

        <animated.div style={emojiAnimation}>✦</animated.div>
        <div className="text-black">📞 پشتیبانی ۲۴/۷ آنلاین و تلفنی</div>
      </div>
      <div className="marquee-content" ref={cloneRef}>
        <animated.div style={emojiAnimation}>✦</animated.div>
        <div className="text-black">
          🚀 ارسال رایگان برای خرید بالای ۵۰۰ هزار تومان
        </div>

        <animated.div style={emojiAnimation}>✦</animated.div>
        <div className="text-black">⚡ حراج ویژه تابستان — تا ۶۵٪ تخفیف</div>

        <animated.div style={emojiAnimation}>✦</animated.div>
        <div className="text-black">🛡️ گارانتی اصالت و سلامت کالا</div>

        <animated.div style={emojiAnimation}>✦</animated.div>
        <div className="text-black">💳 پرداخت اقساطی بدون بهره تا ۱۲ ماه</div>

        <animated.div style={emojiAnimation}>✦</animated.div>
        <div className="text-black">
          🎁 هدیه رایگان برای خریدهای بالای ۲ میلیون
        </div>

        <animated.div style={emojiAnimation}>✦</animated.div>
        <div className="text-black">📦 بسته‌بندی ضد ضربه و ایمن</div>

        <animated.div style={emojiAnimation}>✦</animated.div>
        <div className="text-black">🔄 ۷ روز ضمانت بازگشت وجه بدون سوال</div>

        <animated.div style={emojiAnimation}>✦</animated.div>
        <div className="text-black">📞 پشتیبانی ۲۴/۷ آنلاین و تلفنی</div>
      </div>
    </div>
  );
};

export default InfiniteMarquee;
