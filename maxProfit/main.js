
const maxProft = prices => {
    let minPrice = prices[0] //assume the first day is the cheapest day to buy, minimum price
    let maxProfit = 0;

    for(let i = 1; i < prices.length; i ++){

        const currentPrice = prices[i] //current price

        //update minimum price if the lower price is found
        minPrice = Math.min(minPrice, currentPrice ) //gives us the minimum value from the entire array (minPrice)
        // console.log(minPrice)

        //get the potential price
        const potentialProfit = currentPrice - minPrice;
        // console.log(potentialProfit)

        //get maxinum profit

        maxProfit = Math.max(maxProfit, potentialProfit)
        // console.log(maxProfit)
    }

    return maxProfit; //return maxinum profit
}

const prices = [7,1,5,3,6,4] //array
const profit = maxProft(prices) //function call

console.log("Maxinum Profit: ", profit) //display output