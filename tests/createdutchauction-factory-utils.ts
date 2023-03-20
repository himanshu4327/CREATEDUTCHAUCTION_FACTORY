import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import { CreatedPresale } from "../generated/CREATEDUTCHAUCTION_FACTORY/CREATEDUTCHAUCTION_FACTORY"

export function createCreatedPresaleEvent(
  owner: Address,
  auctionAddress: Address,
  launchpadType: i32,
  createdTime: BigInt
): CreatedPresale {
  let createdPresaleEvent = changetype<CreatedPresale>(newMockEvent())

  createdPresaleEvent.parameters = new Array()

  createdPresaleEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  createdPresaleEvent.parameters.push(
    new ethereum.EventParam(
      "auctionAddress",
      ethereum.Value.fromAddress(auctionAddress)
    )
  )
  createdPresaleEvent.parameters.push(
    new ethereum.EventParam(
      "launchpadType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(launchpadType))
    )
  )
  createdPresaleEvent.parameters.push(
    new ethereum.EventParam(
      "createdTime",
      ethereum.Value.fromUnsignedBigInt(createdTime)
    )
  )

  return createdPresaleEvent
}
