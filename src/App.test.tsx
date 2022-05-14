import App from 'App';
import { render, screen } from 'testUtils';
import { describe, expect, it } from 'vitest';

describe('the app', () => {
  it('should render', () => {
    render(<App />);
    expect(
      screen.getByRole('link', { name: /Use this template/i })
    ).toBeInTheDocument();
  });
});
