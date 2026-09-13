function Butterfly({ className, color }) {
  return <svg className={className} viewBox="0 0 64 54" aria-hidden="true"><g fill={color} stroke="#1a1815" strokeWidth="3" strokeLinejoin="round"><path d="M30 28C9 24 5 8 13 4c10-5 18 9 19 20z" /><path d="M34 28C55 24 59 8 51 4c-10-5-18 9-19 20z" /><path d="M31 30C17 31 14 44 22 49c8 5 11-10 10-19z" /><path d="M33 30c14 1 17 14 9 19-8 5-11-10-10-19z" /></g><path d="M32 27v10" stroke="#1a1815" strokeWidth="3" strokeLinecap="round" /></svg>;
}

export default function Butterflies() {
  return <div className="butterfly-layer" aria-hidden="true"><Butterfly className="butterfly butterfly-one" color="#c96442" /><Butterfly className="butterfly butterfly-two" color="#c9a227" /></div>;
}
