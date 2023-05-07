const Web3 = require("web3");

async function sendEther(){
    const provider = new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545");
    const web3 = new Web3(provider);

    const transact = await web3.eth.sendTransaction({
        from:"0x681ACb37B6ee078970c0223E879Ef2dA09e237b8",
        to:"0xf65d0dC137C0F17AbD98CeA61b43d61567676070",
        value:web3.utils.toWei("10","ether")
    });
    console.log(transact);
}
sendEther();