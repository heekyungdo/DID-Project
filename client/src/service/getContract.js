import Web3 from 'web3'
import { surveyABI } from './myContract'
import store from '../store'

console.log('getContract')

const getContract = () => {
    console.log('getContract1')

    const web3 = new Web3(Web3.givenProvider)
    const address = store.state.web3.coinbase
    const myContractInstance = new web3.eth.Contract(surveyABI, address)
    return myContractInstance
}

export default getContract
