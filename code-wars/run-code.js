function oddOrEven(array) {
  console.log(array.reduce((sum, current) => sum + current, 0) % 2 ? 'odd' : 'even')
}

oddOrEven([-1023, 1, -2]) 