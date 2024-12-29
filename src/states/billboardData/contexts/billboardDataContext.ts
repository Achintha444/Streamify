import { Context, createContext } from "react";

/**
 * Props interface for BillboardDataContext.
 */
export interface BillboardDataContextProps {
    test: string;
}

/**
 * Context object for managing the BillboardDataContext.
 */
const BillboardDataContext: Context<null | BillboardDataContextProps> = createContext<
    null | BillboardDataContextProps
>(
    null
);

/**
 * Display name for the BillboardDataContext.
 */
BillboardDataContext.displayName = "BillboardDataContext";

export default BillboardDataContext;
