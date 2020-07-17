export const setOwnerships = data => {
    return {
      type: 'setOwnerships',
      data: data
    }
}

export const selectOwnership = data => {
    return {
      type: 'selectOwnership',
      data: data
    }
}

export const cleanOwenerships = () => {
    return {
      type: 'cleanOwenerships',
    }
}
