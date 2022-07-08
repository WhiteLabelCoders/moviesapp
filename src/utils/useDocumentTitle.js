
import { useRef, useEffect } from 'react'

function useDocumentTitle(title, prevailOnUnmount = false) {
    //get ref to document title
    const defaultTitle = useRef(document.title);

    // set new document title after load
    useEffect(() => {
        document.title = title;
    }, [title]);

    // prevent to use incorrect title
    useEffect(() => () => {
        if (!prevailOnUnmount) {
            document.title = defaultTitle.current;
        }
    }, [])
}

export default useDocumentTitle