import { render, screen } from '@testing-library/react';
import Hero from '@/components/shared/Hero';

describe('Hero Component', () => {
  it('should render the main headlines', () => {
    render(<Hero />);

    const primaryHeadline = screen.getByText(/Senior Software Engineer/i);
    const secondaryHeadline = screen.getByText(/Amaechi/i);

    expect(primaryHeadline).toBeInTheDocument();
    expect(secondaryHeadline).toBeInTheDocument();
  });

  it('should render the call-to-action buttons', () => {
    render(<Hero />);

    const viewWorkButton = screen.getByRole('link', { name: /View My Work/i });
    const getInTouchButton = screen.getByRole('link', { name: /Get In Touch/i });

    expect(viewWorkButton).toBeInTheDocument();
    expect(getInTouchButton).toBeInTheDocument();
  });
});
