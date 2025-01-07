/**
 * Represents the data of users.
 */
export interface UsersData {
    /**
     * Total number of users.
     */
    totalUsers: number;

    /**
     * Total number of active users.
     */
    activeUsers: number;

    /**
     * Total number of inactive users.
     */
    unsubscribedUsers: number;
}
