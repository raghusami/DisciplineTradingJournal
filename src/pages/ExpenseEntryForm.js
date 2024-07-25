// src/components/ExpenseEntryForm.js
import React, { useState } from 'react';
import Navbar from '../components/Navbar';  // Import Navbar component
import {
  Box, Button,TextField, MenuItem,Container, Checkbox, FormControlLabel, Typography, Grid, Paper,
} from '@mui/material';
import {
  StyledButton,StyledTextField
} from '../CommonStyles';
const categories = [
  'Food', 'Travel', 'Utilities', 'Entertainment', 'Shopping', 'Other',
];

const paymentMethods = [
  'Cash', 'Credit Card', 'Debit Card', 'Bank Transfer', 'Other',
];

const handleToggleSidebar = () => {
  // Define how to toggle the sidebar
};

const ExpenseEntryForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    amount: '',
    category: '',
    paymentMethod: '',
    description: '',
    merchant: '',
    location: '',
    tags: '',
    currency: '',
    projectAccount: '',
    sharedDetails: '',
    receipt: null,
    paymentConfirmation: '',
    isRecurring: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      receipt: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  const textFieldStyle = {
    padding: '0px 0px',
  };

  return (
    <>
    <Navbar onToggleSidebar={handleToggleSidebar} title="Expense Entry" />
    <Container maxWidth={false} className="dashboard-container" sx={{ padding: '16px 24px' }}>
    <Paper style={{ padding: 16 }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <StyledTextField
              fullWidth
              label="Date"
              name="date"
              type="date"
              size="small"
              value={formData.date}
              onChange={handleInputChange}
              required
              InputProps={{
                style: textFieldStyle,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <StyledTextField
              fullWidth
              label="Amount"
              name="amount"
              type="number"
              value={formData.amount}
              onChange={handleInputChange}
              required
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <StyledTextField
              select
              fullWidth
              label="Category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              required
              size="small"
            >
              {categories.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </StyledTextField>
          </Grid>
          <Grid item xs={12} sm={4}>
            <StyledTextField
              select
              fullWidth
              label="Payment Method"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleInputChange}
              required
              size="small"
            >
              {paymentMethods.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </StyledTextField>
          </Grid>
          <Grid item xs={12} sm={4}>
            <StyledTextField
              fullWidth
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <StyledTextField
              fullWidth
              label="Merchant"
              name="merchant"
              value={formData.merchant}
              onChange={handleInputChange}
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <StyledTextField
              fullWidth
              label="Location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              size="small"ze="small"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <StyledTextField
              fullWidth
              label="Tags"
              name="tags"
              value={formData.tags}
              onChange={handleInputChange}
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <StyledTextField
              fullWidth
              label="Currency"
              name="currency"
              value={formData.currency}
              onChange={handleInputChange}
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <StyledTextField
              fullWidth
              label="Project/Account"
              name="projectAccount"
              value={formData.projectAccount}
              onChange={handleInputChange}
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <StyledTextField
              fullWidth
              label="Shared Expense Details"
              name="sharedDetails"
              value={formData.sharedDetails}
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button
              variant="contained"
              component="label"
              fullWidth
            >
              Upload Receipt
              <input
                type="file"
                hidden
                onChange={handleFileChange}
              />
            </Button>
          </Grid>
          <Grid item xs={12} sm={4}>
            <StyledTextField
              fullWidth
              label="Payment Confirmation Details"
              name="paymentConfirmation"
              value={formData.paymentConfirmation}
              onChange={handleInputChange}
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.isRecurring}
                  onChange={handleCheckboxChange}
                  name="isRecurring"
                />
              }
              label="Mark as Recurring"
            />
          </Grid>
          <Grid item xs={4}>
            <StyledButton variant="contained" color="primary" type="submit" fullWidth>
              Submit
            </StyledButton>
          </Grid>
        </Grid>
      </form>
    </Paper>
    </Container>
      </>
  );
};

export default ExpenseEntryForm;
