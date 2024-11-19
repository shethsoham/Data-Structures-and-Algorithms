// Best time to buy and sell profit 

// Two pointers approach and Sliding window approach and dynamic programming approach

// T.C O(N), S.C. O(1) : scanning through array only once no extra space needed

// draw the graph for better understandings 

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max_Profit = 0;
    let left = 0;
    let right = 1;
    n = prices.length
    while (right< n){
        if (prices[left]<prices[right]){
            let profit = prices[right] - prices[left];
            max_Profit = Math.max(max_Profit, profit );
        }else{
            left = right
        }
        right = right + 1

    }
    return max_Profit
}


// Striver solution : 

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // if you are buying and selling on the same day the profit is 0
    // if you are selling on the i-th day then you buy it on minimum prices from 1st (i-1)
    let minimum = prices[0];
    let profit = 0;
    
    for (let i = 1; i < prices.length; i++) {
        // Calculate the profit if selling on the i-th day
        let cost = prices[i] - minimum;
        profit = Math.max(profit, cost);
        minimum = Math.min(minimum, prices[i]);
    }

    return profit;
};
