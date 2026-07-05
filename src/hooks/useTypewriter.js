import { useEffect, useState } from 'react';

export const useTypewriter = (words, { typeSpeed = 70, deleteSpeed = 40, pause = 1800 } = {}) => {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState('');
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const word = words[index % words.length];
        let timeout;

        if (!deleting && text === word) {
            timeout = setTimeout(() => setDeleting(true), pause);
        } else if (deleting && text === '') {
            timeout = setTimeout(() => {
                setDeleting(false);
                setIndex((i) => (i + 1) % words.length);
            }, 150);
        } else {
            timeout = setTimeout(() => {
                setText(word.substring(0, text.length + (deleting ? -1 : 1)));
            }, deleting ? deleteSpeed : typeSpeed);
        }

        return () => clearTimeout(timeout);
    }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause]);

    return text;
};

export default useTypewriter;
