let mixin={
    filters: {
        keepTwoNum: function (value) {
            value=Number(value)
            return value.toFixed(2)
    
        }
      }
}
export default mixin 
