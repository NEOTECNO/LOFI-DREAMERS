const CONTRACT_ADDR = "0x9017B8433b0c9d0aad00F5839Ce1975CE906fe6D";

const abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ApprovalCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"ApprovalQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"ApproveToCaller","type":"error"},{"inputs":[],"name":"BalanceQueryForZeroAddress","type":"error"},{"inputs":[],"name":"InvalidQueryRange","type":"error"},{"inputs":[],"name":"MintERC2309QuantityExceedsLimit","type":"error"},{"inputs":[],"name":"MintToZeroAddress","type":"error"},{"inputs":[],"name":"MintZeroQuantity","type":"error"},{"inputs":[{"internalType":"address","name":"operator","type":"address"}],"name":"OperatorNotAllowed","type":"error"},{"inputs":[],"name":"OwnerQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"OwnershipNotInitializedForExtraData","type":"error"},{"inputs":[],"name":"TransferCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"TransferFromIncorrectOwner","type":"error"},{"inputs":[],"name":"TransferToNonERC721ReceiverImplementer","type":"error"},{"inputs":[],"name":"TransferToZeroAddress","type":"error"},{"inputs":[],"name":"URIQueryForNonexistentToken","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"fromTokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"toTokenId","type":"uint256"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"ConsecutiveTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address[]","name":"_receivers","type":"address[]"}],"name":"MassAirdrop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"OPERATOR_FILTER_REGISTRY","outputs":[{"internalType":"contract IOperatorFilterRegistry","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"addressMintedBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"explicitOwnershipOf","outputs":[{"components":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint64","name":"startTimestamp","type":"uint64"},{"internalType":"bool","name":"burned","type":"bool"},{"internalType":"uint24","name":"extraData","type":"uint24"}],"internalType":"struct IERC721A.TokenOwnership","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"explicitOwnershipsOf","outputs":[{"components":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint64","name":"startTimestamp","type":"uint64"},{"internalType":"bool","name":"burned","type":"bool"},{"internalType":"uint24","name":"extraData","type":"uint24"}],"internalType":"struct IERC721A.TokenOwnership[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"freeMintClaimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxPerTx","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxPerWallet","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"},{"internalType":"address","name":"_receiver","type":"address"}],"name":"mintToAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"notRevealedURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"reveal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"revealed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_cost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxPerTx","type":"uint256"}],"name":"setMaxPerTx","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxPerWallet","type":"uint256"}],"name":"setMaxPerWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_MaxSupply","type":"uint256"}],"name":"setMaxSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_notRevealedURI","type":"string"}],"name":"setNotRevealedURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setPaused","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_uriPrefix","type":"string"}],"name":"setUriPrefix","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"tokensOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"stop","type":"uint256"}],"name":"tokensOfOwnerIn","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uriPrefix","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uriSuffix","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]

var contract = null;
var account = null;
var freeMint = "";

var totalSupply = null;
var maxSupply = null;
var maxPerTx = null;
var cost = null;
var value = null;

var amount = null;
var newMintAmount = null;

const decrementMintAmount = async (e) => {
  mintAmount = Number(document.getElementById('tokens_amount').value);
  let newMintAmount = mintAmount - 1;
  amount = mintAmount - 1;
  if (newMintAmount < 1) {
    newMintAmount = "";
  }
  document.getElementById('tokens_amount').value = newMintAmount;

  costMath = String((cost / 1e18));

  if (freeMint) {
  	document.getElementById("cost").innerHTML = "TOTAL COST: 1 FREE + " + (newMintAmount) * costMath + "eth";
  } else {
	document.getElementById("cost").innerHTML = "TOTAL COST: " + (newMintAmount) * costMath + "eth";
  }
};

const incrementMintAmount = async (e) => {
  mintAmount = Number(document.getElementById('tokens_amount').value);
  let newMintAmount = mintAmount + 1;
  amount = mintAmount + 1;
  if (newMintAmount > maxPerTx) {
    newMintAmount = maxPerTx;
  }
  document.getElementById('tokens_amount').value = newMintAmount;

  costMath = String((cost / 1e18));

  if (freeMint) {
	document.getElementById("cost").innerHTML = "TOTAL COST: 1 FREE + " + (newMintAmount) * costMath + "eth";
	} else {
  	document.getElementById("cost").innerHTML = "TOTAL COST: " + (newMintAmount) * costMath + "eth";
	}
};

/*
// Retrieve values from contract on page load
window.addEventListener('load', async () => {
    const web3 = new Web3(window.ethereum);
    const contract1 = new web3.eth.Contract(abi, CONTRACT_ADDR);
    const supply = await contract1.methods.totalSupply().call();
    console.log(supply);

    document.getElementById("tokens_available").innerHTML = supply + " / " + 3333;
    })
*/

/*
// WHITELIST CHECK
const wl_check = async (e)=> {
	if (typeof window.ethereum !== 'undefined') {
		document.getElementById("wl_check").innerHTML = "CHECKING..."
		try {
	  		const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
			account = accounts[0];
  
			const web3 = new Web3(window.ethereum);
			contract = new web3.eth.Contract(abi, CONTRACT_ADDR, { from: account });

          	var chAccount = web3.utils.toChecksumAddress(account);
			var addressIndex = signatures.indexOf(chAccount);

			if (addressIndex != -1) {
				addressSign = signatures[addressIndex + 1];
				}
			else
				{
				addressSign = signatures[0];
				}

			const whitelisted = await contract.methods.isValidData(account, addressSign).call();

			if (whitelisted == true) {
				alert("You are whitelisted!")
				console.log("WHITELISTED");
				document.getElementById("wl_check").innerHTML = "whitelisted";
				}
			else
				{
				alert("You are not whitelisted!")
				console.log("NOT WHITELISTED");
				document.getElementById("wl_check").innerHTML = "not whitelisted";
				}
			}
			catch(e)
			{
			alert("Error: " + e.message)
			console.log("Error: ",e)
		  	document.getElementById("wl_check").innerHTML = "check whitelist";
		  	}
		}
	}
*/

// PUBLIC MINT
const mint = async (e)=> {
  if (typeof window.ethereum !== 'undefined') {
    const _mintAmount = document.getElementById('tokens_amount').value;
      if (_mintAmount > 0) {
        var result = "";
        var success = "";
        document.getElementById("tokens_available").innerHTML = "MINTING...";
        try {
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
          const account = accounts[0];

          const web3 = new Web3(window.ethereum);
          const contract = new web3.eth.Contract(abi, CONTRACT_ADDR, {gas: 3000000});

          const cost = await contract.methods.cost().call();
		  freeMint = await contract.methods.freeMintClaimed(account);

		  if (freeMint) {
			value = (cost * _mintAmount) - cost;
		  } else {
			value = cost * _mintAmount;
		  }

          const gas = Math.round( await contract.methods.mint(_mintAmount).estimateGas({value: value.toString(), from: accounts[0]}) * 1.1 )
          result = await contract.methods.mint(_mintAmount).send({value: value.toString(), from: accounts[0], gas: gas})

          success = document.getElementById("mint_button").innerHTML = "mint";
          document.getElementById("tokens_available").innerHTML = "SUCCESS!";
          }
        catch(e) 
          {
          alert("Error: " + e.message);
          console.log("Error: ",e);
          document.getElementById("tokens_available").innerHTML = totalSupply + " / " + "3333";
          }
        }
    }     
}

/*
// WHITELIST FREE MINT
const whitelistMint = async (e)=> {
	if (typeof window.ethereum !== 'undefined') {
    	
	var result = "";
	var success = "";
	document.getElementById("tokens_available").innerHTML = "MINTING...";

	try {
		const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
		const account = accounts[0];

		const web3 = new Web3(window.ethereum);
		const contract = new web3.eth.Contract(abi, CONTRACT_ADDR, {from: account});
			  
		var chAccount = web3.utils.toChecksumAddress(account);
		var addressIndex = signatures.indexOf(chAccount);

		if (addressIndex != -1) {
			addressSign = signatures[addressIndex + 1];
			}
			else
			{
			addressSign = signatures[0];
			}
			  
		value = (0 * 1);

		const gas = Math.round( await contract.methods.mintFree(addressSign).estimateGas({value: value.toString(), from: account}) * 1.1 );
		result = await contract.methods.mintFree(addressSign).send({value: value.toString(), from: account, gas: gas});

		success = document.getElementById("tokens_available").innerHTML = "SUCCESS!";
		} 
		catch(e)
		{
        alert("Error: " + e.message);
        console.log("Error: ",e);
		document.getElementById("tokens_available").innerHTML = totalSupply + " / " + "3333";
		}
	}
}
*/

// CONNECT
const connect = async (e)=> {
  if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
    const account = await window.ethereum.request({ method: 'eth_requestAccounts' })
    
    if (account.length > 0) {
    	document.getElementById("connect_button").innerHTML = account[0].substr(0,10) + "..." + account[0].substr(-4) ;

  		const web3 = new Web3(window.ethereum);
  		const contract = new web3.eth.Contract(abi, CONTRACT_ADDR, {gas: 3000000});
		maxSupply = await contract.methods.maxSupply().call();
    	totalSupply = await contract.methods.totalSupply().call();
		const paused = await contract.methods.paused().call();
		maxPerTx = await contract.methods.maxPerTx().call();
		cost = await contract.methods.cost().call();
		freeMint = await contract.methods.freeMintClaimed(account);

      if (!paused) { document.getElementById("phase").innerHTML = "CONTRACT IS PAUSED"; }
		else { 	document.getElementById("phase").innerHTML = "MINT PHASE | MAX " + maxPerTx + " PER WALLET";
		document.getElementById("price").innerHTML = "1 FREE, THEN 0.0059eth EACH"; }

    //document.getElementById("tokens_available").innerHTML = "SOLD OUT";
	  document.getElementById("tokens_available").innerHTML = totalSupply + " / " + "3333";

	  if (freeMint) {
		document.getElementById("cost").innerHTML = "TOTAL COST: 1 FREE + 0.00eth";
	  } else {
		document.getElementById("cost").innerHTML = "TOTAL COST: 0.00eth";
	  }
	}
    else { document.getElementById("connect_button").innerHTML = "connect wallet"; }
  }
  return false;
}

connect();

document.getElementById('connect_button').onclick = connect;
//document.getElementById('wl_check').onclick = wl_check;
document.getElementById('mint_button').onclick = mint;

/*
document.getElementById('mint_free').onclick = whitelistMint;
*/
