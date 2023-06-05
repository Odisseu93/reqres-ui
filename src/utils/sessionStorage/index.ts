function setDataSStorage<T>(key:string, value: T) {
	if(window) {
		window.sessionStorage[key] = JSON.stringify(value);
	}
	return;
}

function getDataSStorage(key:string) {
	if(window) {
		if(!window.sessionStorage[key]) return null;
		return JSON.parse(window.sessionStorage[key]);
	}
	return null;
}

function clearSStorage() {
	if(!window) {
		return null;
	}
	window.sessionStorage.clear();
}

export { setDataSStorage, getDataSStorage, clearSStorage};