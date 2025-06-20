import { useEffect, useState } from 'react';

function MarkdownViewer(url: string) {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then(setMarkdown);
  }, [url]);

  return markdown;
}

export { MarkdownViewer };