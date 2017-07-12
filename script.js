const forSearch = `Lorem ipsum dolor \`1499587246497\` -> \`https://example.io\` sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis "Aug 9, 2016" => "file:///some-file.md" nostrud exercitation 
ullamco laboris nisi ut aliquip 'Wed, 22 Jan 2015 00:00:00 GMT' :: 'http://something.com.ua' ex ea commodo consequat. Duis aute 
irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

const pattern = /((`)|(")|(')).*((`)|(")|('))\s((->)|(=>)|(::))\s((`)|(")|('))\w*:\/{2,3}.*((`)|(")|('))/gi

const searchResult = forSearch.match(pattern)

const divide1 = searchResult[0].split("`")
const divide2 = searchResult[1].split("\"")
const divide3 = searchResult[2].split("'")

const dateMillisec1 = +divide1[1]
const dateMillisec2 = Date.parse(divide2[1])
const dateMillisec3 = Date.parse(divide3[1])

const middleResult1 = new Date(dateMillisec1)
const middleResult2 = new Date(dateMillisec2)
const middleResult3 = new Date(dateMillisec3)


const monthFirstZero = middleResult1.getMonth()

const monthFirst = monthFirstZero + 1

if (monthFirst < 10) {
    monthFirstString = "0" + monthFirst
} else monthFirstString = monthFirst

const dayFirst = middleResult1.getDate()

if (dayFirst < 10) {
    dayFirstString = "0" + dayFirst
} else dayFirstString = dayFirst

const yearFirst = middleResult1.getFullYear()


const monthSecondZero = middleResult2.getMonth()

const monthSecond = monthSecondZero + 1

if (monthSecond < 10) {
    monthSecondString = "0" + monthSecond
} else monthSecondString = monthSecond

const daySecond = middleResult2.getDate()

if (daySecond < 10) {
    daySecondString = "0" + daySecond
} else daySecondString = daySecond

const yearSecond = middleResult2.getFullYear()


const monthThirdZero = middleResult3.getMonth()

const monthThird = monthThirdZero + 1

if (monthThird < 10) {
    monthThirdString = "0" + monthThird
} else monthThirdString = monthThird

const dayThird = middleResult3.getDate()

if (dayThird < 10) {
    dayThirdString = "0" + dayThird
} else dayThirdString = dayThird

const yearThird = middleResult3.getFullYear()


const date1 = monthFirstString + "/" + dayFirstString + "/" + yearFirst
const date2 = monthSecondString + "/" + daySecondString + "/" + yearSecond
const date3 = monthThirdString + "/" + dayThirdString + "/" + yearThird

const url1 = divide1[3]
const url2 = divide2[3]
const url3 = divide3[3]

const Obj1 = {
    date: date1,
    url: url1
}

const Obj2 = {
    date: date2,
    url: url2
}

const Obj3 = {
    date: date3,
    url: url3
}

const result = [Obj1, Obj2, Obj3]
console.log(result)