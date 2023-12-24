import React, { useState, useEffect } from "react";
import NameStorage from "./contracts/NameStorage.json";
import Web3 from "web3";

function App() {
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);

  const [name, setName] = useState("");

  useEffect(() => {
    const initializeWeb3 = async () => {
      const provider = new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545");
      const web3Instance = new Web3(provider);

      try {
        const networkId = await web3Instance.eth.net.getId();
        const deployedNetwork = NameStorage.networks[networkId];

        if (deployedNetwork) {
          const contractInstance = new web3Instance.eth.Contract(
            NameStorage.abi,
            deployedNetwork.address
          );
          setWeb3(web3Instance);
          setContract(contractInstance);
        } else {
          console.error("Contract not deployed on the current network");
        }
      } catch (error) {
        console.error("Error initializing web3:", error);
      }
    };

    initializeWeb3();
  }, []);

  useEffect(() => {
    const readData = async () => {
      try {
        const data = await contract.methods.getter().call();

        if (data !== null) {
          setName(data);
        }
      } catch (error) {
        console.error("Error :", error);
      }
    };

    contract && readData();
  }, [contract]);

  const writeData = async () => {
    const inputData = document.querySelector("#value").value;
    setName(inputData);

    try {
      await contract.methods
        .setter(inputData)
        .send({ from: "0x2e132A2379A6Bc3767Ffc5D0Fd23485C2464E187" });
      window.location.reload();
    } catch (error) {
      console.error("Error writing data to contract:", error);
    }
  };

  return (
    <>
      <div className="App">
        <p className="text">Contract Data: {name}</p>
        <div>
          <input type="text" id="value" required />
        </div>
        <button onClick={writeData}>Submit</button>
      </div>
    </>
  );
}

export default App;
