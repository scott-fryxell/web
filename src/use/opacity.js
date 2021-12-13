export function change(opacity = 0.025, resolution = 0.025) {
  opacity = parseFloat(opacity)

  opacity = opacity * 10000
  opacity = Math.round(opacity)
  opacity = opacity / 10000

  opacity += resolution

  if (opacity > 0.9) opacity = 0.875
  else if (opacity < 0) opacity = 0.025

  return opacity
}
