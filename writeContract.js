const Web3 = require("web3");

async function write(){
    const provider = new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545");
    const web3 = new Web3(provider);
    const ABI =[
        {
            "inputs": [],
            "name": "getter",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_a",
                    "type": "uint256"
                }
            ],
            "name": "setter",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ]

    const contractAddress = "0xeaD3f61778CaAD2dE3Afb53D41c00596D463b8aF";
    const contract = new web3.eth.Contract(ABI, contractAddress);
    //console.log(contract);
    const data = await contract.methods.setter(20).send({from: "0x3ade1e755230d9d509E288b147C658C0f044412b"});
    console.log(data);
}
write();