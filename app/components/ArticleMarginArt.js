'use client';

import { useEffect, useState } from 'react';

function Mark({ kind, color }) {
  if (kind === 0) return <svg viewBox="0 0 70 70"><g fill={color} stroke="#1a1815" strokeWidth="4" strokeLinejoin="round"><path d="M34 35C9 31 4 14 15 8c12-6 20 12 20 25z" /><path d="M36 35C61 31 66 14 55 8c-12-6-20 12-20 25z" /><path d="M35 37c-15 1-18 17-8 23 10 5 10-13 8-23z" /><path d="M35 37c15 1 18 17 8 23-10 5-10-13-8-23z" /></g></svg>;
  if (kind === 1) return <svg viewBox="0 0 70 90"><g fill={color} stroke="#1a1815" strokeWidth="4" strokeLinejoin="round"><path d="M34 80c-8-31 1-56 26-68 13 28 0 56-23 70z" /><path d="M34 80c-23-17-30-43-16-68 27 13 34 41 20 68z" /></g><path d="M35 81V9" stroke="#1a1815" strokeWidth="4" strokeLinecap="round" /></svg>;
  return <svg viewBox="0 0 90 70"><g fill="none" stroke="#1a1815" strokeWidth="4" strokeLinecap="round"><path d="M8 51C17 7 56 4 48 29c-6 20 30 3 34-17" /><path d="M9 57c22 10 51 7 72-7" stroke={color} strokeWidth="9" /></g></svg>;
}

function makeMarks(length) {
  const count = Math.min(24, Math.max(10, Math.ceil(length / 450)));
  const colors = ['#c96442', '#8a9a5b', '#7b93a8', '#c9a227'];
  return Array.from({ length: count }, (_, index) => ({
    id: `${Date.now()}-${index}`,
    kind: Math.floor(Math.random() * 3),
    color: colors[Math.floor(Math.random() * colors.length)],
    side: index % 2 ? 'right' : 'left',
    top: 7 + (index * 84) / Math.max(1, count - 1) + (Math.random() * 5 - 2.5),
    inset: 2 + Math.random() * 11,
    scale: .65 + Math.random() * .8,
    rotation: Math.random() * 32 - 16,
  }));
}

export default function ArticleMarginArt({ contentLength }) {
  const [marks, setMarks] = useState([]);
  useEffect(() => {
    const frame = requestAnimationFrame(() => setMarks(makeMarks(contentLength)));
    return () => cancelAnimationFrame(frame);
  }, [contentLength]);
  return <div className="article-margin-art" aria-hidden="true">{marks.map((mark) => <span key={mark.id} className="article-mark" style={{ top: `${mark.top}%`, [mark.side]: `${mark.inset}%`, transform: `rotate(${mark.rotation}deg) scale(${mark.scale})` }}><Mark kind={mark.kind} color={mark.color} /></span>)}</div>;
}
