// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.9;
// payable - Function accepts ether along with the transaction
// view - Function only reads data from the blockchain and does not modify it
// require - Execution of the transaction stops when the conditon fails
// mapping - like dictionary in python using key value pairs specified as types
// modifier - Used to restrict access to certain functions
contract openTender {
    struct tdr {
        uint id;
        string title;
        address mngr;
        string desc;
        string industry;
        uint startTime;
        uint endTime;
        uint accBal;
        uint minBid;
        address lowestBidder;
        uint bidCount;
        mapping(uint => address) bidders;
    }
    struct bidder {
        string bidderName;
        bool bidded;
        mapping(uint => uint) bidAmt;
    }
    mapping(uint => tdr) public tdrs; // To store the tenders using the index
    mapping(address => bidder) public bidders; // To store the bidders of the tender

    address public manager;
    uint tdrCount; // Index for the tenders
    uint time;
    uint amt;

    modifier onlyOfficial() {
        require(msg.sender == manager); // Ensures that only the address specified as the manager has permission to execute functions that are modified by onlyOfficial.
        _;
    }

    constructor() {
        manager = msg.sender; // Sets the manager variable to the address of the account that deployed the contract
    }

    function createTender(
        string memory _title,
        string memory _industry,
        string memory _description,
        uint _bidO,
        uint _bidC
    ) public onlyOfficial {
        // To store the tender in the tdrs mapping using the index tdrCount
        tdr storage t = tdrs[tdrCount];
        t.id = tdrCount;
        t.title = _title;
        t.desc = _description;
        t.industry = _industry;
        t.startTime = _bidO;
        t.endTime = _bidC;
        t.mngr = msg.sender;
        t.minBid = type(uint).max;
        // Index increments everytime a new tender is created, which can uniquely identify a tender
        tdrCount++;
    }

    function bid(uint _tdrID, string memory _name) public payable {
        require(
            tdrs[_tdrID].startTime < block.timestamp,
            "Bid has not started."
        );
        require(tdrs[_tdrID].endTime > block.timestamp, "Bid has ended.");
        // Updates bidding value if already bidded, else sets
        // the new bidding value and puts the bidder in the bidders list
        if (
            bidders[msg.sender].bidded && bidders[msg.sender].bidAmt[_tdrID] > 0
        ) {
            amt = msg.value + bidders[msg.sender].bidAmt[_tdrID];
            if (tdrs[_tdrID].bidCount == 0) {
                tdrs[_tdrID].bidCount = 1;
            }
        } else {
            amt = msg.value;
            tdrs[_tdrID].bidders[tdrs[_tdrID].bidCount] = msg.sender;
            tdrs[_tdrID].bidCount++;
        }

        require(
            amt < tdrs[_tdrID].minBid || tdrs[_tdrID].minBid == 0,
            "Bid is higher than the current bid."
        );
        bidder storage b = bidders[msg.sender];
        b.bidderName = _name;
        b.bidded = true;
        b.bidAmt[_tdrID] = amt;
        tdrs[_tdrID].accBal += amt;
        // Updates accordingly if the current bid is the minimum bid
        if (bidders[msg.sender].bidAmt[_tdrID] < tdrs[_tdrID].minBid) {
            tdrs[_tdrID].minBid = amt;
            tdrs[_tdrID].lowestBidder = msg.sender;
        }
        // Bidding period extended by 10 mins of it is less than 10 mins
        // away from ending. Done to ensure last minute bids are not
        // unfairly excluded.
        if (tdrs[_tdrID].endTime - block.timestamp < 600) {
            tdrs[_tdrID].endTime +=
                600 -
                (tdrs[_tdrID].endTime - block.timestamp);
        }
    }

    function withdrawFunds(uint _tdrID) public payable {
        require(tdrs[_tdrID].endTime < block.timestamp, "Bid has not ended.");
        require(
            bidders[msg.sender].bidAmt[_tdrID] > 0,
            "You do not have anymore ether to withdraw from the contract."
        );
        // To send the bid amount back to the bidder
        bool sent = payable(msg.sender).send(
            bidders[msg.sender].bidAmt[_tdrID]
        );
        require(sent, "Error");
        tdrs[_tdrID].accBal -= bidders[msg.sender].bidAmt[_tdrID]; // Amount gone from the tender
        bidders[msg.sender].bidAmt[_tdrID] = 0; // Bidder has no more to collect
    }

    function payTdrMngr(uint _tdrID) public payable onlyOfficial {
        require(tdrs[_tdrID].endTime < block.timestamp, "Bid has not ended.");
        require(tdrs[_tdrID].minBid > 0, "No bids placed.");
        // Recieves the lowest bid amount
        //bool sent = payable(manager).send(tdrs[_tdrID].maxBid);
        bool sent = payable(msg.sender).send(
            bidders[msg.sender].bidAmt[_tdrID]
        );
        require(sent, "Payment failed");
        tdrs[_tdrID].minBid = 0;
    }

    // Different details read from the blockchain

    function getTdrCount() public view returns (uint count) {
        return tdrCount;
    }

    function lowestBidOfTdr(uint _tdrID) public view returns (uint lowestBid) {
        return tdrs[_tdrID].minBid;
    }
    function lowestBidderOfTdr(
        uint _tdrID
    ) public view returns (address lowestBidderAdr) {
        return tdrs[_tdrID].lowestBidder;
    }

    struct TenderInfo {
        uint id;
        string title;
        string industry;
        string desc;
        uint startTime;
        uint endTime;
        uint minBid;
        uint currentTime;
    }

    function getTdrInfo(uint _tdrID) public view returns (TenderInfo memory) {
        return
            TenderInfo(
                tdrs[_tdrID].id,
                tdrs[_tdrID].title,
                tdrs[_tdrID].industry,
                tdrs[_tdrID].desc,
                tdrs[_tdrID].startTime,
                tdrs[_tdrID].endTime,
                tdrs[_tdrID].minBid,
                block.timestamp
            );
    }
    // returns the winning bid details when the bid has ended
    function getWinningBid(
        uint _tdrID
    )
        public
        view
        returns (
            address winnerAddress,
            string memory winnerName,
            uint winningBidAmt
        )
    {
        require(tdrs[_tdrID].endTime < block.timestamp, "Bid has not ended.");
        return (
            tdrs[_tdrID].lowestBidder,
            bidders[tdrs[_tdrID].lowestBidder].bidderName,
            tdrs[_tdrID].minBid
        );
    }

    function getBiddersOfTdr(
        uint _tdrID,
        uint _bidID
    ) public view returns (address biddera, uint bidAmt) {
        return (
            tdrs[_tdrID].bidders[_bidID],
            bidders[tdrs[_tdrID].bidders[_bidID]].bidAmt[_tdrID]
        );
    }

    function getBidderCountofTdr(uint _tdrID) public view returns (uint count) {
        return tdrs[_tdrID].bidCount;
    }
}
