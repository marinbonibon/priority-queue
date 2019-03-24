const Node = require('./node');

class MaxHeap {
  constructor () {
    this.root = null;
    this.parentNodes = [];
  }

  push (data, priority) {
    this.insertNode(data, priority);
    this.shiftNodeUp(data, priority);
  }

  pop () {

  }

  detachRoot () {

  }

  restoreRootFromLastInsertedNode (detached) {

  }

  size () {
    return this.parentNodes.length;

  }

  isEmpty () {

  }

  clear () {
    this.root = null;
    this.parentNodes = [];
  }

  insertNode (node) {

    if (!this.root) {
      this.root = node;
      this.parentNodes.push(this.root);
    } else {
      const currentElement = Math.floor((this.parentNodes.length - 1) / 2);
      this.parentNodes.push(node);
      this.parentNodes[currentElement].appendChild(this.parentNodes[this.parentNodes.length - 1]);
    }
  }

  shiftNodeUp (node) {

  }

  shiftNodeDown (node) {

  }
}

module.exports = MaxHeap;
