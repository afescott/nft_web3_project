import * as anchor from '@coral-xyz/anchor';
import { PublicKey } from '@solana/web3.js';
import { BankrunProvider } from 'anchor-bankrun';
import { describe } from 'node:test';
import { startAnchor } from 'solana-bankrun';
import { VotingDeApp } from '../target/types/voting_de_app';
import { Program } from '@coral-xyz/anchor';

const IDL = require('../target/idl/voting_de_app.json')

const VOTING_ADDRESS = new PublicKey("FJaBgneiubwaV9xCvqxejWd1gxjvm1Vm2Xxbz16rgBz4");

describe('voting_de_app', async () => {
  it('Initialize poll', async () => {
  const context = await startAnchor("", [{name : "voting_de_app", programId: VOTING_ADDRESS} ], []);
  const provider = new BankrunProvider(context);

  
  const votingProgram = new Program<VotingDeApp> (
    IDL,
    provider
  );

await votingProgram.methods.initializePoll(
  //for u64 types. 1 as u64
   new anchor.BN(1),
   new anchor.BN(0),
   new anchor.BN(1839556817),
   "What's your fav peanut butter?",
   "asdada"
).rpc();

});
});
