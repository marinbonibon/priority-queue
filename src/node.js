class Node {
  constructor (data, priority) {
    this.data = data;
    this.priority = priority;
    this.parent = null;
    this.left = null;
    this.right = null;
  }

  appendChild (node) {
    if (!this.left) {
      this.left = node;
      node.parent = this;
    } else {
      if (!this.right) {
        this.right = node;
        node.parent = this;
      }
    }
  }

  removeChild (node) {
    if (node !== this.left && node !== this.right) {
      throw new Error();
    }

    if (node === this.left) {
      this.left = null;
      node.parent = null;
    }
    if (node === this.right) {
      this.right = null;
      node.parent = null;
    }

  }

  remove () {
    if (this.parent) {
      this.parent.removeChild(this);
    }
  }

  swapWithParent () {
    if (this.parent) {
      const oldParent = Object.assign({}, this.parent);
      const oldThisLeft = this.left;
      const oldThisRight = this.right;
      const oldParentLeft = this.parent.left;
      const oldParentRight = this.parent.right;

      if (this.left) {
        this.left.parent = this.parent;
      }
      if (this.right) {
        this.right.parent = this.parent;
      }

      if (this.parent.left && this.parent.left !== this) {
        this.parent.left.parent = this;
        this.left = oldParentLeft;
        this.right = this.parent;
      }

      if (this.parent.right && this.parent.right !== this) {
        this.parent.right.parent = this;
        this.right = oldParentRight;
        this.left = this.parent;
      }

      if(this.parent.parent) {
        if(this.parent.parent.left === this.parent) {
          this.parent.parent.left = this;
        }
        if(this.parent.parent.right === this.parent) {
          this.parent.parent.right = this;
        }
      }

      this.parent.data = this.data;
      this.parent.priority = this.priority;
      this.parent.parent = this;
      this.parent.left = oldThisLeft;
      this.parent.right = oldThisRight;

      this.data = oldParent.data;
      this.priority = oldParent.priority;
      this.parent = oldParent.parent;
    }
  }
}

module.exports = Node;
