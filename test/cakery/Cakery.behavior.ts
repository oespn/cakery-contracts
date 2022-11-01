import { expect } from "chai";
import web3 from "web3";

//import  helpers  from "../helpers.js";

export function shouldBehaveLikeCakery(): void {
  const org = "0x017d8503e20341a382cd213ce3684aac017d8503e20341a382cd213ce3684aac";

  //const bob = "0x011d8503e20341a382cd213ce3684aac017d8503e20341a382cd213ce3684aa1";
  //const carol = "0x011d8503e20341a382cd213ce3684aac017d8503e20341a382cd213ce3684aa2";

  const voteDB1 = "0x013d8503e20341a382cd213ce3684aac017d8503e20341a382cd213ce3684aa1";
  const voteDB2 = "0x013d8503e20341a382cd213ce3684aac017d8503e20341a382cd213ce3684aa2";
  const propDB = "0x014d8503e20341a382cd213ce3684aac017d8503e20341a382cd213ce3684aa0";
  const propDB2 = "0x015d8503e20341a382cd213ce3684aac017d8503e20341a382cd213ce3684aa2";

  it("should return the new org once it's created", async function () {
    //expect(await this.cakery.connect(this.signers.admin).getOrg(org)).to.equal("");

    const aliceBN = web3.utils.toBN(this.signers.alice.address);
    const alice = "0x" + aliceBN.toTwos(256).toString("hex", 64);

    const bobBN = web3.utils.toBN(this.signers.bob.address);
    const bob = "0x" + bobBN.toTwos(256).toString("hex", 64);

    await this.cakery.createOrg(org, "Org1", "Ref1", "Fred1"); // as admin
    const res = await this.cakery.connect(this.signers.admin).getOrg(org);
    console.log(res);
    expect(res).to.not.equal("");

    // Member apply, proposal and vote

    await this.cakery.simpleAddMember(org, alice, "Alice");
    await this.cakery.simpleAddMember(org, bob, "Bob");

    const resMembers = await this.cakery.connect(this.signers.admin).getMembersOfOrg(org);
    console.log("getMembersOfOrg", resMembers);
    expect(resMembers).contains(alice);

    // Alice won't be approved yet

    const resMembers2 = await this.cakery.connect(this.signers.admin).getApprovedMembersOfOrg(org);
    console.log("getApprovedMembersOfOrg", resMembers2);
    expect(resMembers2).not.contains(alice);

    // show the data of proposals

    const resProposal1 = await this.cakery.connect(this.signers.admin).getProposal(alice);
    console.log("getProposal Data:" + alice, resProposal1);

    // const resProposals1 = await this.cakery.connect(this.signers.admin).getProposalsOfOrgData(org);
    // console.log(resProposals1);
    // //expect(resProposals1).not.contains(alice);

    const proposalAlice = alice;
    console.log("cast vote as:", this.signers.admin.address);
    await this.cakery.castVote(org, voteDB1, proposalAlice, true); // as admin vote for alice

    const resVotes1 = await this.cakery.connect(this.signers.admin).getVotes(proposalAlice);
    console.log("getProposalVotes", resVotes1);
    // list of members who have voted
    //expect(resVotes1).contains(alice);

    // View flat data of Alice's claim to Join
    //const resVotes2 = await this.cakery.connect(this.signers.admin).getVotesOfProposalDataArrayStr(proposalAlice);
    //console.log("Votes on Alice Claim:", resVotes2);
    for (let i = 0; i < resVotes1.length; i++) {
      const e = resVotes1[i];
      const resVote = await this.cakery.connect(this.signers.admin).getVote(e);
      console.log("Votes on Alice Claim:#" + i, resVote);
    }

    const resVotesData = await this.cakery.connect(this.signers.admin).getVotesOfProposalData(proposalAlice);
    console.log("getVotesOfProposalData", resVotesData);

    const resMembers3 = await this.cakery.connect(this.signers.admin).getApprovedMembersOfOrg(org);
    console.log("getApprovedMembersOfOrg after vote", resMembers3);
    expect(resMembers3).contains(alice);

    const resVote = await this.cakery.connect(this.signers.admin).getProposalsOfOrgData(org);
    console.log("Proposals after Vote:", resVote);

    // let Alice raise multiple claims
    await this.cakery.createClaim(propDB, org, "my claim", "claim id", "doc_cid", "ref_id", 1000);
    await this.cakery.createClaim(propDB2, org, "my claim2", "claim id2", "doc_cid2", "ref_id2", 2000);
    const resClaim = await this.cakery.connect(this.signers.admin).getProposalsOfOrgData(org);
    console.log("Proposals after Claim:", resClaim);

    const resProps = await this.cakery.connect(this.signers.admin).getProposalsOfOrg(org);
    console.log("Proposals resProps:", resProps);


    // View flat data of all claims at Org
    // const resProp2 = await this.cakery.connect(this.signers.admin).getProposalsOfOrgDataArrayStr(org);
    // console.log("Proposals of Org (flat):", resProp2);

    //-- RAISE ERROR CASES: remove comment //-- to test

    // Bob Not Approved attempt to vote
    //-- console.log("cast vote as bob", bob);
    //-- await this.cakery.castVoteAsMember(org, voteDB2, propDB, bob, true);
    //-- --- EXPECT throw:  'Member must be Approved in the Org to Vote'

    const resClaim2 = await this.cakery.connect(this.signers.admin).getProposalsOfOrgData(org);
    console.log("Proposals after Claim:", resClaim2);

    // let admin approve

    // check alice's share of cake
  });
}
