class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let past = 0;
        let profit = 0;
        let maxProfit = 0;
        for(let future = 1; future<prices.length;) {
            if (prices[past] <= prices[future]) {
                profit = prices[future] - prices[past];
            } else {
                past=future;
                
            }
            future++;
            maxProfit = Math.max(profit, maxProfit)
        }
        return maxProfit;
    }
}
