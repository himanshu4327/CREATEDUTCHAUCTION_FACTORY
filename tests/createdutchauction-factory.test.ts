import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { CreatedPresale } from "../generated/schema"
import { CreatedPresale as CreatedPresaleEvent } from "../generated/CREATEDUTCHAUCTION_FACTORY/CREATEDUTCHAUCTION_FACTORY"
import { handleCreatedPresale } from "../src/createdutchauction-factory"
import { createCreatedPresaleEvent } from "./createdutchauction-factory-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let owner = Address.fromString("0x0000000000000000000000000000000000000001")
    let auctionAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let launchpadType = 123
    let createdTime = BigInt.fromI32(234)
    let newCreatedPresaleEvent = createCreatedPresaleEvent(
      owner,
      auctionAddress,
      launchpadType,
      createdTime
    )
    handleCreatedPresale(newCreatedPresaleEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("CreatedPresale created and stored", () => {
    assert.entityCount("CreatedPresale", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "CreatedPresale",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "owner",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "CreatedPresale",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "auctionAddress",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "CreatedPresale",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "launchpadType",
      "123"
    )
    assert.fieldEquals(
      "CreatedPresale",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "createdTime",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
