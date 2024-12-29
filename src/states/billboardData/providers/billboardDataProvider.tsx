import { FunctionComponent, PropsWithChildren, ReactElement } from "react";
import BillboardDataContext from "../contexts/billboardDataContext";

/**
 * Props interface for the [BillboardDataProvider]
 */
export type BillboardDataProviderProps = PropsWithChildren;

/**
 * React context provider for the internal authentication data context.
 *
 * @param props - Props injected to the component.
 * @returns Internal authentication data context instance.
 */
const BillboardDataProvider: FunctionComponent<BillboardDataProviderProps> = (
    props: BillboardDataProviderProps
): ReactElement => {
    const { children } = props;

    return (
        <BillboardDataContext.Provider
            value={ { test: "ss" } }
        >
            { children }
        </BillboardDataContext.Provider>
    );
};

export default BillboardDataProvider;
