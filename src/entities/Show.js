class Show {
  constructor(objectliteral) {
    for(let key of Object.keys(objectliteral)) {
      this[key] = objectliteral[key];
    }
  }
}

export default Show;