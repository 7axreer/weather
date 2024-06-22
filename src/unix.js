function unix(dt, type) {
    const seconds = dt * 1000
    const data = new Date(seconds)
    let result =
        type == 'day' ? data.toLocaleString('uz-Cyrl-UZ', { day: 'numeric' }) :
            type == 'month' ? data.toLocaleString('uz-Cyrl-UZ', { month: 'long' }) :
                type == 'weekday' ? data.toLocaleString('uz-Cyrl-UZ', { weekday: 'long' }) : ''
                
      return result          
}

export default unix