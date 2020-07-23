export const setHousing = data => {
    return {
      type: 'setHousing',
      data: data
    }
}

export const removeHousing = () => {
    return {
      type: 'cleanHousing',
    }
}
