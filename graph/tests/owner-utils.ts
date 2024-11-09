import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import { MemoryCreated, TagAdded } from "../generated/Owner/Owner"

export function createMemoryCreatedEvent(
  memoryId: BigInt,
  creator: Address,
  ipfsHash: string,
  memoryType: string,
  timestamp: BigInt,
  title: string
): MemoryCreated {
  let memoryCreatedEvent = changetype<MemoryCreated>(newMockEvent())

  memoryCreatedEvent.parameters = new Array()

  memoryCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "memoryId",
      ethereum.Value.fromUnsignedBigInt(memoryId)
    )
  )
  memoryCreatedEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  memoryCreatedEvent.parameters.push(
    new ethereum.EventParam("ipfsHash", ethereum.Value.fromString(ipfsHash))
  )
  memoryCreatedEvent.parameters.push(
    new ethereum.EventParam("memoryType", ethereum.Value.fromString(memoryType))
  )
  memoryCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )
  memoryCreatedEvent.parameters.push(
    new ethereum.EventParam("title", ethereum.Value.fromString(title))
  )

  return memoryCreatedEvent
}

export function createTagAddedEvent(memoryId: BigInt, tag: string): TagAdded {
  let tagAddedEvent = changetype<TagAdded>(newMockEvent())

  tagAddedEvent.parameters = new Array()

  tagAddedEvent.parameters.push(
    new ethereum.EventParam(
      "memoryId",
      ethereum.Value.fromUnsignedBigInt(memoryId)
    )
  )
  tagAddedEvent.parameters.push(
    new ethereum.EventParam("tag", ethereum.Value.fromString(tag))
  )

  return tagAddedEvent
}
