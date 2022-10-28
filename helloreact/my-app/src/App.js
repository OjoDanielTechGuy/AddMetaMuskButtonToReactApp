import {useEffect, useState} from "react";
import {Contract, provider} from "ethers";

import logo from './logo.svg';
import './App.css';

function App() {

  <body className="body">
  </body>

  const [isWalletInstalled, setIsWalletInstalled] = useState(false);
  //the state of keeping track of current conneted account

  const [account, setAccount] = useState(null);
  useEffect(() => {
    if (window.ethereum) {
      setIsWalletInstalled(true);
    }

  }, []);

  async function connectWallet(){
    window.ethereum.request(
      {
        method: "eth_requestAccounts",
      })
      .then((accounts) => {
        setAccount(accounts[0]);
      })
      .catch((error) => {
        alert("Something went wrong");
      });
  }

  if(account == null){
    return (
      <div className ="App"> {
        isWalletInstalled ? (
          <button onClick={connectWallet}>Connect to MetaMask</button>
        ):(
          <p className="install-meta">Install MetaMask Wallet</p>
        )
      }
      </div>
      );
    }

    return (
      <div className = "App-connect">
        <p>Connected as: {account}</p>
        
      </div>
    );

  }

export default App;
