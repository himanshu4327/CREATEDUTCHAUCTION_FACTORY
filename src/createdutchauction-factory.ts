import { CreatedPresale as CreatedPresaleEvent } from "../generated/CREATEDUTCHAUCTION_FACTORY/CREATEDUTCHAUCTION_FACTORY"
import { CreatedPresale } from "../generated/schema"

export function handleCreatedPresale(event: CreatedPresaleEvent): void {
  let entity = new CreatedPresale(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.auctionAddress = event.params.auctionAddress
  entity.launchpadType = event.params.launchpadType
  entity.createdTime = event.params.createdTime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
