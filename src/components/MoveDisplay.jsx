import React from 'react'

export default function MoveDisplay({move}) {
  return (
    <div>
      <p>Power: {move.power || "No Damage"}</p>
      {move.accuracy && <p>Accuracy: {move.accuracy}</p>}
      <p>PP: {move.pp}</p>
      <p>Type: {move.type.name}</p>
      <p>Damage class: {move.damage_class.name}</p>
      <p>Description: {move.effect_entries[0].effect}</p>
    </div>
  )
}

