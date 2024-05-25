import { Box, Button, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AlertDialogSlide = ({ open, setOpen }: Props) => {
  return (
    <Dialog
      open={open}
      onClose={() => {
        setOpen(false);
      }}
    >
      <DialogContent>
        <Typography sx={{ fontSize: 20, mt: 2 }}>
          You can see the code in my Github.
        </Typography>
        <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            sx={{ mr: 1.5, color: "info.main" }}
            onClick={() => setOpen(false)}
          >
            Close
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
export default AlertDialogSlide;
