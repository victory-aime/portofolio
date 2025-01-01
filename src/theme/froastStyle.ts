export const setFroastStyle = (
  color: string,
  opacity: number,
  borderRadius?: string,
  position?: string,
) => ({
  background: 'rgba(10,16,16,0.3)',
  borderRadius,
  _before: {
    content: '""',
    w: '100%',
    h: '100%',
    position: !position && 'absolute',
    insetStart: 0,
    top: 0,
    background: 'rgba(10,16,16,0.3)',
    borderRadius,
  },
});
