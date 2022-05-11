/* eslint-disable no-undef */
export const styles = (CUSTOM_HEIGHT, CUSTOM_WIDTH) =>
  StyleSheet.create({
    cardContainer: {
      height: CUSTOM_HEIGHT,
      width: CUSTOM_WIDTH,
      borderRadius: 3,
    },
    cardImageContainer: {
      position: 'absolute',
      backgroundColor: '#DBFF00',
      height: CUSTOM_HEIGHT,
      width: CUSTOM_WIDTH,
      borderRadius: 3,
      borderWidth: 2,
      borderColor: '#000',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
    },
    customBoxShadow: {
      width: CUSTOM_WIDTH,
      height: CUSTOM_HEIGHT,
      backgroundColor: 'rgba(219, 255, 0, 0.6)',
      opacity: 0.8,
      position: 'absolute',
      zIndex: -1,
      left: 4.3,
      top: 6,
      borderRadius: 3,
    },
  });
