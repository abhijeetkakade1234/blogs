import { ImageResponse } from 'next/og';
import { getAllSlugs, getPostBySlug } from '../../../lib/mdx';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export async function generateStaticParams() { return getAllSlugs(); }

export default async function OpenGraphImage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const variant = slug.split('').reduce((total, character) => total + character.charCodeAt(0), 0) % 4;
  const motifs = [
    { left: '#c96442', right: '#7b93a8', shape: '50% 50% 42% 58%' },
    { left: '#8a9a5b', right: '#c9a227', shape: '58% 42% 55% 45%' },
    { left: '#7b93a8', right: '#c96442', shape: '42% 58% 40% 60%' },
    { left: '#c9a227', right: '#8a9a5b', shape: '60% 40% 48% 52%' },
  ][variant];

  return new ImageResponse(<div style={{ background: '#F0EEE6', color: '#1A1815', display: 'flex', height: '100%', width: '100%', padding: '58px', position: 'relative' }}><div style={{ border: '3px solid #1A1815', display: 'flex', flex: 1, padding: '52px', position: 'relative' }}><div style={{ display: 'flex', flexDirection: 'column', width: '64%' }}><div style={{ color: '#675F55', display: 'flex', fontFamily: 'Arial', fontSize: 24, marginBottom: 28 }}>{post.date} · BLOGS BY ABHI</div><div style={{ display: 'flex', fontFamily: 'Georgia', fontSize: 65, fontWeight: 700, letterSpacing: '-3px', lineHeight: 1.02, maxWidth: 650 }}>{post.title}</div><div style={{ color: '#4B443B', display: 'flex', fontFamily: 'Arial', fontSize: 27, lineHeight: 1.35, marginTop: 28, maxWidth: 620 }}>{post.description}</div></div><div style={{ alignItems: 'center', display: 'flex', flex: 1, justifyContent: 'center', position: 'relative' }}><div style={{ background: motifs.left, border: '7px solid #1A1815', borderRadius: motifs.shape, display: 'flex', height: 230, position: 'absolute', transform: 'rotate(-18deg)', width: 190 }} /><div style={{ background: motifs.right, border: '7px solid #1A1815', borderRadius: '45% 55% 48% 52%', display: 'flex', height: 190, marginLeft: 70, marginTop: 120, position: 'absolute', transform: 'rotate(21deg)', width: 215 }} /><div style={{ background: '#F5E3C7', border: '7px solid #1A1815', borderRadius: 999, display: 'flex', height: 74, marginBottom: 110, position: 'absolute', width: 74 }} /></div></div></div>, size);
}
