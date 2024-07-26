// src/pages/DashboardPage.js
import React from 'react';
import { Container, Grid, Typography, Paper, Tabs, Tab, Box, Tooltip, IconButton, Button } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { PieChart, Pie, Cell, Tooltip as RechartsTooltip, Legend, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Label } from 'recharts';
import { styled } from '@mui/material/styles';
import Navbar from '../components/Navbar';  // Import Navbar component
import '../styles/DashboardPage.css';
import { SubtitleOne, StyledButton, SubtitleTwo,StyledTab } from '../CommonStyles';
import { Link } from 'react-router-dom';
import { Add } from '@mui/icons-material'; // Import Add icon
import Breadcrumbs from '../components/Breadcrumbs';
// Theme color
const themeColor = '#6357A6';

const data1 = [
  { name: 'Winners', value: 19 },
  { name: 'Losers', value: 11 },
];

const data2 = [
  { name: 'Winners', value: 14 },
  { name: 'Losers', value: 5 },
];

const lineData = [
  { name: '06/01/2022', value: 0 },
  { name: '06/07/2022', value: 2000 },
  { name: '06/13/2022', value: 1500 },
  { name: '06/20/2022', value: 5000 },
  { name: '06/27/2022', value: 10000 },
];

const COLORS = ['#5DC2A8', '#EC7C7E'];

const DashboardPage = () => {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleToggleSidebar = () => {
    // Define how to toggle the sidebar
  };

  const renderChangeIcon = (value) => {
    return value >= 0 ? (
      <ArrowUpwardIcon fontSize="small" sx={{ color: '#5DC2A8' }} />
    ) : (
      <ArrowDownwardIcon fontSize="small" sx={{ color: '#EC7C7E' }} />
    );
  };

  return (
    <>
      <Navbar onToggleSidebar={handleToggleSidebar} title="Dashboard" />
      <Container maxWidth={false} className="dashboard-container" sx={{ padding: '16px 24px' }}>
      <Breadcrumbs />
        <Grid container spacing={2}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={10}>
              <SubtitleTwo variant="subtitle1" mt={2}>Last import was mode 10-07-2024 | from 01-07-2024</SubtitleTwo>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <StyledButton
                component={Link}
                to="/trade-add"  // Add the route for the Add Trade screen
                variant="contained"
                color="primary"
                startIcon={<Add />}
                className="add-trade-button"
              >
                Import Trade
              </StyledButton>
            </Grid>
          </Grid>
          {/* First Row */}
          <Grid container spacing={2} mt={1}>
            <Grid item xs={12} sm={6} md={3}>
              <Paper className="dashboard-card">
                <SubtitleOne variant="subtitle1">Total Net P&L
                  <Tooltip title="This is the total net profit and loss from all trades.">
                    <IconButton size="small" sx={{ ml: 1 }}>
                      {renderChangeIcon(7674.45)}
                    </IconButton>
                  </Tooltip>
                </SubtitleOne>
                <Typography variant="h6">$7,674.45</Typography>
                <Typography variant="body2">Trades in total: 30</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper className="dashboard-card">
                <SubtitleOne variant="subtitle1">Profit Factor
                  <Tooltip title="This metric measures the ratio of gross profit to gross loss.">
                    <IconButton size="small" sx={{ ml: 1 }}>
                      {renderChangeIcon(1.64)}
                    </IconButton>
                  </Tooltip>
                </SubtitleOne>
                <Typography variant="h6" mt={2}>1.64</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper className="dashboard-card">
                <SubtitleOne variant="subtitle1">Average Winning Trade
                  <Tooltip title="This represents the average amount won per successful trade.">
                    <IconButton size="small" sx={{ ml: 1 }}>
                      {renderChangeIcon(1036.45)}
                    </IconButton>
                  </Tooltip>
                </SubtitleOne>
                <Typography variant="h6" mt={2}>$1,036.45</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper className="dashboard-card">
                <SubtitleOne variant="subtitle1">Average Losing Trade
                  <Tooltip title="This represents the average amount lost per unsuccessful trade.">
                    <IconButton size="small" sx={{ ml: 1 }}>
                      {renderChangeIcon(-1092.56)}
                    </IconButton>
                  </Tooltip>
                </SubtitleOne>
                <Typography variant="h6" color="error" mt={2}>-$1,092.56</Typography>
              </Paper>
            </Grid>
          </Grid>

          {/* Second Row */}
          <Box mt={1} width="100%">
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <Paper className="dashboard-card">
                  <SubtitleOne variant="subtitle2">Winning % By Trades</SubtitleOne>
                  <ResponsiveContainer width="100%" height={180}>
                    <PieChart>
                      <Pie
                        data={data1}
                        cx="40%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={70}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {data1.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                        <Label
                          value="63%"
                          position="center"
                          fill="#000"
                          fontSize={24}
                          fontWeight="bold"
                        />
                      </Pie>
                      <RechartsTooltip />
                      <Legend layout="vertical" align="right" verticalAlign="middle" />
                    </PieChart>
                  </ResponsiveContainer>
                </Paper>
                <p>&nbsp;</p>
                <Paper className="dashboard-card" mt={2}>
                  <SubtitleOne variant="subtitle2">Winning % By Days</SubtitleOne>
                  <ResponsiveContainer width="100%" height={180}>
                    <PieChart>
                      <Pie
                        data={data2}
                        cx="40%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={70}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {data2.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                        <Label
                          value="74%"
                          position="center"
                          fill="#000"
                          fontSize={24}
                          fontWeight="bold"
                        />
                      </Pie>
                      <RechartsTooltip />
                      <Legend layout="vertical" align="right" verticalAlign="middle" />
                    </PieChart>
                  </ResponsiveContainer>
                </Paper>
              </Grid>

              <Grid item xs={12} md={9}>
                <Paper className="dashboard-card">
                  <Tabs value={tabValue} onChange={handleTabChange} aria-label="p&l tabs">
                    <StyledTab label="Daily Net P&L" />
                    <StyledTab label="Cumulative P&L" />
                  </Tabs>
                  <div className="tab-content">
                    {tabValue === 0 && (
                      <ResponsiveContainer width="100%" height={250}>
                        <LineChart data={lineData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <RechartsTooltip />
                          <Legend />
                          <Line type="monotone" dataKey="value" stroke="#8884d8" />
                        </LineChart>
                      </ResponsiveContainer>
                    )}
                    {tabValue === 1 && <SubtitleOne variant="body2">Cumulative P&L Chart Here</SubtitleOne>}
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Container>
    </>
  );
};

export default DashboardPage;
