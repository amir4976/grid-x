import React, { useEffect, useRef } from "react";
import { useSpring, animated } from 'react-spring';
import "./Marquee.css";

const InfiniteMarquee = () => {
    const marqueeRef = useRef(null);
    const cloneRef = useRef(null);

    const emojiAnimation = useSpring({
        transform: 'scale(1.5)',
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
                <animated.div style={emojiAnimation} className="text-amber-400">🔥</animated.div>
                <div className="text-teal-400">توسعه‌دهنده فرانت‌اند | React | Next.js | Redux | Tailwind CSS</div>
                <animated.div style={emojiAnimation} className="text-rose-400">💻</animated.div>
                <div className="text-blue-500">ساخت وبسایت‌های مدرن، سریع و ریسپانسیو</div>
                <animated.div style={emojiAnimation} className="text-yellow-500">🎨</animated.div>
                <div className="text-green-400">طراحی رابط کاربری جذاب و تجربه کاربری عالی</div>
                <animated.div style={emojiAnimation} className="text-pink-500">⚡</animated.div>
                <div className="text-purple-600">بهینه‌سازی سرعت و عملکرد سایت با Next.js</div>
                <animated.div style={emojiAnimation} className="text-red-500">🔥</animated.div>
                <div className="text-indigo-400">کدنویسی تمیز و ساختارمند با Redux & Tailwind CSS</div>
                <animated.div style={emojiAnimation} className="text-orange-500">🛠</animated.div>
                <div className="text-yellow-400">فول استک دولوپر - MERN Stack | Next.js | TypeScript</div>
                <animated.div style={emojiAnimation} className="text-cyan-400">🌎</animated.div>
                <div className="text-pink-600">سئو و بهینه‌سازی سایت برای رتبه بهتر در گوگل</div>
                <animated.div style={emojiAnimation} className="text-purple-500">🔗</animated.div>
                <div className="text-indigo-500">اتصال سایت به APIهای مدرن و دیتابیس‌های مقیاس‌پذیر</div>
                <animated.div style={emojiAnimation} className="text-yellow-500">🚀</animated.div>
                <div className="text-amber-500">فریلنس، پروژه‌های سفارشی و همکاری با تیم‌های حرفه‌ای</div>
            </div>
            <div className="marquee-content" ref={cloneRef}>
                <animated.div style={emojiAnimation} className="text-amber-400">🔥</animated.div>
                <div className="text-teal-400">توسعه‌دهنده فرانت‌اند | React | Next.js | Redux | Tailwind CSS</div>
                <animated.div style={emojiAnimation} className="text-rose-400">💻</animated.div>
                <div className="text-blue-500">ساخت وبسایت‌های مدرن، سریع و ریسپانسیو</div>
                <animated.div style={emojiAnimation} className="text-yellow-500">🎨</animated.div>
                <div className="text-green-400">طراحی رابط کاربری جذاب و تجربه کاربری عالی</div>
                <animated.div style={emojiAnimation} className="text-pink-500">⚡</animated.div>
                <div className="text-purple-600">بهینه‌سازی سرعت و عملکرد سایت با Next.js</div>
                <animated.div style={emojiAnimation} className="text-red-500">🔥</animated.div>
                <div className="text-indigo-400">کدنویسی تمیز و ساختارمند با Redux & Tailwind CSS</div>
                <animated.div style={emojiAnimation} className="text-orange-500">🛠</animated.div>
                <div className="text-yellow-400">فول استک دولوپر - MERN Stack | Next.js | TypeScript</div>
                <animated.div style={emojiAnimation} className="text-cyan-400">🌎</animated.div>
                <div className="text-pink-600">سئو و بهینه‌سازی سایت برای رتبه بهتر در گوگل</div>
                <animated.div style={emojiAnimation} className="text-purple-500">🔗</animated.div>
                <div className="text-indigo-500">اتصال سایت به APIهای مدرن و دیتابیس‌های مقیاس‌پذیر</div>
                <animated.div style={emojiAnimation} className="text-yellow-500">🚀</animated.div>
                <div className="text-amber-500">فریلنس، پروژه‌های سفارشی و همکاری با تیم‌های حرفه‌ای</div>
            </div>
        </div>
    );
};

export default InfiniteMarquee;
