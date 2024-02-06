function binarySearch(list, element) {
    let leftIndex = 0;
    let rightIndex = list.length - 1;

    while(leftIndex <= rightIndex){
        let midIndex = Math.floor((leftIndex + rightIndex) / 2);
        
        if(element == list[midIndex]){
            return midIndex;
        }
        
        if(element > list[midIndex]){
            leftIndex = midIndex + 1;
        } else {
            rightIndex = midIndex - 1;
        }
    }
        
    return -1;
}
