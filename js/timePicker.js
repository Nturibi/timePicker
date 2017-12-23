/*takes in a container for the hour, minute, the minutes range and am/pm container*/
function timePicker(hElem, mElem, minuteRange, pElem){
	const hours =[];
	for (let i = 1; i <= 12; i++){
		let num = i;
		if  ( i < 10){

			num = "0"+i;
		}
		hours.push(num);
	}
		console.log("picking time2");
	const minutes = [];
	for (let j = 0; j <= (60-minuteRange) ; j += minuteRange){
		let num = j;
		if  ( j < 10){
			num = "0"+j;
		}
		minutes.push(num);
	}
	const amOrPm = ["AM", "PM"];
	tagAndAppend(hElem, hours);
	tagAndAppend(mElem, minutes);
	tagAndAppend(pElem, amOrPm);
}
/*Creates tags and appends the tags to the container element */
function tagAndAppend(cElem, arr){
	const allElems = [];
	for (let i = 0; i < arr.length; i++){
		let elem = "<option>"+arr[i]+"</option>";
		allElems.push(elem);
	}
	for (let elem of cElem){
		elem.innerHTML = allElems;
	}
}