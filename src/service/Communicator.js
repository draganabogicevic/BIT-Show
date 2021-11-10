import { getShows } from "./service";
import Show from "../entities/Show"

class Communicator {
  static getAll () {
    return getShows().then(json => json.map(show => new Show(show)))
  }
}

export default Communicator;