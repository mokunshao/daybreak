import React from 'react';
import { render } from '@testing-library/react';
import { CodePreview } from '../code-preview';

function Example() {
  const code = `
public class Main {
    public static void main(String[] args) {
    System.out.println("Hello, World!");
  }
}
    `;
  return (
    <div>
      <CodePreview code={code.trim()} />
    </div>
  );
}

describe('CodePreview', () => {
  it('exits', () => {
    expect(CodePreview).toBeTruthy();
    expect(<Example />).toBeTruthy();
  });

  it('match snapshot', () => {
    const { asFragment } = render(<Example />);
    expect(asFragment()).toMatchSnapshot();
  });
});
