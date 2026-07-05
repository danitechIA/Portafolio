import { useEffect, useRef } from 'react';

// Adds .visible to any child (or the node itself) carrying .reveal when it enters the viewport.
export const useReveal = () => {
    const ref = useRef(null);

    useEffect(() => {
        const root = ref.current;
        if (!root) return;

        const targets = root.classList.contains('reveal')
            ? [root]
            : Array.from(root.querySelectorAll('.reveal'));

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
        );

        targets.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return ref;
};

export default useReveal;
