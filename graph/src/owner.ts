import {
  MemoryCreated as MemoryCreatedEvent,
  TagAdded as TagAddedEvent
} from "../generated/Owner/Owner"
import { MemoryCreated, TagAdded } from "../generated/schema"

export function handleMemoryCreated(event: MemoryCreatedEvent): void {
  let entity = new MemoryCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.memoryId = event.params.memoryId
  entity.creator = event.params.creator
  entity.ipfsHash = event.params.ipfsHash
  entity.memoryType = event.params.memoryType
  entity.timestamp = event.params.timestamp
  entity.title = event.params.title

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTagAdded(event: TagAddedEvent): void {
  let entity = new TagAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.memoryId = event.params.memoryId
  entity.tag = event.params.tag

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
