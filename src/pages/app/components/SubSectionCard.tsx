import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function SubSectionCard() {
    return (
        <Card>
            <CardContent>
                <Typography variant="body2">
                    Word of the Day
                </Typography>
                <Typography fontSize="60px" fontWeight="200" color="text.primary">
                    bel
                </Typography>
            </CardContent>
        </Card>
    );
}
