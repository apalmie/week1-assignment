// Import HTMLElement here
import HTMLElement from './HTMLElement'

// Define class here
class DivElement extends HTMLElement {
  constructor(content) {
    super('div',content);
  };

  render() {
    return super.render();
  }
};

// Export class here
export default DivElement;
