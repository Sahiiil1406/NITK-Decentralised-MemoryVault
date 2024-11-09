import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { MemoryCreated } from "../generated/schema"
import { MemoryCreated as MemoryCreatedEvent } from "../generated/Owner/Owner"
import { handleMemoryCreated } from "../src/owner"
import { createMemoryCreatedEvent } from "./owner-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let memoryId = BigInt.fromI32(234)
    let creator = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let ipfsHash = "Example string value"
    let memoryType = "Example string value"
    let timestamp = BigInt.fromI32(234)
    let title = "Example string value"
    let newMemoryCreatedEvent = createMemoryCreatedEvent(
      memoryId,
      creator,
      ipfsHash,
      memoryType,
      timestamp,
      title
    )
    handleMemoryCreated(newMemoryCreatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("MemoryCreated created and stored", () => {
    assert.entityCount("MemoryCreated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "MemoryCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "memoryId",
      "234"
    )
    assert.fieldEquals(
      "MemoryCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "creator",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "MemoryCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "ipfsHash",
      "Example string value"
    )
    assert.fieldEquals(
      "MemoryCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "memoryType",
      "Example string value"
    )
    assert.fieldEquals(
      "MemoryCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "timestamp",
      "234"
    )
    assert.fieldEquals(
      "MemoryCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "title",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
