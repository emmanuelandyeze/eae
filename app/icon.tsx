import { ImageResponse } from 'next/og';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 13,
          background: '#151312',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#c5ff41',
          fontFamily: 'sans-serif',
          fontWeight: 'bold',
          letterSpacing: '-0.04em',
          borderRadius: '30%',
          border: '1px solid rgba(197, 255, 65, 0.25)',
        }}
      >
        EAE
      </div>
    ),
    {
      ...size,
    }
  );
}
