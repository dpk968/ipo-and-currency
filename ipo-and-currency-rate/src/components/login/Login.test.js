import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from '../../context/AuthContext';
import Login from './Login';

// Mocking useAuth context
jest.mock('../../context/AuthContext', () => ({
  ...jest.requireActual('../../context/AuthContext'),
  useAuth: jest.fn(),
}));

describe('Login Component', () => {
  it('renders login form and handles login', async () => {
    // Mock the useAuth function
    const mockUserLogin = jest.fn();
    jest.spyOn(AuthProvider, 'useAuth').mockReturnValue({ userLogin: mockUserLogin });

    // Render the component
    const { getByText, getByLabelText } = render(
      <Router>
        <AuthProvider>
          <Login />
        </AuthProvider>
      </Router>
    );

    fireEvent.change(getByLabelText('Username'), { target: { value: 'deepak' } });
    fireEvent.change(getByLabelText('Password'), { target: { value: 'deepak' } });
    fireEvent.click(getByText('Login'));

    await waitFor(() => {
      expect(mockUserLogin).toHaveBeenCalledTimes(1);
    });

  });

});
