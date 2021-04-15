// Define class here

class HTMLElement {
  constructor(tag, content) {
    this.tag = tag;
    this.content = content;
  }

  render() {
    // let dom = document.createElement(this.tag);
    // dom.innerHTML = this.content;
    // return `${dom}`
    return `<${this.tag}>${this.content}</${this.tag}>`;
  }
}

// Export class here
export default HTMLElement;
