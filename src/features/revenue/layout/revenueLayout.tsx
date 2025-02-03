import Stack from "@mui/material/Stack";
import RevenueDataAnalysis from "../components/revenueDataAnalysis";
import RevenueDataAnalysisChart from "../components/revenueDataAnalysisChart";
import RevenueDistribution from "../components/revenueDistribution";

export default function RevenueLayout() {
    return (
        <Stack spacing={ 4 }>
            <RevenueDataAnalysis />
            <RevenueDataAnalysisChart />
            <RevenueDistribution />
        </Stack>
    );
}
