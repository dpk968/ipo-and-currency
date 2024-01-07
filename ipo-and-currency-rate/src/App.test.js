import { render,screen } from "@testing-library/react";
import App from './App';

test('render header in App Component',()=>{
  render(<App/>)
  const headElement = screen.getByText('Welcome to Your Stock Market');
  expect(headElement).toBeInTheDocument();
});