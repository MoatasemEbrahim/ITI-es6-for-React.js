class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }

    // console.log(this.height) // syntax error

    getHeight = () => this.height
}

console.log(this.height) // undefined

const objectFromRectangle = new Rectangle(3,4)

console.log(objectFromRectangle) // { height: 3, width: 4, getHeight: function }

console.log(objectFromRectangle.getHeight()) // 3