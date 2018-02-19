const Status = {
  RequestingSwapInfo: 0,
  WaitingForMatch: 1,
  CommitOnStellar: 2,
  CommitOnEthereum: 3,
  ClaimOnEthereum: 4,
  ClaimOnStellar: 5,
  Done: 6,
}

Status.Count = Object.keys(Status).length

export default Status
