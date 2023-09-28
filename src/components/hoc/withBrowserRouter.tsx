import { IComponent } from "src/types";
import { IWith } from "./types";
import { BrowserRouter } from "react-router-dom";

export const withBrowserRouter = <T extends IComponent>({ Component }: IWith<T>) => (props: T) => 
    <BrowserRouter>
        <Component {...props} />
    </BrowserRouter>
