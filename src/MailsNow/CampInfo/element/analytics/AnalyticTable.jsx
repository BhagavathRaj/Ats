import React from "react";
import {
  Box,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@mui/material";

const data = [
  {
    sequence: "1.Email",
    send: 0,
    opened: 0,
    clicked: 0,
    replied: 0,
    positiveReplies: 0,
    bounced: 0,
    unsubscribed: 0,
  },
];

const AnalyticTable = () => {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: "14px",
          fontWeight: "600",
          padding: "10px 0px 15px",
        }}
      >
        Sequence Breakup
      </Typography>
      <TableContainer sx={{ overflowY: "auto", height: "300px" }}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead sx={{ backgroundColor: "#F0F1F7" }}>
            <TableRow>
              <TableCell>Sequences</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow
                key={index}
                sx={{
                  cursor: "pointer",
                  "&:hover": { backgroundColor: "#F0F1F7" },
                }}
              >
                <TableCell>{row.sequence}</TableCell>
                <TableCell>
                  <Box>
                    <Typography>{row.send}</Typography>
                    <Typography sx={{ fontSize: "14px" }}>Send</Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box>
                    <Typography>{row.opened}</Typography>
                    <Typography sx={{ fontSize: "14px" }}>Opened</Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box>
                    <Typography>{row.clicked}</Typography>
                    <Typography sx={{ fontSize: "14px" }}>Clicked</Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box>
                    <Typography>{row.replied}</Typography>
                    <Typography sx={{ fontSize: "14px" }}>Replied</Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box>
                    <Typography>{row.positiveReplies}</Typography>
                    <Typography sx={{ fontSize: "14px" }}>
                      Positive Replies
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box>
                    <Typography>{row.bounced}</Typography>
                    <Typography sx={{ fontSize: "14px" }}>Bounced</Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box>
                    <Typography>{row.unsubscribed}</Typography>
                    <Typography sx={{ fontSize: "14px" }}>
                      Unsubscribed
                    </Typography>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AnalyticTable;
