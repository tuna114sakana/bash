"use strict";

var Input = require('postcss/lib/input');

var SafeParser = require('./safe-parser');

module.exports = function safeParse(css, opts) {
  var input = new Input(css, opts);
  var parser = new SafeParser(input);
  parser.parse();
  return parser.root;
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhZmUtcGFyc2UuZXM2Il0sIm5hbWVzIjpbIklucHV0IiwicmVxdWlyZSIsIlNhZmVQYXJzZXIiLCJtb2R1bGUiLCJleHBvcnRzIiwic2FmZVBhcnNlIiwiY3NzIiwib3B0cyIsImlucHV0IiwicGFyc2VyIiwicGFyc2UiLCJyb290Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLEtBQUssR0FBR0MsT0FBTyxDQUFDLG1CQUFELENBQW5COztBQUVBLElBQUlDLFVBQVUsR0FBR0QsT0FBTyxDQUFDLGVBQUQsQ0FBeEI7O0FBRUFFLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixTQUFTQyxTQUFULENBQW9CQyxHQUFwQixFQUF5QkMsSUFBekIsRUFBK0I7QUFDOUMsTUFBSUMsS0FBSyxHQUFHLElBQUlSLEtBQUosQ0FBVU0sR0FBVixFQUFlQyxJQUFmLENBQVo7QUFFQSxNQUFJRSxNQUFNLEdBQUcsSUFBSVAsVUFBSixDQUFlTSxLQUFmLENBQWI7QUFDQUMsRUFBQUEsTUFBTSxDQUFDQyxLQUFQO0FBRUEsU0FBT0QsTUFBTSxDQUFDRSxJQUFkO0FBQ0QsQ0FQRCIsInNvdXJjZXNDb250ZW50IjpbImxldCBJbnB1dCA9IHJlcXVpcmUoJ3Bvc3Rjc3MvbGliL2lucHV0JylcblxubGV0IFNhZmVQYXJzZXIgPSByZXF1aXJlKCcuL3NhZmUtcGFyc2VyJylcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzYWZlUGFyc2UgKGNzcywgb3B0cykge1xuICBsZXQgaW5wdXQgPSBuZXcgSW5wdXQoY3NzLCBvcHRzKVxuXG4gIGxldCBwYXJzZXIgPSBuZXcgU2FmZVBhcnNlcihpbnB1dClcbiAgcGFyc2VyLnBhcnNlKClcblxuICByZXR1cm4gcGFyc2VyLnJvb3Rcbn1cbiJdLCJmaWxlIjoic2FmZS1wYXJzZS5qcyJ9
