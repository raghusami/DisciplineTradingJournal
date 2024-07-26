// src/components/ExpenseEntryScreen.js
import React from 'react';
import { Box, Container, Button, TextField, Paper, Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { SubtitleOne, SubtitleTwo } from '../CommonStyles';
import Navbar from '../components/Navbar';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';
import Breadcrumbs from '../components/Breadcrumbs';

const defaultCategories = [
  { category: 'Housing', subcategory: 'Home Insurance' },
  { category: 'Housing', subcategory: 'Maintenance/Repairs' },
  { category: 'Utilities', subcategory: 'Electricity' },
  { category: 'Utilities', subcategory: 'Water' },
  { category: 'Transportation', subcategory: 'Car Payments' },
  { category: 'Transportation', subcategory: 'Fuel' },
  { category: 'Food', subcategory: 'Groceries' },
  { category: 'Healthcare', subcategory: 'Insurance Premiums' },
  { category: 'Personal Care', subcategory: 'Haircuts/Salons' },
  { category: 'Gifts & Donations', subcategory: 'Gifts for Family/Friends' },
  { category: 'Pets', subcategory: 'Food' },
  { category: 'Miscellaneous', subcategory: 'Bank Fees' },
];
const paymentMethods = ['Cash', 'Credit Card', 'Debit Card', 'Bank Transfer'];
const ExpenseBulkEntryScreen = () => {
  const location = useLocation();
  const { selectedTemplate } = location.state || { selectedTemplate: [] };

  const [expenses, setExpenses] = useState(defaultCategories.map(item => ({
    ...item,
    amount: '',
    command: '',
    date: null, // Initialize date as null
    paymentMethod: 'Cash' // Default payment method
  })));

  const [newSubcategory, setNewSubcategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');

  const allSubcategories = [...new Set(expenses.map(expense => expense.subcategory))];

  const handleInputChange = (index, field, value) => {
    const updatedExpenses = [...expenses];
    updatedExpenses[index][field] = value;
    setExpenses(updatedExpenses);
  };

  const handleAddSubcategory = () => {
    if (newSubcategory && !allSubcategories.includes(newSubcategory)) {
      setExpenses([
        ...expenses,
        {
          category: 'New Category', // Default category for new subcategories
          subcategory: newSubcategory,
          amount: '',
          command: '',
          date: null, // Initialize date as null
          paymentMethod: 'Cash'
        }
      ]);
      setNewSubcategory('');
    }
  };

  const handleToggleSidebar = () => {
    // Define how to toggle the sidebar
  };

  const handleSaveExpenses = () => {
    // Save the expenses (e.g., send to backend or save to state)
    console.log('Expenses saved:', expenses);
    // Add your save logic here
  };

  // Group expenses by subcategory
  const groupedExpenses = expenses.reduce((acc, expense) => {
    (acc[expense.subcategory] = acc[expense.subcategory] || []).push(expense);
    return acc;
  }, {});
  
  return (
    <>
      <Navbar onToggleSidebar={handleToggleSidebar} title="Expense Entry" />
      <Container maxWidth={false} className="dashboard-container" sx={{ padding: '16px 24px' }}>
      <Breadcrumbs />
        <Paper style={{ padding: 16 }}>
          {Object.keys(groupedExpenses).map(subcategory => (
            <Box key={subcategory} mb={4}>
              <Grid container spacing={2}>
                {groupedExpenses[subcategory].map((expense, index) => (
                  <Grid item xs={12} key={`${expense.category}-${expense.subcategory}-${index}`}>
                    <Box display="flex" alignItems="center" gap={2} flexWrap="wrap">
                      <SubtitleOne variant="subtitle1" sx={{ flex: 1, minWidth: 100 }}>
                        {subcategory}
                      </SubtitleOne>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                          label="Date"
                          size="small"
                          value={expense.date}
                          onChange={(newValue) => handleInputChange(index, 'date', newValue)}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              size="small"
                              sx={{ flex: 1, minWidth: 120 }}
                            />
                          )}
                        />
                      </LocalizationProvider>
                      <FormControl sx={{ flex: 1, minWidth: 120 }}>
                        <InputLabel>Payment Method</InputLabel>
                        <Select
                          size="small"
                          value={expense.paymentMethod}
                          onChange={(e) => handleInputChange(index, 'paymentMethod', e.target.value)}
                        >
                          {paymentMethods.map(method => (
                            <MenuItem key={method} value={method}>{method}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      <TextField
                        label="Amount"
                        type="number"
                        value={expense.amount}
                        onChange={(e) => handleInputChange(index, 'amount', e.target.value)}
                        size="small"
                        sx={{ flex: 1, minWidth: 120 }}
                      />
                      <TextField
                        label="Command"
                        value={expense.command}
                        onChange={(e) => handleInputChange(index, 'command', e.target.value)}
                        size="small"
                        sx={{ flex: 1, minWidth: 120 }}
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))}
          <Box mb={4}>
            <Box display="flex" alignItems="center" mb={2} gap={2} flexWrap="wrap">
              <FormControl sx={{ flex: 2, minWidth: 120 }}>
                <InputLabel>Subcategory</InputLabel>
                <Select
                  size="small"
                  value={selectedSubcategory}
                  onChange={(e) => setSelectedSubcategory(e.target.value)}
                >
                  {allSubcategories.map(subcat => (
                    <MenuItem key={subcat} value={subcat}>{subcat}</MenuItem>
                  ))}
                  <MenuItem value="add-new">Add New...</MenuItem>
                </Select>
              </FormControl>
              {selectedSubcategory === 'add-new' && (
                <TextField
                  size="small"
                  label="New Subcategory"
                  value={newSubcategory}
                  onChange={(e) => setNewSubcategory(e.target.value)}
                  sx={{ flex: 2, minWidth: 120 }}
                />
              )}
              <Button variant="contained" color="primary" onClick={handleAddSubcategory}>
                {selectedSubcategory === 'add-new' ? 'Add Subcategory' : 'Add'}
              </Button>
            </Box>
          </Box>
          <Box mt={4} display="flex" justifyContent="center">
            <Button variant="contained" color="primary" onClick={handleSaveExpenses}>
              Save Expenses
            </Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
};
export default ExpenseBulkEntryScreen;
