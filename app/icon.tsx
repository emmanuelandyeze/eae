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
          background: '#0e0e0e',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          fontFamily: 'serif',
          fontWeight: 'bold',
          borderRadius: '30%',
          border: '1px solid rgba(255, 255, 255, 0.15)',
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
