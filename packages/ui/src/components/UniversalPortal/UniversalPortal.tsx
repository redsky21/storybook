import React from 'react';
import ReactDOM from 'react-dom';

export type TUniversalPortalProps = {
    children: React.ReactNode;
};

export default function UniversalPortal({ children }: TUniversalPortalProps) {
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    return mounted && typeof document !== 'undefined'
        ? ReactDOM.createPortal(children, document.body)
        : null;
}
