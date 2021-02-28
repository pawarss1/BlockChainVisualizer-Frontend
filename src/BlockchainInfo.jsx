import React from "react";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";

function BlockchainInfo() {
  const history = useHistory();
  const gotoLogin = () => {
    history.push("/login");
  };
  return (
    <div>
      <h1 className="info">What is Blockchain Technology? </h1>
      <h2 className="info infoh2">
        Blockchain, sometimes referred to as Distributed Ledger Technology
        (DLT), makes the history of any digital asset unalterable and
        transparent through the use of decentralization and cryptographic
        hashing. A simple analogy for understanding blockchain technology is a
        Google Doc. When we create a document and share it with a group of
        people, the document is distributed instead of copied or transferred.
        This creates a decentralized distribution chain that gives everyone
        access to the document at the same time. No one is locked out awaiting
        changes from another party, while all modifications to the doc are being
        recorded in real-time, making changes completely transparent.
      </h2>
      <h1 className="info">Why is Blockchain Popular? </h1>
      <h3 className="info">
        Suppose you are transferring money to your family or friends from your
        bank account. You would log in to online banking and transfer the amount
        to the other person using their account number. When the transaction is
        done, your bank updates the transaction records. It seems simple enough,
        right? There is a potential issue which most of us neglect. These types
        of transactions can be tampered with very quickly. People who are
        familiar with this truth are often wary of using these types of
        transactions, hence the evolution of third-party payment applications in
        recent years. But this vulnerability is essentially why Blockchain
        technology was created. Technologically, Blockchain is a digital ledger
        that is gaining a lot of attention and traction recently. But why has it
        become so popular? Well, let’s dig into it to fathom the whole concept.
        Record keeping of data and transactions are a crucial part of the
        business. Often, this information is handled in house or passed through
        a third party like brokers, bankers, or lawyers increasing time, cost,
        or both on the business. Fortunately, Blockchain avoids this long
        process and facilitates the faster movement of the transaction, thereby
        saving both time and money. Most people assume Blockchain and Bitcoin
        can be used interchangeably, but in reality, that’s not the case.
        Blockchain is the technology capable of supporting various applications
        related to multiple industries like finance, supply chain,
        manufacturing, etc., but Bitcoin is a currency that relies on Blockchain
        technology to be secure. Blockchain is an emerging technology with many
        advantages in an increasingly digital world: Highly Secure It uses a
        digital signature feature to conduct fraud-free transactions making it
        impossible to corrupt or change the data of an individual by the other
        users without a specific digital signature. Decentralized System
        Conventionally, you need the approval of regulatory authorities like a
        government or bank for transactions; however, with Blockchain,
        transactions are done with the mutual consensus of users resulting in
        smoother, safer, and faster transactions. Automation Capability It is
        programmable and can generate systematic actions, events, and payments
        automatically when the criteria of the trigger are met.
      </h3>
      <br />
      <br />
      <Button onClick={gotoLogin}>Create Dummy Blocks</Button>
    </div>
  );
}

export default BlockchainInfo;
