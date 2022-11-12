//задание про машины

const startCarCount = 1000;
const minCarCount = 10;
let day = 0;
let currentCarCount = startCarCount;

// while (currentCarCount > minCarCount) {
//   currentCarCount = Math.round(currentCarCount / 2);
//    day++;
//}

for (let day = 1; minCarCount < currentCarCount; day++)
    currentCarCount = currentCarCount /2;
    dayMinCarCount = day //нужно задать через let dayMinCarCount = null
}

console.log(`Через ${day} .....`);

