enum StatusCodes {
  OK = 200,
  BadRequest = 400,
  Unauthorized,
  PaymentRequired,
  Forbidden,
  NotFound,
}
const okNumberIndex = StatusCodes["OK"];
const stringBadRequest = StatusCodes[400];
const Unauthorized = StatusCodes["NotFound"];
console.log('okNumberIndex', okNumberIndex);
console.log('stringBadRequest', stringBadRequest);
console.log('Unauthorized', Unauthorized);



enum MouseAction {
  MouseDown = "md",
  MouseUpOutside = "mup",
  MouseUpInside = "mui",
}

const handleMouseAction = (action: MouseAction) => {
  switch (action) {
    case MouseAction.MouseDown:
      console.log("Mouse Down");
      break;

    case MouseAction.MouseUpOutside:
      console.log("MouseUpOutside");
      break;

    case MouseAction.MouseUpInside:
      console.log("MouseUpInside");
      break;
  }
};


enum CompassDirection {
  North,
  East,
  South,
  West,
}


const north = CompassDirection.North
console.log('north', north);