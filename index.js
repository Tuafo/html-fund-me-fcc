import { ethers } from "./ethers-5.6.esm.min.js"
import { abi, contractAddress } from "./constants.js"

const connectButton = document.getElementById("connectButton")
const withdrawButton = document.getElementById("withdrawButton")
const fundButton = document.getElementById("fundButton")
const balanceButton = document.getElementById("balanceButton")
connectButton.onclick = connect
withdrawButton.onclick = withdraw
fundButton.onclick = fund
balanceButton.onclick = getBalance

async function connect() {
    if (typeof window.ethereum !== "undefined") {
        try {
            await ethereum.request({ method: "eth_requestAccounts" })
        } catch (error) {
            console.log(error)
        }
        connectButton.innerHTML = "Connected"
        const accounts = await ethereum.request({ method: "eth_accounts" })
        document.getElementById(
            "info",
        ).innerText = `Connected to accounts: ${accounts}`
    } else {
        connectButton.innerHTML = "Please install MetaMask"
    }
}

async function fund() {
    const ethAmount = document.getElementById("ethAmount").value
    console.log(`Funding with ${ethAmount}...`)
    document.getElementById("info").innerText = `Funding with ${ethAmount}...`
    if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(contractAddress, abi, signer)
        try {
            const transactionResponse = await contract.fund({
                value: ethers.utils.parseEther(ethAmount),
            })
            await transactionResponse.wait(1)
            document.getElementById(
                "info",
            ).innerText = `${ethAmount} ETH has been funded successfully`
        } catch (error) {
            console.log(error)
            if (error.message === "User denied transaction signature.") {
                document.getElementById("info").innerText =
                    "Transaction was cancelled"
            }
        }
    } else {
        fundButton.innerHTML = "Please install MetaMask"
    }
}

async function withdraw() {
    console.log(`Withdrawing...`)
    document.getElementById("info").innerText = `Withdrawing...`
    if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        await provider.send("eth_requestAccounts", [])
        const signer = provider.getSigner()
        const contract = new ethers.Contract(contractAddress, abi, signer)
        try {
            const transactionResponse = await contract.withdraw()
            await transactionResponse.wait(1)
            document.getElementById("info").innerText =
                "All funds have been withdrawn"
        } catch (error) {
            console.log(error)
            if (error.message === "User denied transaction signature.") {
                document.getElementById("info").innerText =
                    "Transaction was cancelled"
            }
        }
    } else {
        withdrawButton.innerHTML = "Please install MetaMask"
    }
}

async function getBalance() {
    if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        try {
            const balance = await provider.getBalance(contractAddress)
            console.log(ethers.utils.formatEther(balance))
            document.getElementById(
                "info",
            ).innerText = `Contract balance: ${ethers.utils.formatEther(
                balance,
            )} ETH`
        } catch (error) {
            console.log(error)
        }
    } else {
        balanceButton.innerHTML = "Please install MetaMask"
    }
}
