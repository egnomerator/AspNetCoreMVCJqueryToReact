function pushArrayInto(sourceArray, targetArray) {
    targetArray.push(...sourceArray);
}

var Shared = {
    pushArrayInto: function (sourceArray, targetArray) { pushArrayInto(sourceArray, targetArray); }
};

export default Shared;
