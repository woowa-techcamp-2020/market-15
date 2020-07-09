const METHOD = {
  POST(data) {
    return {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
      }),
    }
  },
}

const api = (() => {
  const request = (url, config) => {
    console.log('[REQUEST]')
    console.log(JSON.stringify({ url, ...config }, null, 2))
    return fetch(url, config)
  }
  const requestWithReturn = (url, config) =>
    request(url, config).then((response) => response.json())
  return {
    checkIdDuplication(id) {
      return request('/user/duplicatuon', METHOD.POST({ id }))
    },
  }
})()

export default api