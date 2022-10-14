export const moveToPositionPage = (id) => {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  })
}

export const moveToCardProject = (id, countContent, direction = 'right') => {
  const contentWidth = document.getElementById(id).parentNode.clientWidth
  const move = Math.trunc(contentWidth / 300)
  let scrollContent = document.getElementById(id).scrollLeft
  if (direction === 'right') {
    scrollContent = scrollContent + (300 * move)
    if (scrollContent > countContent * 300) scrollContent = countContent * 300
  } else {
    scrollContent = scrollContent - (300 * move)
    if (scrollContent < 0) scrollContent = 0
  }

  return scrollContent
}