const Web3 = require("web3"); // importing web3 module

async function connect(){
    const provider = new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"); //connected to our ganache blockchain
    const web3 = new Web3(provider);
    //console.log(web3);

    //now we will gather all the accounts present in our blockchain
    const accounts = await web3.eth.getAccounts(); //we use await to instruct it to wait until all the accounts are fetched
    //console.log(accounts);

    //fetching the balance of a particular account
    const balanceWei = await web3.eth.getBalance(accounts[0]);
    console.log(balanceWei);

    //converting the balance from wei to ether
    const balanceEther = web3.utils.fromWei(balanceWei, "ether");
    console.log(balanceEther);

    //incase i wanna convert it back to wei
    const balanceWei2 = web3.utils.toWei(balanceEther, "ether");
    console.log(balanceWei2);
}
connect();