function pushArrayInto(sourceArray, targetArray) {
    targetArray.push(...sourceArray);
}

var sharedAPI = {
    pushArrayInto: function (sourceArray, targetArray) { pushArrayInto(sourceArray, targetArray); }
};

export default sharedAPI;
