export const setConfig = data => {
    return {
      type: 'setConfig',
      config: data
    }
}

export const removeConfig = () => {
    return {
      type: 'removeConfig',
    }
}
