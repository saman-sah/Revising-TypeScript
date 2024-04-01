"use strict";
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["OK"] = 200] = "OK";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
    StatusCodes[StatusCodes["Unauthorized"] = 401] = "Unauthorized";
    StatusCodes[StatusCodes["PaymentRequired"] = 402] = "PaymentRequired";
    StatusCodes[StatusCodes["Forbidden"] = 403] = "Forbidden";
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
})(StatusCodes || (StatusCodes = {}));
const okNumberIndex = StatusCodes["OK"];
const stringBadRequest = StatusCodes[400];
const Unauthorized = StatusCodes["NotFound"];
console.log('okNumberIndex', okNumberIndex);
console.log('stringBadRequest', stringBadRequest);
console.log('Unauthorized', Unauthorized);
var MouseAction;
(function (MouseAction) {
    MouseAction["MouseDown"] = "md";
    MouseAction["MouseUpOutside"] = "mup";
    MouseAction["MouseUpInside"] = "mui";
})(MouseAction || (MouseAction = {}));
const handleMouseAction = (action) => {
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
var CompassDirection;
(function (CompassDirection) {
    CompassDirection[CompassDirection["North"] = 0] = "North";
    CompassDirection[CompassDirection["East"] = 1] = "East";
    CompassDirection[CompassDirection["South"] = 2] = "South";
    CompassDirection[CompassDirection["West"] = 3] = "West";
})(CompassDirection || (CompassDirection = {}));
const north = CompassDirection.North;
console.log('north', north);
