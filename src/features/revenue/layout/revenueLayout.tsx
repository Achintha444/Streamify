import Stack from "@mui/material/Stack";
import RevenueDataAnalysis from "../components/revenueDataAnalysis";
import RevenueDataAnalysisChart from "../components/revenueDataAnalysisChart";

export default function RevenueLayout() {
    return (
        <Stack spacing={ 4 }>
            <RevenueDataAnalysis />
            <RevenueDataAnalysisChart />
        </Stack>
    );
}
