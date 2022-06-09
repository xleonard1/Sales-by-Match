function sockMerchant(n, ar) {
    let count = 0;
    let hash = {}
    for(let i = 0; i < n; i++) {
        let vals = ar[i]
        hash[vals] = (hash[vals] || 0) + 1;
        if((hash[vals] % 2) === 0){
            count++;
            console.log(count);
        }
        

    }
    
   return count
   
}
