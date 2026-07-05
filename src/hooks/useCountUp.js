import { useEffect, useRef, useState } from 'react';

// Counts from 0 to `end` when the element scrolls into view.
export const useCountUp = (end, duration = 1600) => {
    const ref = useRef(null);
    const [value, setValue] = useState(0);
    const started = useRef(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting || started.current) return;
            started.current = true;

            const start = performance.now();
            const tick = (now) => {
                const p = Math.min((now - start) / duration, 1);
                const eased = 1 - Math.pow(1 - p, 3);
                setValue(Math.round(end * eased));
                if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            observer.disconnect();
        }, { threshold: 0.4 });

        observer.observe(el);
        return () => observer.disconnect();
    }, [end, duration]);

    return [ref, value];
};

export default useCountUp;
