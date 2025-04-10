
// Generate mock binary data for visualization
export const generateMockBinary = () => {
  const bytes = [];
  for (let i = 0; i < 256; i++) {
    bytes.push(Math.floor(Math.random() * 256).toString(16).padStart(2, '0'));
  }
  return bytes;
};
