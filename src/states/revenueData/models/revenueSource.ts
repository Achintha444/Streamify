/**
 * Represents a single revenue source with its amount and percentage share.
 */
export interface RevenueSource {
    /**
     * The name of the revenue source (e.g., Subscriptions, Advertisements, YouTube).
     */
    source: string;

    /**
     * The amount of revenue generated from this source.
     */
    amount: number;

    /**
     * The percentage contribution of this source to the total revenue.
     */
    percentage: number;
}

/**
 * Represents the overall revenue distribution of Streamify.
 */
export interface RevenueDistribution {
    /**
     * The total revenue generated from all sources.
     */
    totalRevenue: number;

    /**
     * A list of different revenue sources contributing to the total revenue.
     */
    sources: RevenueSource[];
}
