import { render, screen } from '@testing-library/react';
import SideNav from './components/SideNav/SideNav.js';
import { MemoryRouter } from 'react-router-dom';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("should show the side navbar", () => {
  render(
    <MemoryRouter>
      <SideNav />
    </MemoryRouter>
  )

  const element = screen.getByText(/Elements/i);
  expect(element).toBeInTheDocument();
})