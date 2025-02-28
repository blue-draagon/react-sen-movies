import {useLocation} from "react-router-dom";
import {useEffect} from "react";

export const ScrollToTop = () => {
    let location = useLocation();
    useEffect(() => {window.scroll(0, 0)}, [location]);
    return null;
};