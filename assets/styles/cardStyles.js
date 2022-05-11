const cardContainer = (CUSTOM_HEIGHT, CUSTOM_WIDTH) => ({
  height: CUSTOM_HEIGHT,
  width: CUSTOM_WIDTH,
  borderRadius: 3,
  backgroundColor: '#DBFF00',
});

const cardImageContainer = (CUSTOM_HEIGHT, CUSTOM_WIDTH) => ({
  position: 'absolute',
  // backgroundColor: '#DBFF00',
  height: CUSTOM_HEIGHT,
  width: CUSTOM_WIDTH,
  borderRadius: 3,
  borderWidth: 2,
  borderColor: '#000',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 5,
});

const cardShadow = (CUSTOM_HEIGHT, CUSTOM_WIDTH) => ({
  width: CUSTOM_WIDTH + 3,
  height: CUSTOM_HEIGHT,
  backgroundColor: 'rgba(219, 255, 0, 0.6)',
  opacity: 0.8,
  position: 'absolute',
  zIndex: -1,
  left: CUSTOM_WIDTH / 18 + 1,
  top: CUSTOM_HEIGHT / 18 + 2,
  borderRadius: 3,
});

export {cardContainer, cardImageContainer, cardShadow};
