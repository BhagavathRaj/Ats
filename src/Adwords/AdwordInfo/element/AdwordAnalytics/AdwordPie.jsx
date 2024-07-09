import { Grid } from "@mui/material";
import React, { useState } from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";
import { Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import flatcolor from '../../../../component/images/flatcolor.png';
import edit from '../../../../component/images/edit.png';

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

const storageData = [
  { name: "Used", value: 1260 },
  { name: "Free", value: 5120 - 1260 },
];

const COLORS = ["#FF5733", "#0EC15E"];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 3}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={3} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`Storage`}</text>

      {payload.name === "Free" ? (
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          dy={18}
          textAnchor={textAnchor}
          fill="#999"
        >
          {`Available :${(value / 1024).toFixed(2)} GB`}
        </text>
      ) : (
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          dy={18}
          textAnchor={textAnchor}
          fill="#999"
        >
          {`Used : ${(value / 1024).toFixed(2)} GB`}
        </text>
      )}
    </g>
  );
};

const AdwordPie = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  return (
    <Grid container>
      <Grid item xs={12} sm={6} sx={{ border: "1px solid #DADFE2", padding: "20px" }}>
        <Box sx={{ display: "flex" }}>
          <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
            Lead Stats(49)
          </Typography>
          <BootstrapTooltip title="Breakdown of all your leads intent.">
            <ErrorOutlineOutlinedIcon
              sx={{
                fontSize: "20px",
                color: "#9EA0B6",
                marginTop: "2px",
                marginLeft: "5px",
              }}
            />
          </BootstrapTooltip>
        </Box>
        <PieChart width={350} height={230}>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            isAnimationActive={true}
            data={storageData}
            innerRadius={60}
            outerRadius={90}
            labelLine={false}
            fill="#8884d8"
            dataKey="value"
            startAngle={180}
            endAngle={-180}
            onMouseEnter={onPieEnter}
          >
            {storageData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </Grid>

      <Grid
        item
        xs={12}
        sm={6}
        sx={{ border: "1px solid #DADFE2", padding: "20px" }}
      >
        <Box sx={{ display: "flex" }}>
          <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
            Campaign Reach
          </Typography>
          <BootstrapTooltip title="Covers total message sent across all platforms.">
            <ErrorOutlineOutlinedIcon
              sx={{
                fontSize: "20px",
                color: "#9EA0B6",
                marginTop: "2px",
                marginLeft: "5px",
              }}
            />
          </BootstrapTooltip>
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "35px" }}
        >
          <Box sx={{ padding: "20px", alignItems: "center" }}>
            <Typography
              sx={{
                fontSize: "22px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              0
            </Typography>
            <Typography sx={{ fontSize: "14px" }}>
              Total Messages Sent
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              padding: "20px",
              borderLeft: "1px solid #DFE0FF",
              alignItems: "center",
            }}
          >
            <EmailOutlinedIcon sx={{ color: "#6E58F1", marginRight: "15px" }} />
            <Typography sx={{ fontSize: "14px" }}>0 Emails</Typography>
            <BootstrapTooltip title="Total emails sent for the campaign">
              <ErrorOutlineOutlinedIcon
                sx={{
                  fontSize: "18px",
                  color: "#9EA0B6",
                  marginLeft: "7px",
                }}
              />
            </BootstrapTooltip>
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12} sm={6} sx={{ border: "1px solid #DADFE2", padding: "20px" }}>
        <Box sx={{ display: "flex" }}>
          <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
            Sender Email Health Breakdown
          </Typography>
          <BootstrapTooltip title="Warmup reputation of connected mailboxes.">
            <ErrorOutlineOutlinedIcon
              sx={{
                fontSize: "20px",
                color: "#9EA0B6",
                marginTop: "3px",
                marginLeft: "5px",
              }}
            />
          </BootstrapTooltip>
        </Box>
      <Box sx={{marginTop:"20px"}}>
        <Box sx={{display:"flex",alignItems:"center",marginTop:"20px"}}>
        <img src={flatcolor} alt="pieImg" style={{marginRight: "7px", width:" 25px", height: "25px",marginLeft:"-4px"}}/>

            <Typography sx={{fontSize:"20px",fontWeight:"bold"}}>Total Sender Email</Typography>
            <Typography sx={{fontSize:"20px",fontWeight:"bold",marginLeft:"auto"}}>1</Typography>
        </Box>

        <Box sx={{display:"flex",alignItems:"center",marginTop:"20px"}}>
        <Box
              sx={{
                backgroundColor: "#00BCD4",
                height: "16px",
                width: "16px",
                borderRadius: "100%",
                marginRight: "15px",
              }}
            ></Box>
            <Typography >Email Values between 90-100</Typography>
            <BootstrapTooltip title="Good reputation, no action required.">
            <img  src={edit} alt="Edit" style={{ marginLeft: "10px", height: "16px",cursor:"pointer" }} />
            </BootstrapTooltip>
            <Typography sx={{marginLeft:"auto"}}>0</Typography>
        </Box>
        <Box sx={{display:"flex",alignItems:"center",marginTop:"20px"}}>
        <Box
              sx={{
                backgroundColor: "#3F51B5",
                height: "16px",
                width: "16px",
                borderRadius: "100%",
                marginRight: "15px",
              }}
            ></Box>
            <Typography >Email Values between 70-90</Typography>
            <BootstrapTooltip title="Acceptable reputation, reduce outbound volume where possible.">
            <img  src={edit} alt="Edit" style={{ marginLeft: "10px", height: "16px",cursor:"pointer" }} />
            </BootstrapTooltip>
            <Typography sx={{marginLeft:"auto"}}>0</Typography>
        </Box>
        <Box sx={{display:"flex",alignItems:"center",marginTop:"20px"}}>
        <Box
              sx={{
                backgroundColor: "#448AFF",
                height: "16px",
                width: "16px",
                borderRadius: "100%",
                marginRight: "15px",
              }}
            ></Box>
            <Typography >Email Values between 0-70</Typography>
            <BootstrapTooltip title="Action required, remove from campaigns, warmup till 70 or above.">
            <img  src={edit} alt="Edit" style={{ marginLeft: "10px", height: "16px",cursor:"pointer" }} />
            </BootstrapTooltip>
            <Typography sx={{marginLeft:"auto"}}>0</Typography>
        </Box>
      </Box>
      </Grid>

      <Grid item xs={12} sm={6} sx={{ border: "1px solid #DADFE2", padding: "20px" }}>
        <Box sx={{ display: "flex" }}>
          <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
            Lead Quality
          </Typography>
          <BootstrapTooltip title="Depicts the email deliverability & intent quality of your lead lists.">
            <ErrorOutlineOutlinedIcon
              sx={{
                fontSize: "20px",
                color: "#9EA0B6",
                marginTop: "3px",
                marginLeft: "7px",
              }}
            />
          </BootstrapTooltip>
        </Box>

        <Box sx={{ padding: "16px 16px 10px 16px" }}>
          <Typography
            sx={{
              fontSize: "22px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            0
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#FFEBD9",
                height: "10px",
                width: "10px",
                borderRadius: "100%",
                marginRight: "10px",
              }}
            ></Box>
            <Typography>Leads Bounced</Typography>
            <BootstrapTooltip title="These emails were invalid.">
            <ErrorOutlineOutlinedIcon
              sx={{
                fontSize: "20px",
                color: "#9EA0B6",
                marginLeft: "7px",
              }}
            />
            </BootstrapTooltip>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            padding: "20px 0 20px 0",
            flexDirection: "column",
            "@media screen and (min-width: 600px)": {
              flexDirection: "row",
            },
          }}
        >
          <Box sx={{padding:"10px"}}>
            <Typography
              sx={{
                fontSize: "22px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              0
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  backgroundColor: "#F9F1E9",
                  height: "10px",
                  width: "10px",
                  borderRadius: "100%",
                  marginRight: "10px",
                }}
              ></Box>
              <Typography>Leads Unsubscribed</Typography>
              <BootstrapTooltip title="Leads who were not interested in your offer.">
              <ErrorOutlineOutlinedIcon
                sx={{
                  fontSize: "20px",
                  color: "#9EA0B6",
                  marginLeft: "7px",
                }}
              />
              </BootstrapTooltip>
            </Box>
          </Box>
          <Box sx={{padding:"10px 10px 10px 35px" }}>
            <Typography
              sx={{
                fontSize: "22px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              0
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  backgroundColor: "#F2C193",
                  height: "10px",
                  width: "10px",
                  borderRadius: "100%",
                  marginRight: "10px",
                }}
              ></Box>
              <Typography>Leads Reached</Typography>
              <BootstrapTooltip title="Total Leads reached across selected campaigns.">
              <ErrorOutlineOutlinedIcon
                sx={{
                  fontSize: "20px",
                  color: "#9EA0B6",
                  marginLeft: "7px",
                }}
              />
              </BootstrapTooltip>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AdwordPie;
