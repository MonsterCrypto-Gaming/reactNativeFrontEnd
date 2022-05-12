const cardContainer = (CUSTOM_HEIGHT, CUSTOM_WIDTH, CUSTOM_COLORS) => ({
  height: CUSTOM_HEIGHT,
  width: CUSTOM_WIDTH,
  borderRadius: 3,
  backgroundColor: CUSTOM_COLORS[0], // #DBFF00
});

const cardImageContainer = (CUSTOM_HEIGHT, CUSTOM_WIDTH) => ({
  position: 'absolute',
  height: CUSTOM_HEIGHT,
  width: CUSTOM_WIDTH,
  borderRadius: 3,
  borderWidth: 2,
  borderColor: '#000',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 2,
});

const cardShadow = (CUSTOM_HEIGHT, CUSTOM_WIDTH, CUSTOM_COLORS) => ({
  width: CUSTOM_WIDTH + 3,
  height: CUSTOM_HEIGHT,
  backgroundColor: CUSTOM_COLORS[1],
  opacity: 0.8,
  position: 'absolute',
  zIndex: -1,
  left: CUSTOM_WIDTH / 30 - 1,
  top: CUSTOM_HEIGHT / 30 + 2,
  borderRadius: 3,
});

const cardImage = (CUSTOM_HEIGHT, CUSTOM_WIDTH) => ({
  height: CUSTOM_HEIGHT - 10,
  width: CUSTOM_WIDTH - 10,
  borderRadius: 3,
});

export {cardContainer, cardImageContainer, cardImage, cardShadow};
