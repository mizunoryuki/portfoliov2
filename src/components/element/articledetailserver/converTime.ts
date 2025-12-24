export function convertTime(articleTime : string) {
	const separatedTime = articleTime.split("T")
	return separatedTime[0]
}